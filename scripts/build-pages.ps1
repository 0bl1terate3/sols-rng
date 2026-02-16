param(
    [string]$OutputDir = "site"
)

$ErrorActionPreference = "Stop"

$root = Get-Location
$outPath = Join-Path $root $OutputDir

if (Test-Path $outPath) {
    Remove-Item $outPath -Recurse -Force
}

New-Item -ItemType Directory -Path $outPath | Out-Null

$coreFiles = @(
    "index.html",
    "performance.js",
    "auras.js",
    "potions.js",
    "gears.js",
    "achievements.js",
    "cutscenes.js",
    "sakura.js",
    "deepsea.js"
)

foreach ($file in $coreFiles) {
    if (-not (Test-Path $file)) {
        throw "Required file missing: $file"
    }
    Copy-Item $file -Destination $outPath -Force
}

$coreDirs = @(
    "assets",
    "iconz",
    "biome pictures"
)

foreach ($dir in $coreDirs) {
    if (Test-Path $dir) {
        Copy-Item $dir -Destination $outPath -Recurse -Force
    }
}

# Keep Pages artifact small: copy only always-referenced cutscene media.
$cutsceneFiles = @(
    "1MSTAR.mp4",
    "1bil_trancend.mp3.mpeg",
    "100maura.ogg",
    "1M Sound.mpeg",
    "legend.ogg",
    "EXALTED.ogg",
    "bell_toll.mp3"
)

$cutsceneSourceDir = Join-Path $root "cutscenes"
if (Test-Path $cutsceneSourceDir) {
    $cutsceneOutDir = Join-Path $outPath "cutscenes"
    New-Item -ItemType Directory -Path $cutsceneOutDir | Out-Null

    foreach ($name in $cutsceneFiles) {
        $src = Join-Path $cutsceneSourceDir $name
        if (Test-Path $src) {
            Copy-Item $src -Destination $cutsceneOutDir -Force
        }
    }
}

# Disable Jekyll processing so folders like "biome pictures" are served as-is.
New-Item -ItemType File -Path (Join-Path $outPath ".nojekyll") | Out-Null

Write-Host "Built GitHub Pages artifact at: $outPath"
