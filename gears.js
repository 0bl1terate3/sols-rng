// Gear Database for Sol's RNG
const GEARS = [
    {
        id: 'gear-basing',
        name: 'Gear Basing',
        tier: 'T-1',
        slot: 'none',
        isMaterial: true,
        description: 'Basic structural material for gears.',
        recipe: {
            'Common': 1,
            'Uncommon': 1,
            'Good': 1,
            'Natural': 1,
            'Rare': 1
        }
    },
    // RIGHT-HAND GEARS - T1
    {
        id: 'luck-glove',
        name: 'Luck Glove',
        tier: 'T-1',
        slot: 'right',
        description: 'A glove with a really simple structure.',
        stats: { luck: 0.25 },
        recipe: {
            'Gear Basing': 1,
            'Divinus': 2,
            'Crystallized': 1,
            'Rare': 3
        }
    },
    {
        id: 'desire-glove',
        name: 'Desire Glove',
        tier: 'T-1',
        slot: 'right',
        description: 'Makes you hunger.',
        stats: { luck: 0.40 },
        recipe: {
            'Gear Basing': 1,
            'Rage': 1,
            'Ruby': 1,
            'Diaboli': 1,
            'Bleeding': 1
        }
    },
    {
        id: 'lunar-device',
        name: 'Lunar Device',
        tier: 'T-1',
        slot: 'right',
        description: 'Stillness clears your mind.',
        stats: { rollSpeed: 0.15 },
        recipe: {
            'Gear Basing': 1,
            'Rare': 1,
            'Divinus': 1,
            'Lunar': 1
        }
    },
    {
        id: 'frozen-gauntlet',
        name: 'Frozen Gauntlet',
        tier: 'T-1',
        slot: 'right',
        description: 'Chilling power.',
        stats: { luck: 1.50, rollSpeed: -0.25 },
        recipe: {
            'Gear Basing': 1,
            'Glacier': 1,
            'Permafrost': 1
        }
    },
    {
        id: 'solar-device',
        name: 'Solar Device',
        tier: 'T-1',
        slot: 'right',
        description: 'Harness the sun.',
        stats: { luck: 0.50 },
        recipe: {
            'Gear Basing': 1,
            'Solar': 1,
            'Divinus': 1,
            'Rare': 1
        }
    },

    // T2
    {
        id: 'aqua-device',
        name: 'Aqua Device',
        tier: 'T-2',
        slot: 'right',
        description: 'Flow like water.',
        stats: { rollSpeed: 0.10, rainyBonus: { rollSpeed: 0.90 } },
        recipe: {
            'Gear Basing': 1,
            'Aquamarine': 1,
            'Aquatic': 1,
            'Nautilus': 1
        }
    },
    {
        id: 'shining-star',
        name: 'Shining Star',
        tier: 'T-2',
        slot: 'right',
        description: 'Shine bright.',
        stats: { luck: 0.50, starfallBonus: { luck: 2.00 } },
        recipe: {
            'Gear Basing': 1,
            'Star Rider': 1,
            'STARLIGHT': 1
        }
    },
    {
        id: 'eclipse-device',
        name: 'Eclipse Device',
        tier: 'T-2',
        slot: 'right',
        description: 'Balance of light and dark.',
        stats: { luck: 0.50, rollSpeed: 0.15 },
        recipe: {
            'Eclipse': 1,
            'Solar Device': 1,
            'Lunar Device': 1
        }
    },

    // T3
    {
        id: 'exo-gauntlet',
        name: 'Exo Gauntlet',
        tier: 'T-3',
        slot: 'right',
        description: 'Otherworldly technology.',
        stats: { luck: 1.00, rollSpeed: 0.20 },
        recipe: {
            'Gear Basing': 3,
            'Gilded': 3,
            'Precious': 2,
            'Magnetic': 2,
            'Sidereum': 1,
            'Undead': 1,
            'Exotic': 1
        }
    },
    {
        id: 'windstorm-device',
        name: 'Windstorm Device',
        tier: 'T-3',
        slot: 'right',
        description: 'Ride the storm.',
        stats: { luck: 1.15, rollSpeed: 0.25 },
        recipe: {
            'Gear Basing': 5,
            'Wind': 25,
            'Stormal': 1,
            'Aquatic': 1,
            'Sidereum': 4,
            'Precious': 12
        }
    },

    // T4
    {
        id: 'subzero-device',
        name: 'Subzero Device',
        tier: 'T-4',
        slot: 'right',
        description: 'Absolute zero.',
        stats: { luck: 1.50, rollSpeed: 0.30 },
        recipe: {
            'Gear Basing': 5,
            'Permafrost': 2,
            'Crystallized': 600,
            'Aquatic': 2,
            'Glacier': 60,
            'Sidereum': 10,
            'Magnetic': 20,
            'Precious': 40
        }
    },

    // T5
    {
        id: 'galactic-device',
        name: 'Galactic Device',
        tier: 'T-5',
        slot: 'right',
        description: 'Cosmic power.',
        stats: { luck: 2.50, rollSpeed: 0.30 },
        recipe: {
            'Galaxy': 1,
            'Sapphire': 100,
            'Solar': 15,
            'Magnetic': 62,
            'COMET': 3,
            'Gear Basing': 25,
            'Diaboli': 80,
            'Eclipsion': 1,
            'Lunar': 15
        }
    },
    {
        id: 'volcanic-device',
        name: 'Volcanic Device',
        tier: 'T-5',
        slot: 'right',
        description: 'Molten fury.',
        stats: { luck: 2.90, rollSpeed: 0.35 },
        recipe: {
            'Hades': 1,
            'Rage : Heated': 10,
            'Diaboli': 140,
            'Rage': 1000,
            'Bleeding': 55,
            'Gear Basing': 6,
            'Solar Device': 1,
            'Windstorm Device': 1
        }
    },

    // T6
    {
        id: 'exoflex-device',
        name: 'Exoflex Device',
        tier: 'T-6',
        slot: 'right',
        description: 'Advanced alien tech.',
        stats: { luck: 3.40, rollSpeed: 0.35 },
        recipe: {
            'Arcane': 3,
            'Jade': 5,
            'Exotic': 50,
            'Undead': 37,
            'Sidereum': 350,
            'STARLIGHT': 80,
            'Aquamarine': 1000,
            'Forbidden': 2000,
            'Rare': 30000,
            'Exo Gauntlet': 1
        }
    },
    {
        id: 'hologrammer',
        name: 'Hologrammer',
        tier: 'T-6',
        slot: 'right',
        description: '15% chance to duplicate items when grabbing.',
        stats: { luck: 3.95, rollSpeed: 0.35, duplicateChance: 0.15 },
        recipe: {
            'Virtual': 2,
            'Magnetic : Reverse Polarity': 2,
            'Twilight': 3,
            'Kyawthuite': 2,
            'COMET': 30,
            'STARLIGHT': 80,
            'Rage : Heated': 145,
            'PLAYER': 600,
            'Magnetic': 830,
            'Diaboli': 1645,
            'Forbidden': 4000
        }
    },

    // T7
    {
        id: 'ragnaroker',
        name: 'Ragnaroker',
        tier: 'T-7',
        slot: 'right',
        description: '+45% Luck and +5% Roll Speed during WINDY, RAINY, or HELL biomes.',
        stats: { luck: 4.55, rollSpeed: 0.40, weatherBonus: { luck: 0.45, rollSpeed: 0.05, biomes: ['WINDY', 'RAINY', 'HELL'] } },
        recipe: {
            'Zeus': 3,
            'Hades': 3,
            'Poseidon': 3,
            'Star Rider': 75,
            'Solar': 175,
            'Lunar': 175,
            'Rage : Heated': 230,
            'lost': 350,
            'Sidereum': 800,
            'Ash': 1450,
            'Diaboli': 3200,
            'Rage': 23000
        }
    },

    // T8
    {
        id: 'starshaper',
        name: 'Starshaper',
        tier: 'T-8',
        slot: 'right',
        description: 'Shape the stars themselves.',
        stats: { luck: 7.00, rollSpeed: 0.50 },
        recipe: {
            'Galactic Device': 1,
            'Gravitational Device': 1,
            'Solar Device': 15,
            'Lunar Device': 15,
            'STARSCOURGE': 2,
            'Hyper-Volt': 3,
            'Galaxy': 3,
            'Gravitational': 6,
            'COMET': 90,
            'Star Rider': 200,
            'Solar': 1500,
            'Lunar': 1500,
            'Sidereum': 2700,
            'Magnetic': 5600
        }
    },

    // T9
    {
        id: 'neuralyzer',
        name: 'Neuralyzer',
        tier: 'T-9',
        slot: 'right',
        description: 'Forget everything.',
        stats: { luck: 8.50, rollSpeed: 0.70 },
        recipe: {
            'Hologrammer': 1,
            'CHROMATIC': 2,
            'Origin': 7,
            'Virtual': 18,
            'Twilight': 10,
            'UNBOUND': 20,
            'Exotic': 400,
            'STARLIGHT': 260,
            ':Flushed:': 2000,
            'Lost Soul': 2500
        }
    },

    // T10
    {
        id: 'genesis-drive',
        name: 'Genesis Drive',
        tier: 'T-10',
        slot: 'right',
        description: 'Best Real-Game RIGHT-HAND GEAR',
        stats: { luck: 12.00, rollSpeed: 1.00 },
        recipe: {
            'Neuralyzer': 1,
            'CHROMATIC : GENESIS': 1,
            'Matrix': 2,
            'CHROMATIC': 2,
            'Hyper-Volt': 10,
            'Origin': 10,
            'Virtual': 30,
            'BOUNDED': 200,
            'Aether': 200,
            'Exotic': 400,
            'WATT': 2400,
            'Powered': 4000
        }
    },

    // T11
    {
        id: 'omega-drive',
        name: 'Omega Drive',
        tier: 'T-11',
        slot: 'right',
        description: 'ULTIMATE RIGHT-HAND GEAR. +18 Luck, +1.5 Roll Speed. Every 25 rolls: OVERDRIVE for 8 rolls (x2 Luck, +50% Speed).',
        stats: { luck: 18.00, rollSpeed: 1.50, special: 'omega-overdrive' },
        recipe: {
            'CHROMATIC : GENESIS': 2,
            'Helios': 1,
            'Sentinel': 1,
            'Hyper-Volt': 15,
            'Matrix': 5,
            'Origin': 25,
            'Virtual': 75,
            'BOUNDED': 500,
            'Aether': 500,
            'Exotic': 1000,
            'WATT': 6000,
            'Powered': 10000
        }
    },

    // LEFT-HAND GEARS
    {
        id: 'gemstone-gauntlet',
        name: 'Gemstone Gauntlet',
        tier: 'T-1',
        slot: 'left',
        description: 'Per 10 rolls, random gem glows granting 0-30% Luck or Roll Speed for 10 rolls.',
        stats: { special: 'gemstone-proc' },
        recipe: {
            'Gear Basing': 1,
            'Topaz': 1,
            'Ruby': 1,
            'Emerald': 1,
            'Sapphire': 1,
            'Aquamarine': 1,
            'Crystallized': 1
        }
    },
    {
        id: 'dark-matter-device',
        name: 'Dark Matter Device',
        tier: 'T-2',
        slot: 'left',
        description: 'Each Bonus Roll gives 0.1% chance to earn 1 Point.',
        stats: { special: 'dark-matter' },
        recipe: {
            'Gear Basing': 1,
            'Ink': 1,
            'Glock': 1,
            'Ash': 1
        }
    },
    {
        id: 'jackpot-gauntlet',
        name: 'Jackpot Gauntlet',
        tier: 'T-3',
        slot: 'left',
        description: 'Gives 77$ when rolling Jackpot.',
        stats: { luck: 0.77, rollSpeed: 0.07, special: 'jackpot-bonus' },
        recipe: {
            'Gear Basing': 7,
            'Jackpot': 77,
            'Gilded': 77,
            'Rare': 777
        }
    },
    {
        id: 'flesh-device',
        name: 'Flesh Device',
        tier: 'T-3',
        slot: 'left',
        description: 'Makes Bonus Roll apply to every roll, reduces Bonus Roll Multiplier to 1.3.',
        stats: { special: 'flesh-bonus' },
        recipe: {
            'Astral': 1,
            'HAZARD': 30,
            'Corrosive': 15,
            'Undead': 10,
            'Crystallized': 6000,
            'Ink': 190,
            'Bleeding': 30
        }
    },
    {
        id: 'gravitational-device',
        name: 'Gravitational Device',
        tier: 'T-8',
        slot: 'left',
        description: 'Bonus Roll Multiply: 2 â†’ 6',
        stats: { special: 'bonus-6x' },
        recipe: {
            'Gravitational': 1,
            'BOUNDED': 3,
            'Exotic': 5,
            'Magnetic': 75,
            'Diaboli': 152,
            'Gear Basing': 15,
            'Sidereum': 31,
            'Nautilus': 5,
            'Precious': 152
        }
    },
    {
        id: 'darkshader',
        name: 'Darkshader',
        tier: 'T-8',
        slot: 'left',
        description: 'Bonus Roll: 10 â†’ 5 (x2.5 Luck). Every 20 rolls: ENCROACHED for 10 rolls (x2.5 Luck, bonus = x5).',
        stats: { special: 'dark-shader' },
        recipe: {
            'Arcane : Dark': 1,
            'Twilight': 5,
            'Undefined': 20,
            'L E A K': 1150,
            'Lunar': 2700,
            'HAZARD': 2250,
            'Bleeding': 3500,
            'Diaboli': 14800,
            'Ink': 22000,
            'Forbidden': 37000
        }
    },

    // T10 LEFT
    {
        id: 'lightcaster',
        name: 'Lightcaster',
        tier: 'T-10',
        slot: 'left',
        description: 'Bonus Roll: 10 â†’ 3 (x3.5 Luck). Every 15 rolls: RADIANT for 10 rolls (x4 Luck, bonus = x8, +15% Roll Speed).',
        stats: { luck: 2.50, special: 'light-caster' },
        recipe: {
            'Darkshader': 1,
            'CHROMATIC': 1,
            'Matrix': 2,
            'Twilight': 15,
            'Undefined': 50,
            'Arcane : Dark': 3,
            'HAZARD': 5000,
            'Ink': 50000,
            'Forbidden': 100000
        }
    },
    {
        id: 'pole-light-core',
        name: 'Pole Light Core Device',
        tier: 'T-9',
        slot: 'left',
        description: 'Every 30th roll gives 5 stacks of Skip.',
        stats: { luck: 5.00, special: 'pole-skip' },
        recipe: {
            'Sirius': 3,
            'Blizzard': 3,
            'Hyper-Volt': 4,
            'Origin': 5,
            'Magnetic : Reverse Polarity': 25,
            'Jade': 100,
            'Permafrost': 300,
            'Solar': 5000,
            'Sidereum': 7250,
            'Magnetic': 9000
        }
    },

    // GAP-FILL CRAFTABLE GEARS
    {
        id: 'tempest-device',
        name: 'Tempest Device',
        tier: 'T-4',
        slot: 'right',
        description: 'Built for unstable weather. Strong in WINDY/RAINY biomes.',
        stats: { luck: 1.70, rollSpeed: 0.32, weatherBonus: { luck: 0.30, rollSpeed: 0.08, biomes: ['WINDY', 'RAINY'] } },
        recipe: {
            'Windstorm Device': 1,
            'Aqua Device': 1,
            'Wind': 180,
            'Aquamarine': 220,
            'Magnetic': 180,
            'Sidereum': 24
        }
    },
    {
        id: 'prism-drive',
        name: 'Prism Drive',
        tier: 'T-5',
        slot: 'right',
        description: 'Concentrates spectrum energy into efficient rolls.',
        stats: { luck: 3.10, rollSpeed: 0.36 },
        recipe: {
            'Galactic Device': 1,
            'Volcanic Device': 1,
            'Sapphire': 350,
            'Emerald': 260,
            'Ruby': 260,
            'COMET': 12,
            'Gear Basing': 20
        }
    },
    {
        id: 'quantum-gauntlet',
        name: 'Quantum Gauntlet',
        tier: 'T-6',
        slot: 'right',
        description: 'A precision gauntlet tuned for long sessions.',
        stats: { luck: 4.20, rollSpeed: 0.42 },
        recipe: {
            'Exoflex Device': 1,
            'Hologrammer': 1,
            'Prism Drive': 1,
            'Virtual': 20,
            'Twilight': 20,
            'Forbidden': 6500,
            'Sidereum': 1300
        }
    },
    {
        id: 'stormsurge-engine',
        name: 'Stormsurge Engine',
        tier: 'T-7',
        slot: 'right',
        description: 'Amplifies luck in high-volatility weather cycles.',
        stats: { luck: 5.40, rollSpeed: 0.46, weatherBonus: { luck: 0.55, rollSpeed: 0.12, biomes: ['WINDY', 'RAINY', 'HELL'] } },
        recipe: {
            'Ragnaroker': 1,
            'Quantum Gauntlet': 1,
            'Windstorm Device': 1,
            'Poseidon': 2,
            'Zeus': 2,
            'Hades': 2,
            'Sidereum': 2200,
            'Diaboli': 6000
        }
    },
    {
        id: 'event-horizon-drive',
        name: 'Event Horizon Drive',
        tier: 'T-9',
        slot: 'right',
        description: 'Stable late-game drive with strong baseline pace.',
        stats: { luck: 9.20, rollSpeed: 0.82 },
        recipe: {
            'Neuralyzer': 1,
            'Stormsurge Engine': 1,
            'Starshaper': 1,
            'Hyper-Volt': 16,
            'Origin': 14,
            'Virtual': 60,
            'Aether': 160,
            'Powered': 5500
        }
    },
    {
        id: 'mercury-brace',
        name: 'Mercury Device',
        tier: 'T-4',
        slot: 'left',
        description: 'Light support brace with balanced tempo.',
        stats: { luck: 0.95, rollSpeed: 0.15 },
        recipe: {
            'Jackpot Gauntlet': 1,
            'Dark Matter Device': 1,
            'Magnetic': 120,
            'Precious': 95,
            'Aquatic': 20,
            'Gear Basing': 10
        }
    },
    {
        id: 'nebula-brace',
        name: 'Nebula Gauntlet',
        tier: 'T-5',
        slot: 'left',
        description: 'Astral support frame tuned for dense aura pools.',
        stats: { luck: 1.35, rollSpeed: 0.20 },
        recipe: {
            'Mercury Device': 1,
            'Flesh Device': 1,
            'Galaxy': 1,
            'COMET': 8,
            'STARLIGHT': 120,
            'Sidereum': 210,
            'Diaboli': 600
        }
    },
    {
        id: 'rift-bracer',
        name: 'Rift Gauntlet',
        tier: 'T-6',
        slot: 'left',
        description: 'Bends local space to improve sustained rolling.',
        stats: { luck: 1.80, rollSpeed: 0.25, biomeBonus: { luck: 0.35, biomes: ['STARFALL', 'HELL'] } },
        recipe: {
            'Nebulance': 1,
            'BOUNDED': 6,
            'Exotic': 30,
            'Twilight': 18,
            'Aether': 80,
            'Forbidden': 3200
        }
    },
    {
        id: 'phase-shackle',
        name: 'Phase Device',
        tier: 'T-7',
        slot: 'left',
        description: 'Phase-shifts between luck and speed efficiently.',
        stats: { luck: 2.30, rollSpeed: 0.30 },
        recipe: {
            'Rift Gauntlet': 1,
            'Exoflex Device': 1,
            'Origin': 6,
            'Virtual': 20,
            'Hyper-Volt': 8,
            'Sidereum': 1200,
            'Magnetic': 2600
        }
    },
    {
        id: 'void-lantern',
        name: 'Void Gauntlet',
        tier: 'T-11',
        slot: 'left',
        description: 'Endgame left-hand support for raw consistency.',
        stats: { luck: 7.20, rollSpeed: 0.75, luckMultiplier: 1.08 },
        recipe: {
            'Lightcaster': 1,
            'Pole Light Core Device': 1,
            'Darkshader': 1,
            'Genesis Drive': 1,
            'Matrix': 6,
            'Origin': 25,
            'Aether': 700,
            'Powered': 14000,
            'Forbidden': 180000
        }
    },
    {
        id: 'cataclysm-device',
        name: 'Cataclysm Device',
        tier: 'T-11',
        slot: 'right',
        description: 'Every 50 rolls enters CATACLYSM for 5 rolls (x3 Luck, +80% Roll Speed).',
        stats: { luck: 14.00, rollSpeed: 1.20, special: 'cataclysm-phase' },
        recipe: {
            'Genesis Drive': 1,
            'Event Horizon Drive': 1,
            'Omega Drive': 1,
            'Hyper-Volt': 20,
            'Matrix': 8,
            'Origin': 28,
            'Virtual': 90,
            'Aether': 900,
            'Powered': 18000
        }
    },
    {
        id: 'paradox-gauntlet',
        name: 'Paradox Gauntlet',
        tier: 'T-10',
        slot: 'left',
        description: 'Every 12th roll triggers PARADOX (x4 Luck on that roll).',
        stats: { luck: 3.20, rollSpeed: 0.20, special: 'paradox-pulse' },
        recipe: {
            'Phasespike': 1,
            'Pole Light Core Device': 1,
            'Gravitational Device': 1,
            'Hyper-Volt': 10,
            'Origin': 12,
            'Aether': 240,
            'Forbidden': 30000
        }
    },
    {
        id: 'chronowarden-gauntlet',
        name: 'Chronowarden Gauntlet',
        tier: 'T-12',
        slot: 'left',
        description: 'Removes Bonus Roll. Every 300th roll grants x30 Luck for 6 rolls.',
        stats: { removeBonusRoll: true, special: 'chronowarden-burst' },
        recipe: {
            'Void Gauntlet': 1,
            'Paradox Gauntlet': 1,
            'Unfathomable Ruins': 1,
            'Matrix': 12,
            'Origin': 40,
            'Aether': 1600,
            'Powered': 32000,
            'Forbidden': 220000
        }
    },
    {
        id: 'fatebreaker-device',
        name: 'Fatebreaker Device',
        tier: 'T-13',
        slot: 'right',
        description: 'Every 100 rolls, charges SINGULARITY. Next roll samples 3 outcomes and keeps the rarest.',
        stats: { luck: 22.00, rollSpeed: 1.80, special: 'fatebreaker-collapse' },
        recipe: {
            'Cataclysm Device': 1,
            'Omega Drive': 1,
            'CHROMATIC : GENESIS': 3,
            'Overture': 4,
            'Symphony': 4,
            'Abyssal Hunter': 2,
            'ã€Š Ruins ã€‹': 1,
            'Matrix': 20,
            'Origin': 40,
            'Aether': 2500,
            'Powered': 50000
        }
    },
    // PROGRESSION EXPANSION PACK (100)
    {
        id: 'ember-device-r',
        name: 'Emberwake',
        tier: 'T-1',
        slot: 'right',
        description: 'Progression right-hand device engineered around Rage.',
        stats: { luck: 0.32, rollSpeed: 0.04 },
        recipe: {
            'Gear Basing': 1,
            'Rage': 2,
            'Rare': 5,
            'Divinus': 2
        }
    },
    {
        id: 'frost-device-r',
        name: 'Frostbite',
        tier: 'T-1',
        slot: 'right',
        description: 'Progression right-hand device engineered around Permafrost.',
        stats: { luck: 0.4, rollSpeed: 0.05 },
        recipe: {
            'Gear Basing': 1,
            'Permafrost': 3,
            'Rare': 6,
            'Divinus': 2
        }
    },
    {
        id: 'gale-device-r',
        name: 'Galebinder',
        tier: 'T-1',
        slot: 'right',
        description: 'Progression right-hand device engineered around Wind.',
        stats: { luck: 0.48, rollSpeed: 0.06 },
        recipe: {
            'Gear Basing': 1,
            'Wind': 2,
            'Rare': 7,
            'Divinus': 2
        }
    },
    {
        id: 'quartz-device-r',
        name: 'Quartzlash',
        tier: 'T-1',
        slot: 'right',
        description: 'Progression right-hand device engineered around Quartz.',
        stats: { luck: 0.56, rollSpeed: 0.07 },
        recipe: {
            'Gear Basing': 1,
            'Quartz': 3,
            'Rare': 5,
            'Divinus': 2
        }
    },
    {
        id: 'aurora-device-r',
        name: 'Auroraforge',
        tier: 'T-2',
        slot: 'right',
        description: 'Progression right-hand device engineered around STARLIGHT.',
        stats: { luck: 0.56, rollSpeed: 0.07 },
        recipe: {
            'Emberwake': 1,
            'Gear Basing': 4,
            'STARLIGHT': 16,
            'Nautilus': 32
        }
    },
    {
        id: 'nimbus-device-r',
        name: 'Nimbuscore',
        tier: 'T-2',
        slot: 'right',
        description: 'Progression right-hand device engineered around Stormal.',
        stats: { luck: 0.64, rollSpeed: 0.08 },
        recipe: {
            'Frostbite': 1,
            'Gear Basing': 4,
            'Stormal': 19,
            'Wind': 37
        }
    },
    {
        id: 'pulse-device-r',
        name: 'Pulsebreaker',
        tier: 'T-2',
        slot: 'right',
        description: 'Progression right-hand device engineered around Powered.',
        stats: { luck: 0.72, rollSpeed: 0.09 },
        recipe: {
            'Galebinder': 1,
            'Gear Basing': 4,
            'Powered': 22,
            'Stormal': 42
        }
    },
    {
        id: 'vortex-device-r',
        name: 'Vortexion',
        tier: 'T-2',
        slot: 'right',
        description: 'Progression right-hand device engineered around Stormal.',
        stats: { luck: 0.8, rollSpeed: 0.1 },
        recipe: {
            'Quartzlash': 1,
            'Gear Basing': 4,
            'Stormal': 25,
            'Gilded': 47
        }
    },
    {
        id: 'ion-device-r',
        name: 'Ionflare',
        tier: 'T-3',
        slot: 'right',
        description: 'Progression right-hand device engineered around WATT.',
        stats: { luck: 0.8, rollSpeed: 0.1 },
        recipe: {
            'Auroraforge': 1,
            'Gear Basing': 5,
            'WATT': 24,
            'Precious': 48
        }
    },
    {
        id: 'nova-device-r',
        name: 'Novadrift',
        tier: 'T-3',
        slot: 'right',
        description: 'Progression right-hand device engineered around Solar.',
        stats: { luck: 0.88, rollSpeed: 0.11 },
        recipe: {
            'Nimbuscore': 1,
            'Gear Basing': 5,
            'Solar': 27,
            'Magnetic': 53
        }
    },
    {
        id: 'comet-device-r',
        name: 'Cometfall',
        tier: 'T-3',
        slot: 'right',
        description: 'Progression right-hand device engineered around COMET.',
        stats: { luck: 0.96, rollSpeed: 0.12 },
        recipe: {
            'Pulsebreaker': 1,
            'Gear Basing': 5,
            'COMET': 30,
            'Sidereum': 58
        }
    },
    {
        id: 'spectral-device-r',
        name: 'Spectralis',
        tier: 'T-3',
        slot: 'right',
        description: 'Progression right-hand device engineered around Spectre.',
        stats: { luck: 1.04, rollSpeed: 0.13 },
        recipe: {
            'Vortexion': 1,
            'Gear Basing': 5,
            'Spectre': 33,
            'Exotic': 63
        }
    },
    {
        id: 'blaze-device-r',
        name: 'Blazewright',
        tier: 'T-4',
        slot: 'right',
        description: 'Progression right-hand device engineered around Rage : Heated.',
        stats: { luck: 1.04, rollSpeed: 0.13 },
        recipe: {
            'Ionflare': 1,
            'Gear Basing': 6,
            'Rage : Heated': 32,
            'COMET': 64,
            'Sidereum': 120
        }
    },
    {
        id: 'torrent-device-r',
        name: 'Torrentide',
        tier: 'T-4',
        slot: 'right',
        description: 'Progression right-hand device engineered around Aquatic.',
        stats: { luck: 1.12, rollSpeed: 0.14 },
        recipe: {
            'Novadrift': 1,
            'Gear Basing': 6,
            'Aquatic': 35,
            'STARLIGHT': 69,
            'Sidereum': 130
        }
    },
    {
        id: 'aether-device-r',
        name: 'Aetherlock',
        tier: 'T-4',
        slot: 'right',
        description: 'Progression right-hand device engineered around Aether.',
        stats: { luck: 1.2, rollSpeed: 0.15 },
        recipe: {
            'Cometfall': 1,
            'Gear Basing': 6,
            'Aether': 38,
            'Virtual': 74,
            'Sidereum': 140
        }
    },
    {
        id: 'lattice-device-r',
        name: 'Latticeborn',
        tier: 'T-4',
        slot: 'right',
        description: 'Progression right-hand device engineered around Matrix.',
        stats: { luck: 1.28, rollSpeed: 0.16 },
        recipe: {
            'Spectralis': 1,
            'Gear Basing': 6,
            'Matrix': 41,
            'Twilight': 79,
            'Sidereum': 150
        }
    },
    {
        id: 'obsidian-device-r',
        name: 'Obsidian Veil',
        tier: 'T-5',
        slot: 'right',
        description: 'Progression right-hand device engineered around Ink.',
        stats: { luck: 1.28, rollSpeed: 0.16 },
        recipe: {
            'Blazewright': 1,
            'Gear Basing': 7,
            'Ink': 40,
            'Jade': 80,
            'Sidereum': 150
        }
    },
    {
        id: 'solaris-device-r',
        name: 'Solarflare',
        tier: 'T-5',
        slot: 'right',
        description: 'Progression right-hand device engineered around Solar.',
        stats: { luck: 1.36, rollSpeed: 0.17 },
        recipe: {
            'Torrentide': 1,
            'Gear Basing': 7,
            'Solar': 43,
            'Kyawthuite': 85,
            'Sidereum': 160
        }
    },
    {
        id: 'lunaris-device-r',
        name: 'Lunacrest',
        tier: 'T-5',
        slot: 'right',
        description: 'Progression right-hand device engineered around Lunar.',
        stats: { luck: 1.44, rollSpeed: 0.18 },
        recipe: {
            'Aetherlock': 1,
            'Gear Basing': 7,
            'Lunar': 46,
            'Aether': 90,
            'Sidereum': 170
        }
    },
    {
        id: 'tempest-device-r',
        name: 'Tempestark',
        tier: 'T-5',
        slot: 'right',
        description: 'Progression right-hand device engineered around Stormal.',
        stats: { luck: 1.52, rollSpeed: 0.19 },
        recipe: {
            'Latticeborn': 1,
            'Gear Basing': 7,
            'Stormal': 49,
            'Powered': 95,
            'Sidereum': 180
        }
    },
    {
        id: 'cipher-device-r',
        name: 'Cipherloom',
        tier: 'T-6',
        slot: 'right',
        description: 'Progression right-hand device engineered around Virtual.',
        stats: { luck: 1.52, rollSpeed: 0.19 },
        recipe: {
            'Obsidian Veil': 1,
            'Gear Basing': 8,
            'Virtual': 48,
            'Origin': 96,
            'Sidereum': 180
        }
    },
    {
        id: 'fractal-device-r',
        name: 'Fractalis',
        tier: 'T-6',
        slot: 'right',
        description: 'Progression right-hand device engineered around Matrix.',
        stats: { luck: 1.6, rollSpeed: 0.2 },
        recipe: {
            'Solarflare': 1,
            'Gear Basing': 8,
            'Matrix': 101,
            'Sidereum': 190
        }
    },
    {
        id: 'mythic-device-r',
        name: 'Mythrender',
        tier: 'T-6',
        slot: 'right',
        description: 'Progression right-hand device engineered around Exotic.',
        stats: { luck: 1.68, rollSpeed: 0.21 },
        recipe: {
            'Lunacrest': 1,
            'Gear Basing': 8,
            'Exotic': 54,
            'Hyper-Volt': 106,
            'Sidereum': 200
        }
    },
    {
        id: 'zenith-device-r',
        name: 'Zenithra',
        tier: 'T-6',
        slot: 'right',
        description: 'Progression right-hand device engineered around Celestial.',
        stats: { luck: 1.76, rollSpeed: 0.22 },
        recipe: {
            'Tempestark': 1,
            'Gear Basing': 8,
            'Celestial': 57,
            'Forbidden': 111,
            'Sidereum': 210
        }
    },
    {
        id: 'arc-device-r',
        name: 'Arclight',
        tier: 'T-7',
        slot: 'right',
        description: 'Progression right-hand device engineered around Arcane.',
        stats: { luck: 1.76, rollSpeed: 0.22 },
        recipe: {
            'Cipherloom': 1,
            'Gear Basing': 9,
            'Arcane': 56,
            'Rare': 112,
            'Sidereum': 210,
            'Forbidden': 1260
        }
    },
    {
        id: 'phase-device-r',
        name: 'Phasespike',
        tier: 'T-7',
        slot: 'right',
        description: 'Progression right-hand device engineered around BOUNDED.',
        stats: { luck: 1.84, rollSpeed: 0.23 },
        recipe: {
            'Fractalis': 1,
            'Gear Basing': 9,
            'BOUNDED': 59,
            'Divinus': 117,
            'Sidereum': 220,
            'Forbidden': 1310
        }
    },
    {
        id: 'vertex-device-r',
        name: 'Vertex Prime',
        tier: 'T-7',
        slot: 'right',
        description: 'Progression right-hand device engineered around Origin.',
        stats: { luck: 1.92, rollSpeed: 0.24 },
        recipe: {
            'Mythrender': 1,
            'Gear Basing': 9,
            'Origin': 62,
            'Crystallized': 122,
            'Sidereum': 230,
            'Forbidden': 1360
        }
    },
    {
        id: 'abyss-device-r',
        name: 'Abyssborn',
        tier: 'T-7',
        slot: 'right',
        description: 'Progression right-hand device engineered around Abyssal Hunter.',
        stats: { luck: 2, rollSpeed: 0.25 },
        recipe: {
            'Zenithra': 1,
            'Gear Basing': 9,
            'Abyssal Hunter': 65,
            'Rage': 127,
            'Sidereum': 240,
            'Forbidden': 1410
        }
    },
    {
        id: 'radiant-device-r',
        name: 'Radiant Edge',
        tier: 'T-8',
        slot: 'right',
        description: 'Progression right-hand device engineered around Divinus : Angel.',
        stats: { luck: 2, rollSpeed: 0.25 },
        recipe: {
            'Arclight': 1,
            'Gear Basing': 10,
            'Divinus : Angel': 64,
            'Ruby': 128,
            'Sidereum': 240,
            'Forbidden': 1440
        }
    },
    {
        id: 'onyx-device-r',
        name: 'Onyx Reaver',
        tier: 'T-8',
        slot: 'right',
        description: 'Progression right-hand device engineered around Ink.',
        stats: { luck: 2.08, rollSpeed: 0.26 },
        recipe: {
            'Phasespike': 1,
            'Gear Basing': 10,
            'Ink': 67,
            'Diaboli': 133,
            'Sidereum': 250,
            'Forbidden': 1490
        }
    },
    {
        id: 'pyro-device-r',
        name: 'Pyroclast',
        tier: 'T-8',
        slot: 'right',
        description: 'Progression right-hand device engineered around Rage : Heated.',
        stats: { luck: 2.16, rollSpeed: 0.27 },
        recipe: {
            'Vertex Prime': 1,
            'Gear Basing': 10,
            'Rage : Heated': 70,
            'Bleeding': 138,
            'Sidereum': 260,
            'Forbidden': 1540
        }
    },
    {
        id: 'cryo-device-r',
        name: 'Cryoshard',
        tier: 'T-8',
        slot: 'right',
        description: 'Progression right-hand device engineered around Permafrost.',
        stats: { luck: 2.24, rollSpeed: 0.28 },
        recipe: {
            'Abyssborn': 1,
            'Gear Basing': 10,
            'Permafrost': 73,
            'Solar': 143,
            'Sidereum': 270,
            'Forbidden': 1590
        }
    },
    {
        id: 'volt-device-r',
        name: 'Voltwarden',
        tier: 'T-9',
        slot: 'right',
        description: 'Progression right-hand device engineered around Hyper-Volt.',
        stats: { luck: 2.24, rollSpeed: 0.28 },
        recipe: {
            'Radiant Edge': 1,
            'Gear Basing': 11,
            'Hyper-Volt': 72,
            'Lunar': 144,
            'Sidereum': 270,
            'Forbidden': 1620
        }
    },
    {
        id: 'echo-device-r',
        name: 'Echo Rift',
        tier: 'T-9',
        slot: 'right',
        description: 'Progression right-hand device engineered around Virtual.',
        stats: { luck: 2.32, rollSpeed: 0.29 },
        recipe: {
            'Onyx Reaver': 1,
            'Gear Basing': 11,
            'Virtual': 75,
            'Aquamarine': 149,
            'Sidereum': 280,
            'Forbidden': 1670
        }
    },
    {
        id: 'vector-device-r',
        name: 'Vectora',
        tier: 'T-9',
        slot: 'right',
        description: 'Progression right-hand device engineered around Matrix.',
        stats: { luck: 2.4, rollSpeed: 0.3 },
        recipe: {
            'Pyroclast': 1,
            'Gear Basing': 11,
            'Matrix': 78,
            'Aquatic': 154,
            'Sidereum': 290,
            'Forbidden': 1720
        }
    },
    {
        id: 'prismal-device-r',
        name: 'Prismveil',
        tier: 'T-9',
        slot: 'right',
        description: 'Progression right-hand device engineered around Sapphire.',
        stats: { luck: 2.48, rollSpeed: 0.31 },
        recipe: {
            'Cryoshard': 1,
            'Gear Basing': 11,
            'Sapphire': 81,
            'Nautilus': 159,
            'Sidereum': 300,
            'Forbidden': 1770
        }
    },
    {
        id: 'helix-device-r',
        name: 'Helix Drive',
        tier: 'T-10',
        slot: 'right',
        description: 'Progression right-hand device engineered around Atomic.',
        stats: { luck: 2.48, rollSpeed: 0.31 },
        recipe: {
            'Voltwarden': 1,
            'Gear Basing': 12,
            'Atomic': 80,
            'Wind': 160,
            'Sidereum': 300,
            'Forbidden': 1800,
            'Origin': 50,
            'Matrix': 20,
            'Aether': 1500,
            'Powered': 5000
        }
    },
    {
        id: 'flux-device-r',
        name: 'Fluxweaver',
        tier: 'T-10',
        slot: 'right',
        description: 'Progression right-hand device engineered around WATT.',
        stats: { luck: 2.56, rollSpeed: 0.32 },
        recipe: {
            'Echo Rift': 1,
            'Gear Basing': 12,
            'WATT': 83,
            'Stormal': 165,
            'Sidereum': 310,
            'Forbidden': 1850,
            'Origin': 51,
            'Matrix': 21,
            'Aether': 1512,
            'Powered': 5100
        }
    },
    {
        id: 'rift-device-r',
        name: 'Riftlash',
        tier: 'T-10',
        slot: 'right',
        description: 'Progression right-hand device engineered around Runic.',
        stats: { luck: 2.64, rollSpeed: 0.33 },
        recipe: {
            'Vectora': 1,
            'Gear Basing': 12,
            'Runic': 86,
            'Gilded': 170,
            'Sidereum': 320,
            'Forbidden': 1900,
            'Origin': 52,
            'Matrix': 22,
            'Aether': 1524,
            'Powered': 5200
        }
    },
    {
        id: 'chrono-device-r',
        name: 'Chronocut',
        tier: 'T-10',
        slot: 'right',
        description: 'Progression right-hand device engineered around Overture.',
        stats: { luck: 2.72, rollSpeed: 0.34 },
        recipe: {
            'Prismveil': 1,
            'Gear Basing': 12,
            'Overture': 89,
            'Precious': 175,
            'Sidereum': 330,
            'Forbidden': 1950,
            'Origin': 53,
            'Matrix': 20,
            'Aether': 1536,
            'Powered': 5300
        }
    },
    {
        id: 'parallax-device-r',
        name: 'Parallaxer',
        tier: 'T-11',
        slot: 'right',
        description: 'Progression right-hand device engineered around Symphony.',
        stats: { luck: 2.72, rollSpeed: 0.34 },
        recipe: {
            'Helix Drive': 1,
            'Gear Basing': 13,
            'Symphony': 88,
            'Magnetic': 176,
            'Sidereum': 330,
            'Forbidden': 1980,
            'Origin': 55,
            'Matrix': 23,
            'Aether': 1650,
            'Powered': 5500
        }
    },
    {
        id: 'gravity-device-r',
        name: 'Graviton',
        tier: 'T-11',
        slot: 'right',
        description: 'Progression right-hand device engineered around Gravitational.',
        stats: { luck: 2.8, rollSpeed: 0.35 },
        recipe: {
            'Fluxweaver': 1,
            'Gear Basing': 13,
            'Gravitational': 91,
            'Sidereum': 340,
            'Forbidden': 2030,
            'Origin': 56,
            'Matrix': 24,
            'Aether': 1662,
            'Powered': 5600
        }
    },
    {
        id: 'quantum-device-r',
        name: 'Quantum Thorn',
        tier: 'T-11',
        slot: 'right',
        description: 'Progression right-hand device engineered around Matrix.',
        stats: { luck: 2.88, rollSpeed: 0.36 },
        recipe: {
            'Riftlash': 1,
            'Gear Basing': 13,
            'Matrix': 22,
            'Exotic': 186,
            'Sidereum': 350,
            'Forbidden': 2080,
            'Origin': 57,
            'Aether': 1674,
            'Powered': 5700
        }
    },
    {
        id: 'neutron-device-r',
        name: 'Neutronis',
        tier: 'T-11',
        slot: 'right',
        description: 'Progression right-hand device engineered around Aether.',
        stats: { luck: 2.96, rollSpeed: 0.37 },
        recipe: {
            'Chronocut': 1,
            'Gear Basing': 13,
            'Aether': 1686,
            'COMET': 191,
            'Sidereum': 360,
            'Forbidden': 2130,
            'Origin': 58,
            'Matrix': 23,
            'Powered': 5800
        }
    },
    {
        id: 'celestial-device-r',
        name: 'Celestia',
        tier: 'T-12',
        slot: 'right',
        description: 'Progression right-hand device engineered around Celestial.',
        stats: { luck: 2.96, rollSpeed: 0.37 },
        recipe: {
            'Parallaxer': 1,
            'Gear Basing': 14,
            'Celestial': 96,
            'STARLIGHT': 192,
            'Sidereum': 360,
            'Forbidden': 2160,
            'Origin': 60,
            'Matrix': 26,
            'Aether': 1800,
            'Powered': 6000
        }
    },
    {
        id: 'eclipse-device-r',
        name: 'Eclipsion',
        tier: 'T-12',
        slot: 'right',
        description: 'Progression right-hand device engineered around Eclipse.',
        stats: { luck: 3.04, rollSpeed: 0.38 },
        recipe: {
            'Graviton': 1,
            'Gear Basing': 14,
            'Eclipse': 99,
            'Virtual': 197,
            'Sidereum': 370,
            'Forbidden': 2210,
            'Origin': 61,
            'Matrix': 24,
            'Aether': 1812,
            'Powered': 6100
        }
    },
    {
        id: 'omega-device-r',
        name: 'Omega Shard',
        tier: 'T-12',
        slot: 'right',
        description: 'Progression right-hand device engineered around Omega Drive.',
        stats: { luck: 3.12, rollSpeed: 0.39 },
        recipe: {
            'Quantum Thorn': 1,
            'Gear Basing': 14,
            'Omega Drive': 102,
            'Twilight': 202,
            'Sidereum': 380,
            'Forbidden': 2260,
            'Origin': 62,
            'Matrix': 25,
            'Aether': 1824,
            'Powered': 6200
        }
    },
    {
        id: 'apex-device-r',
        name: 'Apex Bloom',
        tier: 'T-12',
        slot: 'right',
        description: 'Progression right-hand device engineered around Origin.',
        stats: { luck: 3.2, rollSpeed: 0.4 },
        recipe: {
            'Neutronis': 1,
            'Gear Basing': 14,
            'Origin': 63,
            'Jade': 207,
            'Sidereum': 390,
            'Forbidden': 2310,
            'Matrix': 26,
            'Aether': 1836,
            'Powered': 6300
        }
    },
    {
        id: 'void-device-r',
        name: 'Voidbreaker',
        tier: 'T-13',
        slot: 'right',
        description: 'Progression right-hand device engineered around Diaboli.',
        stats: { luck: 16, rollSpeed: 1.35 },
        recipe: {
            'Celestia': 1,
            'Gear Basing': 15,
            'Diaboli': 104,
            'Kyawthuite': 208,
            'Sidereum': 390,
            'Forbidden': 2340,
            'Origin': 65,
            'Matrix': 26,
            'Aether': 1950,
            'Powered': 6500
        }
    },
    {
        id: 'singularity-device-r',
        name: 'Singularis',
        tier: 'T-13',
        slot: 'right',
        description: 'Progression right-hand device engineered around CHROMATIC : GENESIS.',
        stats: { luck: 17.5, rollSpeed: 1.55 },
        recipe: {
            'Eclipsion': 1,
            'Gear Basing': 15,
            'CHROMATIC : GENESIS': 107,
            'Aether': 1962,
            'Sidereum': 400,
            'Forbidden': 2390,
            'Origin': 66,
            'Matrix': 27,
            'Powered': 6600
        }
    },
    {
        id: 'cinder-gauntlet-l',
        name: 'Cindershade',
        tier: 'T-1',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Rage.',
        stats: { luck: 0.23, rollSpeed: 0.03 },
        recipe: {
            'Gear Basing': 1,
            'Rage': 2,
            'Ruby': 1,
            'Sapphire': 1
        }
    },
    {
        id: 'glacier-gauntlet-l',
        name: 'Glacier Fang',
        tier: 'T-1',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Glacier.',
        stats: { luck: 0.29, rollSpeed: 0.04 },
        recipe: {
            'Gear Basing': 1,
            'Glacier': 3,
            'Ruby': 1,
            'Sapphire': 1
        }
    },
    {
        id: 'breeze-gauntlet-l',
        name: 'Breezeward',
        tier: 'T-1',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Wind.',
        stats: { luck: 0.35, rollSpeed: 0.04 },
        recipe: {
            'Gear Basing': 1,
            'Wind': 2,
            'Ruby': 1,
            'Sapphire': 1
        }
    },
    {
        id: 'topaz-gauntlet-l',
        name: 'Topaz Crown',
        tier: 'T-1',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Topaz.',
        stats: { luck: 0.41, rollSpeed: 0.05 },
        recipe: {
            'Gear Basing': 1,
            'Topaz': 3,
            'Ruby': 1,
            'Sapphire': 1
        }
    },
    {
        id: 'bloom-gauntlet-l',
        name: 'Bloomveil',
        tier: 'T-2',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Flora.',
        stats: { luck: 0.4, rollSpeed: 0.05 },
        recipe: {
            'Cindershade': 1,
            'Gear Basing': 4,
            'Flora': 14,
            'Precious': 28
        }
    },
    {
        id: 'storm-gauntlet-l',
        name: 'Stormthread',
        tier: 'T-2',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Stormal.',
        stats: { luck: 0.46, rollSpeed: 0.06 },
        recipe: {
            'Glacier Fang': 1,
            'Gear Basing': 4,
            'Stormal': 17,
            'Magnetic': 32
        }
    },
    {
        id: 'tidal-gauntlet-l',
        name: 'Tidegrasp',
        tier: 'T-2',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Nautilus.',
        stats: { luck: 0.52, rollSpeed: 0.06 },
        recipe: {
            'Breezeward': 1,
            'Gear Basing': 4,
            'Nautilus': 20,
            'Sidereum': 36
        }
    },
    {
        id: 'shimmer-gauntlet-l',
        name: 'Shimmerlock',
        tier: 'T-2',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around STARLIGHT.',
        stats: { luck: 0.58, rollSpeed: 0.07 },
        recipe: {
            'Topaz Crown': 1,
            'Gear Basing': 4,
            'STARLIGHT': 23,
            'Exotic': 40
        }
    },
    {
        id: 'rune-gauntlet-l',
        name: 'Runescar',
        tier: 'T-3',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Runic.',
        stats: { luck: 0.57, rollSpeed: 0.07 },
        recipe: {
            'Bloomveil': 1,
            'Gear Basing': 5,
            'Runic': 21,
            'COMET': 42
        }
    },
    {
        id: 'solar-gauntlet-l',
        name: 'Solar Oath',
        tier: 'T-3',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Solar.',
        stats: { luck: 0.63, rollSpeed: 0.08 },
        recipe: {
            'Stormthread': 1,
            'Gear Basing': 5,
            'Solar': 24,
            'STARLIGHT': 46
        }
    },
    {
        id: 'lunar-gauntlet-l',
        name: 'Lunar Oath',
        tier: 'T-3',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Lunar.',
        stats: { luck: 0.69, rollSpeed: 0.08 },
        recipe: {
            'Tidegrasp': 1,
            'Gear Basing': 5,
            'Lunar': 27,
            'Virtual': 50
        }
    },
    {
        id: 'dusk-gauntlet-l',
        name: 'Duskwrap',
        tier: 'T-3',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Twilight.',
        stats: { luck: 0.75, rollSpeed: 0.09 },
        recipe: {
            'Shimmerlock': 1,
            'Gear Basing': 5,
            'Twilight': 54
        }
    },
    {
        id: 'inferno-gauntlet-l',
        name: 'Infernal Grip',
        tier: 'T-4',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Rage : Heated.',
        stats: { luck: 0.74, rollSpeed: 0.09 },
        recipe: {
            'Runescar': 1,
            'Gear Basing': 6,
            'Rage : Heated': 28,
            'Jade': 56,
            'Sidereum': 104
        }
    },
    {
        id: 'cascade-gauntlet-l',
        name: 'Cascade Hand',
        tier: 'T-4',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Aquatic.',
        stats: { luck: 0.8, rollSpeed: 0.1 },
        recipe: {
            'Solar Oath': 1,
            'Gear Basing': 6,
            'Aquatic': 31,
            'Kyawthuite': 60,
            'Sidereum': 113
        }
    },
    {
        id: 'aero-gauntlet-l',
        name: 'Aeroguard',
        tier: 'T-4',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Wind.',
        stats: { luck: 0.86, rollSpeed: 0.1 },
        recipe: {
            'Lunar Oath': 1,
            'Gear Basing': 6,
            'Wind': 34,
            'Aether': 64,
            'Sidereum': 122
        }
    },
    {
        id: 'terra-gauntlet-l',
        name: 'Terrashift',
        tier: 'T-4',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Jade.',
        stats: { luck: 0.92, rollSpeed: 0.11 },
        recipe: {
            'Duskwrap': 1,
            'Gear Basing': 6,
            'Jade': 37,
            'Powered': 68,
            'Sidereum': 131
        }
    },
    {
        id: 'nebula-gauntlet-l',
        name: 'Nebulance',
        tier: 'T-5',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Galaxy.',
        stats: { luck: 0.91, rollSpeed: 0.11 },
        recipe: {
            'Infernal Grip': 1,
            'Gear Basing': 7,
            'Galaxy': 35,
            'Origin': 70,
            'Sidereum': 130
        }
    },
    {
        id: 'astral-gauntlet-l',
        name: 'Astral Coil',
        tier: 'T-5',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Astral.',
        stats: { luck: 0.97, rollSpeed: 0.12 },
        recipe: {
            'Cascade Hand': 1,
            'Gear Basing': 7,
            'Astral': 38,
            'Matrix': 74,
            'Sidereum': 139
        }
    },
    {
        id: 'phantom-gauntlet-l',
        name: 'Phantom Grasp',
        tier: 'T-5',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Ethereal.',
        stats: { luck: 1.03, rollSpeed: 0.12 },
        recipe: {
            'Aeroguard': 1,
            'Gear Basing': 7,
            'Ethereal': 41,
            'Hyper-Volt': 78,
            'Sidereum': 148
        }
    },
    {
        id: 'warden-gauntlet-l',
        name: 'Warden Sigil',
        tier: 'T-5',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Guardian.',
        stats: { luck: 1.09, rollSpeed: 0.13 },
        recipe: {
            'Terrashift': 1,
            'Gear Basing': 7,
            'Guardian': 44,
            'Forbidden': 82,
            'Sidereum': 157
        }
    },
    {
        id: 'veil-gauntlet-l',
        name: 'Veilwalker',
        tier: 'T-6',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around UNDEFINED.',
        stats: { luck: 1.08, rollSpeed: 0.13 },
        recipe: {
            'Nebulance': 1,
            'Gear Basing': 8,
            'UNDEFINED': 42,
            'Rare': 84,
            'Sidereum': 156
        }
    },
    {
        id: 'mirage-gauntlet-l',
        name: 'Mirage Palm',
        tier: 'T-6',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Virtual.',
        stats: { luck: 1.14, rollSpeed: 0.14 },
        recipe: {
            'Astral Coil': 1,
            'Gear Basing': 8,
            'Virtual': 45,
            'Divinus': 88,
            'Sidereum': 165
        }
    },
    {
        id: 'ciphered-gauntlet-l',
        name: 'Cipher Mark',
        tier: 'T-6',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around CHROMATIC.',
        stats: { luck: 1.2, rollSpeed: 0.14 },
        recipe: {
            'Phantom Grasp': 1,
            'Gear Basing': 8,
            'CHROMATIC': 48,
            'Crystallized': 92,
            'Sidereum': 174
        }
    },
    {
        id: 'halo-gauntlet-l',
        name: 'Halo Crest',
        tier: 'T-6',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Divinus : Angel.',
        stats: { luck: 1.26, rollSpeed: 0.15 },
        recipe: {
            'Warden Sigil': 1,
            'Gear Basing': 8,
            'Divinus : Angel': 51,
            'Rage': 96,
            'Sidereum': 183
        }
    },
    {
        id: 'warp-gauntlet-l',
        name: 'Warpseal',
        tier: 'T-7',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around BOUNDED.',
        stats: { luck: 1.25, rollSpeed: 0.15 },
        recipe: {
            'Veilwalker': 1,
            'Gear Basing': 9,
            'BOUNDED': 49,
            'Ruby': 98,
            'Sidereum': 182,
            'Forbidden': 1050
        }
    },
    {
        id: 'orbit-gauntlet-l',
        name: 'Orbit Hand',
        tier: 'T-7',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around COMET.',
        stats: { luck: 1.31, rollSpeed: 0.16 },
        recipe: {
            'Mirage Palm': 1,
            'Gear Basing': 9,
            'COMET': 52,
            'Diaboli': 102,
            'Sidereum': 191,
            'Forbidden': 1095
        }
    },
    {
        id: 'anchor-gauntlet-l',
        name: 'Anchorbrand',
        tier: 'T-7',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Gravitational.',
        stats: { luck: 1.37, rollSpeed: 0.16 },
        recipe: {
            'Cipher Mark': 1,
            'Gear Basing': 9,
            'Gravitational': 55,
            'Bleeding': 106,
            'Sidereum': 200,
            'Forbidden': 1140
        }
    },
    {
        id: 'gloom-gauntlet-l',
        name: 'Gloomtouch',
        tier: 'T-7',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Ink.',
        stats: { luck: 1.43, rollSpeed: 0.17 },
        recipe: {
            'Halo Crest': 1,
            'Gear Basing': 9,
            'Ink': 58,
            'Solar': 110,
            'Sidereum': 209,
            'Forbidden': 1185
        }
    },
    {
        id: 'beacon-gauntlet-l',
        name: 'Beacon Hand',
        tier: 'T-8',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Celestial.',
        stats: { luck: 1.42, rollSpeed: 0.17 },
        recipe: {
            'Warpseal': 1,
            'Gear Basing': 10,
            'Celestial': 56,
            'Lunar': 112,
            'Sidereum': 208,
            'Forbidden': 1200
        }
    },
    {
        id: 'iron-gauntlet-l',
        name: 'Iron Mantle',
        tier: 'T-8',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Magnetic.',
        stats: { luck: 1.48, rollSpeed: 0.18 },
        recipe: {
            'Orbit Hand': 1,
            'Gear Basing': 10,
            'Magnetic': 59,
            'Aquamarine': 116,
            'Sidereum': 217,
            'Forbidden': 1245
        }
    },
    {
        id: 'magma-gauntlet-l',
        name: 'Magma Hold',
        tier: 'T-8',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Hades.',
        stats: { luck: 1.54, rollSpeed: 0.18 },
        recipe: {
            'Anchorbrand': 1,
            'Gear Basing': 10,
            'Hades': 62,
            'Aquatic': 120,
            'Sidereum': 226,
            'Forbidden': 1290
        }
    },
    {
        id: 'polar-gauntlet-l',
        name: 'Polarshroud',
        tier: 'T-8',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Permafrost.',
        stats: { luck: 1.6, rollSpeed: 0.19 },
        recipe: {
            'Gloomtouch': 1,
            'Gear Basing': 10,
            'Permafrost': 65,
            'Nautilus': 124,
            'Sidereum': 235,
            'Forbidden': 1335
        }
    },
    {
        id: 'current-gauntlet-l',
        name: 'Currentbind',
        tier: 'T-9',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around WATT.',
        stats: { luck: 1.59, rollSpeed: 0.19 },
        recipe: {
            'Beacon Hand': 1,
            'Gear Basing': 11,
            'WATT': 63,
            'Wind': 126,
            'Sidereum': 234,
            'Forbidden': 1350
        }
    },
    {
        id: 'reverb-gauntlet-l',
        name: 'Reverb Palm',
        tier: 'T-9',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Symphony.',
        stats: { luck: 1.65, rollSpeed: 0.2 },
        recipe: {
            'Iron Mantle': 1,
            'Gear Basing': 11,
            'Symphony': 66,
            'Stormal': 130,
            'Sidereum': 243,
            'Forbidden': 1395
        }
    },
    {
        id: 'axis-gauntlet-l',
        name: 'Axis Halo',
        tier: 'T-9',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Matrix.',
        stats: { luck: 1.71, rollSpeed: 0.2 },
        recipe: {
            'Magma Hold': 1,
            'Gear Basing': 11,
            'Matrix': 69,
            'Gilded': 134,
            'Sidereum': 252,
            'Forbidden': 1440
        }
    },
    {
        id: 'spiral-gauntlet-l',
        name: 'Spiral Seal',
        tier: 'T-9',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Origin.',
        stats: { luck: 1.77, rollSpeed: 0.21 },
        recipe: {
            'Polarshroud': 1,
            'Gear Basing': 11,
            'Origin': 72,
            'Precious': 138,
            'Sidereum': 261,
            'Forbidden': 1485
        }
    },
    {
        id: 'pulsefire-gauntlet-l',
        name: 'Pulsefire Palm',
        tier: 'T-10',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Powered.',
        stats: { luck: 1.76, rollSpeed: 0.21 },
        recipe: {
            'Currentbind': 1,
            'Gear Basing': 12,
            'Powered': 4200,
            'Magnetic': 140,
            'Sidereum': 260,
            'Forbidden': 1500,
            'Origin': 50,
            'Matrix': 20,
            'Aether': 1300
        }
    },
    {
        id: 'stellar-gauntlet-l',
        name: 'Stellar Palm',
        tier: 'T-10',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Star Rider.',
        stats: { luck: 1.82, rollSpeed: 0.22 },
        recipe: {
            'Reverb Palm': 1,
            'Gear Basing': 12,
            'Star Rider': 73,
            'Sidereum': 269,
            'Forbidden': 1545,
            'Origin': 51,
            'Matrix': 21,
            'Aether': 1312,
            'Powered': 4290
        }
    },
    {
        id: 'null-gauntlet-l',
        name: 'Nullbrand',
        tier: 'T-10',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Undefined.',
        stats: { luck: 1.88, rollSpeed: 0.22 },
        recipe: {
            'Axis Halo': 1,
            'Gear Basing': 12,
            'Undefined': 76,
            'Exotic': 148,
            'Sidereum': 278,
            'Forbidden': 1590,
            'Origin': 52,
            'Matrix': 22,
            'Aether': 1324,
            'Powered': 4380
        }
    },
    {
        id: 'epoch-gauntlet-l',
        name: 'Epoch Weave',
        tier: 'T-10',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Overture.',
        stats: { luck: 1.94, rollSpeed: 0.23 },
        recipe: {
            'Spiral Seal': 1,
            'Gear Basing': 12,
            'Overture': 79,
            'COMET': 152,
            'Sidereum': 287,
            'Forbidden': 1635,
            'Origin': 53,
            'Matrix': 20,
            'Aether': 1336,
            'Powered': 4470
        }
    },
    {
        id: 'conduit-gauntlet-l',
        name: 'Conduit Grip',
        tier: 'T-11',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Aether.',
        stats: { luck: 1.93, rollSpeed: 0.23 },
        recipe: {
            'Pulsefire Palm': 1,
            'Gear Basing': 13,
            'Aether': 1430,
            'STARLIGHT': 154,
            'Sidereum': 286,
            'Forbidden': 1650,
            'Origin': 55,
            'Matrix': 23,
            'Powered': 4620
        }
    },
    {
        id: 'gravitywell-gauntlet-l',
        name: 'Gravitywell Palm',
        tier: 'T-11',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Gravitational.',
        stats: { luck: 1.99, rollSpeed: 0.24 },
        recipe: {
            'Stellar Palm': 1,
            'Gear Basing': 13,
            'Gravitational': 80,
            'Virtual': 158,
            'Sidereum': 295,
            'Forbidden': 1695,
            'Origin': 56,
            'Matrix': 24,
            'Aether': 1442,
            'Powered': 4710
        }
    },
    {
        id: 'specter-gauntlet-l',
        name: 'Specter Seal',
        tier: 'T-11',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Spectre.',
        stats: { luck: 2.05, rollSpeed: 0.24 },
        recipe: {
            'Nullbrand': 1,
            'Gear Basing': 13,
            'Spectre': 83,
            'Twilight': 162,
            'Sidereum': 304,
            'Forbidden': 1740,
            'Origin': 57,
            'Matrix': 22,
            'Aether': 1454,
            'Powered': 4800
        }
    },
    {
        id: 'nexus-gauntlet-l',
        name: 'Nexus Mark',
        tier: 'T-11',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Origin.',
        stats: { luck: 2.11, rollSpeed: 0.25 },
        recipe: {
            'Epoch Weave': 1,
            'Gear Basing': 13,
            'Origin': 58,
            'Jade': 166,
            'Sidereum': 313,
            'Forbidden': 1785,
            'Matrix': 23,
            'Aether': 1466,
            'Powered': 4890
        }
    },
    {
        id: 'dawn-gauntlet-l',
        name: 'Dawnward',
        tier: 'T-12',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Solar.',
        stats: { luck: 2.1, rollSpeed: 0.25 },
        recipe: {
            'Conduit Grip': 1,
            'Gear Basing': 14,
            'Solar': 84,
            'Kyawthuite': 168,
            'Sidereum': 312,
            'Forbidden': 1800,
            'Origin': 60,
            'Matrix': 26,
            'Aether': 1560,
            'Powered': 5040
        }
    },
    {
        id: 'dread-gauntlet-l',
        name: 'Dreadward',
        tier: 'T-12',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Diaboli.',
        stats: { luck: 2.16, rollSpeed: 0.26 },
        recipe: {
            'Gravitywell Palm': 1,
            'Gear Basing': 14,
            'Diaboli': 87,
            'Aether': 1572,
            'Sidereum': 321,
            'Forbidden': 1845,
            'Origin': 61,
            'Matrix': 24,
            'Powered': 5130
        }
    },
    {
        id: 'oracle-gauntlet-l',
        name: 'Oracle Palm',
        tier: 'T-12',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Prophecy.',
        stats: { luck: 2.22, rollSpeed: 0.26 },
        recipe: {
            'Specter Seal': 1,
            'Gear Basing': 14,
            'Prophecy': 90,
            'Powered': 5220,
            'Sidereum': 330,
            'Forbidden': 1890,
            'Origin': 62,
            'Matrix': 25,
            'Aether': 1584
        }
    },
    {
        id: 'crown-gauntlet-l',
        name: 'Crownbound',
        tier: 'T-12',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Archangel.',
        stats: { luck: 2.28, rollSpeed: 0.27 },
        recipe: {
            'Nexus Mark': 1,
            'Gear Basing': 14,
            'Archangel': 93,
            'Origin': 63,
            'Sidereum': 339,
            'Forbidden': 1935,
            'Matrix': 26,
            'Aether': 1596,
            'Powered': 5310
        }
    },
    {
        id: 'prime-gauntlet-l',
        name: 'Prime Mantle',
        tier: 'T-13',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around CHROMATIC : GENESIS.',
        stats: { luck: 11, rollSpeed: 0.85 },
        recipe: {
            'Dawnward': 1,
            'Gear Basing': 15,
            'CHROMATIC : GENESIS': 91,
            'Matrix': 26,
            'Sidereum': 338,
            'Forbidden': 1950,
            'Origin': 65,
            'Aether': 1690,
            'Powered': 5460
        }
    },
    {
        id: 'paragon-gauntlet-l',
        name: 'Paragon Hand',
        tier: 'T-13',
        slot: 'left',
        description: 'Progression left-hand gauntlet engineered around Abyssal Hunter.',
        stats: { luck: 12.2, rollSpeed: 1 },
        recipe: {
            'Dreadward': 1,
            'Gear Basing': 15,
            'Abyssal Hunter': 94,
            'Hyper-Volt': 186,
            'Sidereum': 347,
            'Forbidden': 1995,
            'Origin': 66,
            'Matrix': 27,
            'Aether': 1702,
            'Powered': 5550
        }
    },
    // END PROGRESSION EXPANSION PACK (100)


    // LIMITED/EVENT GEARS
    {
        id: 'tide-gauntlet',
        name: 'Tide Gauntlet',
        tier: 'Event',
        slot: 'left',
        event: 'Summer 2024',
        description: 'Bonus Roll allows rolling RAINY auras with native rarity regardless of biome.',
        stats: { luck: 0.50, special: 'tide-bonus' },
        recipe: {
            'Solar': 3,
            'Rage : Heated': 1
        }
    },
    {
        id: 'blessed-tide-gauntlet',
        name: 'Blessed Tide Gauntlet',
        tier: 'Event',
        slot: 'left',
        event: 'Summer 2024',
        description: 'Bonus Roll Countdown: 10 â†’ 6, Bonus Roll Multiply: 2 â†’ 3, Bonus Roll allows rolling RAINY auras.',
        stats: { special: 'blessed-tide' },
        recipe: {
            'Poseidon': 1,
            'Rolls': 300000
        },
        requires: { equipped: 'tide-gauntlet' }
    },
    {
        id: 'pump-punch',
        name: 'Pump Punch',
        tier: 'Event',
        slot: 'right',
        event: 'Halloween 2024',
        description: 'Spooky power.',
        stats: { luck: 8.00, rollSpeed: -0.50 },
        recipe: {
            'Pump King\'s Soul': 1,
            'Pump King\'s Head': 80,
            'Lunar : Full Moon': 2,
            'Pump Token': 8000,
            'Lunar Device': 1
        }
    },
    {
        id: 'present-giver',
        name: 'Present Giver',
        tier: 'Event',
        slot: 'left',
        event: 'Winter 2025',
        description: 'Gives 5x Luck for every 11th roll.',
        stats: { special: 'present-luck' },
        obtain: '10% chance on Normal Wheel, 25% chance on Rare Wheel'
    },
    {
        id: 'snow-rider',
        name: 'Snow Rider',
        tier: 'Event',
        slot: 'right',
        event: 'Winter 2025',
        description: 'Ride through the snow.',
        stats: { luck: 3.00, rollSpeed: 0.30 },
        obtain: '1% on Normal Wheel, 10% on Rare Wheel, 25% on Mega Wheel'
    },
    {
        id: 'xmas-champion',
        name: 'X-Mas Champion',
        tier: 'Event',
        slot: 'left',
        event: 'Winter 2025',
        description: 'Gives 4x Luck for every 6th roll.',
        stats: { special: 'xmas-luck' },
        obtain: '1% on Rare Wheel, 10% on Mega Wheel'
    },
    {
        id: 'ominous-coffin',
        name: 'Ominous Coffin',
        tier: 'Season Pass',
        slot: 'left',
        description: 'x1.35 Basic Luck, removes Bonus Roll, +30% Roll Speed during PUMPKIN MOON, GRAVEYARD, BLOOD RAIN biomes.',
        stats: { luckMultiplier: 1.35, removeBonusRoll: true, biomeBonus: { rollSpeed: 0.30, biomes: ['PUMPKIN MOON', 'GRAVEYARD', 'BLOOD RAIN'] } },
        obtain: 'Reach Level 10 in Season III Pass'
    },
    {
        id: 'vampire-hunter',
        name: 'Vampire Hunter',
        tier: 'Season Pass',
        slot: 'right',
        description: '20% rarity decrease on Halloween Auras during Halloween Biomes.',
        stats: { luck: 2.40, rollSpeed: 0.30, special: 'halloween-boost' },
        obtain: 'Reach Level 30 in Season III Pass'
    },
    // T12
    {
        id: 'unfathomable-ruins',
        name: 'Unfathomable Ruins',
        tier: 'T-12',
        slot: 'left',
        description: 'Every 1000th roll grants x100 Luck for 10 rolls. Removes Bonus Roll.',
        stats: { removeBonusRoll: true, special: 'unfathomable-ruins' },
        recipe: {
            'Ruins': 1,
            'Runic': 3,
            'Ethereal': 4,
            'âŒŠ HARNESSED âŒ‰': 10,
            'Origin': 15,
            'Twilight': 50,
            'Kyawthuite': 50,
            'Jade': 50,
            'âœ¿ Flow âœ¿': 2000,
            'Flora': 10000
        }
    }
];
