// Achievements Database for Sol's RNG - Based on Official Wiki
const ACHIEVEMENTS = [
    // ========== ROLL ACHIEVEMENTS ==========
    {
        id: 'roll_1',
        name: 'Welcome to Sol\'s RNG!',
        description: 'Roll once.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 1 },
        rewards: { coins: 10 },
        title: 'I'
    },
    {
        id: 'roll_100',
        name: 'Good luck!',
        description: 'Roll 100 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 100 },
        rewards: { coins: 50 },
        title: 'X'
    },
    {
        id: 'roll_1000',
        name: 'Your shiny journey of getting rare stats',
        description: 'Roll 1,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 1000 },
        rewards: { coins: 300 },
        title: 'C'
    },
    {
        id: 'roll_10000',
        name: 'You have gambling addiction',
        description: 'Roll 10,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 10000 },
        rewards: { coins: 3000 },
        title: 'M'
    },
    {
        id: 'roll_100000',
        name: 'Playing even when I\'m asleep!',
        description: 'Roll 100,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 100000 },
        rewards: { coins: 10000 },
        title: 'CC'
    },
    {
        id: 'roll_1000000',
        name: 'My life be like',
        description: 'Roll 1,000,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 1000000 },
        rewards: { coins: 50000 },
        title: 'MMM'
    },
    {
        id: 'roll_5000000',
        name: 'And I got a good aura (or cooked)',
        description: 'Roll 5,000,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 5000000 },
        rewards: { coins: 100000, voidCoins: 1 },
        title: 'CCCCC'
    },
    {
        id: 'roll_10000000',
        name: 'Not much left til\' you become a ranker..',
        description: 'Roll 10,000,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 10000000 },
        rewards: { coins: 500000, voidCoins: 2 },
        title: 'MMMMMMMMMM'
    },
    {
        id: 'roll_15000000',
        name: 'You can never stop Rolling.',
        description: 'Roll 15,000,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 15000000 },
        rewards: { voidCoins: 3 },
        title: 'XV'
    },
    {
        id: 'roll_20000000',
        name: 'Haven\'t you won the CHROMATIC yet?',
        description: 'Roll 20,000,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 20000000 },
        rewards: { potions: { 'transcendent_potion': 1, 'oblivion_potion': 1 } },
        title: 'XX'
    },
    {
        id: 'roll_30000000',
        name: 'I Love you 30,000,000',
        description: 'Roll 30,000,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 30000000 },
        rewards: { potions: { 'transcendent_potion': 1, 'oblivion_potion': 2 } },
        title: 'XXX'
    },
    {
        id: 'roll_50000000',
        name: 'There\'s half left until 100 million-!',
        description: 'Roll 50,000,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 50000000 },
        rewards: { potions: { 'transcendent_potion': 3, 'oblivion_potion': 5 } },
        title: 'L'
    },
    {
        id: 'roll_100000000',
        name: 'Unbelievable-!',
        description: 'Roll 100,000,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 100000000 },
        rewards: { potions: { 'transcendent_potion': 5, 'oblivion_potion': 10 } },
        title: 'Century'
    },

    // ========== HIGHEST STAT ACHIEVEMENTS ==========
    {
        id: 'find_99k',
        name: 'Very lucky!',
        description: 'Obtain an aura that has a Rarity of 1/99k+.',
        category: 'discovery',
        requirement: { type: 'find_rarity', value: 99000 },
        rewards: { coins: 500 },
        title: 'Lucky!'
    },
    {
        id: 'find_1m',
        name: 'Woah, That\'s really lucky!',
        description: 'Obtain an aura that has a Rarity of 1/1M+.',
        category: 'discovery',
        requirement: { type: 'find_rarity', value: 1000000 },
        rewards: { coins: 750 },
        title: 'Really lucky!'
    },
    {
        id: 'find_10m',
        name: 'OH. MY. GOD.',
        description: 'Obtain an aura that has a Rarity of 1/10M+.',
        category: 'discovery',
        requirement: { type: 'find_rarity', value: 10000000 },
        rewards: {},
        title: 'OH. MY. GOD.'
    },
    {
        id: 'find_100m',
        name: 'THERE IS NO WAY!!',
        description: 'Obtain an aura that has a Rarity of 1/100M+.',
        category: 'discovery',
        requirement: { type: 'find_rarity', value: 100000000 },
        rewards: {},
        title: 'THERE IS NO WAY!'
    },
    {
        id: 'find_1b',
        name: 'RAHHHHHHHHHHHH',
        description: 'Roll a 1B+ aura.',
        category: 'discovery',
        requirement: { type: 'find_rarity', value: 1000000000 },
        rewards: {},
        title: 'RAHHHHHHHHHHHH'
    },

    // ========== PLAYTIME ACHIEVEMENTS ==========
    {
        id: 'play_30min',
        name: 'You played Sol\'s RNG for 30 minutes.',
        description: 'Play the game for 30 minutes.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 30 * 60 },
        rewards: { potionChest: 10 },
        title: '30 Minutes'
    },
    {
        id: 'play_1hr',
        name: 'You played Sol\'s RNG for 1 hour.',
        description: 'Play the game for 1 hour.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 60 * 60 },
        rewards: { potionChest: 15 },
        title: '1 Hour'
    },
    {
        id: 'play_10hr',
        name: 'The day is going by fast',
        description: 'Play the game for 10 hours.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 10 * 60 * 60 },
        rewards: { potionChest: 20 },
        title: '10 Hours'
    },
    {
        id: 'play_100hr',
        name: 'Be productive',
        description: 'Play the game for 100 hours.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 100 * 60 * 60 },
        rewards: { rarePotionChest: 20 },
        title: 'Be productive'
    },
    {
        id: 'play_1000hr',
        name: 'Go outside',
        description: 'Play the game for 1,000 hours.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 1000 * 60 * 60 },
        rewards: { megaPotionChest: 20 },
        title: 'Go outside'
    },
    {
        id: 'play_1500hr',
        name: 'Your character has already reached it\'s 4,500th day.',
        description: 'Play the game for 1,500 hours.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 1500 * 60 * 60 },
        rewards: { megaPotionChest: 30 },
        title: '4,500 Days'
    },
    {
        id: 'play_2000hr',
        name: 'Your PC is overloaded',
        description: 'Play the game for 2,000 hours.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 2000 * 60 * 60 },
        rewards: { megaPotionChest: 50 },
        title: 'PC Overload'
    },
    {
        id: 'play_3000hr',
        name: 'You have decided not to finish the journey.',
        description: 'Play the game for 3,000 hours.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 3000 * 60 * 60 },
        rewards: { megaPotionChest: 100 },
        title: 'Eternal'
    },
    {
        id: 'play_5000hr',
        name: 'Now i\'m curious about your goal!',
        description: 'Play the game for 5,000 hours.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 5000 * 60 * 60 },
        rewards: { megaPotionChest: 200 },
        title: 'Endless'
    },
    {
        id: 'play_10000hr',
        name: 'Over 10,000 hours..',
        description: 'Play the game for 10,000 hours.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 10000 * 60 * 60 },
        rewards: { megaPotionChest: 500 },
        title: 'Immortal'
    },

    // ========== BREAKTHROUGH ACHIEVEMENTS ==========
    {
        id: 'breakthrough_1',
        name: 'A great deal of luck',
        description: 'Roll a Breakthrough once.',
        category: 'breakthroughs',
        requirement: { type: 'breakthroughs', value: 1 },
        rewards: { runeChest: 1 },
        title: 'Breakthrough'
    },
    {
        id: 'breakthrough_5',
        name: 'There is no limit',
        description: 'Roll a Breakthrough five times.',
        category: 'breakthroughs',
        requirement: { type: 'breakthroughs', value: 5 },
        rewards: { runeChest: 3 },
        title: 'Break the Limit'
    },
    {
        id: 'breakthrough_100',
        name: 'Get 100 biome exclusive auras without native rarity',
        description: 'Roll a Breakthrough 100 times.',
        category: 'breakthroughs',
        requirement: { type: 'breakthroughs', value: 100 },
        rewards: { runeChest: 10 },
        title: 'Break the Space'
    },
    {
        id: 'breakthrough_1000',
        name: 'Get 1,000 biome exclusive auras without native rarity',
        description: 'Roll a Breakthrough 1,000 times.',
        category: 'breakthroughs',
        requirement: { type: 'breakthroughs', value: 1000 },
        rewards: { runeChest: 15 },
        title: 'Break the Galaxy'
    },
    {
        id: 'breakthrough_10000',
        name: 'Get 10,000 biome exclusive auras without native rarity',
        description: 'Roll a Breakthrough 10,000 times.',
        category: 'breakthroughs',
        requirement: { type: 'breakthroughs', value: 10000 },
        rewards: { runeChest: 25 },
        title: 'Break the Reality'
    },
    {
        id: 'breakthrough_1000000',
        name: 'When will the new Biome be released?!',
        description: 'Roll a Breakthrough 1,000,000 times.',
        category: 'breakthroughs',
        requirement: { type: 'breakthroughs', value: 1000000 },
        rewards: { runeChest: 50 },
        title: 'Biome Itself'
    },

    // ========== AURA OBTAINED ACHIEVEMENTS ==========
    {
        id: 'obtain_glitch',
        name: 'Flaws in the World',
        description: 'Obtain GLITCH (1 in 12,210,110 from Glitched biome).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'glitch' },
        rewards: { voidCoins: 1 },
        title: 'Glitched'
    },
    {
        id: 'obtain_oppression',
        name: 'One Who Stands Before God',
        description: 'Obtain OPPRESSION.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'oppression' },
        rewards: { voidCoins: 3 },
        title: 'Oppressor'
    },
    {
        id: 'obtain_oblivion',
        name: 'Consumed by Void',
        description: 'Obtain OBLIVION (1 in 2000 from Oblivion Potion).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'oblivion' },
        rewards: { voidCoins: 5 },
        title: 'Oblivion'
    },
    {
        id: 'obtain_dreammetric',
        name: 'Dream Walker',
        description: 'Obtain Dreammetric.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'dreammetric' },
        rewards: { voidCoins: 10 },
        title: 'Dreammetric'
    },
    {
        id: 'obtain_neferkhaf',
        name: 'The warrior who eradicated the calamity of famine.',
        description: 'Obtain Neferkhaf.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'neferkhaf' },
        rewards: { potions: { 'potion_of_dune': 10 } },
        title: 'Neferkhaf'
    },
    {
        id: 'obtain_challenged',
        name: 'Challenged Champion',
        description: 'Obtain any challenged tier aura.',
        category: 'auras',
        requirement: { type: 'tier_obtained', value: 'challenged' },
        rewards: {},
        title: 'Challenged'
    },

    // ========== MISCELLANEOUS ACHIEVEMENTS ==========
    {
        id: 'i_was_just_lucky',
        name: 'You got Undead(real)',
        description: 'You have a 0.01% chance to get this achievement every minute.',
        category: 'misc',
        requirement: { type: 'random_chance', value: 0.0001 },
        rewards: { luckyPenny: 1 },
        title: 'Lucky Penny'
    },
    {
        id: 'glitched_biome',
        name: 'Something went wrong',
        description: 'Encounter The Glitched Biome.',
        category: 'misc',
        requirement: { type: 'biome_visited', value: 'GLITCHED' },
        rewards: { coins: 10101 },
        title: 'Something went wrong'
    },
    {
        id: 'dreamspace_biome',
        name: '𝕊𝕃𝔼𝔼ℙ𝕎𝔸𝕃𝕂',
        description: 'Encounter The Dreamspace Biome.',
        category: 'misc',
        requirement: { type: 'biome_visited', value: 'DREAMSPACE' },
        rewards: { coins: 10000 },
        title: 'SLEEPWALK'
    },
    {
        id: 'use_50000_potions',
        name: 'TRÈS BIEN!!!!!!',
        description: 'Use 50,000 potions.',
        category: 'misc',
        requirement: { type: 'potions_used', value: 50000 },
        rewards: { emptyBottle: 1 },
        title: 'Potion Master'
    },
    {
        id: 'double_100m',
        name: 'Impossible Luck',
        description: 'Roll an aura with rarity of 100 million or more twice in a row.',
        category: 'misc',
        requirement: { type: 'double_100m', value: 1 },
        rewards: { potions: { 'heavenly_potion': 10 } },
        title: 'Impossible!'
    },

    // ========== ACHIEVEMENT PROGRESS ==========
    {
        id: 'achievement_10',
        name: 'You got 10 achievements',
        description: 'Complete 10 achievements in game.',
        category: 'progress',
        requirement: { type: 'achievements_completed', value: 10 },
        rewards: { buff: 'Skilled!' },
        title: 'Skilled!'
    },
    {
        id: 'achievement_20',
        name: 'You got 20 achievements',
        description: 'Complete 20 achievements in game.',
        category: 'progress',
        requirement: { type: 'achievements_completed', value: 20 },
        rewards: { buff: 'Expert!' },
        title: 'Expert!'
    },
    {
        id: 'achievement_30',
        name: 'You got 30 achievements',
        description: 'Complete 30 achievements in game.',
        category: 'progress',
        requirement: { type: 'achievements_completed', value: 30 },
        rewards: { buff: 'Master!' },
        title: 'Master!'
    },
    {
        id: 'achievement_40',
        name: 'You got 40 achievements',
        description: 'Complete 40 achievements in game.',
        category: 'progress',
        requirement: { type: 'achievements_completed', value: 40 },
        rewards: { buff: 'Grandmaster' },
        title: 'Grandmaster'
    },
    {
        id: 'achievement_50',
        name: 'You got 50 achievements',
        description: 'Complete 50 achievements in game.',
        category: 'progress',
        requirement: { type: 'achievements_completed', value: 50 },
        rewards: { buff: 'Supreme!' },
        title: 'Supreme!'
    },
    {
        id: 'achievement_60',
        name: 'You got 60 achievements',
        description: 'Complete 60 achievements in game.',
        category: 'progress',
        requirement: { type: 'achievements_completed', value: 60 },
        rewards: { buff: 'Champion!' },
        title: 'Champion!'
    },
    {
        id: 'achievement_70',
        name: 'You got 70 achievements',
        description: 'Complete 70 achievements in game.',
        category: 'progress',
        requirement: { type: 'achievements_completed', value: 70 },
        rewards: { buff: 'Godlike!' },
        title: 'Godlike!'
    },

    // ========== SPECIFIC AURA ACHIEVEMENTS ==========
    // Iconic Rare Auras
    {
        id: 'obtain_gargantua',
        name: 'Event Horizon',
        description: 'Obtain GARGANTUA (1 in 430M from Starfall).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'gargantua' },
        rewards: { voidCoins: 5 },
        title: 'Event Horizon'
    },
    {
        id: 'obtain_gargantua_whitehole',
        name: 'Blinding Light',
        description: 'Obtain GARGANTUA : WHITEHOLE (1 in 2.15B from Starfall).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'gargantua_whitehole' },
        rewards: { voidCoins: 15 },
        title: 'White Hole'
    },
    {
        id: 'obtain_equinox',
        name: 'Perfect Balance',
        description: 'Obtain EQUINOX (1 in 2.5B).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'equinox' },
        rewards: { voidCoins: 20 },
        title: 'Equinox'
    },
    {
        id: 'obtain_solstice',
        name: 'Longest Day',
        description: 'Obtain SOLSTICE (1 in 2.5B from Starfall).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'solstice' },
        rewards: { voidCoins: 20 },
        title: 'Solstice'
    },
    {
        id: 'obtain_chromatic',
        name: 'Full Spectrum',
        description: 'Obtain CHROMATIC (1 in 20M).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'chromatic' },
        rewards: { voidCoins: 3 },
        title: 'Chromatic'
    },
    {
        id: 'obtain_chromatic_genesis',
        name: 'In The Beginning...',
        description: 'Obtain CHROMATIC : GENESIS (1 in 100M).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'chromatic_genesis' },
        rewards: { voidCoins: 8 },
        title: 'Genesis'
    },
    {
        id: 'obtain_abyssal_hunter',
        name: 'From the Depths',
        description: 'Obtain ABYSSAL HUNTER (1 in 400M from Deep Sea).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'abyssal_hunter' },
        rewards: { voidCoins: 5 },
        title: 'Abyssal'
    },
    {
        id: 'obtain_megalodon',
        name: 'Apex Predator',
        description: 'Obtain MEGALODON (1 in 1.5B from Deep Sea).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'megalodon' },
        rewards: { voidCoins: 12 },
        title: 'Megalodon'
    },
    {
        id: 'obtain_bifrost',
        name: 'Rainbow Bridge',
        description: 'Obtain BIFROST (1 in 1.5B from Aurora).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'bifrost' },
        rewards: { voidCoins: 12 },
        title: 'Bifrost'
    },
    {
        id: 'obtain_toll',
        name: 'Death\'s Toll',
        description: 'Obtain TOLL (1 in 1B).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'toll' },
        rewards: { voidCoins: 8 },
        title: 'Toll'
    },
    {
        id: 'obtain_matrix',
        name: 'Red Pill',
        description: 'Obtain MATRIX (1 in 50M from Glitched).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'matrix' },
        rewards: { voidCoins: 4 },
        title: 'Awakened'
    },
    {
        id: 'obtain_fatal_error',
        name: 'Blue Screen of Death',
        description: 'Obtain FATAL ERROR (1 in 40M from Glitched).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'fatal_error' },
        rewards: { voidCoins: 3 },
        title: 'Error 404'
    },
    {
        id: 'obtain_godmode',
        name: 'Cheat Activated',
        description: 'Obtain GODMODE (1 in 1.33B from Glitched).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'godmode' },
        rewards: { voidCoins: 10 },
        title: 'Godmode'
    },
    {
        id: 'obtain_arcane',
        name: 'Mystic Arts',
        description: 'Obtain ARCANE (1 in 1M).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'arcane' },
        rewards: { coins: 5000 },
        title: 'Arcane'
    },
    {
        id: 'obtain_poseidon',
        name: 'God of the Sea',
        description: 'Obtain POSEIDON (1 in 4M from Rainy).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'poseidon' },
        rewards: { coins: 10000 },
        title: 'Poseidon'
    },
    {
        id: 'obtain_zeus',
        name: 'King of Olympus',
        description: 'Obtain ZEUS (1 in 4.5M).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'zeus' },
        rewards: { coins: 10000 },
        title: 'Zeus'
    },
    {
        id: 'obtain_hades',
        name: 'Lord of the Underworld',
        description: 'Obtain HADES (1 in 6.67M from Hell).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'hades' },
        rewards: { coins: 15000 },
        title: 'Hades'
    },
    {
        id: 'obtain_anubis',
        name: 'Jackal-Headed',
        description: 'Obtain ANUBIS (1 in 7.2M).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'anubis' },
        rewards: { coins: 15000 },
        title: 'Anubis'
    },
    {
        id: 'obtain_tartarus',
        name: 'Deepest Pit',
        description: 'Obtain TARTARUS (1 in 900M from Hell).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'tartarus' },
        rewards: { voidCoins: 7 },
        title: 'Tartarus'
    },
    {
        id: 'obtain_tornado',
        name: 'Storm Chaser',
        description: 'Obtain TORNADO (1 in 2.5B from Windy).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'tornado' },
        rewards: { voidCoins: 15 },
        title: 'Tornado'
    },
    {
        id: 'obtain_cryosphere',
        name: 'Absolute Zero',
        description: 'Obtain CRYOSPHERE (1 in 4.5B from Snowy).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'cryosphere_snow' },
        rewards: { voidCoins: 25 },
        title: 'Cryosphere'
    },
    {
        id: 'obtain_supernova',
        name: 'Stellar Explosion',
        description: 'Obtain SUPERNOVA (1 in 3.5B from Blazing Sun).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'supernova' },
        rewards: { voidCoins: 20 },
        title: 'Supernova'
    },
    {
        id: 'obtain_arcturus',
        name: 'Brightest Star',
        description: 'Obtain ARCTURUS (1 in 3B from Starfall).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'arcturus' },
        rewards: { voidCoins: 18 },
        title: 'Arcturus'
    },
    {
        id: 'obtain_aeternitas',
        name: 'Eternal',
        description: 'Obtain AETERNITAS (1 in 10B from Sandstorm).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'aeternitas' },
        rewards: { voidCoins: 50 },
        title: 'Eternal'
    },
    {
        id: 'obtain_lost',
        name: 'Where Am I?',
        description: 'Obtain LOST (1 in 1B).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'lost' },
        rewards: { voidCoins: 8 },
        title: 'Lost'
    },
    {
        id: 'obtain_nightlife',
        name: 'Night Owl',
        description: 'Obtain NIGHTLIFE (1 in 1.52M at Night).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'nightlife' },
        rewards: { coins: 5000 },
        title: 'Nightlife'
    },
    {
        id: 'obtain_twilight',
        name: 'Dusk Walker',
        description: 'Obtain TWILIGHT (1 in 6M at Night).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'twilight' },
        rewards: { coins: 15000 },
        title: 'Twilight'
    },

    // ========== BIOME ACHIEVEMENTS ==========
    {
        id: 'hell_biome',
        name: 'It\'s Getting Hot In Here',
        description: 'Encounter the Hell Biome.',
        category: 'misc',
        requirement: { type: 'biome_visited', value: 'HELL' },
        rewards: { potionChest: 3, potions: { 'lucky_potion': 10 } },
        title: 'Infernal'
    },
    {
        id: 'heaven_biome',
        name: 'Stairway to Heaven',
        description: 'Encounter the Heaven Biome.',
        category: 'misc',
        requirement: { type: 'biome_visited', value: 'HEAVEN' },
        rewards: { potionChest: 3, potions: { 'heavenly_potion': 1 } },
        title: 'Blessed'
    },
    {
        id: 'starfall_biome',
        name: 'Wish Upon a Star',
        description: 'Encounter the Starfall Biome.',
        category: 'misc',
        requirement: { type: 'biome_visited', value: 'STARFALL' },
        rewards: { potionChest: 5, potions: { 'stellar_potion': 5 } },
        title: 'Stargazer'
    },
    {
        id: 'null_biome',
        name: 'The Void Stares Back',
        description: 'Encounter the Null Biome.',
        category: 'misc',
        requirement: { type: 'biome_visited', value: 'NULL' },
        rewards: { rarePotionChest: 2, potions: { 'oblivion_potion': 1 } },
        title: 'Void Walker'
    },
    {
        id: 'aurora_biome',
        name: 'Northern Lights',
        description: 'Encounter the Aurora Biome.',
        category: 'misc',
        requirement: { type: 'biome_visited', value: 'AURORA' },
        rewards: { potionChest: 4, potions: { 'ethereal_potion': 3 } },
        title: 'Aurora'
    },
    {
        id: 'corruption_biome',
        name: 'Tainted Ground',
        description: 'Encounter the Corruption Biome.',
        category: 'misc',
        requirement: { type: 'biome_visited', value: 'CORRUPTION' },
        rewards: { runeChest: 2, potions: { 'speed_potion': 20 } },
        title: 'Corrupted'
    },
    {
        id: 'deep_sea_biome',
        name: 'Into the Abyss',
        description: 'Encounter the Deep Sea Biome.',
        category: 'misc',
        requirement: { type: 'biome_visited', value: 'DEEP SEA' },
        rewards: { rarePotionChest: 2, potions: { 'aquatic_potion': 5 } },
        title: 'Deep Diver'
    },
    {
        id: 'pumpkin_moon_biome',
        name: 'Spooky Season',
        description: 'Encounter the Pumpkin Moon Biome.',
        category: 'misc',
        requirement: { type: 'biome_visited', value: 'PUMPKIN MOON' },
        rewards: { rarePotionChest: 3, potions: { 'pump_kings_blood': 1 } },
        title: 'Spooky'
    },
    {
        id: 'graveyard_biome',
        name: 'Rest In Peace',
        description: 'Encounter the Graveyard Biome.',
        category: 'misc',
        requirement: { type: 'biome_visited', value: 'GRAVEYARD' },
        rewards: { runeChest: 2, potions: { 'undead_potion': 3 } },
        title: 'Gravedigger'
    },
    {
        id: 'blood_rain_biome',
        name: 'Crimson Skies',
        description: 'Encounter the Blood Rain Biome.',
        category: 'misc',
        requirement: { type: 'biome_visited', value: 'BLOOD RAIN' },
        rewards: { rarePotionChest: 2, potions: { 'crimson_potion': 5 } },
        title: 'Bloodsoaked'
    },

    // ========== TIME-BASED ACHIEVEMENTS ==========
    {
        id: 'night_roll_100',
        name: 'Midnight Roller',
        description: 'Roll 100 times during Night Time.',
        category: 'rolls',
        requirement: { type: 'night_rolls', value: 100 },
        rewards: { potions: { 'midnight_potion': 5 } },
        title: 'Night Roller'
    },
    {
        id: 'night_roll_10000',
        name: 'Nocturnal',
        description: 'Roll 10,000 times during Night Time.',
        category: 'rolls',
        requirement: { type: 'night_rolls', value: 10000 },
        rewards: { rarePotionChest: 5, potions: { 'midnight_potion': 25 } },
        title: 'Nocturnal'
    },
    {
        id: 'day_roll_100',
        name: 'Early Bird',
        description: 'Roll 100 times during Day Time.',
        category: 'rolls',
        requirement: { type: 'day_rolls', value: 100 },
        rewards: { potions: { 'solar_potion': 5 } },
        title: 'Early Bird'
    },
    {
        id: 'day_roll_10000',
        name: 'Sun Worshipper',
        description: 'Roll 10,000 times during Day Time.',
        category: 'rolls',
        requirement: { type: 'day_rolls', value: 10000 },
        rewards: { rarePotionChest: 5, potions: { 'solar_potion': 25 } },
        title: 'Sun Worshipper'
    },

    // ========== POTION ACHIEVEMENTS ==========
    {
        id: 'use_100_potions',
        name: 'Potion Enthusiast',
        description: 'Use 100 potions.',
        category: 'misc',
        requirement: { type: 'potions_used', value: 100 },
        rewards: { potionChest: 5 },
        title: 'Enthusiast'
    },
    {
        id: 'use_1000_potions',
        name: 'Alchemist Apprentice',
        description: 'Use 1,000 potions.',
        category: 'misc',
        requirement: { type: 'potions_used', value: 1000 },
        rewards: { rarePotionChest: 5 },
        title: 'Apprentice'
    },
    {
        id: 'use_10000_potions',
        name: 'Potion Addict',
        description: 'Use 10,000 potions.',
        category: 'misc',
        requirement: { type: 'potions_used', value: 10000 },
        rewards: { megaPotionChest: 5 },
        title: 'Addict'
    },
    {
        id: 'use_100000_potions',
        name: 'Potion Lord',
        description: 'Use 100,000 potions.',
        category: 'misc',
        requirement: { type: 'potions_used', value: 100000 },
        rewards: { megaPotionChest: 20 },
        title: 'Potion Lord'
    },
    {
        id: 'use_oblivion',
        name: 'Into the Void',
        description: 'Use an Oblivion Potion for the first time.',
        category: 'misc',
        requirement: { type: 'potion_used', value: 'oblivion_potion' },
        rewards: { coins: 10000 },
        title: 'Void Seeker'
    },
    {
        id: 'use_transcendent',
        name: 'Beyond Mortal',
        description: 'Use a Transcendent Potion for the first time.',
        category: 'misc',
        requirement: { type: 'potion_used', value: 'transcendent_potion' },
        rewards: { coins: 5000 },
        title: 'Transcendent'
    },

    // ========== CONSECUTIVE ACHIEVEMENTS ==========
    {
        id: 'rare_streak_3',
        name: 'Lucky Streak',
        description: 'Roll 3 Rare+ auras (1/16+) in a row.',
        category: 'misc',
        requirement: { type: 'rare_streak', value: 3 },
        rewards: { coins: 1000 },
        title: 'Streaker'
    },
    {
        id: 'rare_streak_5',
        name: 'On Fire!',
        description: 'Roll 5 Rare+ auras (1/16+) in a row.',
        category: 'misc',
        requirement: { type: 'rare_streak', value: 5 },
        rewards: { coins: 5000 },
        title: 'On Fire'
    },
    {
        id: 'rare_streak_10',
        name: 'Unstoppable!',
        description: 'Roll 10 Rare+ auras (1/16+) in a row.',
        category: 'misc',
        requirement: { type: 'rare_streak', value: 10 },
        rewards: { potionChest: 10 },
        title: 'Unstoppable'
    },
    {
        id: 'nothing_streak_10',
        name: 'Down on Your Luck',
        description: 'Roll Nothing 10 times in a row.',
        category: 'misc',
        requirement: { type: 'nothing_streak', value: 10 },
        rewards: { coins: 100 },
        title: 'Unlucky'
    },
    {
        id: 'nothing_streak_50',
        name: 'Cursed',
        description: 'Roll Nothing 50 times in a row.',
        category: 'misc',
        requirement: { type: 'nothing_streak', value: 50 },
        rewards: { potionChest: 5 },
        title: 'Cursed'
    },

    // ========== UNIQUE ROLL ACHIEVEMENTS ==========
    {
        id: 'unique_auras_10',
        name: 'Collector',
        description: 'Collect 10 unique auras.',
        category: 'discovery',
        requirement: { type: 'unique_auras', value: 10 },
        rewards: { coins: 500 },
        title: 'Collector'
    },
    {
        id: 'unique_auras_50',
        name: 'Curator',
        description: 'Collect 50 unique auras.',
        category: 'discovery',
        requirement: { type: 'unique_auras', value: 50 },
        rewards: { coins: 2500 },
        title: 'Curator'
    },
    {
        id: 'unique_auras_100',
        name: 'Archivist',
        description: 'Collect 100 unique auras.',
        category: 'discovery',
        requirement: { type: 'unique_auras', value: 100 },
        rewards: { coins: 10000 },
        title: 'Archivist'
    },
    {
        id: 'unique_auras_200',
        name: 'Grand Collector',
        description: 'Collect 200 unique auras.',
        category: 'discovery',
        requirement: { type: 'unique_auras', value: 200 },
        rewards: { voidCoins: 2 },
        title: 'Grand Collector'
    },
    {
        id: 'unique_auras_500',
        name: 'Aura Master',
        description: 'Collect 500 unique auras.',
        category: 'discovery',
        requirement: { type: 'unique_auras', value: 500 },
        rewards: { voidCoins: 10 },
        title: 'Aura Master'
    },

    // ========== CRAFTING & GEAR ACHIEVEMENTS ==========
    {
        id: 'craft_first_gear',
        name: 'First Craft',
        description: 'Craft your first piece of gear.',
        category: 'misc',
        requirement: { type: 'gears_crafted', value: 1 },
        rewards: { coins: 500 },
        title: 'Crafter'
    },
    {
        id: 'craft_10_gear',
        name: 'Artisan',
        description: 'Craft 10 pieces of gear.',
        category: 'misc',
        requirement: { type: 'gears_crafted', value: 10 },
        rewards: { coins: 5000 },
        title: 'Artisan'
    },
    {
        id: 'craft_legendary_gear',
        name: 'Legendary Blacksmith',
        description: 'Craft a Legendary tier gear.',
        category: 'misc',
        requirement: { type: 'gear_tier_crafted', value: 'legendary' },
        rewards: { voidCoins: 1 },
        title: 'Legendary Smith'
    },

    // ========== SPEED ACHIEVEMENTS ==========
    {
        id: 'rolls_per_minute_100',
        name: 'Speed Demon',
        description: 'Achieve 100 rolls per minute.',
        category: 'misc',
        requirement: { type: 'rolls_per_minute', value: 100 },
        rewards: { coins: 2500 },
        title: 'Speed Demon'
    },
    {
        id: 'rolls_per_minute_200',
        name: 'Lightning Fingers',
        description: 'Achieve 200 rolls per minute.',
        category: 'misc',
        requirement: { type: 'rolls_per_minute', value: 200 },
        rewards: { coins: 10000 },
        title: 'Lightning'
    },

    // ========== MUTATION ACHIEVEMENTS ==========
    {
        id: 'first_mutation',
        name: 'Evolution',
        description: 'Obtain your first mutation aura.',
        category: 'auras',
        requirement: { type: 'mutation_obtained', value: 1 },
        rewards: { coins: 5000 },
        title: 'Mutant'
    },
    {
        id: 'mutations_5',
        name: 'Mutagen',
        description: 'Obtain 5 different mutation auras.',
        category: 'auras',
        requirement: { type: 'mutation_obtained', value: 5 },
        rewards: { voidCoins: 1 },
        title: 'Mutagen'
    },
    {
        id: 'mutations_10',
        name: 'Mutations Mastery',
        description: 'Obtain 10 different mutation auras.',
        category: 'auras',
        requirement: { type: 'mutation_obtained', value: 10 },
        rewards: { voidCoins: 3 },
        title: 'Mutations Master'
    },

    // ========== MORE SPECIFIC AURA ACHIEVEMENTS ==========
    {
        id: 'obtain_sol',
        name: 'The Sun Itself',
        description: 'Obtain SOL (1 in 1B).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'sol' },
        rewards: { megaPotionChest: 3, potions: { 'transcendent_potion': 2 }, coins: 50000 },
        title: 'Sol'
    },
    {
        id: 'obtain_monarch',
        name: 'Royal Blood',
        description: 'Obtain MONARCH (1 in 3B).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'monarch' },
        rewards: { megaPotionChest: 8, potions: { 'oblivion_potion': 3, 'transcendent_potion': 5 }, runeChest: 5 },
        title: 'Monarch'
    },
    {
        id: 'obtain_mastermind',
        name: 'Big Brain',
        description: 'Obtain MASTERMIND (1 in 4B).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'mastermind' },
        rewards: { megaPotionChest: 10, potions: { 'transcendent_potion': 8 }, runeChest: 8, coins: 100000 },
        title: 'Mastermind'
    },
    {
        id: 'obtain_another_realm',
        name: 'Beyond Reality',
        description: 'Obtain ANOTHER REALM (1 in 5B).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'another_realm' },
        rewards: { megaPotionChest: 15, potions: { 'oblivion_potion': 5, 'heavenly_potion': 10 }, runeChest: 10 },
        title: 'Another Realm'
    },
    {
        id: 'obtain_rarest_aura',
        name: 'The Ultimate Prize',
        description: 'Obtain THE RAREST AURA (1 in 10B).',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'rarest_aura' },
        rewards: { megaPotionChest: 50, potions: { 'transcendent_potion': 25, 'oblivion_potion': 25 }, runeChest: 25, coins: 1000000, voidCoins: 50 },
        title: 'THE RAREST'
    },
    {
        id: 'obtain_singularity',
        name: 'Event Collapse',
        description: 'Obtain SINGULARITY from Cyberspace.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'singularity' },
        rewards: { megaPotionChest: 2, potions: { 'glitched_potion': 15 }, coins: 25000 },
        title: 'Singularity'
    },
    {
        id: 'obtain_hypnagogia',
        name: 'Between Sleep and Wake',
        description: 'Obtain HYPNAGOGIA from Dreamspace.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'hypnagogia' },
        rewards: { megaPotionChest: 2, potions: { 'ethereal_potion': 15 }, coins: 20000 },
        title: 'Hypnagogic'
    },
    {
        id: 'obtain_trenchwarden',
        name: 'Guardian of the Deep',
        description: 'Obtain TRENCHWARDEN from Deep Sea.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'trenchwarden' },
        rewards: { megaPotionChest: 4, potions: { 'aquatic_potion': 25 }, runeChest: 3 },
        title: 'Trenchwarden'
    },
    {
        id: 'obtain_immortality',
        name: 'Forever',
        description: 'Obtain IMMORTALITY from Heaven.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'immortality' },
        rewards: { megaPotionChest: 10, potions: { 'heavenly_potion': 15, 'transcendent_potion': 5 }, runeChest: 8 },
        title: 'Immortal'
    },

    // ========== GREEK GODS COLLECTION ==========
    {
        id: 'greek_gods_trio',
        name: 'Olympian Trio',
        description: 'Obtain Zeus, Poseidon, and Hades.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['zeus', 'poseidon', 'hades'] },
        rewards: { rarePotionChest: 10, potions: { 'godlike_potion': 5, 'divine_potion': 5 }, runeChest: 5 },
        title: 'Olympian'
    },

    // ========== TIER MASTERY ACHIEVEMENTS ==========
    {
        id: 'tier_mythic',
        name: 'Mythic Hunter',
        description: 'Obtain your first Mythic tier aura (1M-10M).',
        category: 'discovery',
        requirement: { type: 'tier_obtained', value: 'mythic' },
        rewards: { potionChest: 10, potions: { 'lucky_potion': 25 } },
        title: 'Mythic Hunter'
    },
    {
        id: 'tier_exalted',
        name: 'Exalted One',
        description: 'Obtain your first Exalted tier aura (10M-100M).',
        category: 'discovery',
        requirement: { type: 'tier_obtained', value: 'exalted' },
        rewards: { rarePotionChest: 10, potions: { 'godlike_potion': 3 } },
        title: 'Exalted'
    },
    {
        id: 'tier_glorious',
        name: 'Glory Seeker',
        description: 'Obtain your first Glorious tier aura (100M-1B).',
        category: 'discovery',
        requirement: { type: 'tier_obtained', value: 'glorious' },
        rewards: { megaPotionChest: 5, potions: { 'heavenly_potion': 3 }, runeChest: 3 },
        title: 'Glorious'
    },
    {
        id: 'tier_transcendent',
        name: 'Transcendence',
        description: 'Obtain your first Transcendent tier aura (1B+).',
        category: 'discovery',
        requirement: { type: 'tier_obtained', value: 'transcendent' },
        rewards: { megaPotionChest: 15, potions: { 'transcendent_potion': 10, 'oblivion_potion': 3 }, runeChest: 10, voidCoins: 3 },
        title: 'Transcendent'
    },

    // ========== SPECIFIC ROLL MILESTONES ==========
    {
        id: 'roll_500',
        name: 'Getting Started',
        description: 'Roll 500 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 500 },
        rewards: { potions: { 'lucky_potion': 10, 'speed_potion': 10 } },
        title: 'V'
    },
    {
        id: 'roll_2500',
        name: 'Dedicated',
        description: 'Roll 2,500 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 2500 },
        rewards: { potionChest: 5, potions: { 'lucky_potion': 20 } },
        title: 'Dedicated'
    },
    {
        id: 'roll_5000',
        name: 'Halfway There',
        description: 'Roll 5,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 5000 },
        rewards: { potionChest: 8, potions: { 'ethereal_potion': 5 } },
        title: 'Halfway'
    },
    {
        id: 'roll_25000',
        name: 'Quarter Century',
        description: 'Roll 25,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 25000 },
        rewards: { rarePotionChest: 5, potions: { 'godlike_potion': 2 } },
        title: 'XXV'
    },
    {
        id: 'roll_50000',
        name: 'Half Way to 100K!',
        description: 'Roll 50,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 50000 },
        rewards: { rarePotionChest: 8, potions: { 'godlike_potion': 3 }, runeChest: 2 },
        title: 'L'
    },
    {
        id: 'roll_250000',
        name: 'Quarter Million!',
        description: 'Roll 250,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 250000 },
        rewards: { potionChest: 25 },
        title: 'CCL'
    },
    {
        id: 'roll_500000',
        name: 'Half a Million!',
        description: 'Roll 500,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 500000 },
        rewards: { rarePotionChest: 10 },
        title: 'D'
    },
    {
        id: 'roll_2500000',
        name: '2.5 Million Rolls!',
        description: 'Roll 2,500,000 times.',
        category: 'rolls',
        requirement: { type: 'rolls', value: 2500000 },
        rewards: { megaPotionChest: 5 },
        title: 'MMD'
    },

    // ========== CHEST ACHIEVEMENTS ==========
    {
        id: 'open_first_chest',
        name: 'First Treasure',
        description: 'Open your first potion chest.',
        category: 'misc',
        requirement: { type: 'chests_opened', value: 1 },
        rewards: { potionChest: 3 },
        title: 'Treasure Hunter'
    },
    {
        id: 'open_100_chests',
        name: 'Chest Enthusiast',
        description: 'Open 100 chests of any type.',
        category: 'misc',
        requirement: { type: 'chests_opened', value: 100 },
        rewards: { rarePotionChest: 5 },
        title: 'Chest Master'
    },

    // ========== WEATHER-SPECIFIC ACHIEVEMENTS ==========
    {
        id: 'snowy_10m',
        name: 'Frozen Fortune',
        description: 'Roll a 10M+ aura during Snowy biome.',
        category: 'misc',
        requirement: { type: 'biome_rare_roll', value: { biome: 'SNOWY', rarity: 10000000 } },
        rewards: { potions: { 'frost_potion': 20, 'godlike_potion': 2 }, runeChest: 2 },
        title: 'Frozen'
    },
    {
        id: 'hell_10m',
        name: 'Infernal Luck',
        description: 'Roll a 10M+ aura during Hell biome.',
        category: 'misc',
        requirement: { type: 'biome_rare_roll', value: { biome: 'HELL', rarity: 10000000 } },
        rewards: { potions: { 'infernal_potion': 20, 'godlike_potion': 2 }, runeChest: 2 },
        title: 'Infernal'
    },

    // ========== GLITCH-RELATED ACHIEVEMENTS ==========
    {
        id: 'obtain_fault',
        name: 'System Fault',
        description: 'Obtain FAULT from Glitched biome.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'fault' },
        rewards: { potionChest: 5, potions: { 'glitched_potion': 10 } },
        title: 'Fault'
    },
    {
        id: 'obtain_pixelation',
        name: 'Pixelated',
        description: 'Obtain PIXELATION from Glitched biome.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'pixelation' },
        rewards: { voidCoins: 8 },
        title: 'Pixelated'
    },

    // ========== SPECIAL CONDITION ACHIEVEMENTS ==========
    {
        id: 'roll_1m_without_potion',
        name: 'Natural Luck',
        description: 'Roll a 1M+ aura without any luck potions active.',
        category: 'misc',
        requirement: { type: 'natural_1m_roll', value: 1 },
        rewards: { potions: { 'godlike_potion': 5 } },
        title: 'Natural'
    },
    {
        id: 'consecutive_legend_rolls',
        name: 'Double Legend',
        description: 'Roll two Legendary+ auras (100k+) back to back.',
        category: 'misc',
        requirement: { type: 'consecutive_legend', value: 2 },
        rewards: { coins: 10000 },
        title: 'Double Legend'
    },

    // ========== MORE EVENT AURA ACHIEVEMENTS ==========
    {
        id: 'obtain_jack_o_lantern',
        name: 'Pumpkin King',
        description: 'Obtain JACK-O-LANTERN from Pumpkin Moon.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'jack_o_lantern_aura' },
        rewards: { voidCoins: 4 },
        title: 'Pumpkin King'
    },
    {
        id: 'obtain_samhain',
        name: 'Celtic Festival',
        description: 'Obtain SAMHAIN from Pumpkin Moon.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'samhain' },
        rewards: { voidCoins: 8 },
        title: 'Samhain'
    },
    {
        id: 'obtain_bloodbath',
        name: 'Blood Soaked',
        description: 'Obtain BLOODBATH from Blood Rain.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'bloodbath' },
        rewards: { voidCoins: 12 },
        title: 'Bloodbath'
    },

    // ========== PLAYTIME MILESTONES (Additional) ==========
    {
        id: 'play_5min',
        name: 'Just Starting',
        description: 'Play for 5 minutes.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 5 * 60 },
        rewards: { potionChest: 1 },
        title: '5 Minutes'
    },
    {
        id: 'play_15min',
        name: 'Getting Comfortable',
        description: 'Play for 15 minutes.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 15 * 60 },
        rewards: { potionChest: 3 },
        title: '15 Minutes'
    },
    {
        id: 'play_5hr',
        name: 'Time Flies',
        description: 'Play for 5 hours.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 5 * 60 * 60 },
        rewards: { potionChest: 15 },
        title: '5 Hours'
    },
    {
        id: 'play_24hr',
        name: 'One Full Day',
        description: 'Play for 24 hours total.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 24 * 60 * 60 },
        rewards: { rarePotionChest: 10 },
        title: 'Day 1'
    },
    {
        id: 'play_168hr',
        name: 'One Full Week',
        description: 'Play for 168 hours (1 week) total.',
        category: 'playtime',
        requirement: { type: 'playtime', value: 168 * 60 * 60 },
        rewards: { megaPotionChest: 10 },
        title: 'Week 1'
    },

    // ========== MORE SPECIFIC POTION ACHIEVEMENTS ==========
    {
        id: 'use_godlike',
        name: 'Divine Power',
        description: 'Use a Godlike Potion for the first time.',
        category: 'misc',
        requirement: { type: 'potion_used', value: 'godlike_potion' },
        rewards: { coins: 2000 },
        title: 'Divine'
    },
    {
        id: 'use_heavenly',
        name: 'Heavenly Blessing',
        description: 'Use a Heavenly Potion for the first time.',
        category: 'misc',
        requirement: { type: 'potion_used', value: 'heavenly_potion' },
        rewards: { coins: 3000 },
        title: 'Heavenly'
    },
    {
        id: 'use_pump_kings_blood',
        name: 'Spooky Potion',
        description: 'Use Pump King\'s Blood for the first time.',
        category: 'misc',
        requirement: { type: 'potion_used', value: 'pump_kings_blood' },
        rewards: { coins: 5000 },
        title: 'Spooky'
    },

    // ========== BREAKTHROUGH MILESTONES ==========
    {
        id: 'breakthrough_10',
        name: 'Breaking Barriers',
        description: 'Roll a Breakthrough 10 times.',
        category: 'breakthroughs',
        requirement: { type: 'breakthroughs', value: 10 },
        rewards: { runeChest: 5 },
        title: 'Barrier Breaker'
    },
    {
        id: 'breakthrough_50',
        name: 'Breakthrough Expert',
        description: 'Roll a Breakthrough 50 times.',
        category: 'breakthroughs',
        requirement: { type: 'breakthroughs', value: 50 },
        rewards: { runeChest: 8 },
        title: 'Expert Breaker'
    },
    {
        id: 'breakthrough_500',
        name: 'Breakthrough Master',
        description: 'Roll a Breakthrough 500 times.',
        category: 'breakthroughs',
        requirement: { type: 'breakthroughs', value: 500 },
        rewards: { runeChest: 12 },
        title: 'Master Breaker'
    },

    // ========== DREAMSPACE SPECIFIC ==========
    {
        id: 'obtain_daydream',
        name: 'Lost in Thought',
        description: 'Obtain DAYDREAM from Dreamspace.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'daydream' },
        rewards: { coins: 10000 },
        title: 'Daydreamer'
    },
    {
        id: 'obtain_thinking_space',
        name: 'Deep Thoughts',
        description: 'Obtain THINKING SPACE from Dreamspace.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'thinking_space' },
        rewards: { coins: 8000 },
        title: 'Thinker'
    },
    {
        id: 'obtain_cerebral',
        name: 'Mind Over Matter',
        description: 'Obtain CEREBRAL from Dreamspace.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'cerebral' },
        rewards: { voidCoins: 6 },
        title: 'Cerebral'
    },

    // ========== SAKURA SPECIFIC ==========
    {
        id: 'obtain_yozakura',
        name: 'Night Blossoms',
        description: 'Obtain YOZAKURA from Sakura.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'yozakura' },
        rewards: { coins: 20000 },
        title: 'Yozakura'
    },
    {
        id: 'obtain_wandering_petal',
        name: 'Petal Dancer',
        description: 'Obtain WANDERING PETAL from Sakura.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'wandering_petal' },
        rewards: { voidCoins: 10 },
        title: 'Wanderer'
    },

    // ========== LUCKY NUMBER ACHIEVEMENTS ==========
    {
        id: 'roll_777',
        name: 'Lucky Sevens',
        description: 'Roll exactly 777 times.',
        category: 'rolls',
        requirement: { type: 'rolls_exact', value: 777 },
        rewards: { potionChest: 7 },
        title: 'Lucky 7s'
    },
    {
        id: 'roll_1337',
        name: 'l33t',
        description: 'Roll exactly 1,337 times.',
        category: 'rolls',
        requirement: { type: 'rolls_exact', value: 1337 },
        rewards: { coins: 1337 },
        title: 'Elite'
    },
    {
        id: 'roll_6969',
        name: 'Nice.',
        description: 'Roll exactly 6,969 times.',
        category: 'rolls',
        requirement: { type: 'rolls_exact', value: 6969 },
        rewards: { coins: 6969 },
        title: 'Nice'
    },
    {
        id: 'roll_42069',
        name: 'The Funny Number',
        description: 'Roll exactly 42,069 times.',
        category: 'rolls',
        requirement: { type: 'rolls_exact', value: 42069 },
        rewards: { potionChest: 20 },
        title: 'Funny'
    },

    // ========== COLLECTION ACHIEVEMENTS ==========
    {
        id: 'collect_all_basic',
        name: 'Basic Collection',
        description: 'Collect all Basic tier auras.',
        category: 'discovery',
        requirement: { type: 'tier_complete', value: 'basic' },
        rewards: { coins: 5000 },
        title: 'Completionist I'
    },
    {
        id: 'collect_10_myths',
        name: 'Mythic Collector',
        description: 'Collect 10 different Mythic tier auras.',
        category: 'discovery',
        requirement: { type: 'tier_count', value: { tier: 'mythic', count: 10 } },
        rewards: { voidCoins: 3 },
        title: 'Myth Collector'
    },

    // ========== EXOTIC ACHIEVEMENTS ==========
    {
        id: 'obtain_exotic',
        name: 'Exotic Discovery',
        description: 'Obtain EXOTIC from Jungle.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'exotic' },
        rewards: { coins: 5000 },
        title: 'Exotic'
    },
    {
        id: 'obtain_exotic_apex',
        name: 'Apex Predator',
        description: 'Obtain EXOTIC : APEX.',
        category: 'auras',
        requirement: { type: 'aura_obtained', value: 'exotic_apex' },
        rewards: { megaPotionChest: 2, potions: { 'wild_potion': 10 }, runeChest: 2 },
        title: 'Apex'
    },

    // ========== BIOME COLLECTION ACHIEVEMENTS ==========
    // Deep Sea Collection
    {
        id: 'deep_sea_collector_3',
        name: 'Ocean Explorer',
        description: 'Collect 3 different Deep Sea exclusive auras.',
        category: 'auras',
        requirement: { type: 'biome_aura_count', value: { biome: 'deep sea', count: 3 } },
        rewards: { rarePotionChest: 5, potions: { 'aquatic_potion': 15 } },
        title: 'Ocean Explorer'
    },
    {
        id: 'deep_sea_collector_all',
        name: 'Master of the Abyss',
        description: 'Collect all Deep Sea exclusive auras.',
        category: 'auras',
        requirement: { type: 'biome_collection_complete', value: 'deep sea' },
        rewards: { megaPotionChest: 10, potions: { 'aquatic_potion': 50, 'transcendent_potion': 5 }, runeChest: 10 },
        title: 'Abyss Master'
    },

    // Dreamspace Collection
    {
        id: 'dreamspace_collector_3',
        name: 'Dream Wanderer',
        description: 'Collect 3 different Dreamspace exclusive auras.',
        category: 'auras',
        requirement: { type: 'biome_aura_count', value: { biome: 'dreamspace', count: 3 } },
        rewards: { rarePotionChest: 5, potions: { 'ethereal_potion': 15 } },
        title: 'Dream Wanderer'
    },
    {
        id: 'dreamspace_collector_all',
        name: 'Dream Lord',
        description: 'Collect all Dreamspace exclusive auras.',
        category: 'auras',
        requirement: { type: 'biome_collection_complete', value: 'dreamspace' },
        rewards: { megaPotionChest: 8, potions: { 'ethereal_potion': 50, 'heavenly_potion': 3 }, runeChest: 8 },
        title: 'Dream Lord'
    },

    // Sakura Collection
    {
        id: 'sakura_collector_5',
        name: 'Blossom Keeper',
        description: 'Collect 5 different Sakura exclusive auras.',
        category: 'auras',
        requirement: { type: 'biome_aura_count', value: { biome: 'sakura', count: 5 } },
        rewards: { rarePotionChest: 8, potions: { 'sakura_potion': 20 } },
        title: 'Blossom Keeper'
    },
    {
        id: 'sakura_collector_all',
        name: 'Cherry Blossom Master',
        description: 'Collect all Sakura exclusive auras.',
        category: 'auras',
        requirement: { type: 'biome_collection_complete', value: 'sakura' },
        rewards: { megaPotionChest: 12, potions: { 'sakura_potion': 75, 'transcendent_potion': 3 }, runeChest: 12 },
        title: 'Sakura Master'
    },

    // Pumpkin Moon Collection  
    {
        id: 'pumpkin_collector_3',
        name: 'Trick or Treater',
        description: 'Collect 3 different Pumpkin Moon exclusive auras.',
        category: 'auras',
        requirement: { type: 'biome_aura_count', value: { biome: 'pumpkin moon', count: 3 } },
        rewards: { rarePotionChest: 5, potions: { 'pump_kings_blood': 2 } },
        title: 'Trick or Treat'
    },
    {
        id: 'pumpkin_collector_all',
        name: 'Halloween King',
        description: 'Collect all Pumpkin Moon exclusive auras.',
        category: 'auras',
        requirement: { type: 'biome_collection_complete', value: 'pumpkin moon' },
        rewards: { megaPotionChest: 10, potions: { 'pump_kings_blood': 10, 'oblivion_potion': 3 }, runeChest: 8 },
        title: 'Halloween King'
    },

    // Glitched Collection
    {
        id: 'glitched_collector_5',
        name: 'Error Handler',
        description: 'Collect 5 different Glitched biome native auras.',
        category: 'auras',
        requirement: { type: 'biome_aura_count', value: { biome: 'glitched', count: 5 } },
        rewards: { rarePotionChest: 8, potions: { 'glitched_potion': 20 } },
        title: 'Error Handler'
    },
    {
        id: 'glitched_collector_10',
        name: 'System Admin',
        description: 'Collect 10 different Glitched biome native auras.',
        category: 'auras',
        requirement: { type: 'biome_aura_count', value: { biome: 'glitched', count: 10 } },
        rewards: { megaPotionChest: 8, potions: { 'glitched_potion': 50, 'transcendent_potion': 3 }, runeChest: 5 },
        title: 'Sys Admin'
    },

    // Cyberspace Collection
    {
        id: 'cyberspace_collector_5',
        name: 'Digital Pioneer',
        description: 'Collect 5 different Cyberspace exclusive auras.',
        category: 'auras',
        requirement: { type: 'biome_aura_count', value: { biome: 'cyberspace', count: 5 } },
        rewards: { rarePotionChest: 10, potions: { 'digital_potion': 20 } },
        title: 'Digital Pioneer'
    },
    {
        id: 'cyberspace_collector_all',
        name: 'Cyberspace Overlord',
        description: 'Collect all Cyberspace exclusive auras.',
        category: 'auras',
        requirement: { type: 'biome_collection_complete', value: 'cyberspace' },
        rewards: { megaPotionChest: 15, potions: { 'digital_potion': 75, 'oblivion_potion': 5 }, runeChest: 15, voidCoins: 5 },
        title: 'Overlord'
    },

    // ========== THEMED AURA GROUP ACHIEVEMENTS ==========
    // Twilight Family
    {
        id: 'twilight_family',
        name: 'Twilight Collector',
        description: 'Collect Twilight and all its mutations.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['twilight', 'twilight_iridescent', 'twilight_withering'] },
        rewards: { megaPotionChest: 5, potions: { 'midnight_potion': 30 }, runeChest: 5 },
        title: 'Twilight Master'
    },

    // Matrix Family
    {
        id: 'matrix_family',
        name: 'Red Pill Blue Pill',
        description: 'Collect Matrix and all its variants.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['matrix', 'matrix_overdrive', 'matrix_reality'] },
        rewards: { megaPotionChest: 8, potions: { 'glitched_potion': 40, 'transcendent_potion': 5 }, runeChest: 8 },
        title: 'The One'
    },

    // Celestial Family
    {
        id: 'celestial_family',
        name: 'Divine Collector',
        description: 'Collect Celestial and Celestial : Divine.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['celestial', 'celestial_divine'] },
        rewards: { rarePotionChest: 10, potions: { 'divine_potion': 20 }, runeChest: 5 },
        title: 'Celestial'
    },

    // Arcane Family
    {
        id: 'arcane_family',
        name: 'Arcane Mastery',
        description: 'Collect Arcane, Arcane : Legacy, and Arcane : Dark.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['arcane', 'arcane_legacy', 'arcane_dark'] },
        rewards: { rarePotionChest: 8, potions: { 'mystical_potion': 25, 'godlike_potion': 3 } },
        title: 'Arcanist'
    },

    // Sailor Family
    {
        id: 'sailor_family',
        name: 'Sea Captain',
        description: 'Collect Sailor and Sailor : Flying Dutchman.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['sailor', 'sailor_dutchman'] },
        rewards: { megaPotionChest: 3, potions: { 'aquatic_potion': 20 }, runeChest: 3 },
        title: 'Captain'
    },

    // Stormal Family
    {
        id: 'stormal_family',
        name: 'Storm Master',
        description: 'Collect Stormal and Stormal : Hurricane.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['stormal', 'stormal_hurricane'] },
        rewards: { rarePotionChest: 6, potions: { 'tempest_potion': 20 } },
        title: 'Storm Master'
    },

    // Astral Family
    {
        id: 'astral_family',
        name: 'Stargazer Supreme',
        description: 'Collect all Astral variants.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['astral', 'astral_zodiac', 'astral_divinity'] },
        rewards: { megaPotionChest: 10, potions: { 'stellar_potion': 50, 'transcendent_potion': 5 }, runeChest: 10 },
        title: 'Stargazer'
    },

    // Blizzard Family
    {
        id: 'blizzard_family',
        name: 'Blizzard Master',
        description: 'Collect Blizzard and Blizzard : Black.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['blizzard', 'blizzard_black'] },
        rewards: { megaPotionChest: 5, potions: { 'frost_potion': 30, 'heavenly_potion': 2 }, runeChest: 5 },
        title: 'Blizzard'
    },

    // Lunar Family
    {
        id: 'lunar_family',
        name: 'Moon Cycle',
        description: 'Collect Lunar and Lunar : Full Moon.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['lunar', 'lunar_full_moon'] },
        rewards: { rarePotionChest: 6, potions: { 'lunar_potion': 20 } },
        title: 'Lunar'
    },

    // Solar Family
    {
        id: 'solar_family',
        name: 'Sun Cycle',
        description: 'Collect Solar and Solar : Solstice.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['solar', 'solar_solstice'] },
        rewards: { rarePotionChest: 6, potions: { 'solar_potion': 20 } },
        title: 'Solar'
    },

    // Gargantua Family
    {
        id: 'gargantua_family',
        name: 'Black Hole Explorer',
        description: 'Collect Gargantua and Gargantua : Whitehole.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['gargantua', 'gargantua_whitehole'] },
        rewards: { megaPotionChest: 20, potions: { 'cosmic_potion': 50, 'transcendent_potion': 10, 'oblivion_potion': 5 }, runeChest: 15 },
        title: 'Black Hole'
    },

    // Abyssal Hunter Family
    {
        id: 'abyssal_family',
        name: 'Deep Hunter',
        description: 'Collect Abyssal Hunter and Abyssal Hunter : Hadopelagic.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['abyssal_hunter', 'abyssal_hunter_hadopelagic'] },
        rewards: { megaPotionChest: 15, potions: { 'abyssal_potion': 50, 'transcendent_potion': 8 }, runeChest: 12 },
        title: 'Deep Hunter'
    },

    // Chromatic Family
    {
        id: 'chromatic_family',
        name: 'Full Rainbow',
        description: 'Collect Chromatic and Chromatic : Genesis.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['chromatic', 'chromatic_genesis'] },
        rewards: { megaPotionChest: 8, potions: { 'prismatic_potion': 30, 'heavenly_potion': 5 }, runeChest: 8 },
        title: 'Rainbow'
    },

    // Archangel Family
    {
        id: 'archangel_family',
        name: 'Angel and Demon',
        description: 'Collect Archangel and Archangel : Fallen.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['archangel', 'archangel_fallen'] },
        rewards: { megaPotionChest: 10, potions: { 'divine_potion': 25, 'infernal_potion': 25 }, runeChest: 8 },
        title: 'Duality'
    },

    // ========== BIOME ROLL COUNT ACHIEVEMENTS ==========
    {
        id: 'hell_rolls_100',
        name: 'Heat Resistance',
        description: 'Roll 100 times in Hell biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'HELL', count: 100 } },
        rewards: { potions: { 'infernal_potion': 10, 'speed_potion': 20 } },
        title: 'Heat Resistant'
    },
    {
        id: 'hell_rolls_1000',
        name: 'Fireproof',
        description: 'Roll 1,000 times in Hell biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'HELL', count: 1000 } },
        rewards: { rarePotionChest: 8, potions: { 'infernal_potion': 50 } },
        title: 'Fireproof'
    },
    {
        id: 'heaven_rolls_100',
        name: 'Touched by Angels',
        description: 'Roll 100 times in Heaven biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'HEAVEN', count: 100 } },
        rewards: { potions: { 'heavenly_potion': 1, 'lucky_potion': 20 } },
        title: 'Angel Touched'
    },
    {
        id: 'heaven_rolls_1000',
        name: 'Heavenly Dweller',
        description: 'Roll 1,000 times in Heaven biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'HEAVEN', count: 1000 } },
        rewards: { megaPotionChest: 5, potions: { 'heavenly_potion': 5 }, runeChest: 3 },
        title: 'Heavenly'
    },
    {
        id: 'starfall_rolls_100',
        name: 'Star Watcher',
        description: 'Roll 100 times in Starfall biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'STARFALL', count: 100 } },
        rewards: { potions: { 'stellar_potion': 10, 'speed_potion': 20 } },
        title: 'Star Watcher'
    },
    {
        id: 'starfall_rolls_1000',
        name: 'Constellation Master',
        description: 'Roll 1,000 times in Starfall biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'STARFALL', count: 1000 } },
        rewards: { rarePotionChest: 10, potions: { 'stellar_potion': 50, 'godlike_potion': 2 } },
        title: 'Constellation'
    },
    {
        id: 'snowy_rolls_100',
        name: 'Snowball Fighter',
        description: 'Roll 100 times in Snowy biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'SNOWY', count: 100 } },
        rewards: { potions: { 'frost_potion': 10, 'speed_potion': 20 } },
        title: 'Snowball'
    },
    {
        id: 'snowy_rolls_1000',
        name: 'Frost Giant',
        description: 'Roll 1,000 times in Snowy biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'SNOWY', count: 1000 } },
        rewards: { rarePotionChest: 8, potions: { 'frost_potion': 50 } },
        title: 'Frost Giant'
    },
    {
        id: 'glitched_rolls_100',
        name: 'Bug Tester',
        description: 'Roll 100 times in Glitched biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'GLITCHED', count: 100 } },
        rewards: { potions: { 'glitched_potion': 10 }, potionChest: 3 },
        title: 'Bug Tester'
    },
    {
        id: 'glitched_rolls_1000',
        name: 'Glitch Hunter',
        description: 'Roll 1,000 times in Glitched biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'GLITCHED', count: 1000 } },
        rewards: { megaPotionChest: 5, potions: { 'glitched_potion': 50, 'godlike_potion': 2 } },
        title: 'Glitch Hunter'
    },
    {
        id: 'null_rolls_100',
        name: 'Void Traveler',
        description: 'Roll 100 times in Null biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'NULL', count: 100 } },
        rewards: { coins: 5000 },
        title: 'Void Traveler'
    },
    {
        id: 'aurora_rolls_100',
        name: 'Northern Bound',
        description: 'Roll 100 times in Aurora biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'AURORA', count: 100 } },
        rewards: { coins: 3000 },
        title: 'Northern Bound'
    },
    {
        id: 'corruption_rolls_100',
        name: 'Corruption Resistant',
        description: 'Roll 100 times in Corruption biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'CORRUPTION', count: 100 } },
        rewards: { coins: 3000 },
        title: 'Incorruptible'
    },
    {
        id: 'rainy_rolls_1000',
        name: 'Rain Dancer',
        description: 'Roll 1,000 times in Rainy biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'RAINY', count: 1000 } },
        rewards: { coins: 8000 },
        title: 'Rain Dancer'
    },
    {
        id: 'sandstorm_rolls_1000',
        name: 'Desert Nomad',
        description: 'Roll 1,000 times in Sandstorm biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'SANDSTORM', count: 1000 } },
        rewards: { coins: 8000 },
        title: 'Desert Nomad'
    },
    {
        id: 'jungle_rolls_1000',
        name: 'Jungle Explorer',
        description: 'Roll 1,000 times in Jungle biome.',
        category: 'misc',
        requirement: { type: 'biome_rolls', value: { biome: 'JUNGLE', count: 1000 } },
        rewards: { coins: 8000 },
        title: 'Jungle Explorer'
    },

    // ========== BIOME RARE ROLL ACHIEVEMENTS ==========
    {
        id: 'glitched_1m',
        name: 'Million Dollar Bug',
        description: 'Roll a 1M+ aura in Glitched biome.',
        category: 'misc',
        requirement: { type: 'biome_rare_roll', value: { biome: 'GLITCHED', rarity: 1000000 } },
        rewards: { coins: 10000 },
        title: 'Million Bug'
    },
    {
        id: 'starfall_100m',
        name: 'Shooting Star',
        description: 'Roll a 100M+ aura in Starfall biome.',
        category: 'misc',
        requirement: { type: 'biome_rare_roll', value: { biome: 'STARFALL', rarity: 100000000 } },
        rewards: { voidCoins: 5 },
        title: 'Shooting Star'
    },
    {
        id: 'heaven_100m',
        name: 'Divine Intervention',
        description: 'Roll a 100M+ aura in Heaven biome.',
        category: 'misc',
        requirement: { type: 'biome_rare_roll', value: { biome: 'HEAVEN', rarity: 100000000 } },
        rewards: { voidCoins: 5 },
        title: 'Divine'
    },
    {
        id: 'null_100m',
        name: 'Something from Nothing',
        description: 'Roll a 100M+ aura in Null biome.',
        category: 'misc',
        requirement: { type: 'biome_rare_roll', value: { biome: 'NULL', rarity: 100000000 } },
        rewards: { voidCoins: 8 },
        title: 'From Nothing'
    },
    {
        id: 'deep_sea_100m',
        name: 'Deep Sea Treasure',
        description: 'Roll a 100M+ aura in Deep Sea biome.',
        category: 'misc',
        requirement: { type: 'biome_rare_roll', value: { biome: 'DEEP SEA', rarity: 100000000 } },
        rewards: { voidCoins: 5 },
        title: 'Deep Treasure'
    },
    {
        id: 'aurora_1b',
        name: 'Aurora Borealis',
        description: 'Roll a 1B+ aura in Aurora biome.',
        category: 'misc',
        requirement: { type: 'biome_rare_roll', value: { biome: 'AURORA', rarity: 1000000000 } },
        rewards: { voidCoins: 15 },
        title: 'Aurora Borealis'
    },
    {
        id: 'corruption_1b',
        name: 'Corrupted Divinity',
        description: 'Roll a 1B+ aura in Corruption biome.',
        category: 'misc',
        requirement: { type: 'biome_rare_roll', value: { biome: 'CORRUPTION', rarity: 1000000000 } },
        rewards: { voidCoins: 15 },
        title: 'Corrupted'
    },

    // ========== WEATHER MASTERY ACHIEVEMENTS ==========
    {
        id: 'all_biomes_visited',
        name: 'World Traveler',
        description: 'Visit every biome at least once.',
        category: 'misc',
        requirement: { type: 'biomes_visited_count', value: 15 },
        rewards: { coins: 25000 },
        title: 'World Traveler'
    },
    {
        id: 'all_biomes_rolled',
        name: 'Universal Roller',
        description: 'Roll at least once in every biome.',
        category: 'misc',
        requirement: { type: 'all_biomes_rolled', value: true },
        rewards: { voidCoins: 5 },
        title: 'Universal'
    },

    // ========== NATIVE AURA ACHIEVEMENTS ==========
    {
        id: 'native_auras_10',
        name: 'Native Hunter',
        description: 'Roll 10 native auras (boosted chance in their biome).',
        category: 'misc',
        requirement: { type: 'native_auras_rolled', value: 10 },
        rewards: { coins: 5000 },
        title: 'Native Hunter'
    },
    {
        id: 'native_auras_50',
        name: 'Biome Expert',
        description: 'Roll 50 native auras.',
        category: 'misc',
        requirement: { type: 'native_auras_rolled', value: 50 },
        rewards: { coins: 20000 },
        title: 'Biome Expert'
    },
    {
        id: 'native_auras_100',
        name: 'Native Master',
        description: 'Roll 100 native auras.',
        category: 'misc',
        requirement: { type: 'native_auras_rolled', value: 100 },
        rewards: { voidCoins: 3 },
        title: 'Native Master'
    },

    // ========== EGYPTIAN GODS COLLECTION ==========
    {
        id: 'egyptian_gods',
        name: 'Pharaoh\'s Blessing',
        description: 'Collect Anubis and Neferkhaf.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['anubis', 'neferkhaf'] },
        rewards: { voidCoins: 12 },
        title: 'Pharaoh'
    },

    // ========== COSMIC COLLECTION ==========
    {
        id: 'cosmic_collection',
        name: 'Cosmic Explorer',
        description: 'Collect Galaxy, Cosmos, and Supernova.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['galaxy', 'cosmos', 'supernova'] },
        rewards: { voidCoins: 25 },
        title: 'Cosmic'
    },

    // ========== HELL COLLECTION ==========
    {
        id: 'hell_collection',
        name: 'Infernal Collection',
        description: 'Collect Hades, Tartarus, and Avernus.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['hades', 'tartarus', 'avernus'] },
        rewards: { voidCoins: 20 },
        title: 'Infernal'
    },

    // ========== STAR COLLECTION ==========
    {
        id: 'star_collection',
        name: 'Star Collector',
        description: 'Collect all Star variations (★, ★★, ★★★).',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['star_basic', 'star_2', 'star_3'] },
        rewards: { coins: 15000 },
        title: 'Star Collector'
    },

    // ========== OVERTURE COLLECTION ==========
    {
        id: 'overture_collection',
        name: 'Symphony Complete',
        description: 'Collect Overture, Overture : History, Symphony, and Orchestra.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['overture', 'overture_history', 'symphony', 'orchestra'] },
        rewards: { voidCoins: 15 },
        title: 'Maestro'
    },

    // ========== UNDERWATER COLLECTION ==========
    {
        id: 'underwater_collection',
        name: 'Ocean Master',
        description: 'Collect Poseidon, Nautilus, Aquatic, and Megalodon.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['poseidon', 'nautilus', 'aquatic', 'megalodon'] },
        rewards: { voidCoins: 20 },
        title: 'Ocean Master'
    },

    // ========== GLITCH MASTER COLLECTION ==========
    {
        id: 'glitch_master_collection',
        name: 'System Crash',
        description: 'Collect Glitch, Fatal Error, Matrix, and Godmode.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['glitch', 'fatal_error', 'matrix', 'godmode'] },
        rewards: { voidCoins: 25 },
        title: 'System Crash'
    },

    // ========== DIVINUS COLLECTION ==========
    {
        id: 'divinus_collection',
        name: 'Divine Lineage',
        description: 'Collect Divinus, Divinus : Angel, and Divinus : Guardian.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['divinus', 'divinus_angel', 'divinus_guardian'] },
        rewards: { voidCoins: 8 },
        title: 'Divine Lineage'
    },

    // ========== TIME-BASED AURA COLLECTION ==========
    {
        id: 'day_night_collection',
        name: 'Day and Night',
        description: 'Collect Solar, Lunar, Twilight, and Nightlife.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['solar', 'lunar', 'twilight', 'nightlife'] },
        rewards: { coins: 25000 },
        title: 'Day & Night'
    },

    // ========== ULTIMATE COLLECTIONS ==========
    {
        id: 'balance_collection',
        name: 'Perfect Balance',
        description: 'Collect Equinox and Solstice.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['equinox', 'solstice'] },
        rewards: { voidCoins: 50 },
        title: 'Balanced'
    },

    // ========== BIOME VISIT STREAKS ==========
    {
        id: 'same_biome_10',
        name: 'Biome Camper',
        description: 'Stay in the same biome for 10 consecutive biome changes.',
        category: 'misc',
        requirement: { type: 'biome_streak', value: 10 },
        rewards: { coins: 5000 },
        title: 'Camper'
    },

    // ========== NIHILITY COLLECTION ==========
    {
        id: 'nihility_collection',
        name: 'Void Master',
        description: 'Collect Nihility and Nihility : Sunyata.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['nihility', 'nihility_sunyata'] },
        rewards: { voidCoins: 30 },
        title: 'Void Master'
    },

    // ========== RAGE COLLECTION ==========
    {
        id: 'rage_collection',
        name: 'Rage Mode',
        description: 'Collect all Rage variants.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['rage', 'rage_heated', 'rage_brawler'] },
        rewards: { coins: 15000 },
        title: 'Raging'
    },

    // ========== SUBTERMINAL COLLECTION ==========
    {
        id: 'subterminal_collection',
        name: 'Terminal Access',
        description: 'Collect Subterminal and Subterminal : Override.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['subterminal', 'subterminal_override'] },
        rewards: { voidCoins: 15 },
        title: 'Terminal'
    },

    // ========== EXOTIC VOID COLLECTION ==========
    {
        id: 'exotic_void_collection',
        name: 'Exotic Collector',
        description: 'Collect Exotic, Exotic : Apex, and Exotic : Void.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['exotic', 'exotic_apex', 'exotic_void'] },
        rewards: { voidCoins: 15 },
        title: 'Exotic Master'
    },

    // ========== HARNESSED COLLECTION ==========
    {
        id: 'harnessed_collection',
        name: 'Power Harnessed',
        description: 'Collect Harnessed and Harnessed : Elements.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['harnessed', 'harnessed_elements'] },
        rewards: { voidCoins: 8 },
        title: 'Harnessed'
    },

    // ========== KYAWTHUITE COLLECTION ==========
    {
        id: 'kyawthuite_collection',
        name: 'Rare Gem Collector',
        description: 'Collect all Kyawthuite variants.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['kyawthuite', 'kyawthuite_remembrance', 'kyawthuite_iridescent'] },
        rewards: { voidCoins: 20 },
        title: 'Gem Collector'
    },

    // ========== UNDEAD COLLECTION ==========
    {
        id: 'undead_collection',
        name: 'Undying',
        description: 'Collect Undead and Undead : Devil.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['undead', 'undead_devil'] },
        rewards: { coins: 15000 },
        title: 'Undying'
    },

    // ========== FLORA COLLECTION ==========
    {
        id: 'flora_collection',
        name: 'Garden Master',
        description: 'Collect Flora, Flora : Evergreen, and Garden.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['flora', 'flora_evergreen', 'garden'] },
        rewards: { coins: 20000 },
        title: 'Gardener'
    },

    // ========== HELIOS COLLECTION ==========
    {
        id: 'helios_collection',
        name: 'Sun God',
        description: 'Collect Helios, Helios : Flare, and Solaris.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['helios', 'helios_flare', 'solaris'] },
        rewards: { voidCoins: 25 },
        title: 'Sun God'
    },

    // ========== CRIMSON COLLECTION ==========
    {
        id: 'crimson_collection',
        name: 'Blood Trail',
        description: 'Collect Crimson, Crimson : Bloodmoon, and Bloodbath.',
        category: 'auras',
        requirement: { type: 'auras_all_obtained', value: ['crimson', 'crimson_bloodmoon', 'bloodbath'] },
        rewards: { voidCoins: 20 },
        title: 'Bloodied'
    }
];

// Achievement category colors
const ACHIEVEMENT_CATEGORIES = {
    rolls: { name: 'Rolls', color: '#3498db', icon: '🎲' },
    discovery: { name: 'Highest Stat', color: '#f39c12', icon: '✨' },
    playtime: { name: 'Playtime', color: '#9b59b6', icon: '⏱️' },
    breakthroughs: { name: 'Breakthroughs', color: '#e74c3c', icon: '💥' },
    auras: { name: 'Auras Obtained', color: '#2ecc71', icon: '🌟' },
    misc: { name: 'Miscellaneous', color: '#1abc9c', icon: '⭐' },
    progress: { name: 'Achievement Progress', color: '#ff00ff', icon: '🏆' }
};

// Helper function to check if achievement is unlocked
function isAchievementUnlocked(achievementId, playerData) {
    return playerData.completed && playerData.completed[achievementId];
}

// Helper to format rewards for display
function formatRewards(rewards) {
    const parts = [];
    if (rewards.coins) parts.push(`💰 ${rewards.coins.toLocaleString()} Coins`);
    if (rewards.voidCoins) parts.push(`🌀 ${rewards.voidCoins} Void Coin${rewards.voidCoins > 1 ? 's' : ''}`);
    if (rewards.potionChest) parts.push(`� ${rewards.potionChest}x Potion Chest`);
    if (rewards.rarePotionChest) parts.push(`📦 ${rewards.rarePotionChest}x Rare Potion Chest`);
    if (rewards.megaPotionChest) parts.push(`📦 ${rewards.megaPotionChest}x Mega Potion Chest`);
    if (rewards.runeChest) parts.push(`📦 ${rewards.runeChest}x Random Rune Chest`);
    if (rewards.buff) parts.push(`⚡ Buff: ${rewards.buff}`);
    if (rewards.potions) {
        for (const [id, count] of Object.entries(rewards.potions)) {
            const potion = typeof POTIONS !== 'undefined' ? POTIONS.find(p => p.id === id) : null;
            const name = potion ? potion.name : id;
            parts.push(`🧪 ${count}x ${name}`);
        }
    }
    if (parts.length === 0) parts.push('🏅 Title Only');
    return parts.join(', ');
}
