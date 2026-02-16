const POTIONS = [
    // --- NATURAL SPAWNS ---
    {
        id: 'lucky_potion',
        name: 'Lucky Potion',
        description: '+25% Luck for 60 seconds.',
        type: 'duration',
        buffType: 'luck_basic',
        stats: { luck: 0.25 },
        duration: 60,
        rarity: 'Common'
    },
    {
        id: 'speed_potion',
        name: 'Speed Potion',
        description: '-25% Roll cooldown for 30 seconds.',
        type: 'duration',
        buffType: 'speed_basic',
        stats: { rollSpeed: 0.25 }, // System uses positive for speed increase (reduction in cooldown logic handled in index properties)
        duration: 30,
        rarity: 'Common'
    },

    // --- FORTUNE (Luck) ---
    {
        id: 'fortune_i',
        name: 'Fortune Potion I',
        description: '+50% Luck for 5 minutes.',
        type: 'duration',
        buffType: 'fortune',
        stats: { luck: 0.5 },
        duration: 300,
        rarity: 'Rare',
        craftable: true,
        recipe: {
            'Lucky Potion': 5,
            'Uncommon': 1,
            'Rare': 5,
            'Gilded': 1
        }
    },
    {
        id: 'fortune_ii',
        name: 'Fortune Potion II',
        description: '+75% Luck for 7 minutes.',
        type: 'duration',
        buffType: 'fortune',
        stats: { luck: 0.75 },
        duration: 420,
        rarity: 'Epic',
        craftable: true,
        recipe: {
            'Fortune Potion I': 1,
            'Lucky Potion': 10,
            'Uncommon': 5,
            'Rare': 10,
            'Gilded': 2
        }
    },
    {
        id: 'fortune_iii',
        name: 'Fortune Potion III',
        description: '+100% Luck for 10 minutes.',
        type: 'duration',
        buffType: 'fortune',
        stats: { luck: 1.0 },
        duration: 600,
        rarity: 'Legendary',
        craftable: true,
        recipe: {
            'Fortune Potion II': 1,
            'Lucky Potion': 15,
            'Uncommon': 10,
            'Rare': 15,
            'Gilded': 5
        }
    },
    {
        id: 'huge_fortune_i',
        name: 'Huge Fortune Potion I',
        description: '+50% Luck for 1 hour.',
        type: 'duration',
        buffType: 'fortune',
        stats: { luck: 0.5 },
        duration: 3600,
        rarity: 'Epic'
    },

    // --- HASTE (Speed) ---
    {
        id: 'haste_i',
        name: 'Haste Potion I',
        description: '-30% Roll cooldown for 3 minutes.',
        type: 'duration',
        buffType: 'haste',
        stats: { rollSpeed: 0.30 },
        duration: 180,
        rarity: 'Rare',
        craftable: true,
        recipe: {
            'Speed Potion': 5,
            'Uncommon': 5,
            'Rare': 10,
            'Wind': 1
        }
    },
    {
        id: 'haste_ii',
        name: 'Haste Potion II',
        description: '-50% Roll cooldown for 5 minutes.',
        type: 'duration',
        buffType: 'haste',
        stats: { rollSpeed: 0.50 },
        duration: 300,
        rarity: 'Epic',
        craftable: true,
        recipe: {
            'Haste Potion I': 1,
            'Speed Potion': 10,
            'Uncommon': 10,
            'Rare': 15,
            'Wind': 2
        }
    },
    {
        id: 'haste_iii',
        name: 'Haste Potion III',
        description: '-70% Roll cooldown for 8 minutes.',
        type: 'duration',
        buffType: 'haste',
        stats: { rollSpeed: 0.70 },
        duration: 480,
        rarity: 'Legendary',
        craftable: true,
        recipe: {
            'Haste Potion II': 1,
            'Speed Potion': 20,
            'Uncommon': 15,
            'Rare': 25,
            'Wind': 4
        }
    },

    // --- SINGLE-ROLL POWER ---
    {
        id: 'potion_of_bound',
        name: 'Potion of Bound',
        description: '+50,000 Luck for next 1 roll.',
        type: 'one_time',
        buffType: 'bound',
        stats: { luckFlat: 50000 }, // Special flat addition handling
        duration: 1, // 1 roll
        rarity: 'Legendary'
    },
    {
        id: 'heavenly_potion',
        name: 'Heavenly Potion',
        description: '+150,000 Luck for next 1 roll. BREAKTHROUGH tier.',
        type: 'one_time',
        buffType: 'heavenly',
        stats: { luckFlat: 150000 },
        duration: 1,
        rarity: 'Mythic',
        craftable: true,
        recipe: {
            'Lucky Potion': 50,
            'Divinus': 50,
            'Gilded': 20,
            'Celestial': 1
        }
    },
    {
        id: 'godlike_potion',
        name: 'Godlike Potion',
        description: '+400,000 Luck for next 1 roll.',
        type: 'one_time',
        buffType: 'godlike',
        stats: { luckFlat: 400000 },
        duration: 1,
        rarity: 'Mythic',
        craftable: true,
        recipe: {
            'Heavenly Potion': 1,
            'Lucky Potion': 125,
            'Divinus': 75,
            'Gilded': 50,
            'Exotic': 1
        }
    },
    {
        id: 'oblivion_potion',
        name: 'Oblivion Potion',
        description: '+600,000 Luck for next 1 roll. Grants chance for OBLIVION (1/2000), Memory (1/100), and ...memories... (1/300).',
        type: 'one_time',
        buffType: 'oblivion',
        stats: { luckFlat: 600000, unlockAuras: ['oblivion', 'memory', 'memories'] },
        duration: 1,
        rarity: 'Exalted',
        obtainedFrom: 'Jester Merchant (5 Void Coins)'
    },
    {
        id: 'potion_of_dune',
        name: 'Potion of Dune',
        description: 'Grants chance for Neferkhaf (1/1000). Luck does not affect this roll.',
        type: 'one_time',
        buffType: 'dune',
        stats: { unlockAuras: ['neferkhaf'] },
        duration: 1,
        rarity: 'Exalted',
        obtainedFrom: 'Crawler Boss (7/week limit) or Season Pass'
    },
    {
        id: 'pump_kings_blood',
        name: 'Pump King\'s Blood',
        description: '+700,000 Luck for next 1 roll. Requires 50,000 rolls.',
        type: 'one_time',
        buffType: 'pump_blood',
        stats: { luckFlat: 700000 },
        requirements: { rolls: 50000 },
        duration: 1,
        rarity: 'Exalted'
    },

    // --- GODLY (4 Hour) ---
    {
        id: 'godly_zeus',
        name: 'Godly Potion (Zeus)',
        description: '+200% Luck and +30% Roll Speed for 4 hours.',
        type: 'duration',
        buffType: 'godly', // Assuming only one godly active? Or stackable? "Godly Potion" generic type
        stats: { luck: 2.0, rollSpeed: 0.30 },
        duration: 14400,
        rarity: 'Godly'
    },
    {
        id: 'godly_poseidon',
        name: 'Godly Potion (Poseidon)',
        description: '-50% Luck and +75% Roll Speed for 4 hours.',
        type: 'duration',
        buffType: 'godly',
        stats: { luck: -0.5, rollSpeed: 0.75 },
        duration: 14400,
        rarity: 'Godly'
    },
    {
        id: 'godly_hades',
        name: 'Godly Potion (Hades)',
        description: '+300% Luck and -10% Roll Speed for 4 hours.',
        type: 'duration',
        buffType: 'godly',
        stats: { luck: 3.0, rollSpeed: -0.10 },
        duration: 14400,
        rarity: 'Godly'
    },

    // --- STRANGE ---
    {
        id: 'strange_i',
        name: 'Strange Potion I',
        description: 'Random effect for 10 minutes.',
        type: 'random',
        pool: [
            { name: 'The Chosen', stats: { luck: 1.5, rollSpeed: 0.30 } },
            { name: 'The Power I', stats: { luck: 1.5 } },
            { name: 'The Knowledge I', stats: { rollSpeed: 0.30 } },
            { name: 'The Wrath I', stats: { luck: -0.5 } },
            { name: 'The Sloth I', stats: { rollSpeed: -0.15 } }
        ],
        duration: 600,
        rarity: 'Rare'
    },
    {
        id: 'strange_ii',
        name: 'Strange Potion II',
        description: 'Random effect for 10 minutes (Stronger).',
        type: 'random',
        pool: [
            { name: 'GODLIKE', stats: { luck: 2.5, rollSpeed: 0.40 } },
            { name: 'The Power II', stats: { luck: 2.5 } },
            { name: 'The Knowledge II', stats: { rollSpeed: 0.40 } },
            { name: 'The Wrath II', stats: { luck: -1.0 } },
            { name: 'The Sloth II', stats: { rollSpeed: -0.25 } }
        ],
        duration: 600,
        rarity: 'Epic'
    },
    {
        id: 'strange_potion',
        name: 'Strange Potion',
        description: 'A peculiar concoction. Grants chance for [ k e t a m i n e ] (1/666).',
        type: 'one_time',
        buffType: 'strange_special',
        stats: { unlockAuras: ['ketamine'] },
        duration: 1,
        rarity: 'Legendary',
        obtainedFrom: 'Rare spawn in Glitched biome'
    },

    // --- FORBIDDEN (Limbo) ---
    {
        id: 'forbidden_i',
        name: 'Forbidden Potion I',
        description: '+70% Luck and +10% Roll Speed for 30 minutes (Limbo Only).',
        type: 'duration',
        buffType: 'forbidden',
        stats: { luck: 0.70, rollSpeed: 0.10 },
        duration: 1800,
        biomeRequirement: 'The Limbo', // Assuming biome name
        rarity: 'Forbidden'
    },
    {
        id: 'forbidden_ii',
        name: 'Forbidden Potion II',
        description: '+325% Luck and +25% Roll Speed for 1 hour (Limbo Only).',
        type: 'duration',
        buffType: 'forbidden',
        stats: { luck: 3.25, rollSpeed: 0.25 },
        duration: 3600,
        biomeRequirement: 'The Limbo',
        rarity: 'Forbidden'
    },
    {
        id: 'forbidden_iii',
        name: 'Forbidden Potion III',
        description: '+1350% Luck and +75% Roll Speed for 3 hours (Limbo Only).',
        type: 'duration',
        buffType: 'forbidden',
        stats: { luck: 13.50, rollSpeed: 0.75 },
        duration: 10800,
        biomeRequirement: 'The Limbo',
        rarity: 'Forbidden'
    },

    // --- SPECIAL ---
    {
        id: 'warp_potion',
        name: 'Warp Potion',
        description: '+1,000% Roll Speed for next 2,000 rolls.',
        type: 'roll_duration', // decr on roll
        buffType: 'warp',
        stats: { rollSpeed: 999.0 }, // Effectively instant (1000x speed)
        durationRolls: 2000,
        rarity: 'Special'
    },
    {
        id: 'transcendent_potion',
        name: 'Transcendent Potion',
        description: '+1,000% Roll Speed for next 20,000 rolls.',
        type: 'roll_duration',
        buffType: 'warp', // Shares type with warp? Or stacks? Assuming distinct for now or overwrites.
        stats: { rollSpeed: 999.0 }, // Effectively instant (1000x speed)
        durationRolls: 20000,
        rarity: 'Special'
    },
    {
        id: 'question_potion',
        name: '??? Potion',
        description: '2x Final Luck for 1 week. Dorcelessness.',
        type: 'duration',
        buffType: 'question',
        stats: { luckMultiplier: 2.0 }, // final multiplier
        duration: 604800, // 1 week
        rarity: 'Special'
    },
    {
        id: 'obliterate_potion',
        name: 'O_bliterate Potion',
        description: '4x Final Luck for 1 week. ????',
        type: 'duration',
        buffType: 'obliterate',
        stats: { luckMultiplier: 4.0 }, // final multiplier
        duration: 604800, // 1 week
        rarity: 'Special'
    },
    {
        id: 'axis_potion',
        name: '??? (53_Axis)',
        description: 'Snapshots and duplicates your current luck and roll speed for 5 rolls. Disables other buffs during this time.',
        type: 'axis', // Special type that snapshots current stats
        buffType: 'axis',
        stats: {}, // Will be populated when used
        durationRolls: 5,
        rarity: 'Special'
    },

    // --- UNOBTAINABLE/VAULTED ---
    {
        id: 'universe_potion_i',
        name: 'Universe Potion I',
        description: 'Unobtainable.',
        type: 'duration',
        duration: 0,
        stats: {},
        rarity: 'Vaulted',
        unusable: true
    },
    {
        id: 'heavenly_potion_i',
        name: 'Heavenly Potion I',
        description: 'Replaced by Potion of Bound.',
        type: 'one_time',
        stats: { luckFlat: 15000 },
        duration: 1,
        rarity: 'Vaulted',
        unusable: true
    },

    // --- BIOME THEMATIC POTIONS (Achievement Rewards) ---
    // Each has UNIQUE mechanics beyond just luck boosts!

    {
        id: 'infernal_potion',
        name: 'Infernal Potion',
        description: 'STACKING FLAMES: Each consecutive roll increases luck by +10% (stacks up to 20x). Resets if you stop rolling for 5 seconds.',
        type: 'duration',
        buffType: 'infernal',
        stats: { luck: 0.5 },  // Base luck, stacks increase this
        specialEffect: 'stacking_luck',
        stackMax: 20,
        stackBonus: 0.10,
        duration: 180,
        rarity: 'Rare'
    },
    {
        id: 'frost_potion',
        name: 'Frost Potion',
        description: 'FROZEN TIME: Every rare (1k+) roll EXTENDS the potion duration by 15 seconds. Can stack indefinitely.',
        type: 'duration',
        buffType: 'frost',
        stats: { luck: 0.8 },
        specialEffect: 'extend_on_rare',
        extendAmount: 15,
        extendThreshold: 1000,
        duration: 120,
        rarity: 'Rare'
    },
    {
        id: 'stellar_potion',
        name: 'Stellar Potion',
        description: 'SHOOTING STAR: Your FIRST roll has 10x luck. After that, +50% luck for remaining duration.',
        type: 'duration',
        buffType: 'stellar',
        stats: { luck: 0.5 },
        specialEffect: 'first_roll_bonus',
        firstRollMultiplier: 10,
        duration: 180,
        rarity: 'Epic'
    },
    {
        id: 'aquatic_potion',
        name: 'Aquatic Potion',
        description: 'OCEAN CURRENT: +200% native biome chance bonus. If in a water biome, +100% luck instead.',
        type: 'duration',
        buffType: 'aquatic',
        stats: { luck: 0.3, nativeBiomeBonus: 2.0 },
        specialEffect: 'biome_affinity',
        affinityBiomes: ['DEEP SEA', 'RAINY'],
        affinityBonus: 1.0,
        duration: 240,
        rarity: 'Rare'
    },
    {
        id: 'ethereal_potion',
        name: 'Ethereal Potion',
        description: 'DREAM PHASE: 25% chance each roll to enter "Dream State" - next roll has +500% luck. Dream State is consumed on use.',
        type: 'duration',
        buffType: 'ethereal',
        stats: { luck: 0.5 },
        specialEffect: 'dream_state',
        procChance: 0.25,
        procBonus: 5.0,
        duration: 240,
        rarity: 'Epic'
    },
    {
        id: 'glitched_potion',
        name: 'Glitched Potion',
        description: 'BUFFER OVERFLOW: Luck randomly fluctuates between -50% and +300% EACH ROLL. High risk, high reward!',
        type: 'duration',
        buffType: 'glitched',
        stats: {},
        specialEffect: 'random_luck',
        randomMin: -0.5,
        randomMax: 3.0,
        duration: 120,
        rarity: 'Rare'
    },
    {
        id: 'digital_potion',
        name: 'Digital Potion',
        description: 'BINARY BOOST: Luck alternates between 0% and +200% every roll. Perfect timing required!',
        type: 'duration',
        buffType: 'digital',
        stats: {},
        specialEffect: 'binary_luck',
        binaryValues: [0, 2.0],
        duration: 180,
        rarity: 'Epic'
    },
    {
        id: 'sakura_potion',
        name: 'Sakura Potion',
        description: 'PETAL STORM: Grants +5 free auto-rolls when consumed. +80% luck during effect.',
        type: 'duration',
        buffType: 'sakura',
        stats: { luck: 0.8 },
        specialEffect: 'free_rolls',
        freeRolls: 5,
        duration: 300,
        rarity: 'Rare'
    },
    {
        id: 'midnight_potion',
        name: 'Midnight Potion',
        description: 'NIGHT OWL: +50% luck normally. During in-game NIGHT, luck becomes +200% instead!',
        type: 'duration',
        buffType: 'midnight',
        stats: { luck: 0.5 },
        specialEffect: 'time_conditional',
        nightBonus: 2.0,
        duration: 300,
        rarity: 'Rare'
    },
    {
        id: 'lunar_potion',
        name: 'Lunar Potion',
        description: 'MOON PHASES: Luck cycles through phases (50% → 100% → 150% → 200% → 150% → 100%) every 20 seconds.',
        type: 'duration',
        buffType: 'lunar',
        stats: {},
        specialEffect: 'cycling_luck',
        cycleValues: [0.5, 1.0, 1.5, 2.0, 1.5, 1.0],
        cycleInterval: 20,
        duration: 240,
        rarity: 'Epic'
    },
    {
        id: 'solar_potion',
        name: 'Solar Potion',
        description: 'SOLAR FLARE: +80% luck. Every 30 seconds, triggers a "Flare" giving +500% luck for 3 seconds!',
        type: 'duration',
        buffType: 'solar',
        stats: { luck: 0.8 },
        specialEffect: 'periodic_burst',
        burstInterval: 30,
        burstBonus: 5.0,
        burstDuration: 3,
        duration: 240,
        rarity: 'Epic'
    },
    {
        id: 'divine_potion',
        name: 'Divine Potion',
        description: 'GUARDIAN ANGEL: +100% luck. If you roll a 1M+ aura, gain ANOTHER free roll immediately with +300% luck!',
        type: 'duration',
        buffType: 'divine',
        stats: { luck: 1.0 },
        specialEffect: 'bonus_roll_on_rare',
        triggerThreshold: 1000000,
        bonusRollLuck: 3.0,
        duration: 180,
        rarity: 'Legendary'
    },
    {
        id: 'tempest_potion',
        name: 'Tempest Potion',
        description: 'STORM SURGE: +50% Roll Speed. Every 10 rolls, lightning strikes giving +400% luck for 1 roll!',
        type: 'duration',
        buffType: 'tempest',
        stats: { rollSpeed: 0.5 },
        specialEffect: 'periodic_roll_bonus',
        rollInterval: 10,
        rollBonus: 4.0,
        duration: 180,
        rarity: 'Rare'
    },
    {
        id: 'mystical_potion',
        name: 'Mystical Potion',
        description: 'ARCANE OVERFLOW: Gain +3% luck for EVERY potion in your active effects (including this one). Stacks with other buffs!',
        type: 'duration',
        buffType: 'mystical',
        stats: {},
        specialEffect: 'potion_synergy',
        perPotionBonus: 0.03,
        duration: 240,
        rarity: 'Epic'
    },
    {
        id: 'prismatic_potion',
        name: 'Prismatic Potion',
        description: 'RAINBOW SHIFT: Every 15 seconds, randomly applies one of 7 different effects (luck, speed, luck+speed, mega luck, etc.)',
        type: 'duration',
        buffType: 'prismatic',
        stats: {},
        specialEffect: 'random_buff_cycle',
        cycleInterval: 15,
        buffPool: [
            { luck: 1.0 },
            { rollSpeed: 0.5 },
            { luck: 0.5, rollSpeed: 0.25 },
            { luck: 2.5 },
            { luckFlat: 50000 },
            { rollSpeed: 0.75 },
            { luck: 1.5, rollSpeed: 0.15 }
        ],
        duration: 210,
        rarity: 'Legendary'
    },
    {
        id: 'cosmic_potion',
        name: 'Cosmic Potion',
        description: 'EVENT HORIZON: +100% luck. 5% chance each roll to trigger "Singularity" - that roll counts TWICE toward your collection!',
        type: 'duration',
        buffType: 'cosmic',
        stats: { luck: 1.0 },
        specialEffect: 'double_roll',
        doubleChance: 0.05,
        duration: 180,
        rarity: 'Legendary'
    },
    {
        id: 'abyssal_potion',
        name: 'Abyssal Potion',
        description: 'PRESSURE DIVE: Luck increases the longer the potion is active. Starts at +50%, gains +10% every 30 seconds. Max +200%.',
        type: 'duration',
        buffType: 'abyssal',
        stats: { luck: 0.5 },
        specialEffect: 'ramping_luck',
        rampInterval: 30,
        rampBonus: 0.1,
        rampMax: 2.0,
        duration: 300,
        rarity: 'Legendary'
    },
    {
        id: 'wild_potion',
        name: 'Wild Potion',
        description: 'PREDATOR MODE: +30% luck normally. If you roll 3 rares (10k+) in a row, enter "Hunt" mode with +250% luck for 30 sec!',
        type: 'duration',
        buffType: 'wild',
        stats: { luck: 0.3 },
        specialEffect: 'streak_bonus',
        streakRequired: 3,
        streakThreshold: 10000,
        streakBonus: 2.5,
        streakDuration: 30,
        duration: 240,
        rarity: 'Rare'
    },
    {
        id: 'crimson_potion',
        name: 'Crimson Potion',
        description: 'BLOOD PACT: -10% luck. BUT every "Nothing" roll adds +5% luck permanently to this potion effect. Stacks up to 30x!',
        type: 'duration',
        buffType: 'crimson',
        stats: { luck: -0.1 },
        specialEffect: 'nothing_stacks',
        nothingBonus: 0.05,
        nothingMaxStacks: 30,
        duration: 300,
        rarity: 'Epic'
    },
    {
        id: 'undead_potion',
        name: 'Undead Potion',
        description: 'RESURRECTION: If this potion expires while you have 0 auras collected this session, it automatically refreshes once!',
        type: 'duration',
        buffType: 'undead',
        stats: { luck: 0.8 },
        specialEffect: 'auto_refresh',
        refreshCondition: 'no_auras_session',
        refreshCount: 1,
        duration: 300,
        rarity: 'Rare'
    }
];
