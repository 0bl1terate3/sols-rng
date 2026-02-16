param(
    [string]$InputDir = ".",
    [string]$OutputDir = ".\cutscenes_ai60_fast",
    [string]$TempRoot = ".\_ai60_tmp",
    [string]$RifeExe = "C:\Users\oblit.DESKTOP-1ETRJJI\Downloads\AI\tools\rife-ncnn-vulkan\rife-ncnn-vulkan.exe",
    [string]$RifeModelDir = "C:\Users\oblit.DESKTOP-1ETRJJI\Downloads\AI\tools\rife-ncnn-vulkan\rife-v4.6",
    [double]$TargetFps = 60.0,
    [double]$Already60Threshold = 59.5,
    [int]$GpuId = 1,
    [string]$RifeThreads = "2:2:2",
    [int]$VideoCq = 21,
    [string]$NvencPreset = "p4",
    [string]$NameFilter = "*.mp4",
    [switch]$Force
)

$ErrorActionPreference = "Stop"

function Convert-RateToDouble([string]$rateText) {
    if ([string]::IsNullOrWhiteSpace($rateText)) { return 0.0 }
    if ($rateText -match "^(\d+)\/(\d+)$") {
        $num = [double]$Matches[1]
        $den = [double]$Matches[2]
        if ($den -eq 0) { return 0.0 }
        return $num / $den
    }
    $parsed = 0.0
    if ([double]::TryParse($rateText, [ref]$parsed)) { return $parsed }
    return 0.0
}

function Remove-DirSafe([string]$path) {
    if (-not (Test-Path -LiteralPath $path)) { return }
    try {
        Remove-Item -LiteralPath $path -Recurse -Force -ErrorAction Stop
    } catch {
        Start-Sleep -Milliseconds 250
        cmd /c "if exist `"$path`" rmdir /s /q `"$path`"" | Out-Null
    }
}

if (-not (Test-Path -LiteralPath $InputDir)) { throw "InputDir not found: $InputDir" }
if (-not (Test-Path -LiteralPath $RifeExe)) { throw "RIFE exe not found: $RifeExe" }
if (-not (Test-Path -LiteralPath $RifeModelDir)) { throw "RIFE model dir not found: $RifeModelDir" }

New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
New-Item -ItemType Directory -Path $TempRoot -Force | Out-Null

$videos = Get-ChildItem -LiteralPath $InputDir -File -Filter $NameFilter | Sort-Object Name
if ($videos.Count -eq 0) {
    Write-Host "No videos found matching $NameFilter in $InputDir"
    exit 0
}

$failed = New-Object System.Collections.Generic.List[string]
$started = Get-Date

for ($idx = 0; $idx -lt $videos.Count; $idx++) {
    $video = $videos[$idx]
    $inPath = $video.FullName
    $outPath = Join-Path $OutputDir $video.Name

    if ((-not $Force) -and (Test-Path -LiteralPath $outPath) -and ((Get-Item -LiteralPath $outPath).Length -gt 0)) {
        Write-Host ("[{0}/{1}] SKIP {2} (already exists)" -f ($idx + 1), $videos.Count, $video.Name)
        continue
    }

    $jobId = [Guid]::NewGuid().ToString("N").Substring(0, 8)
    $jobDir = Join-Path $TempRoot ("{0}_{1}" -f ([IO.Path]::GetFileNameWithoutExtension($video.Name)), $jobId)
    $rawDir = Join-Path $jobDir "raw"
    $interpDir = Join-Path $jobDir "interp"
    $audioPath = Join-Path $jobDir "audio.m4a"

    try {
        Write-Host ("[{0}/{1}] PROCESS {2}" -f ($idx + 1), $videos.Count, $video.Name)

        $durationText = ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 "$inPath"
        $duration = [double]::Parse($durationText, [System.Globalization.CultureInfo]::InvariantCulture)

        $fpsText = ffprobe -v error -select_streams v:0 -show_entries stream=avg_frame_rate -of default=nw=1:nk=1 "$inPath"
        $srcFps = Convert-RateToDouble $fpsText
        if ($srcFps -le 0.1) { $srcFps = 30.0 }

        $hasAudioText = ffprobe -v error -select_streams a:0 -show_entries stream=index -of default=nw=1:nk=1 "$inPath"
        $hasAudio = -not [string]::IsNullOrWhiteSpace($hasAudioText)

        if ($srcFps -ge $Already60Threshold -and $srcFps -lt ($TargetFps + 1.5)) {
            Write-Host ("    - Source is already ~60fps ({0:N3}); copying." -f $srcFps)
            Copy-Item -LiteralPath $inPath -Destination $outPath -Force
            continue
        }

        New-Item -ItemType Directory -Path $rawDir -Force | Out-Null
        New-Item -ItemType Directory -Path $interpDir -Force | Out-Null

        Write-Host ("    - Extracting frames (src fps {0:N3})" -f $srcFps)
        ffmpeg -y -loglevel error -i "$inPath" -map 0:v:0 -q:v 2 "$rawDir\%08d.jpg"
        if ($LASTEXITCODE -ne 0) { throw "Frame extraction failed" }

        if ($hasAudio) {
            ffmpeg -y -loglevel error -i "$inPath" -map 0:a:0 -c:a aac -b:a 192k "$audioPath"
            if ($LASTEXITCODE -ne 0) { throw "Audio extraction failed" }
        }

        $inputFrameCount = (Get-ChildItem -LiteralPath $rawDir -File -Filter *.jpg).Count
        if ($inputFrameCount -lt 2) { throw "Not enough frames extracted ($inputFrameCount)" }

        $targetFrames = [Math]::Max(2, [int][Math]::Round($duration * $TargetFps))
        Write-Host ("    - Interpolating to {0} frames (~{1} fps)" -f $targetFrames, $TargetFps)
        & "$RifeExe" -i "$rawDir" -o "$interpDir" -n $targetFrames -m "$RifeModelDir" -g $GpuId -j $RifeThreads -f "%08d.jpg"
        if ($LASTEXITCODE -ne 0) { throw "RIFE interpolation failed" }

        Write-Host "    - Encoding output"
        if ($hasAudio) {
            ffmpeg -y -loglevel error -framerate $TargetFps -i "$interpDir\%08d.jpg" -i "$audioPath" -map 0:v:0 -map 1:a:0 -c:v h264_nvenc -preset $NvencPreset -cq $VideoCq -b:v 0 -pix_fmt yuv420p -c:a copy -movflags +faststart "$outPath"
        } else {
            ffmpeg -y -loglevel error -framerate $TargetFps -i "$interpDir\%08d.jpg" -c:v h264_nvenc -preset $NvencPreset -cq $VideoCq -b:v 0 -pix_fmt yuv420p -movflags +faststart "$outPath"
        }
        if ($LASTEXITCODE -ne 0) { throw "Final encode failed" }
    } catch {
        Write-Host ("FAILED {0}: {1}" -f $video.Name, $_.Exception.Message)
        $failed.Add($video.Name)
    } finally {
        Remove-DirSafe $jobDir
    }
}

$elapsed = (Get-Date) - $started
$ok = $videos.Count - $failed.Count
Write-Host ("DONE total={0} ok={1} failed={2} elapsed={3}" -f $videos.Count, $ok, $failed.Count, $elapsed)
if ($failed.Count -gt 0) {
    Write-Host "Failed files:"
    $failed | ForEach-Object { Write-Host $_ }
}
