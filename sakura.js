// ============================================
// SAKURA BIOME - Cherry Blossom WebGL Effect
// ============================================
// This script provides the Sakura petal particle effect for the SAKURA biome.
// It uses WebGL shaders to render realistic falling cherry blossom petals.
// The effect is controlled via the global `sakuraEffect` object.

// Utilities
var Vector3 = {};
var Matrix44 = {};
Vector3.create = function (x, y, z) {
    return { 'x': x, 'y': y, 'z': z };
};
Vector3.dot = function (v0, v1) {
    return v0.x * v1.x + v0.y * v1.y + v0.z * v1.z;
};
Vector3.cross = function (v, v0, v1) {
    v.x = v0.y * v1.z - v0.z * v1.y;
    v.y = v0.z * v1.x - v0.x * v1.z;
    v.z = v0.x * v1.y - v0.y * v1.x;
};
Vector3.normalize = function (v) {
    var l = v.x * v.x + v.y * v.y + v.z * v.z;
    if (l > 0.00001) {
        l = 1.0 / Math.sqrt(l);
        v.x *= l;
        v.y *= l;
        v.z *= l;
    }
};
Vector3.arrayForm = function (v) {
    if (v.array) {
        v.array[0] = v.x;
        v.array[1] = v.y;
        v.array[2] = v.z;
    }
    else {
        v.array = new Float32Array([v.x, v.y, v.z]);
    }
    return v.array;
};
Matrix44.createIdentity = function () {
    return new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
};
Matrix44.loadProjection = function (m, aspect, vdeg, near, far) {
    var h = near * Math.tan(vdeg * Math.PI / 180.0 * 0.5) * 2.0;
    var w = h * aspect;

    m[0] = 2.0 * near / w;
    m[1] = 0.0;
    m[2] = 0.0;
    m[3] = 0.0;

    m[4] = 0.0;
    m[5] = 2.0 * near / h;
    m[6] = 0.0;
    m[7] = 0.0;

    m[8] = 0.0;
    m[9] = 0.0;
    m[10] = -(far + near) / (far - near);
    m[11] = -1.0;

    m[12] = 0.0;
    m[13] = 0.0;
    m[14] = -2.0 * far * near / (far - near);
    m[15] = 0.0;
};
Matrix44.loadLookAt = function (m, vpos, vlook, vup) {
    var frontv = Vector3.create(vpos.x - vlook.x, vpos.y - vlook.y, vpos.z - vlook.z);
    Vector3.normalize(frontv);
    var sidev = Vector3.create(1.0, 0.0, 0.0);
    Vector3.cross(sidev, vup, frontv);
    Vector3.normalize(sidev);
    var topv = Vector3.create(1.0, 0.0, 0.0);
    Vector3.cross(topv, frontv, sidev);
    Vector3.normalize(topv);

    m[0] = sidev.x;
    m[1] = topv.x;
    m[2] = frontv.x;
    m[3] = 0.0;

    m[4] = sidev.y;
    m[5] = topv.y;
    m[6] = frontv.y;
    m[7] = 0.0;

    m[8] = sidev.z;
    m[9] = topv.z;
    m[10] = frontv.z;
    m[11] = 0.0;

    m[12] = -(vpos.x * m[0] + vpos.y * m[4] + vpos.z * m[8]);
    m[13] = -(vpos.x * m[1] + vpos.y * m[5] + vpos.z * m[9]);
    m[14] = -(vpos.x * m[2] + vpos.y * m[6] + vpos.z * m[10]);
    m[15] = 1.0;
};

// Sakura Effect State
var sakuraGl = null;
var sakuraCanvas = null;
var sakuraAnimating = false;
var sakuraAnimationId = null;

var sakuraTimeInfo = {
    'start': 0, 'prev': 0,
    'delta': 0, 'elapsed': 0
};

var sakuraRenderSpec = {
    'width': 0,
    'height': 0,
    'aspect': 1,
    'array': new Float32Array(3),
    'halfWidth': 0,
    'halfHeight': 0,
    'halfArray': new Float32Array(3)
};
sakuraRenderSpec.setSize = function (w, h) {
    sakuraRenderSpec.width = w;
    sakuraRenderSpec.height = h;
    sakuraRenderSpec.aspect = sakuraRenderSpec.width / sakuraRenderSpec.height;
    sakuraRenderSpec.array[0] = sakuraRenderSpec.width;
    sakuraRenderSpec.array[1] = sakuraRenderSpec.height;
    sakuraRenderSpec.array[2] = sakuraRenderSpec.aspect;

    sakuraRenderSpec.halfWidth = Math.floor(w / 2);
    sakuraRenderSpec.halfHeight = Math.floor(h / 2);
    sakuraRenderSpec.halfArray[0] = sakuraRenderSpec.halfWidth;
    sakuraRenderSpec.halfArray[1] = sakuraRenderSpec.halfHeight;
    sakuraRenderSpec.halfArray[2] = sakuraRenderSpec.halfWidth / sakuraRenderSpec.halfHeight;
};

function sakuraDeleteRenderTarget(rt) {
    sakuraGl.deleteFramebuffer(rt.frameBuffer);
    sakuraGl.deleteRenderbuffer(rt.renderBuffer);
    sakuraGl.deleteTexture(rt.texture);
}

function sakuraCreateRenderTarget(w, h) {
    var ret = {
        'width': w,
        'height': h,
        'sizeArray': new Float32Array([w, h, w / h]),
        'dtxArray': new Float32Array([1.0 / w, 1.0 / h])
    };
    ret.frameBuffer = sakuraGl.createFramebuffer();
    ret.renderBuffer = sakuraGl.createRenderbuffer();
    ret.texture = sakuraGl.createTexture();

    sakuraGl.bindTexture(sakuraGl.TEXTURE_2D, ret.texture);
    sakuraGl.texImage2D(sakuraGl.TEXTURE_2D, 0, sakuraGl.RGBA, w, h, 0, sakuraGl.RGBA, sakuraGl.UNSIGNED_BYTE, null);
    sakuraGl.texParameteri(sakuraGl.TEXTURE_2D, sakuraGl.TEXTURE_WRAP_S, sakuraGl.CLAMP_TO_EDGE);
    sakuraGl.texParameteri(sakuraGl.TEXTURE_2D, sakuraGl.TEXTURE_WRAP_T, sakuraGl.CLAMP_TO_EDGE);
    sakuraGl.texParameteri(sakuraGl.TEXTURE_2D, sakuraGl.TEXTURE_MAG_FILTER, sakuraGl.LINEAR);
    sakuraGl.texParameteri(sakuraGl.TEXTURE_2D, sakuraGl.TEXTURE_MIN_FILTER, sakuraGl.LINEAR);

    sakuraGl.bindFramebuffer(sakuraGl.FRAMEBUFFER, ret.frameBuffer);
    sakuraGl.framebufferTexture2D(sakuraGl.FRAMEBUFFER, sakuraGl.COLOR_ATTACHMENT0, sakuraGl.TEXTURE_2D, ret.texture, 0);

    sakuraGl.bindRenderbuffer(sakuraGl.RENDERBUFFER, ret.renderBuffer);
    sakuraGl.renderbufferStorage(sakuraGl.RENDERBUFFER, sakuraGl.DEPTH_COMPONENT16, w, h);
    sakuraGl.framebufferRenderbuffer(sakuraGl.FRAMEBUFFER, sakuraGl.DEPTH_ATTACHMENT, sakuraGl.RENDERBUFFER, ret.renderBuffer);

    sakuraGl.bindTexture(sakuraGl.TEXTURE_2D, null);
    sakuraGl.bindRenderbuffer(sakuraGl.RENDERBUFFER, null);
    sakuraGl.bindFramebuffer(sakuraGl.FRAMEBUFFER, null);

    return ret;
}

function sakuraCompileShader(shtype, shsrc) {
    var retsh = sakuraGl.createShader(shtype);

    sakuraGl.shaderSource(retsh, shsrc);
    sakuraGl.compileShader(retsh);

    if (!sakuraGl.getShaderParameter(retsh, sakuraGl.COMPILE_STATUS)) {
        var errlog = sakuraGl.getShaderInfoLog(retsh);
        sakuraGl.deleteShader(retsh);
        console.error('Sakura Shader Error:', errlog);
        return null;
    }
    return retsh;
}

function sakuraCreateShader(vtxsrc, frgsrc, uniformlist, attrlist) {
    var vsh = sakuraCompileShader(sakuraGl.VERTEX_SHADER, vtxsrc);
    var fsh = sakuraCompileShader(sakuraGl.FRAGMENT_SHADER, frgsrc);

    if (vsh == null || fsh == null) {
        return null;
    }

    var prog = sakuraGl.createProgram();
    sakuraGl.attachShader(prog, vsh);
    sakuraGl.attachShader(prog, fsh);

    sakuraGl.deleteShader(vsh);
    sakuraGl.deleteShader(fsh);

    sakuraGl.linkProgram(prog);
    if (!sakuraGl.getProgramParameter(prog, sakuraGl.LINK_STATUS)) {
        var errlog = sakuraGl.getProgramInfoLog(prog);
        console.error('Sakura Program Link Error:', errlog);
        return null;
    }

    if (uniformlist) {
        prog.uniforms = {};
        for (var i = 0; i < uniformlist.length; i++) {
            prog.uniforms[uniformlist[i]] = sakuraGl.getUniformLocation(prog, uniformlist[i]);
        }
    }

    if (attrlist) {
        prog.attributes = {};
        for (var i = 0; i < attrlist.length; i++) {
            var attr = attrlist[i];
            prog.attributes[attr] = sakuraGl.getAttribLocation(prog, attr);
        }
    }

    return prog;
}

function sakuraUseShader(prog) {
    sakuraGl.useProgram(prog);
    for (var attr in prog.attributes) {
        sakuraGl.enableVertexAttribArray(prog.attributes[attr]);
    }
}

function sakuraUnuseShader(prog) {
    for (var attr in prog.attributes) {
        sakuraGl.disableVertexAttribArray(prog.attributes[attr]);
    }
    sakuraGl.useProgram(null);
}

// Projection and Camera
var sakuraProjection = {
    'angle': 60,
    'nearfar': new Float32Array([0.1, 100.0]),
    'matrix': Matrix44.createIdentity()
};
var sakuraCamera = {
    'position': Vector3.create(0, 0, 100),
    'lookat': Vector3.create(0, 0, 0),
    'up': Vector3.create(0, 1, 0),
    'dof': Vector3.create(10.0, 4.0, 8.0),
    'matrix': Matrix44.createIdentity()
};

var sakuraPointFlower = {};
var sakuraEffectLib = {};
var sakuraSceneStandBy = false;

// Blossom Particle
var SakuraBlossomParticle = function () {
    this.velocity = new Array(3);
    this.rotation = new Array(3);
    this.position = new Array(3);
    this.euler = new Array(3);
    this.size = 1.0;
    this.alpha = 1.0;
    this.zkey = 0.0;
};

SakuraBlossomParticle.prototype.setVelocity = function (vx, vy, vz) {
    this.velocity[0] = vx;
    this.velocity[1] = vy;
    this.velocity[2] = vz;
};

SakuraBlossomParticle.prototype.setRotation = function (rx, ry, rz) {
    this.rotation[0] = rx;
    this.rotation[1] = ry;
    this.rotation[2] = rz;
};

SakuraBlossomParticle.prototype.setPosition = function (nx, ny, nz) {
    this.position[0] = nx;
    this.position[1] = ny;
    this.position[2] = nz;
};

SakuraBlossomParticle.prototype.setEulerAngles = function (rx, ry, rz) {
    this.euler[0] = rx;
    this.euler[1] = ry;
    this.euler[2] = rz;
};

SakuraBlossomParticle.prototype.setSize = function (s) {
    this.size = s;
};

SakuraBlossomParticle.prototype.update = function (dt, et) {
    this.position[0] += this.velocity[0] * dt;
    this.position[1] += this.velocity[1] * dt;
    this.position[2] += this.velocity[2] * dt;

    this.euler[0] += this.rotation[0] * dt;
    this.euler[1] += this.rotation[1] * dt;
    this.euler[2] += this.rotation[2] * dt;
};

// Shader source code (embedded)
var SAKURA_POINT_VSH = `
uniform mat4 uProjection;
uniform mat4 uModelview;
uniform vec3 uResolution;
uniform vec3 uOffset;
uniform vec3 uDOF;
uniform vec3 uFade;

attribute vec3 aPosition;
attribute vec3 aEuler;
attribute vec2 aMisc;

varying vec3 pposition;
varying float psize;
varying float palpha;
varying float pdist;
varying vec3 normX;
varying vec3 normY;
varying vec3 normZ;
varying vec3 normal;
varying float diffuse;
varying float specular;
varying float rstop;
varying float distancefade;

void main(void) {
    vec4 pos = uModelview * vec4(aPosition + uOffset, 1.0);
    gl_Position = uProjection * pos;
    gl_PointSize = aMisc.x * uProjection[1][1] / -pos.z * uResolution.y * 0.5;
    
    pposition = pos.xyz;
    psize = aMisc.x;
    pdist = length(pos.xyz);
    palpha = smoothstep(0.0, 1.0, (pdist - 0.1) / uFade.z);
    
    vec3 elrsn = sin(aEuler);
    vec3 elrcs = cos(aEuler);
    mat3 rotx = mat3(
        1.0, 0.0, 0.0,
        0.0, elrcs.x, elrsn.x,
        0.0, -elrsn.x, elrcs.x
    );
    mat3 roty = mat3(
        elrcs.y, 0.0, -elrsn.y,
        0.0, 1.0, 0.0,
        elrsn.y, 0.0, elrcs.y
    );
    mat3 rotz = mat3(
        elrcs.z, elrsn.z, 0.0, 
        -elrsn.z, elrcs.z, 0.0,
        0.0, 0.0, 1.0
    );
    mat3 rotmat = rotx * roty * rotz;
    normal = rotmat[2];
    
    mat3 trrotm = mat3(
        rotmat[0][0], rotmat[1][0], rotmat[2][0],
        rotmat[0][1], rotmat[1][1], rotmat[2][1],
        rotmat[0][2], rotmat[1][2], rotmat[2][2]
    );
    normX = trrotm[0];
    normY = trrotm[1];
    normZ = trrotm[2];
    
    const vec3 lit = vec3(0.6917144638660746, 0.6917144638660746, -0.20751433915982237);
    
    float tmpdfs = dot(lit, normal);
    if(tmpdfs < 0.0) {
        normal = -normal;
        tmpdfs = dot(lit, normal);
    }
    diffuse = 0.4 + tmpdfs;
    
    vec3 eyev = normalize(-pos.xyz);
    if(dot(eyev, normal) > 0.0) {
        vec3 hv = normalize(eyev + lit);
        specular = pow(max(dot(hv, normal), 0.0), 20.0);
    }
    else {
        specular = 0.0;
    }
    
    rstop = clamp((abs(pdist - uDOF.x) - uDOF.y) / uDOF.z, 0.0, 1.0);
    rstop = pow(rstop, 0.5);
    distancefade = min(1.0, exp((uFade.x - pdist) * 0.69315 / uFade.y));
}
`;

var SAKURA_POINT_FSH = `
#ifdef GL_ES
precision highp float;
#endif

uniform vec3 uDOF;
uniform vec3 uFade;

const vec3 fadeCol = vec3(0.08, 0.03, 0.06);

varying vec3 pposition;
varying float psize;
varying float palpha;
varying float pdist;
varying vec3 normX;
varying vec3 normY;
varying vec3 normZ;
varying vec3 normal;
varying float diffuse;
varying float specular;
varying float rstop;
varying float distancefade;

float ellipse(vec2 p, vec2 o, vec2 r) {
    vec2 lp = (p - o) / r;
    return length(lp) - 1.0;
}

void main(void) {
    vec3 p = vec3(gl_PointCoord - vec2(0.5, 0.5), 0.0) * 2.0;
    vec3 d = vec3(0.0, 0.0, -1.0);
    float nd = normZ.z;
    if(abs(nd) < 0.0001) discard;
    
    float np = dot(normZ, p);
    vec3 tp = p + d * np / nd;
    vec2 coord = vec2(dot(normX, tp), dot(normY, tp));
    
    const float flwrsn = 0.258819045102521;
    const float flwrcs = 0.965925826289068;
    mat2 flwrm = mat2(flwrcs, -flwrsn, flwrsn, flwrcs);
    vec2 flwrp = vec2(abs(coord.x), coord.y) * flwrm;
    
    float r;
    if(flwrp.x < 0.0) {
        r = ellipse(flwrp, vec2(0.065, 0.024) * 0.5, vec2(0.36, 0.96) * 0.5);
    }
    else {
        r = ellipse(flwrp, vec2(0.065, 0.024) * 0.5, vec2(0.58, 0.96) * 0.5);
    }
    
    if(r > rstop) discard;
    
    vec3 col = mix(vec3(1.0, 0.8, 0.75), vec3(1.0, 0.9, 0.87), r);
    float grady = mix(0.0, 1.0, pow(coord.y * 0.5 + 0.5, 0.35));
    col *= vec3(1.0, grady, grady);
    col *= mix(0.8, 1.0, pow(abs(coord.x), 0.3));
    col = col * diffuse + specular;
    
    col = mix(fadeCol, col, distancefade);
    
    float alpha = (rstop > 0.001)? (0.5 - r / (rstop * 2.0)) : 1.0;
    alpha = smoothstep(0.0, 1.0, alpha) * palpha;
    
    gl_FragColor = vec4(col * 0.5, alpha);
}
`;

var SAKURA_FX_COMMON_VSH = `
uniform vec3 uResolution;
attribute vec2 aPosition;

varying vec2 texCoord;
varying vec2 screenCoord;

void main(void) {
    gl_Position = vec4(aPosition, 0.0, 1.0);
    texCoord = aPosition.xy * 0.5 + vec2(0.5, 0.5);
    screenCoord = aPosition.xy * vec2(uResolution.z, 1.0);
}
`;

var SAKURA_BG_FSH = `
#ifdef GL_ES
precision highp float;
#endif

uniform vec2 uTimes;

varying vec2 texCoord;
varying vec2 screenCoord;

void main(void) {
    vec3 col;
    float c;
    vec2 tmpv = texCoord * vec2(0.8, 1.0) - vec2(0.95, 1.0);
    c = exp(-pow(length(tmpv) * 1.8, 2.0));
    col = mix(vec3(0.02, 0.0, 0.03), vec3(0.96, 0.98, 1.0) * 1.5, c);
    gl_FragColor = vec4(col * 0.5, 1.0);
}
`;

var SAKURA_FX_BRIGHTBUF_FSH = `
#ifdef GL_ES
precision highp float;
#endif
uniform sampler2D uSrc;
uniform vec2 uDelta;

varying vec2 texCoord;
varying vec2 screenCoord;

void main(void) {
    vec4 col = texture2D(uSrc, texCoord);
    gl_FragColor = vec4(col.rgb * 2.0 - vec3(0.5), 1.0);
}
`;

var SAKURA_FX_DIRBLUR_FSH = `
#ifdef GL_ES
precision highp float;
#endif
uniform sampler2D uSrc;
uniform vec2 uDelta;
uniform vec4 uBlurDir;

varying vec2 texCoord;
varying vec2 screenCoord;

void main(void) {
    vec4 col = texture2D(uSrc, texCoord);
    col = col + texture2D(uSrc, texCoord + uBlurDir.xy * uDelta);
    col = col + texture2D(uSrc, texCoord - uBlurDir.xy * uDelta);
    col = col + texture2D(uSrc, texCoord + (uBlurDir.xy + uBlurDir.zw) * uDelta);
    col = col + texture2D(uSrc, texCoord - (uBlurDir.xy + uBlurDir.zw) * uDelta);
    gl_FragColor = col / 5.0;
}
`;

var SAKURA_PP_FINAL_VSH = `
uniform vec3 uResolution;
attribute vec2 aPosition;
varying vec2 texCoord;
varying vec2 screenCoord;
void main(void) {
    gl_Position = vec4(aPosition, 0.0, 1.0);
    texCoord = aPosition.xy * 0.5 + vec2(0.5, 0.5);
    screenCoord = aPosition.xy * vec2(uResolution.z, 1.0);
}
`;

var SAKURA_PP_FINAL_FSH = `
#ifdef GL_ES
precision highp float;
#endif
uniform sampler2D uSrc;
uniform sampler2D uBloom;
uniform vec2 uDelta;
varying vec2 texCoord;
varying vec2 screenCoord;
void main(void) {
    vec4 srccol = texture2D(uSrc, texCoord) * 2.0;
    vec4 bloomcol = texture2D(uBloom, texCoord);
    vec4 col;
    col = srccol + bloomcol * (vec4(1.0) + srccol);
    col *= smoothstep(1.0, 0.0, pow(length((texCoord - vec2(0.5)) * 2.0), 1.2) * 0.5);
    col = pow(col, vec4(0.45454545454545));
    
    gl_FragColor = vec4(col.rgb, 1.0);
    gl_FragColor.a = 1.0;
}
`;

function sakuraCreatePointFlowers() {
    var prm = sakuraGl.getParameter(sakuraGl.ALIASED_POINT_SIZE_RANGE);
    sakuraRenderSpec.pointSize = { 'min': prm[0], 'max': prm[1] };

    sakuraPointFlower.program = sakuraCreateShader(
        SAKURA_POINT_VSH, SAKURA_POINT_FSH,
        ['uProjection', 'uModelview', 'uResolution', 'uOffset', 'uDOF', 'uFade'],
        ['aPosition', 'aEuler', 'aMisc']
    );

    sakuraUseShader(sakuraPointFlower.program);
    sakuraPointFlower.offset = new Float32Array([0.0, 0.0, 0.0]);
    sakuraPointFlower.fader = Vector3.create(0.0, 10.0, 0.0);

    sakuraPointFlower.numFlowers = 1600;
    sakuraPointFlower.particles = new Array(sakuraPointFlower.numFlowers);
    sakuraPointFlower.dataArray = new Float32Array(sakuraPointFlower.numFlowers * (3 + 3 + 2));
    sakuraPointFlower.positionArrayOffset = 0;
    sakuraPointFlower.eulerArrayOffset = sakuraPointFlower.numFlowers * 3;
    sakuraPointFlower.miscArrayOffset = sakuraPointFlower.numFlowers * 6;

    sakuraPointFlower.buffer = sakuraGl.createBuffer();
    sakuraGl.bindBuffer(sakuraGl.ARRAY_BUFFER, sakuraPointFlower.buffer);
    sakuraGl.bufferData(sakuraGl.ARRAY_BUFFER, sakuraPointFlower.dataArray, sakuraGl.DYNAMIC_DRAW);
    sakuraGl.bindBuffer(sakuraGl.ARRAY_BUFFER, null);

    sakuraUnuseShader(sakuraPointFlower.program);

    for (var i = 0; i < sakuraPointFlower.numFlowers; i++) {
        sakuraPointFlower.particles[i] = new SakuraBlossomParticle();
    }
}

function sakuraInitPointFlowers() {
    sakuraPointFlower.area = Vector3.create(20.0, 20.0, 20.0);
    sakuraPointFlower.area.x = sakuraPointFlower.area.y * sakuraRenderSpec.aspect;

    sakuraPointFlower.fader.x = 10.0;
    sakuraPointFlower.fader.y = sakuraPointFlower.area.z;
    sakuraPointFlower.fader.z = 0.1;

    var PI2 = Math.PI * 2.0;
    var tmpv3 = Vector3.create(0, 0, 0);
    var tmpv = 0;
    var symmetryrand = function () { return (Math.random() * 2.0 - 1.0); };
    for (var i = 0; i < sakuraPointFlower.numFlowers; i++) {
        var tmpprtcl = sakuraPointFlower.particles[i];

        tmpv3.x = symmetryrand() * 0.3 + 0.8;
        tmpv3.y = symmetryrand() * 0.2 - 1.0;
        tmpv3.z = symmetryrand() * 0.3 + 0.5;
        Vector3.normalize(tmpv3);
        tmpv = 2.0 + Math.random() * 1.0;
        tmpprtcl.setVelocity(tmpv3.x * tmpv, tmpv3.y * tmpv, tmpv3.z * tmpv);

        tmpprtcl.setRotation(
            symmetryrand() * PI2 * 0.5,
            symmetryrand() * PI2 * 0.5,
            symmetryrand() * PI2 * 0.5
        );

        tmpprtcl.setPosition(
            symmetryrand() * sakuraPointFlower.area.x,
            symmetryrand() * sakuraPointFlower.area.y,
            symmetryrand() * sakuraPointFlower.area.z
        );

        tmpprtcl.setEulerAngles(
            Math.random() * Math.PI * 2.0,
            Math.random() * Math.PI * 2.0,
            Math.random() * Math.PI * 2.0
        );

        tmpprtcl.setSize(0.9 + Math.random() * 0.1);
    }
}

function sakuraRenderPointFlowers() {
    var PI2 = Math.PI * 2.0;
    var limit = [sakuraPointFlower.area.x, sakuraPointFlower.area.y, sakuraPointFlower.area.z];
    var repeatPos = function (prt, cmp, limit) {
        if (Math.abs(prt.position[cmp]) - prt.size * 0.5 > limit) {
            if (prt.position[cmp] > 0) {
                prt.position[cmp] -= limit * 2.0;
            }
            else {
                prt.position[cmp] += limit * 2.0;
            }
        }
    };
    var repeatEuler = function (prt, cmp) {
        prt.euler[cmp] = prt.euler[cmp] % PI2;
        if (prt.euler[cmp] < 0.0) {
            prt.euler[cmp] += PI2;
        }
    };

    for (var i = 0; i < sakuraPointFlower.numFlowers; i++) {
        var prtcl = sakuraPointFlower.particles[i];
        prtcl.update(sakuraTimeInfo.delta, sakuraTimeInfo.elapsed);
        repeatPos(prtcl, 0, sakuraPointFlower.area.x);
        repeatPos(prtcl, 1, sakuraPointFlower.area.y);
        repeatPos(prtcl, 2, sakuraPointFlower.area.z);
        repeatEuler(prtcl, 0);
        repeatEuler(prtcl, 1);
        repeatEuler(prtcl, 2);

        prtcl.alpha = 1.0;

        prtcl.zkey = (sakuraCamera.matrix[2] * prtcl.position[0]
            + sakuraCamera.matrix[6] * prtcl.position[1]
            + sakuraCamera.matrix[10] * prtcl.position[2]
            + sakuraCamera.matrix[14]);
    }

    sakuraPointFlower.particles.sort(function (p0, p1) { return p0.zkey - p1.zkey; });

    var ipos = sakuraPointFlower.positionArrayOffset;
    var ieuler = sakuraPointFlower.eulerArrayOffset;
    var imisc = sakuraPointFlower.miscArrayOffset;
    for (var i = 0; i < sakuraPointFlower.numFlowers; i++) {
        var prtcl = sakuraPointFlower.particles[i];
        sakuraPointFlower.dataArray[ipos] = prtcl.position[0];
        sakuraPointFlower.dataArray[ipos + 1] = prtcl.position[1];
        sakuraPointFlower.dataArray[ipos + 2] = prtcl.position[2];
        ipos += 3;
        sakuraPointFlower.dataArray[ieuler] = prtcl.euler[0];
        sakuraPointFlower.dataArray[ieuler + 1] = prtcl.euler[1];
        sakuraPointFlower.dataArray[ieuler + 2] = prtcl.euler[2];
        ieuler += 3;
        sakuraPointFlower.dataArray[imisc] = prtcl.size;
        sakuraPointFlower.dataArray[imisc + 1] = prtcl.alpha;
        imisc += 2;
    }

    sakuraGl.enable(sakuraGl.BLEND);
    sakuraGl.blendFunc(sakuraGl.SRC_ALPHA, sakuraGl.ONE_MINUS_SRC_ALPHA);

    var prog = sakuraPointFlower.program;
    sakuraUseShader(prog);

    sakuraGl.uniformMatrix4fv(prog.uniforms.uProjection, false, sakuraProjection.matrix);
    sakuraGl.uniformMatrix4fv(prog.uniforms.uModelview, false, sakuraCamera.matrix);
    sakuraGl.uniform3fv(prog.uniforms.uResolution, sakuraRenderSpec.array);
    sakuraGl.uniform3fv(prog.uniforms.uDOF, Vector3.arrayForm(sakuraCamera.dof));
    sakuraGl.uniform3fv(prog.uniforms.uFade, Vector3.arrayForm(sakuraPointFlower.fader));

    sakuraGl.bindBuffer(sakuraGl.ARRAY_BUFFER, sakuraPointFlower.buffer);
    sakuraGl.bufferData(sakuraGl.ARRAY_BUFFER, sakuraPointFlower.dataArray, sakuraGl.DYNAMIC_DRAW);

    sakuraGl.vertexAttribPointer(prog.attributes.aPosition, 3, sakuraGl.FLOAT, false, 0, sakuraPointFlower.positionArrayOffset * Float32Array.BYTES_PER_ELEMENT);
    sakuraGl.vertexAttribPointer(prog.attributes.aEuler, 3, sakuraGl.FLOAT, false, 0, sakuraPointFlower.eulerArrayOffset * Float32Array.BYTES_PER_ELEMENT);
    sakuraGl.vertexAttribPointer(prog.attributes.aMisc, 2, sakuraGl.FLOAT, false, 0, sakuraPointFlower.miscArrayOffset * Float32Array.BYTES_PER_ELEMENT);

    for (var i = 1; i < 2; i++) {
        var zpos = i * -2.0;
        sakuraPointFlower.offset[0] = sakuraPointFlower.area.x * -1.0;
        sakuraPointFlower.offset[1] = sakuraPointFlower.area.y * -1.0;
        sakuraPointFlower.offset[2] = sakuraPointFlower.area.z * zpos;
        sakuraGl.uniform3fv(prog.uniforms.uOffset, sakuraPointFlower.offset);
        sakuraGl.drawArrays(sakuraGl.POINTS, 0, sakuraPointFlower.numFlowers);

        sakuraPointFlower.offset[0] = sakuraPointFlower.area.x * -1.0;
        sakuraPointFlower.offset[1] = sakuraPointFlower.area.y * 1.0;
        sakuraPointFlower.offset[2] = sakuraPointFlower.area.z * zpos;
        sakuraGl.uniform3fv(prog.uniforms.uOffset, sakuraPointFlower.offset);
        sakuraGl.drawArrays(sakuraGl.POINTS, 0, sakuraPointFlower.numFlowers);

        sakuraPointFlower.offset[0] = sakuraPointFlower.area.x * 1.0;
        sakuraPointFlower.offset[1] = sakuraPointFlower.area.y * -1.0;
        sakuraPointFlower.offset[2] = sakuraPointFlower.area.z * zpos;
        sakuraGl.uniform3fv(prog.uniforms.uOffset, sakuraPointFlower.offset);
        sakuraGl.drawArrays(sakuraGl.POINTS, 0, sakuraPointFlower.numFlowers);

        sakuraPointFlower.offset[0] = sakuraPointFlower.area.x * 1.0;
        sakuraPointFlower.offset[1] = sakuraPointFlower.area.y * 1.0;
        sakuraPointFlower.offset[2] = sakuraPointFlower.area.z * zpos;
        sakuraGl.uniform3fv(prog.uniforms.uOffset, sakuraPointFlower.offset);
        sakuraGl.drawArrays(sakuraGl.POINTS, 0, sakuraPointFlower.numFlowers);
    }

    sakuraPointFlower.offset[0] = 0.0;
    sakuraPointFlower.offset[1] = 0.0;
    sakuraPointFlower.offset[2] = 0.0;
    sakuraGl.uniform3fv(prog.uniforms.uOffset, sakuraPointFlower.offset);
    sakuraGl.drawArrays(sakuraGl.POINTS, 0, sakuraPointFlower.numFlowers);

    sakuraGl.bindBuffer(sakuraGl.ARRAY_BUFFER, null);
    sakuraUnuseShader(prog);

    sakuraGl.enable(sakuraGl.DEPTH_TEST);
    sakuraGl.disable(sakuraGl.BLEND);
}

function sakuraCreateEffectProgram(vtxsrc, frgsrc, exunifs, exattrs) {
    var ret = {};
    var unifs = ['uResolution', 'uSrc', 'uDelta'];
    if (exunifs) {
        unifs = unifs.concat(exunifs);
    }
    var attrs = ['aPosition'];
    if (exattrs) {
        attrs = attrs.concat(exattrs);
    }

    ret.program = sakuraCreateShader(vtxsrc, frgsrc, unifs, attrs);
    sakuraUseShader(ret.program);

    ret.dataArray = new Float32Array([
        -1.0, -1.0,
        1.0, -1.0,
        -1.0, 1.0,
        1.0, 1.0
    ]);
    ret.buffer = sakuraGl.createBuffer();
    sakuraGl.bindBuffer(sakuraGl.ARRAY_BUFFER, ret.buffer);
    sakuraGl.bufferData(sakuraGl.ARRAY_BUFFER, ret.dataArray, sakuraGl.STATIC_DRAW);

    sakuraGl.bindBuffer(sakuraGl.ARRAY_BUFFER, null);
    sakuraUnuseShader(ret.program);

    return ret;
}

function sakuraUseEffect(fxobj, srctex) {
    var prog = fxobj.program;
    sakuraUseShader(prog);
    sakuraGl.uniform3fv(prog.uniforms.uResolution, sakuraRenderSpec.array);

    if (srctex != null) {
        sakuraGl.uniform2fv(prog.uniforms.uDelta, srctex.dtxArray);
        sakuraGl.uniform1i(prog.uniforms.uSrc, 0);

        sakuraGl.activeTexture(sakuraGl.TEXTURE0);
        sakuraGl.bindTexture(sakuraGl.TEXTURE_2D, srctex.texture);
    }
}
function sakuraDrawEffect(fxobj) {
    sakuraGl.bindBuffer(sakuraGl.ARRAY_BUFFER, fxobj.buffer);
    sakuraGl.vertexAttribPointer(fxobj.program.attributes.aPosition, 2, sakuraGl.FLOAT, false, 0, 0);
    sakuraGl.drawArrays(sakuraGl.TRIANGLE_STRIP, 0, 4);
}
function sakuraUnuseEffect(fxobj) {
    sakuraUnuseShader(fxobj.program);
}

function sakuraCreateEffectLib() {
    sakuraEffectLib.sceneBg = sakuraCreateEffectProgram(SAKURA_FX_COMMON_VSH, SAKURA_BG_FSH, ['uTimes'], null);
    sakuraEffectLib.mkBrightBuf = sakuraCreateEffectProgram(SAKURA_FX_COMMON_VSH, SAKURA_FX_BRIGHTBUF_FSH, null, null);
    sakuraEffectLib.dirBlur = sakuraCreateEffectProgram(SAKURA_FX_COMMON_VSH, SAKURA_FX_DIRBLUR_FSH, ['uBlurDir'], null);
    sakuraEffectLib.finalComp = sakuraCreateEffectProgram(SAKURA_PP_FINAL_VSH, SAKURA_PP_FINAL_FSH, ['uBloom'], null);
}

function sakuraRenderBackground() {
    sakuraGl.disable(sakuraGl.DEPTH_TEST);

    sakuraUseEffect(sakuraEffectLib.sceneBg, null);
    sakuraGl.uniform2f(sakuraEffectLib.sceneBg.program.uniforms.uTimes, sakuraTimeInfo.elapsed, sakuraTimeInfo.delta);
    sakuraDrawEffect(sakuraEffectLib.sceneBg);
    sakuraUnuseEffect(sakuraEffectLib.sceneBg);

    sakuraGl.enable(sakuraGl.DEPTH_TEST);
}

function sakuraRenderPostProcess() {
    sakuraGl.enable(sakuraGl.TEXTURE_2D);
    sakuraGl.disable(sakuraGl.DEPTH_TEST);
    var bindRT = function (rt, isclear) {
        sakuraGl.bindFramebuffer(sakuraGl.FRAMEBUFFER, rt.frameBuffer);
        sakuraGl.viewport(0, 0, rt.width, rt.height);
        if (isclear) {
            sakuraGl.clearColor(0, 0, 0, 0);
            sakuraGl.clear(sakuraGl.COLOR_BUFFER_BIT | sakuraGl.DEPTH_BUFFER_BIT);
        }
    };

    bindRT(sakuraRenderSpec.wHalfRT0, true);
    sakuraUseEffect(sakuraEffectLib.mkBrightBuf, sakuraRenderSpec.mainRT);
    sakuraDrawEffect(sakuraEffectLib.mkBrightBuf);
    sakuraUnuseEffect(sakuraEffectLib.mkBrightBuf);

    for (var i = 0; i < 2; i++) {
        var p = 1.5 + 1 * i;
        var s = 2.0 + 1 * i;
        bindRT(sakuraRenderSpec.wHalfRT1, true);
        sakuraUseEffect(sakuraEffectLib.dirBlur, sakuraRenderSpec.wHalfRT0);
        sakuraGl.uniform4f(sakuraEffectLib.dirBlur.program.uniforms.uBlurDir, p, 0.0, s, 0.0);
        sakuraDrawEffect(sakuraEffectLib.dirBlur);
        sakuraUnuseEffect(sakuraEffectLib.dirBlur);

        bindRT(sakuraRenderSpec.wHalfRT0, true);
        sakuraUseEffect(sakuraEffectLib.dirBlur, sakuraRenderSpec.wHalfRT1);
        sakuraGl.uniform4f(sakuraEffectLib.dirBlur.program.uniforms.uBlurDir, 0.0, p, 0.0, s);
        sakuraDrawEffect(sakuraEffectLib.dirBlur);
        sakuraUnuseEffect(sakuraEffectLib.dirBlur);
    }

    sakuraGl.bindFramebuffer(sakuraGl.FRAMEBUFFER, null);
    sakuraGl.viewport(0, 0, sakuraRenderSpec.width, sakuraRenderSpec.height);
    sakuraGl.clear(sakuraGl.COLOR_BUFFER_BIT | sakuraGl.DEPTH_BUFFER_BIT);

    sakuraUseEffect(sakuraEffectLib.finalComp, sakuraRenderSpec.mainRT);
    sakuraGl.uniform1i(sakuraEffectLib.finalComp.program.uniforms.uBloom, 1);
    sakuraGl.activeTexture(sakuraGl.TEXTURE1);
    sakuraGl.bindTexture(sakuraGl.TEXTURE_2D, sakuraRenderSpec.wHalfRT0.texture);
    sakuraDrawEffect(sakuraEffectLib.finalComp);
    sakuraUnuseEffect(sakuraEffectLib.finalComp);

    sakuraGl.enable(sakuraGl.DEPTH_TEST);
}

function sakuraCreateScene() {
    sakuraCreateEffectLib();
    sakuraCreatePointFlowers();
    sakuraSceneStandBy = true;
}

function sakuraInitScene() {
    sakuraInitPointFlowers();

    sakuraCamera.position.z = sakuraPointFlower.area.z + sakuraProjection.nearfar[0];
    sakuraProjection.angle = Math.atan2(sakuraPointFlower.area.y, sakuraCamera.position.z + sakuraPointFlower.area.z) * 180.0 / Math.PI * 2.0;
    Matrix44.loadProjection(sakuraProjection.matrix, sakuraRenderSpec.aspect, sakuraProjection.angle, sakuraProjection.nearfar[0], sakuraProjection.nearfar[1]);
}

function sakuraRenderScene() {
    Matrix44.loadLookAt(sakuraCamera.matrix, sakuraCamera.position, sakuraCamera.lookat, sakuraCamera.up);

    sakuraGl.enable(sakuraGl.DEPTH_TEST);

    sakuraGl.bindFramebuffer(sakuraGl.FRAMEBUFFER, sakuraRenderSpec.mainRT.frameBuffer);
    sakuraGl.viewport(0, 0, sakuraRenderSpec.mainRT.width, sakuraRenderSpec.mainRT.height);
    sakuraGl.clearColor(0.005, 0, 0.05, 0);
    sakuraGl.clear(sakuraGl.COLOR_BUFFER_BIT | sakuraGl.DEPTH_BUFFER_BIT);

    sakuraRenderBackground();
    sakuraRenderPointFlowers();
    sakuraRenderPostProcess();
}

function sakuraSetViewports() {
    sakuraRenderSpec.setSize(sakuraGl.canvas.width, sakuraGl.canvas.height);

    sakuraGl.clearColor(0.2, 0.2, 0.5, 1.0);
    sakuraGl.viewport(0, 0, sakuraRenderSpec.width, sakuraRenderSpec.height);

    var rtfunc = function (rtname, rtw, rth) {
        var rt = sakuraRenderSpec[rtname];
        if (rt) sakuraDeleteRenderTarget(rt);
        sakuraRenderSpec[rtname] = sakuraCreateRenderTarget(rtw, rth);
    };
    rtfunc('mainRT', sakuraRenderSpec.width, sakuraRenderSpec.height);
    rtfunc('wFullRT0', sakuraRenderSpec.width, sakuraRenderSpec.height);
    rtfunc('wFullRT1', sakuraRenderSpec.width, sakuraRenderSpec.height);
    rtfunc('wHalfRT0', sakuraRenderSpec.halfWidth, sakuraRenderSpec.halfHeight);
    rtfunc('wHalfRT1', sakuraRenderSpec.halfWidth, sakuraRenderSpec.halfHeight);
}

function sakuraAnimate() {
    if (!sakuraAnimating) return;

    var curdate = new Date();
    sakuraTimeInfo.elapsed = (curdate - sakuraTimeInfo.start) / 1000.0;
    sakuraTimeInfo.delta = (curdate - sakuraTimeInfo.prev) / 1000.0;
    sakuraTimeInfo.prev = curdate;

    sakuraAnimationId = requestAnimationFrame(sakuraAnimate);
    sakuraRenderScene();
}

function sakuraMakeCanvasFullScreen(canvas) {
    var b = document.body;
    var d = document.documentElement;
    var fullw = Math.max(b.clientWidth, b.scrollWidth, d.scrollWidth, d.clientWidth);
    var fullh = Math.max(b.clientHeight, b.scrollHeight, d.scrollHeight, d.clientHeight);
    canvas.width = fullw;
    canvas.height = fullh;
}

function sakuraOnResize() {
    if (!sakuraCanvas) return;
    sakuraMakeCanvasFullScreen(sakuraCanvas);
    sakuraSetViewports();
    if (sakuraSceneStandBy) {
        sakuraInitScene();
    }
}

// === PUBLIC API ===

/**
 * Initializes the Sakura effect. Call this once when the page loads.
 * @param {string} canvasId - The ID of the canvas element to use.
 */
function initSakuraEffect(canvasId) {
    sakuraCanvas = document.getElementById(canvasId);
    if (!sakuraCanvas) {
        console.error('Sakura: Canvas element not found:', canvasId);
        return false;
    }

    try {
        sakuraMakeCanvasFullScreen(sakuraCanvas);
        sakuraGl = sakuraCanvas.getContext('webgl') || sakuraCanvas.getContext('experimental-webgl');
    } catch (e) {
        console.error('Sakura: WebGL not supported.', e);
        return false;
    }

    if (!sakuraGl) {
        console.error('Sakura: Could not get WebGL context.');
        return false;
    }

    window.addEventListener('resize', sakuraOnResize);

    sakuraSetViewports();
    sakuraCreateScene();
    sakuraInitScene();

    console.log('Sakura Effect initialized.');
    return true;
}

/**
 * Starts the Sakura animation.
 */
function startSakuraEffect() {
    if (sakuraAnimating) return;
    if (!sakuraGl) {
        console.warn('Sakura: Effect not initialized. Call initSakuraEffect first.');
        return;
    }

    sakuraAnimating = true;
    sakuraTimeInfo.start = new Date();
    sakuraTimeInfo.prev = sakuraTimeInfo.start;

    if (sakuraCanvas) {
        sakuraCanvas.style.display = 'block';
        sakuraCanvas.style.opacity = '1';
    }

    sakuraAnimate();
    console.log('Sakura Effect started.');
}

/**
 * Stops the Sakura animation.
 */
function stopSakuraEffect() {
    sakuraAnimating = false;
    if (sakuraAnimationId) {
        cancelAnimationFrame(sakuraAnimationId);
        sakuraAnimationId = null;
    }

    if (sakuraCanvas) {
        sakuraCanvas.style.opacity = '0';
        setTimeout(() => {
            if (!sakuraAnimating && sakuraCanvas) {
                sakuraCanvas.style.display = 'none';
            }
        }, 500);
    }

    console.log('Sakura Effect stopped.');
}

/**
 * Toggles the Sakura effect on/off.
 * @param {boolean} active - Whether to activate or deactivate the effect.
 */
function toggleSakuraEffect(active) {
    if (active) {
        startSakuraEffect();
    } else {
        stopSakuraEffect();
    }
}

// Expose global API
window.sakuraEffect = {
    init: initSakuraEffect,
    start: startSakuraEffect,
    stop: stopSakuraEffect,
    toggle: toggleSakuraEffect,
    isActive: function () { return sakuraAnimating; }
};
