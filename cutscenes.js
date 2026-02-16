// Cutscene system for ultra-rare auras (100M+ rarity)
const CUTSCENE_THRESHOLD = 100000000; // 100 million

// Video cutscene mappings (aura ID -> video file path)
const VIDEO_CUTSCENES = {
    'abyssal_hunter': 'cutscenes/ABYSSALHUNTER.mp4',
    'aegis': 'cutscenes/AEGIS.mp4',
    'aegis_watergun': 'cutscenes/AEGISWATERGUN.mp4',
    'apostolos': 'cutscenes/APOSTOLOS.mp4',
    'archangel': 'cutscenes/ARCHANGEL.mp4',
    'astral_legendarium': 'cutscenes/ASTRALLEGENDARIUM.mp4',
    'astral_zodiac': 'cutscenes/ASTRALZODIAC.mp4',
    'atlas': 'cutscenes/ATLAS.mp4',
    'bloodlust': 'cutscenes/BLOODLUST.mp4',
    'chillsear': 'cutscenes/CHILLSEAR.mp4',
    'chromatic_exotic': 'cutscenes/CHROMATICEXOTIC.mp4',
    'chromatic_genesis': 'cutscenes/CHROMATICGENESIS.mp4',
    'dreammetric': 'cutscenes/DREAMMETRIC.mp4',
    'elude': 'cutscenes/ELUDE.mp4',
    'erebus': 'cutscenes/EREBUS.mp4',
    'equinox': 'cutscenes/EQUINOX.mp4',
    'exotic_void': 'cutscenes/EXOTICVOID.MP4',
    'felled': 'cutscenes/FELLED.mp4',
    'flora_evergreen': 'cutscenes/FLORAEVERGREEN.mp4',
    'gargantua': 'cutscenes/GARGANTUA.mp4',
    'hypervolt_everstorm': 'cutscenes/HYPERVOLTEVERSTORM.mp4',
    'impeached': 'cutscenes/IMPEACHED.mp4',
    'orchestra': 'cutscenes/JAZZORCHESTRA.mp4',
    'kyawthuite_remembrance': 'cutscenes/KYAWTHUITEREMEMBRANCE.mp4',
    'lotusfall': 'cutscenes/LOTUSFALL.mp4',
    'lumenpool': 'cutscenes/LUMENPOOL.mp4',
    'luminosity': 'cutscenes/LUMINOSITY.mp4',
    'maelstrom': 'cutscenes/MAELSTROM.mp4',
    'matrix_overdrive': 'cutscenes/MATRIXOVERDRIVE.mp4',
    'matrix_reality': 'cutscenes/MATRIXREALITY.mp4',
    'monarch': 'cutscenes/MONARCH.mp4',
    'overture': 'cutscenes/OVERTURE.mp4',
    'overture_history': 'cutscenes/OVERTUREHISTORY.mp4',
    'pixelation': 'cutscenes/PIXELATION.mp4',
    'prologue': 'cutscenes/PROLOGUE.mp4',
    'ruins': 'cutscenes/RUINS.mp4',
    'ruins_withered': 'cutscenes/RUINSWITHERED.mp4',
    'sophyra': 'cutscenes/SOPHYRA.mp4',
    'sovereign': 'cutscenes/SOVEREIGN.mp4',
    'starscourge_radiant': 'cutscenes/STARSCOURGERADIANT.mp4',
    'symphony': 'cutscenes/SYMPHONY.mp4',
    'twilight_withering': 'cutscenes/TWILIGHTWITHERINGGRACE.mp4',
    'unknown_glorious': 'cutscenes/UNKNOWN.mp4',
    'lamenthyr': 'cutscenes/LAMENTHYR.mp4',
    'frostveil': 'cutscenes/FROSTVEIL.mp4',
    'memory': 'cutscenes/MEMORY.mp4',
    'oblivion': 'cutscenes/OBLIVION.mp4',
    'pythios': 'cutscenes/PYTHIOS.mp4',
    'perpetual': 'cutscenes/PERPETUAL.mp4',
    'oppression': 'cutscenes/OPPRESSION.mp4',
    'spectraflow': 'cutscenes/SPECTRAFLOW.mp4',
    'leviathan': 'cutscenes/LEVIATHAN.mp4',
    'breakthrough': 'cutscenes/BREAKTHROUGH.mp4',
};

// Aura IDs that need custom stem mapping to match cutscene filenames.
const AURA_VIDEO_STEM_OVERRIDES = {
    'undead_basic': 'undead',
    'leak': 'inkleak',
    'nautilus': 'nautiluslost',
    'lost_soul': 'lostsoulwander',
    'respawn': 'playerrespawn',
    'unbound': 'boundedunbound',
    'alice': 'cosmosalice',
    'bejeweled': 'crystallizedbejeweled',
    'velocity_mach_10': 'velocity',
    'hurricane': 'stormalhurricane',
    'cola_carbonation': 'cola',
    'fatal_error': 'virtualfatalerror',
    'defined': 'undefineddefined',
    'kromat1k': 'chromatickromat1k',
    'troll': 'flushedtroll',
    'onion': 'originonion',
    'the_glock_of_the_sky': 'glocktheglockofthesky',
    'runic_accursed': 'accursed',
    'nrthern': 'northern',
};

// Known aura IDs that currently have no matching MP4 file in /cutscenes.
const AURAS_WITHOUT_MP4_CUTSCENE = new Set([
    'star_dreamspace',
    'double_star_dreamspace',
    'nothing',
    'common',
    'uncommon',
    'good',
    'natural',
    'rare',
    'divinus',
    'crystallized',
    'rage',
    'topaz',
    'ruby',
    'forbidden',
    'emerald',
    'gilded',
    'ink',
    'jackpot',
    'sapphire',
    'aquamarine',
    'wind',
    'nucleus',
    'layers',
    'aeternitas',
]);

// Files that are intentionally not lowercase on disk.
const CUTSCENE_FILENAME_CASE_OVERRIDES = {
    '1mstar': '1MSTAR.mp4',
    'breakthrough': 'BREAKTHROUGH.mp4',
    'equinox': 'EQUINOX.mp4',
    'frostveil': 'FROSTVEIL.mp4',
    'perpetual': 'PERPETUAL.mp4',
};

function normalizeCutsceneStem(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');
}

function stemToCutsceneFilename(stem) {
    if (!stem) return null;
    return CUTSCENE_FILENAME_CASE_OVERRIDES[stem] || `${stem}.mp4`;
}

function normalizeExistingVideoCutsceneMappings() {
    Object.keys(VIDEO_CUTSCENES).forEach((auraId) => {
        const path = VIDEO_CUTSCENES[auraId];
        if (typeof path !== 'string') return;

        const filename = path.split('/').pop();
        if (!filename) return;

        const fileStem = filename.replace(/\.mp4$/i, '');
        const normalizedStem = normalizeCutsceneStem(fileStem);
        const normalizedFilename = stemToCutsceneFilename(normalizedStem);
        if (!normalizedFilename) return;

        VIDEO_CUTSCENES[auraId] = `cutscenes/${normalizedFilename}`;
    });
}

function registerAuraVideoCutscenes() {
    if (typeof AURAS === 'undefined' || !Array.isArray(AURAS)) return;

    AURAS.forEach((aura) => {
        if (!aura || !aura.id || VIDEO_CUTSCENES[aura.id]) return;
        if (AURAS_WITHOUT_MP4_CUTSCENE.has(aura.id)) return;

        const sourceStem = AURA_VIDEO_STEM_OVERRIDES[aura.id] || aura.id;
        const normalizedStem = normalizeCutsceneStem(sourceStem);
        if (!normalizedStem) return;

        VIDEO_CUTSCENES[aura.id] = `cutscenes/${stemToCutsceneFilename(normalizedStem)}`;
    });
}

normalizeExistingVideoCutsceneMappings();
registerAuraVideoCutscenes();

// Custom transitions for specific auras
const CUTSCENE_TRANSITIONS = {
    'equinox': {
        fadeColor: '#ffffff',  // White fade
        fadeDuration: 800,     // 0.8 seconds
        holdDuration: 200      // Hold white screen for 0.2s before video
    },
    'breakthrough': {
        fadeColor: '#000000',  // Black fade
        fadeDuration: 3000,    // 3 seconds fade to black
        holdDuration: 50,      // Short hold
        videoFadeInDuration: 2000 // 2 seconds fade in for video
    },
    'luminosity': {
        fadeColor: '#000000',
        fadeDuration: 1000,    // 1 second fade to black
        holdDuration: 1500,    // 1.5 seconds hold (total 2.5s hidden)
        playAudioDuringTransition: true // Start audio immediately, show video later
    }
    // Default (no entry) = black fade, instant
};

// Flashbang override for specific auras
// 'global' = 100M+ white flash effect, 'transcendent' = 1B+ extreme deep fried with explosion
const FLASHBANG_OVERRIDE = {
    'memory': 'global',          // Memory gets the standard 100M+ flashbang
    'oblivion': 'transcendent',  // Oblivion gets the extreme 1B+ flashbang
};

const GLOBAL_FLASHBANG_THRESHOLD = 99999998;       // 99,999,998+
const TRANSCENDENT_FLASHBANG_THRESHOLD = 999999998; // ~1B+

function getFlashbangType(auraId, auraChance) {
    // Check for override first
    if (FLASHBANG_OVERRIDE.hasOwnProperty(auraId)) {
        return FLASHBANG_OVERRIDE[auraId];
    }

    const chance = auraChance || 1;
    if (chance >= TRANSCENDENT_FLASHBANG_THRESHOLD) {
        return 'transcendent';
    }
    if (chance >= GLOBAL_FLASHBANG_THRESHOLD) {
        return 'global';
    }
    return 'none';
}

// Special potion auras that should always show cutscenes when "Only Potion Auras" setting is on
const SPECIAL_POTION_AURAS = new Set([
    'memory',
    'oblivion',
    'memories',
    'neferkhaf',
    'ketamine'
]);

function isSpecialPotionAura(auraId) {
    return SPECIAL_POTION_AURAS.has(auraId);
}

// Potion-linked aura lineages that should be eligible for potion-only cutscene mode.
// Keep this separate from SPECIAL_POTION_AURAS to avoid changing unrelated systems
// that reuse isSpecialPotionAura (e.g., storage categorization).
const CUTSCENE_POTION_AURAS = new Set([
    ...SPECIAL_POTION_AURAS,
    'bounded',
    'unbound',
    'harnessed',
    'harnessed_elements',
    'spectraflow'
]);

function isPotionCutsceneAura(auraId) {
    return CUTSCENE_POTION_AURAS.has(auraId);
}

// Text/Dialog cutscenes (aura ID -> array of strings)
const TEXT_CUTSCENES = {
    'lost': [
        "Where... am I?",
        "It's so cold...",
        "I can't see anything...",
        "Wait...",
        "Something is emerging..."
    ],
    'aeternitas': [
        "The sands of time... they've stopped.",
        "...",
        "An eternity passes in silence.",
        "...",
        "You feel the weight of eons pressing upon you.",
        "...",
        "Ancient monuments crumble to dust...",
        "...and rise again.",
        "...",
        "Time is meaningless here.",
        "...",
        "You have witnessed what few mortals ever will.",
        "...",
        "The hourglass... has chosen you.",
        "...",
        "⧗ A E T E R N I T A S ⧗"
    ],
    'another_realm': [
        "WHAT—",
        "REALITY IS BREAKING",
        "CAN'T—",
        "EVERYTHING IS—",
        "TOO FAST",
        "COLORS EVERYWHERE",
        "WHICH WAY IS—",
        "I'M BEING PULLED",
        "DIMENSIONS COLLIDING",
        "THIS ISN'T—",
        "I SEE EVERYTHING",
        "I SEE NOTHING",
        "「 A N O T H E R   R E A L M 」"
    ],
    'singularity': [
        "Everything is being drawn to a single point.",
        "A point of infinite density.",
        "Even light cannot escape this destiny.",
        "Welcome to the center of the void.",
        "「 S I N G U L A R I T Y 」"
    ],
    'magnum_opus': [
        "The Alchemist's Dream...",
        "A lifetime of dedication...",
        "The Great Work is complete.",
        "MAGNUM OPUS"
    ],
    'toll': [
        "A sound from beyond...",
        "The bell has rung for eons...",
        "Waiting for a soul to hear its call...",
        "It rings for you.",
        "⦗ T O L L ⦘"
    ]
};

function hasTextCutscene(auraId) {
    return TEXT_CUTSCENES.hasOwnProperty(auraId);
}

function getTextCutsceneLines(auraId) {
    return TEXT_CUTSCENES[auraId] || [];
}

// Cutscene configurations for specific auras
const CUTSCENE_CONFIGS = {
    'sol': {
        particles: 'fire',
        shapes: 'circles',
        colors: ['#f39c12', '#e67e22', '#f1c40f'],
        description: 'The embodiment of the sun itself. Its radiance burns through the fabric of reality.',
        animation: 'solar-flare'
    },
    'lamenthyr': {
        particles: 'void',
        shapes: 'triangles',
        colors: ['#2d3436', '#6c5ce7', '#a29bfe'],
        description: 'An ancient entity from beyond the veil. Its presence distorts space and time.',
        animation: 'void-collapse'
    },
    'singularity': {
        particles: 'gravity',
        shapes: 'spirals',
        colors: ['#000000', '#00ffff', '#ffffff'],
        description: 'The point of infinite density. A cosmic hunger that devours even the light of creation.',
        animation: 'black-hole'
    },
    'starscourge_radiant': {
        particles: 'stars',
        shapes: 'hexagons',
        colors: ['#e17055', '#ff7675', '#fd79a8'],
        description: 'A cosmic horror that devours stars. The universe trembles at its awakening.',
        animation: 'star-burst'
    },
    'abyssal_hunter': {
        particles: 'bubbles',
        shapes: 'circles',
        colors: ['#0a3d62', '#3c6382', '#60a3bc'],
        description: 'From the deepest trenches of existence. It hunts in the spaces between worlds.',
        animation: 'deep-dive'
    },
    'alchemist': {
        particles: 'sparkles',
        shapes: 'squares',
        colors: ['#9b59b6', '#2ecc71', '#e74c3c'],
        description: 'Master of transmutation and forbidden knowledge. Reality bends to its will.',
        animation: 'transmutation'
    },
    'eden': {
        particles: 'petals',
        shapes: 'circles',
        colors: ['#2ecc71', '#ffb7c5', '#55efc4'],
        description: 'The garden at the beginning of all things. Paradise incarnate.',
        animation: 'bloom'
    },
    'aeternitas': {
        particles: 'sand',
        shapes: 'hourglasses',
        colors: ['#c9a227', '#1a1408', '#d4af37', '#8b7355'],
        description: 'The eternal monument. Time itself bows to its ancient power. Ten billion souls have failed to witness this moment.',
        animation: 'eternal-pulse'
    },
    'another_realm': {
        particles: 'portal',
        shapes: 'spirals',
        colors: ['#8e44ad', '#3498db', '#00ff88', '#ff00ff', '#00ffff'],
        description: 'A tear in the fabric of reality. Beyond lies infinite dimensions. Five billion souls have perished seeking this gateway.',
        animation: 'dimensional-rift'
    },
    'memory': {
        particles: 'sparkles',
        shapes: 'circles',
        colors: ['#a29bfe', '#6c5ce7', '#dfe6e9'],
        description: 'A fragment of something lost... A whisper from the past.',
        animation: 'fade-pulse'
    },
    'oblivion': {
        particles: 'void',
        shapes: 'squares',
        colors: ['#636e72', '#2d3436', '#000000'],
        description: 'The abyss stares back. All things return to nothingness.',
        animation: 'void-collapse'
    }
};

// Default cutscene for ultra-rare auras without specific config
const DEFAULT_CUTSCENE = {
    particles: 'sparkles',
    shapes: 'circles',
    colors: ['#ffffff', '#ecf0f1', '#bdc3c7'],
    description: 'An aura of unimaginable rarity. The cosmos itself acknowledges your fortune.',
    animation: 'cosmic-reveal'
};

function getCutsceneConfig(auraId) {
    return CUTSCENE_CONFIGS[auraId] || DEFAULT_CUTSCENE;
}

function shouldPlayCutscene(auraChance) {
    return auraChance >= CUTSCENE_THRESHOLD;
}

function hasVideoCutscene(auraId) {
    return VIDEO_CUTSCENES.hasOwnProperty(auraId);
}

function getVideoCutscenePath(auraId) {
    return VIDEO_CUTSCENES[auraId] || null;
}

function getCutsceneTransition(auraId) {
    return CUTSCENE_TRANSITIONS[auraId] || null;
}
