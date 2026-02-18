const AURAS = [



  // === STANDARD OBTAINABLE AURAS ===



  // --- Tier (Dreamspace Exclusive) ---

  { id: 'star_dreamspace', name: "★", chance: 100, biomeExclusive: 'DREAMSPACE', color: '#ff69b4', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff69b4,#ff1493)', fontFamily: "'Cinzel', serif" },

  { id: 'double_star_dreamspace', name: "★★", chance: 1000, biomeExclusive: 'DREAMSPACE', color: '#ff1493', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff1493,#c71585)', fontFamily: "'Oxanium', sans-serif" },



  // --- Common Tier (1/1 to 1/8) ---

  { id: 'nothing', name: "Nothing", chance: 1, biomeExclusive: 'LIMBO', color: '#2c3e50', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #2c3e50, #7f8c8d)', fontFamily: "'Open Sans', sans-serif" },

  { id: 'common', name: "Common", chance: 2, color: '#0000ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #0000ff, #7f8c8d)', fontFamily: "'Mulish', sans-serif" },

  { id: 'uncommon', name: "Uncommon", chance: 4, color: '#ff0000', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #ff0000, #7f8c8d)', fontFamily: "'Raleway', sans-serif" },

  { id: 'good', name: "Good", chance: 5, color: '#e74c3c', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #e74c3c, #7f8c8d)', fontFamily: "'Outfit', sans-serif" },

  { id: 'natural', name: "Natural", chance: 8, nativeChance: 2, biome: 'JUNGLE', nativeBiome: 'jungle', color: '#2c3e50', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #2c3e50, #7f8c8d)', fontFamily: "'Neucha', cursive" },
  
  // === COMMON-TIER SYNONYM AURAS ===

{ id: 'ordinary', name: "Ordinary", chance: 2, color: '#1f4fff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1f4fff,#7f8c8d)', fontFamily: "'Mulish', sans-serif" },

{ id: 'standard', name: "Standard", chance: 2, color: '#2a5bff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2a5bff,#95a5a6)', fontFamily: "'Mulish', sans-serif" },

{ id: 'typical', name: "Typical", chance: 3, color: '#3b6cff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#3b6cff,#7f8c8d)', fontFamily: "'Raleway', sans-serif" },

{ id: 'basic', name: "Basic", chance: 2, color: '#0048cc', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#0048cc,#7f8c8d)', fontFamily: "'Outfit', sans-serif" },

{ id: 'average', name: "Average", chance: 3, color: '#4a78ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#4a78ff,#bdc3c7)', fontFamily: "'Open Sans', sans-serif" },

{ id: 'regular', name: "Regular", chance: 2, color: '#2850ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2850ff,#7f8c8d)', fontFamily: "'Mulish', sans-serif" },

{ id: 'baseline', name: "Baseline", chance: 3, color: '#3f66ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#3f66ff,#95a5a6)', fontFamily: "'Raleway', sans-serif" },

{ id: 'routine', name: "Routine", chance: 2, color: '#355dff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#355dff,#7f8c8d)', fontFamily: "'Outfit', sans-serif" },

{ id: 'plain', name: "Plain", chance: 3, color: '#5c7cff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#5c7cff,#bdc3c7)', fontFamily: "'Open Sans', sans-serif" },

{ id: 'default', name: "Default", chance: 2, color: '#2448ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2448ff,#7f8c8d)', fontFamily: "'Mulish', sans-serif" },



  // --- Rare Tier (1/16 to 1/1,024) ---

  { id: 'rare', name: "Rare", chance: 16, color: '#9b59b6', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #9b59b6, #8e44ad)', fontFamily: "'Ubuntu', sans-serif" },

  { id: 'divinus', name: "Divinus", chance: 32, nativeChance: 6, weather: 'heaven', color: '#f1c40f', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #f1c40f, #f39c12)', fontFamily: "'Cinzel Decorative', sans-serif" },

  { id: 'crystallized', name: "Crystallized", chance: 64, color: '#00bcd4', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #00bcd4, #0097a7)', fontFamily: "'PT Sans', sans-serif" },

  { id: 'rage', name: "Rage", chance: 128, color: '#e74c3c', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)', fontFamily: "'Changa', sans-serif" },

  { id: 'topaz', name: "Topaz", chance: 150, color: '#ffc107', textColor: '#000000', gradient: 'linear-gradient(135deg, #ffc107, #ff9800)', fontFamily: "'Shadows Into Light', cursive" },

  { id: 'ruby', name: "Ruby", chance: 350, color: '#e91e63', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #e91e63, #c2185b)', fontFamily: "'Satisfy', cursive" },

  { id: 'forbidden', name: "Forbidden", chance: 403, nativeChance: 202, weather: 'cyberspace', color: '#673ab7', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #673ab7, #512da8)', fontFamily: "'Fira Sans', sans-serif" },

  { id: 'emerald', name: "Emerald", chance: 500, nativeChance: 100, biome: 'JUNGLE', nativeBiome: 'jungle', color: '#4caf50', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #4caf50, #388e3c)', fontFamily: "'Public Sans', sans-serif" },

  { id: 'gilded', name: "Gilded", chance: 512, nativeChance: 128, weather: 'sandstorm', color: '#ffd700', textColor: '#000000', gradient: 'linear-gradient(135deg, #ffd700, #ffb300)', fontFamily: "'Alegreya Sans', sans-serif" },

  { id: 'ink', name: "Ink", chance: 700, color: '#212121', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #212121, #424242)', fontFamily: "'PT Serif', serif" },

  { id: 'jackpot', name: "Jackpot", chance: 777, nativeChance: 194, weather: 'sandstorm', color: '#00e676', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #00e676, #00c853)', fontFamily: "'Knewave', sans-serif" },

  { id: 'sapphire', name: "Sapphire", chance: 800, color: '#2196f3', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #2196f3, #1976d2)', fontFamily: "'Quicksand', sans-serif" },

  { id: 'aquamarine', name: "Aquamarine", chance: 900, nativeChance: 225, biome: 'DEEP SEA', nativeBiome: 'deep sea', color: '#00acc1', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #00acc1, #00838f)', fontFamily: "'Merienda', cursive" },

  { id: 'wind', name: "Wind", chance: 900, nativeChance: 300, weather: 'windy', color: '#81d4fa', textColor: '#000000', gradient: 'linear-gradient(135deg, #81d4fa, #4fc3f7)', fontFamily: "'Handlee', cursive" },

  { id: 'undead_basic', name: "Undead", chance: 12000, nativeChance: 2000, weather: 'hell', color: '#8b0000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#8b0000,#dc143c)', fontFamily: "'Fruktur', sans-serif" },

  { id: 'corrosive', name: "Corrosive", chance: 12000, nativeChance: 2400, weather: 'corruption', color: '#ff6347', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff6347,#8b0000)', fontFamily: "'Inter', sans-serif" },

  { id: 'rage_heated', name: "Rage : Heated", chance: 12800, color: '#ff4500', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff4500,#ff0000)', fontFamily: "'Bebas Neue', sans-serif" },

  { id: 'leak', name: "L E A K", chance: 14000, color: '#4169e1', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#4169e1,#1e90ff)', fontFamily: "'Roboto', sans-serif" },

  { id: 'ink_leak', name: "INK: LEAK", chance: 14000, color: '#4169e1', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#4169e1,#1e90ff)', fontFamily: "'Libre Baskerville', serif" },

  { id: 'powered', name: "Powered", chance: 16384, color: '#ffd700', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffd700,#ffed4e)', fontFamily: "'Lato', sans-serif" },

  { id: 'amethyst', name: "Amethyst", chance: 9333700, color: '#9b59b6', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#9b59b6,#8e44ad)', fontFamily: "'Sarpanch', sans-serif" },

  { id: 'copper', name: "COPPER", chance: 29000, color: '#b87333', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#b87333,#cd7f32)', fontFamily: "'Montserrat', sans-serif" },

  { id: 'watt', name: "WATT", chance: 32768, color: '#ffff00', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffff00,#ffd700)', fontFamily: "'Pathway Extreme', sans-serif" },

  { id: 'precious', name: "Precious", chance: 1024, color: '#ffeb3b', textColor: '#000000', gradient: 'linear-gradient(135deg, #ffeb3b, #fdd835)', fontFamily: "'Noto Sans', sans-serif" },

  { id: 'lightning', name: "Lightning", chance: 40000, biomeExclusive: 'RAINY', weather: 'rainy', ignoreLuck: true, color: '#ffeb3b', textColor: '#000000', gradient: 'linear-gradient(135deg, #ffeb3b, #ffc107)', fontFamily: "'Racing Sans One', sans-serif" },

  { id: 'aquatic', name: "Aquatic", chance: 40000, color: '#1e90ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1e90ff,#00bcd4)', fontFamily: "'Cabin', sans-serif" },



  // --- Epic Tier (1/1,180 to 1/100,000) ---

  { id: 'atomic', name: "Atomic", chance: 1180, color: '#00ffff', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #00ffff, #00cccc)', fontFamily: "'Merriweather', serif" },

  { id: 'glock', name: "Glock", chance: 1700, color: '#c0c0c0', textColor: '#000000', gradient: 'linear-gradient(135deg, #c0c0c0, #808080)', fontFamily: "'IBM Plex Mono', monospace" },

  { id: 'magnetic', name: "Magnetic", chance: 2048, color: '#ffff00', textColor: '#000000', gradient: 'linear-gradient(135deg, #ffff00, #ffcc00)', fontFamily: "'Source Sans 3', sans-serif" },

  { id: 'ash', name: "Ash", chance: 2300, color: '#696969', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #696969, #4a4a4a)', fontFamily: "'Karla', sans-serif" },

  { id: 'archmage', name: "Archmage", chance: 1766000, color: '#4b2e83', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#4b2e83,#2a145a)', fontFamily: "'Sarpanch', sans-serif" },

  { id: 'symbiosis', name: "symbiosis", chance: 1331201, nativeChance: 266240, weather: 'corruption', color: '#2ecc71', textColor: '#000000', gradient: 'linear-gradient(135deg,#2ecc71,#1abc9c)', fontFamily: "'Sarpanch', sans-serif" },

  { id: 'glacier', name: "Glacier", chance: 2304, nativeChance: 768, weather: 'snowy', color: '#87ceeb', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #87ceeb, #4682b4)', fontFamily: "'Nunito', sans-serif" },

  { id: 'glacier_tundra', name: "Glacier : Tundra", chance: 230400, nativeChance: 76800, weather: 'snowy', color: '#6fa3d2', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#6fa3d2,#1f4f7a)', fontFamily: "'Nunito', sans-serif" },

  { id: 'player', name: "PLAYER", chance: 3000, nativeChance: 1500, weather: 'cyberspace', color: '#ffd700', textColor: '#000000', gradient: 'linear-gradient(135deg, #ffd700, #ffb347)', fontFamily: "'Share Tech Mono', monospace" },

  { id: 'apatite', name: "Apatite", chance: 3133133, color: '#2f80ed', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2f80ed,#56ccf2)', fontFamily: "'Sarpanch', sans-serif" },

  { id: 'apatite_cerulean', name: "Apatite : Cerulean", chance: 31331330, color: '#1f6fe5', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1f6fe5,#2bb2ff)', fontFamily: "'Sarpanch', sans-serif" },

  { id: 'flora', name: "Flora", chance: 3700, nativeChance: 740, biome: 'JUNGLE', nativeBiome: 'jungle', color: '#228b22', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #228b22, #32cd32)', fontFamily: "'Caveat', cursive" },

  { id: 'cola', name: "Cola", chance: 3999, color: '#4b2f20', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #4b2f20, #6b4423)', fontFamily: "'Berkshire Swash', cursive" },

  { id: 'sidereum', name: "Sidereum", chance: 4096, color: '#ffd700', textColor: '#000000', gradient: 'linear-gradient(135deg, #ffd700, #ffed4e)', fontFamily: "'Orbitron', sans-serif" },

  { id: 'bleeding', name: "Bleeding", chance: 4444, color: '#8b0000', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #8b0000, #dc143c)', fontFamily: "'Manrope', sans-serif" },

  { id: 'flutter', name: "Flutter", chance: 5000, nativeChance: 1250, biome: 'SAKURA', nativeBiome: 'sakura', color: '#ff69b4', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #ff69b4, #ff1493)', fontFamily: "'Roboto Condensed', sans-serif" },

  { id: 'evanescent', name: "Evanescent", chance: 3360000, nativeChance: 840000, weather: 'rainy', color: '#b8e0ff', textColor: '#000000', gradient: 'linear-gradient(135deg,#b8e0ff,#7fb3ff)', fontFamily: "'Sarpanch', sans-serif" },

  { id: 'starlight', name: "STARLIGHT", chance: 50000, nativeChance: 10000, weather: 'starfall', color: '#f0e68c', textColor: '#000000', gradient: 'linear-gradient(135deg,#f0e68c,#ffd700)', fontFamily: "'Marcellus SC', serif" },

  { id: 'star_rider', name: "Star Rider", chance: 50000, nativeChance: 10000, weather: 'starfall', color: '#87ceeb', textColor: '#000000', gradient: 'linear-gradient(135deg,#87ceeb,#4682b4)', fontFamily: "'Syncopate', sans-serif" },

  { id: 'flushed', name: "Flushed", chance: 6900, color: '#ff6b6b', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff6b6b,#ff5252)', fontFamily: "'Permanent Marker', cursive" },

  { id: 'flushed_lobotomy', name: "Flushed : Lobotomy", chance: 69000, color: '#ff6b6b', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff6b6b,#ff5252)', fontFamily: "'Boogaloo', sans-serif" },

  { id: 'hazard_rays', name: "HAZARD : RAYS", chance: 70000, nativeChance: 14000, weather: 'corruption', color: '#ff8c00', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff8c00,#ff6347)', fontFamily: "'Oswald', sans-serif" },

  { id: 'nautilus', name: "Nautilus", chance: 70000, nativeChance: 17500, biome: 'DEEP SEA', nativeBiome: 'deep sea', color: '#4682b4', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#4682b4,#191970)', fontFamily: "'Cabin', sans-serif" },

  { id: 'permafrost', name: "Permafrost", chance: 73500, nativeChance: 24500, weather: 'snowy', color: '#b0e0e6', textColor: '#000000', gradient: 'linear-gradient(135deg,#b0e0e6,#87ceeb)', fontFamily: "'Jost', sans-serif" },

  { id: 'permafrost_bedrock', name: "Permafrost : Bedrock", chance: 7350000, nativeChance: 2450000, weather: 'snowy', color: '#8d96a0', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#8d96a0,#3f4750)', fontFamily: "'Jost', sans-serif" },

  { id: 'flow', name: "✿ Flow ✿", chance: 87000, nativeChance: 29000, biome: 'JUNGLE', nativeBiome: 'jungle', weather: 'windy', color: '#98fb98', textColor: '#000000', gradient: 'linear-gradient(135deg,#98fb98,#90ee90)', fontFamily: "'Delius', cursive" },

  { id: 'stormal', name: "Stormal", chance: 90000, nativeChance: 30000, weather: 'windy', color: '#708090', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#708090,#2f4f4f)', fontFamily: "'Amatic SC', cursive" },

  { id: 'eclipse', name: "Eclipse", chance: 40000, color: '#8b0000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#8b0000,#ff0000)', fontFamily: "'Playfair Display', serif" },

  { id: 'diaboli', name: "Diaboli", chance: 1004, color: '#b71c1c', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #b71c1c, #d32f2f)', fontFamily: "'Germania One', sans-serif" },

  { id: 'hazard', name: "HAZARD", chance: 7000, nativeChance: 1400, weather: 'corruption', color: '#ff8c00', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #ff8c00, #ff6347)', fontFamily: "'Anton', sans-serif" },

  { id: 'quartz', name: "Quartz", chance: 8192, color: '#f0f8ff', textColor: '#000000', gradient: 'linear-gradient(135deg, #f0f8ff, #e6f3ff)', fontFamily: "'Patrick Hand', cursive" },

  { id: 'honey', name: "Honey", chance: 8335, nativeChance: 1667, biome: 'JUNGLE', nativeBiome: 'jungle', color: '#ffb300', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #ffb300, #ff8f00)', fontFamily: "'Courgette', cursive" },

  { id: 'lost_soul', name: "Lost Soul", chance: 9200, color: '#191970', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #191970, #000080)', fontFamily: "'Play', sans-serif" },

  { id: 'atomic_ribonucleic', name: "Atomic: Ribonucleic", chance: 9876, color: '#00ff00', textColor: '#000000', gradient: 'linear-gradient(135deg, #00ff00, #32cd32)', fontFamily: "'Instrument Sans', sans-serif" },

  { id: 'fault', name: "FAULT", chance: 3000, biomeExclusive: 'GLITCHED', color: '#ff00ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff00ff,#8b008b)', fontFamily: "'Quattrocento Sans', sans-serif" },

  { id: 'exotic', name: "Exotic", chance: 99999, nativeChance: 20000, biome: 'JUNGLE', nativeBiome: 'jungle', color: '#ff00ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #ff00ff, #da70d6)', fontFamily: "'Geo', sans-serif" },

  { id: 'diaboli_void', name: "DIABOLI ▽ VOID", chance: 100400, color: '#4b0082', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #4b0082, #8a2be2)', fontFamily: "'Pirata One', sans-serif" },

  { id: 'comet', name: "COMET", chance: 120000, nativeChance: 24000, weather: 'starfall', color: '#b0e0e6', textColor: '#000000', gradient: 'linear-gradient(135deg, #b0e0e6, #87ceeb)', fontFamily: "'Cormorant SC', serif" },

  { id: 'divinus_angel', name: "Divinus : Angel", chance: 120000, nativeChance: 24000, weather: 'heaven', color: '#fffacd', textColor: '#000000', gradient: 'linear-gradient(135deg, #fffacd, #f0e68c)', fontFamily: "'Space Grotesk', sans-serif" },

  { id: 'jade', name: "Jade", chance: 125000, nativeChance: 25000, biome: 'JUNGLE', nativeBiome: 'jungle', color: '#00a86b', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #00a86b, #2e8b57)', fontFamily: "'Nunito Sans', sans-serif" },

  { id: 'jade_rainroot', name: "Jade : Rainroot", chance: 1250000, nativeChance: 250000, biome: 'JUNGLE', nativeBiome: 'jungle', weather: 'rainy', color: '#1f8f6d', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1f8f6d,#3fbf8f)', fontFamily: "'Nunito Sans', sans-serif" },

  { id: 'jade_primeval', name: "⟢ Jade : Primeval ⟣", chance: 125000000, color: '#0e5c45', textColor: '#e8ffe9', gradient: 'linear-gradient(135deg,#0e5c45,#6fd08b)', fontFamily: "'Cinzel Decorative', serif" },

  { id: 'spectre', name: "Spectre", chance: 140000, color: '#9370db', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #9370db, #8a2be2)', fontFamily: "'Quantico', sans-serif" },

  { id: 'jazz', name: "Jazz", chance: 160000, color: '#4b0082', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #4b0082, #6a5acd)', fontFamily: "'Mona Sans', sans-serif" },

  { id: 'aether', name: "Aether", chance: 180000, nativeChance: 45000, biome: 'SAKURA', nativeBiome: 'sakura', color: '#87ceeb', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #87ceeb, #b0c4de)', fontFamily: "'Major Mono Display', monospace" },

  { id: 'bounded', name: "BOUNDED", chance: 200000, color: '#708090', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #708090, #778899)', fontFamily: "'Philosopher', sans-serif" },

  { id: 'lantern', name: "- Lantern -", chance: 333333, color: '#ffa500', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #ffa500, #ff8c00)', fontFamily: "'PT Sans Caption', sans-serif" },

  { id: 'celestial', name: "Celestial", chance: 350000, nativeChance: 87500, biome: 'SAKURA', nativeBiome: 'sakura', color: '#9370db', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #9370db, #8a2be2)', fontFamily: "'Exo 2', sans-serif" },



  // --- Legendary Tier (1/400,000 to 1/10,000,000) ---

  { id: 'terror', name: "TERROR", chance: 400000, color: '#5c0000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#5c0000,#1a1a1a)', fontFamily: "'Averia Serif Libre', sans-serif" },

  { id: 'hope', name: "HOPE", chance: 488725, nativeChance: 97745, weather: 'heaven', color: '#eafff5', textColor: '#000000', gradient: 'linear-gradient(135deg,#eafff5,#7fffd4)', fontFamily: "'Forum', sans-serif" },

  { id: 'hope_halcyon', name: "✶ HOPE : HALCYON ✶", chance: 301117029, nativeChance: 60223405, weather: 'heaven', color: '#d9fff0', textColor: '#0f2e1f', gradient: 'linear-gradient(135deg,#d9fff0,#67d8b7)', fontFamily: "'Forum', sans-serif" },

  { id: 'raven', name: "Raven", chance: 500000, biomeExclusive: 'LIMBO', color: '#0f172a', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#0f172a,#2f4f4f)', fontFamily: "'IM Fell English SC', serif" },

  { id: 'raven_nevermore', name: "『 Raven : Nevermore 』", chance: 50000000, color: '#10061f', textColor: '#e8e0ff', gradient: 'linear-gradient(135deg,#05050a,#2a1b44)', fontFamily: "'UnifrakturCook', serif" },

  { id: 'warlock', name: "Warlock", chance: 666000, color: '#2b003f', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2b003f,#6a0dad)', fontFamily: "'Special Elite', sans-serif" },

  { id: 'warlock_hexbound', name: "⛧ Warlock : Hexbound ⛧", chance: 166600000, color: '#15001f', textColor: '#f6e7ff', gradient: 'linear-gradient(135deg,#15001f,#4a1a6d)', fontFamily: "'Cinzel Decorative', serif" },

  { id: 'undead_devil', name: "UNDEAD : DEVIL", chance: 666666, nativeChance: 111111, weather: 'hell', color: '#2b0000', textColor: '#ff2a2a', gradient: 'linear-gradient(135deg,#2b0000,#8b0000)', fontFamily: "'Averia Gruesa Libre', sans-serif" },

  { id: 'kyawthuite', name: "Kyawthuite", chance: 850000, color: '#ff6a00', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff6a00,#8b0000)', fontFamily: "'MedievalSharp', sans-serif" },

  { id: 'arcane', name: "Arcane", chance: 1000000, color: '#2a145a', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2a145a,#8e44ad)', fontFamily: "'Noto Serif', serif" },

  { id: 'solar', name: "Solar", chance: 50000, nativeChance: 5000, time: 'daytime', color: '#ffa500', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffa500,#ff8c00)', fontFamily: "'DM Serif Display', serif" },

  { id: 'solar_aurelion', name: "S☉LAR : AURELION", chance: 155000000, nativeChance: 15500000, time: 'daytime', color: '#ffe28a', textColor: '#2c1800', gradient: 'linear-gradient(135deg,#fff4bf,#ffb347)', fontFamily: "'Cinzel Decorative', serif" },

  { id: 'lunar', name: "Lunar", chance: 50000, nativeChance: 5000, biome: 'SAKURA', nativeBiome: 'sakura', time: 'nighttime', color: '#c0c0c0', textColor: '#000000', gradient: 'linear-gradient(135deg,#c0c0c0,#808080)', fontFamily: "'Prata', serif" },

  { id: 'lunar_perigee', name: "『 LUNAR : PERIGEE 』", chance: 118903742, nativeChance: 23780748, biome: 'SAKURA', nativeBiome: 'sakura', time: 'nighttime', color: '#dfe6ff', textColor: '#1f2b4a', gradient: 'linear-gradient(135deg,#dfe6ff,#8da2ff)', fontFamily: "'Prata', serif" },

  { id: 'starlight_kunzite', name: "STARLIGHT : KUNZITE", chance: 1000000, nativeChance: 200000, weather: 'starfall', color: '#f2e9ff', textColor: '#3b1b6b', gradient: 'linear-gradient(135deg,#f2e9ff,#b39ddb)', fontFamily: "'Tektur', sans-serif" },

  { id: 'magnetic_reverse_polarity', name: "Magnetic : Reverse Polarity", chance: 1024000, color: '#0057ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#0057ff,#000000)', fontFamily: "'Montserrat Alternates', sans-serif" },

  { id: 'undefined', name: "Undefined", chance: 1111, nativeChance: 1111, weather: 'null', color: '#f5f5f5', textColor: '#000000', gradient: 'linear-gradient(135deg,#f5f5f5,#9e9e9e)', fontFamily: "'Iceland', sans-serif" },

  { id: 'undefined_vacancy', name: "UNDEFINED :: VACANCY", chance: 222200000, nativeChance: 222200, weather: 'null', color: '#d9d9d9', textColor: '#111111', gradient: 'linear-gradient(135deg,#f3f3f3,#7c7c7c)', fontFamily: "'B612 Mono', monospace" },

  { id: 'rage_brawler', name: "Rage : Brawler", chance: 1280000, color: '#b00020', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#b00020,#ff1744)', fontFamily: "'Barlow Condensed', sans-serif" },

  { id: 'astral', name: "Astral", chance: 1336000, nativeChance: 267200, weather: 'starfall', color: '#6a5acd', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#6a5acd,#191970)', fontFamily: "'Lora', serif" },

  { id: 'cosmos', name: "Cosmos", chance: 1520000, color: '#050b2e', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#050b2e,#312e81)', fontFamily: "'Audiowide', sans-serif" },

  { id: 'respawn', name: "Player : Respawn", chance: 1999999, nativeChance: 999999, weather: 'cyberspace', color: '#00ffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#00ffff,#003333)', fontFamily: "'Asap', sans-serif" },

  { id: 'gravitational', name: "Gravitational", chance: 2000000, color: '#000000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#000000,#434343)', fontFamily: "'Scada', sans-serif" },

  { id: 'flowed', name: "-FLOWED-", chance: 2121121, nativeChance: 2121, weather: 'null', color: '#7fffd4', textColor: '#000000', gradient: 'linear-gradient(135deg,#7fffd4,#20b2aa)', fontFamily: "'Figtree', sans-serif" },

  { id: 'unbound', name: "BOUNDED : UNBOUND", chance: 2000000, color: '#ffffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffffff,#bdbdbd)', fontFamily: "'Bellefair', serif" },

  { id: 'virtual', name: "Virtual", chance: 2500000, nativeChance: 1250000, weather: 'cyberspace', color: '#00ff88', textColor: '#000000', gradient: 'linear-gradient(135deg,#00ff88,#004422)', fontFamily: "'Silkscreen', sans-serif" },

  { id: 'parasite', name: "paRaSiTe", chance: 3000000, nativeChance: 600000, weather: 'corruption', color: '#4b004b', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#4b004b,#8b008b)', fontFamily: "'Englebert', sans-serif" },

  { id: 'savior', name: "Savior", chance: 3200000, color: '#fff2a8', textColor: '#000000', gradient: 'linear-gradient(135deg,#fff2a8,#ffd700)', fontFamily: "'Rethink Sans', sans-serif" },

  { id: 'shift_lock', name: "Shift lock", chance: 3325000, nativeChance: 3325, weather: 'null', color: '#5f6a72', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#5f6a72,#2c3e50)', fontFamily: "'Monoton', sans-serif" },

  { id: 'shift_lock_hardmode', name: "<< SHIFT LOCK / HARDMODE >>", chance: 253771942, nativeChance: 253771, weather: 'null', color: '#3a3f46', textColor: '#f3f3f3', gradient: 'linear-gradient(135deg,#121417,#5f6a72)', fontFamily: "'Monoton', sans-serif" },

  { id: 'alice', name: "《 Cosmos: Alice 》", chance: 3500000, color: '#ff9ad5', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff9ad5,#ff69b4)', fontFamily: "'Rum Raisin', sans-serif" },

  { id: 'bejeweled', name: "Crystalized : Bejeweled", chance: 3600000, color: '#b300ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#b300ff,#ffd700)', fontFamily: "'Maven Pro', sans-serif" },

  { id: 'aquatic_flame', name: "Aquatic : Flame", chance: 4000000, nativeChance: 1000000, biome: 'DEEP SEA', nativeBiome: 'deep sea', color: '#00bfff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#00bfff,#ff4500)', fontFamily: "'Work Sans', sans-serif" },

  { id: 'poseidon', name: "Poseidon", chance: 4000000, nativeChance: 1000000, biome: 'DEEP SEA', nativeBiome: 'deep sea', weather: 'rainy', color: '#003f7f', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#003f7f,#4682b4)', fontFamily: "'Kumbh Sans', sans-serif" },

  { id: 'metabytes', name: "METABYTES", chance: 4000000, nativeChance: 2000000, weather: 'cyberspace', color: '#00ffd5', textColor: '#000000', gradient: 'linear-gradient(135deg,#00ffd5,#004d4d)', fontFamily: "'Trispace', sans-serif" },

  { id: 'metabytes_singularstack', name: "[ METABYTES : SINGULARSTACK ]", chance: 199870113, nativeChance: 99935056, weather: 'cyberspace', color: '#6fffe9', textColor: '#001414', gradient: 'linear-gradient(135deg,#6fffe9,#118ab2)', fontFamily: "'Trispace', sans-serif" },

  { id: 'zeus', name: "Zeus", chance: 4500000, color: '#ffd700', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffd700,#ffae00)', fontFamily: "'Bangers', sans-serif" },

  { id: 'solar_solstice', name: "Solar : Solstice", chance: 5000000, nativeChance: 500000, time: 'daytime', color: '#ffae00', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffae00,#fff2a8)', fontFamily: "'Bungee Spice', sans-serif" },

  { id: 'galaxy', name: "Galaxy", chance: 5000000, nativeChance: 1000000, weather: 'starfall', color: '#2b2dff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2b2dff,#000428)', fontFamily: "'Hanalei', sans-serif" },

  { id: 'lunar_full_moon', name: "Lunar : Full Moon", chance: 5000000, nativeChance: 500000, biome: 'SAKURA', nativeBiome: 'sakura', time: 'nighttime', color: '#f0f0f0', textColor: '#000000', gradient: 'linear-gradient(135deg,#f0f0f0,#bdbdbd)', fontFamily: "'Stardos Stencil', sans-serif" },

  { id: 'anima', name: "Anima", chance: 5730000, biomeExclusive: 'LIMBO', color: '#ff3cac', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff3cac,#784ba0)', fontFamily: "'Questrial', sans-serif" },

  { id: 'twilight', name: "Twilight", chance: 6000000, nativeChance: 600000, biome: 'SAKURA', nativeBiome: 'sakura', time: 'nighttime', color: '#483d8b', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#483d8b,#1c1c3c)', fontFamily: "'Jacquarda Bastarda 9 Charted', sans-serif" },

  { id: 'origin', name: "Origin", chance: 6500000, color: '#6a0dad', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#6a0dad,#000000)', fontFamily: "'Vina Sans', sans-serif" },

  { id: 'hades', name: "Hades", chance: 6666666, nativeChance: 1111111, weather: 'hell', color: '#4b0000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#4b0000,#8b0000)', fontFamily: "'Eater', sans-serif" },

  { id: 'celestial_divine', name: "« CELESTIAL ✰ DIVINE »", chance: 7000000, nativeChance: 1750000, biome: 'SAKURA', nativeBiome: 'sakura', color: '#fffbe6', textColor: '#000000', gradient: 'linear-gradient(135deg,#fffbe6,#ffd700)', fontFamily: "'Fascinate', sans-serif" },

  { id: 'anubis', name: "Anubis", chance: 7200000, nativeChance: 1800000, weather: 'sandstorm', color: '#cfa94a', textColor: '#000000', gradient: 'linear-gradient(135deg,#cfa94a,#7a5c00)', fontFamily: "'Staatliches', sans-serif" },

  { id: 'refraction', name: "Refraction", chance: 7242000, color: '#7fffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#7fffff,#007777)', fontFamily: "'Homenaje', sans-serif" },

  { id: 'faith', name: "+Faith+", chance: 7250000, nativeChance: 1450000, weather: 'heaven', color: '#ffffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffffff,#e6d8ad)', fontFamily: "'Stack Sans Text', sans-serif" },

  { id: 'hypervolt', name: "Hyper-Volt", chance: 7500000, color: '#fff700', textColor: '#000000', gradient: 'linear-gradient(135deg,#fff700,#ff9100)', fontFamily: "'Rubik Glitch', sans-serif" },

  { id: 'velocity', name: "Velocity", chance: 7630000, color: '#ff3d00', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff3d00,#ff9100)', fontFamily: "'Kode Mono', monospace" },

  { id: 'velocity_mach_10', name: ">> VELOCITY // MACH-10 >>", chance: 76000000, color: '#ff4500', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #ff4500, #ffffff)', fontFamily: "'Press Start 2P', sans-serif" },

  { id: 'nautilus_lost', name: "Nautilus : Lost", chance: 7700000, nativeChance: 1925000, biome: 'DEEP SEA', nativeBiome: 'deep sea', color: '#0a3f3f', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#0a3f3f,#20b2aa)', fontFamily: "'Righteous', sans-serif" },

  { id: 'divinus_guardian', name: "Divinus : Guardian", chance: 7777777, nativeChance: 1555555, weather: 'heaven', color: '#fff2b2', textColor: '#000000', gradient: 'linear-gradient(135deg,#fff2b2,#ffd700)', fontFamily: "'Lancelot', sans-serif" },

  { id: 'outlaw', name: "OUTLAW", chance: 8000000, nativeChance: 2000000, weather: 'sandstorm', color: '#8b5a2b', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#8b5a2b,#cd853f)', fontFamily: "'Sulphur Point', sans-serif" },

  { id: 'outlaw_deadeye', name: "OUTLAW : DEADEYE🞋", chance: 188000000, nativeChance: 47000000, weather: 'sandstorm', color: '#5a2e16', textColor: '#ffe7c4', gradient: 'linear-gradient(135deg,#2b1208,#b87333)', fontFamily: "'Special Elite', sans-serif" },

  { id: 'harnessed', name: "⌊ HARNESSED ⌉", chance: 8500000, color: '#e0e0e0', textColor: '#000000', gradient: 'linear-gradient(135deg,#e0e0e0,#9e9e9e)', fontFamily: "'Nobile', sans-serif" },

  { id: 'nihility', name: "[ Nihility ]", chance: 9000000, nativeChance: 9000, weather: 'null', color: '#111111', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#111111,#2f4f4f)', fontFamily: "'Sancreek', sans-serif" },

  { id: 'helios', name: "Helios", chance: 9000000, color: '#ffcc33', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffcc33,#ff8f00)', fontFamily: "'Encode Sans Semi Expanded', sans-serif" },

  { id: 'stargazer', name: "☆ Stargazer ☆", chance: 9200000, nativeChance: 1840000, weather: 'starfall', color: '#7b2cff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#7b2cff,#000000)', fontFamily: "'Rubik Maps', sans-serif" },



  { id: 'starscourge', name: "STARSCOURGE", chance: 10000000, nativeChance: 2000000, weather: 'starfall', color: '#4b2cff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#4b2cff,#000000)', fontFamily: "'Aladin', sans-serif" },

  { id: 'sharkyn', name: "SHARKYN", chance: 10000000, nativeChance: 2500000, biome: 'DEEP SEA', nativeBiome: 'deep sea', weather: 'rainy', color: '#062f4f', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#062f4f,#1ca3ec)', fontFamily: "'Red Hat Text', sans-serif" },

  { id: 'guardian', name: "GUARDIAN", chance: 10000000, color: '#ffd700', textColor: '#1a1a1a', gradient: 'linear-gradient(135deg,#ffd700,#fff3b0)', fontFamily: "'Carrois Gothic', sans-serif" },

  { id: 'melodic', name: "Melodic", chance: 11300000, color: '#7a4cff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#7a4cff,#cdb7ff)', fontFamily: "'Saira Condensed', sans-serif" },

  { id: 'sailor', name: "Sailor", chance: 12000000, nativeChance: 3000000, biome: 'DEEP SEA', nativeBiome: 'deep sea', weather: 'rainy', color: '#1b4f72', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1b4f72,#5dade2)', fontFamily: "'Russo One', sans-serif" },

  { id: 'hurricane', name: "Hurricane", chance: 13500000, nativeChance: 4500000, weather: 'windy', color: '#2c3e50', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2c3e50,#95a5a6)', fontFamily: "'Abel', sans-serif" },

  { id: 'sirius', name: "Sirius", chance: 14000000, nativeChance: 2800000, weather: 'starfall', color: '#eef3ff', textColor: '#000000', gradient: 'linear-gradient(135deg,#eef3ff,#9fb6ff)', fontFamily: "'Yanone Kaffeesatz', sans-serif" },

  { id: 'sirius_dogstar', name: "《 SIRIUS / DOGSTAR 》", chance: 143992017, nativeChance: 28798403, weather: 'starfall', color: '#f2f7ff', textColor: '#1a2336', gradient: 'linear-gradient(135deg,#f2f7ff,#79a9ff)', fontFamily: "'Yanone Kaffeesatz', sans-serif" },

  { id: 'parallax', name: "PARALLAX", chance: 132771406, nativeChance: 26554281, weather: 'starfall', color: '#8b6dff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#26154d,#8b6dff)', fontFamily: "'Rubik Maps', sans-serif" },

  { id: 'arcane_legacy', name: "A r c a n e : Legacy", chance: 15000000, color: '#2e003e', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2e003e,#7b1fa2)', fontFamily: "'Rosarivo', serif" },

  { id: 'icarus', name: "ICARUS", chance: 15660000, nativeChance: 3132000, weather: 'heaven', color: '#ffae00', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffae00,#fff1b8)', fontFamily: "'Reddit Sans Condensed', sans-serif" },

  { id: 'lullaby', name: "Lullaby", chance: 17000000, nativeChance: 1700000, biome: 'SAKURA', nativeBiome: 'sakura', time: 'nighttime', color: '#d8d0ff', textColor: '#2c145a', gradient: 'linear-gradient(135deg,#d8d0ff,#6c5ce7)', fontFamily: "'Alumni Sans SC', sans-serif" },

  { id: 'chromatic', name: "CHROMATIC", chance: 20000000, color: '#ff3cac', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff3cac,#784ba0)', fontFamily: "'VT323', monospace" },

  { id: 'aviator', name: "★ AVIATOR ★", chance: 24000000, nativeChance: 8000000, weather: 'windy', color: '#a9e4ff', textColor: '#000000', gradient: 'linear-gradient(135deg,#a9e4ff,#ffffff)', fontFamily: "'Vend Sans', sans-serif" },

  { id: 'apotheosis', name: "APOTHEOSIS", chance: 24691356, color: '#fff3c4', textColor: '#000000', gradient: 'linear-gradient(135deg,#fff3c4,#ffd700)', fontFamily: "'Blinker', sans-serif" },

  { id: 'blizzard', name: "Blizzard", chance: 27315000, nativeChance: 9105000, weather: 'snowy', color: '#eafaff', textColor: '#004aad', gradient: 'linear-gradient(135deg,#eafaff,#b6e9ff)', fontFamily: "'Lexend Deca', sans-serif" },

  { id: 'arcane_dark', name: "Arcane : Dark", chance: 30000000, color: '#0b0018', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#0b0018,#2a004f)', fontFamily: "'Bitter', serif" },

  { id: 'flora_florest', name: "Flora : Florest", chance: 32800000, nativeChance: 6560000, biome: 'JUNGLE', nativeBiome: 'jungle', color: '#1e7f43', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1e7f43,#6bcf9b)', fontFamily: "'Commissioner', sans-serif" },

  { id: 'ethereal', name: "Ethereal", chance: 35000000, color: '#f8ffff', textColor: '#1a1a1a', gradient: 'linear-gradient(135deg,#f8ffff,#d9ffff)', fontFamily: "'Radio Canada Big', sans-serif" },

  { id: 'cola_carbonation', name: "°o. COLA ∷ CARBONATION .o°", chance: 39999999, color: '#5a3a2a', textColor: '#ffffff', gradient: 'linear-gradient(135deg, #5a3a2a, #a1887f)', fontFamily: "'Lilita One', sans-serif" },

  { id: 'fatal_error', name: "FATAL ERROR", chance: 40413000, nativeChance: 20206500, weather: 'cyberspace', color: '#8b0000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#8b0000,#ff0000)', fontFamily: "'Inria Sans', sans-serif" },

  { id: 'j_u_x_t_a_p_o_s_i_t_i_o_n', name: "{ j u x t a p o s i t i o n }", chance: 40440400, biomeExclusive: 'LIMBO', color: '#5e005e', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#5e005e,#000000)', fontFamily: "'Gantari', sans-serif" },

  { id: 'overseer', name: "Overseer", chance: 45000000, color: '#243b8a', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#243b8a,#5f7cff)', fontFamily: "'Rosario', sans-serif" },

  { id: 'exotic_apex', name: "Exotic : APEX", chance: 49999500, nativeChance: 9999900, biome: 'JUNGLE', nativeBiome: 'jungle', color: '#ff5722', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff5722,#ffb199)', fontFamily: "'Rubik Distressed', sans-serif" },

  { id: 'matrix', name: "Matrix", chance: 50000000, nativeChance: 25000000, weather: 'cyberspace', color: '#00ff66', textColor: '#000000', gradient: 'linear-gradient(135deg,#00ff66,#003300)', fontFamily: "'Black Ops One', sans-serif" },

  { id: 'runic', name: "Runic", chance: 50000000, color: '#b8860b', textColor: '#000000', gradient: 'linear-gradient(135deg,#b8860b,#f1c40f)', fontFamily: "'Michroma', sans-serif" },

  { id: 's_e_n_t_i_n_e_l', name: "[ S E N T I N E L ]", chance: 60000000, color: '#cfd3d6', textColor: '#000000', gradient: 'linear-gradient(135deg,#cfd3d6,#7f8c8d)', fontFamily: "'Share', sans-serif" },

  { id: 'twilight_iridescent_memory', name: "Twilight : Iridescent Memory", chance: 60000000, nativeChance: 6000000, biome: 'SAKURA', nativeBiome: 'sakura', time: 'nighttime', color: '#6a00a8', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#6a00a8,#b37bff)', fontFamily: "'Passion One', sans-serif" },

  { id: 'antivirus', name: "ANTIVIRUS", chance: 62500000, nativeChance: 31250000, weather: 'cyberspace', color: '#32ff32', textColor: '#000000', gradient: 'linear-gradient(135deg,#32ff32,#006600)', fontFamily: "'Convergence', sans-serif" },

  { id: 'dominion', name: "Dominion", chance: 70000000, nativeChance: 14000000, weather: 'heaven', color: '#6d0000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#6d0000,#b30000)', fontFamily: "'Arimo', sans-serif" },

  { id: 'sailor_flying_dutchman', name: "Sailor : Flying Dutchman", chance: 80000000, nativeChance: 20000000, biome: 'DEEP SEA', nativeBiome: 'deep sea', weather: 'rainy', color: '#0a1f44', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#0a1f44,#1e3a8a)', fontFamily: "'Rubik', sans-serif" },

  { id: 'carriage', name: "Carriage", chance: 80000000, color: '#6f3b1e', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#6f3b1e,#c68642)', fontFamily: "'Carrois Gothic SC', sans-serif" },

  { id: 'virtual_full_control', name: "VIRTUAL // FULL CONTROL", chance: 80000000, nativeChance: 40000000, weather: 'cyberspace', color: '#00ffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#00ffff,#006666)', fontFamily: "'Space Mono', monospace" },

  { id: 'harnessed_elements', name: "⌊ HARNESSED : ELEMENTS ⌉", chance: 85000000, color: '#ff8c00', textColor: '#000000', gradient: 'linear-gradient(135deg,#ff8c00,#ffd28a)', fontFamily: "'Doppio One', sans-serif" },

  { id: 'virtual_worldwide', name: "Virtual : WorldWide", chance: 87500000, nativeChance: 43750000, weather: 'cyberspace', color: '#3b82f6', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#3b82f6,#001f54)', fontFamily: "'Rubik Dirt', sans-serif" },

  { id: 'palimpsest', name: "PALIMPSEST", chance: 88888888, weather: 'null', excludeWeather: 'heaven', color: '#e7e0ff', textColor: '#1b1033', gradient: 'linear-gradient(135deg,#e7e0ff,#7a5cff,#0b0618)', fontFamily: "'IBM Plex Mono', monospace" },

  { id: 'nucleus', name: "[-] Atomic : Nucleus [+]", chance: 92118000, color: '#ff3b3b', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff3b3b,#ff9f43)', fontFamily: "'Jura', sans-serif" },



  { id: 'chromatic_genesis', name: "CHROMATIC : GENESIS", chance: 99999999, color: '#ff1493', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff1493,#8a004f)', fontFamily: "'JetBrains Mono', monospace" },

  { id: 'chromatic_exotic', name: "CHROMATIC : EXOTIC", chance: 99999999, nativeChance: 20000000, biome: 'JUNGLE', nativeBiome: 'jungle', color: '#00ff9c', textColor: '#000000', gradient: 'linear-gradient(135deg,#00ff9c,#006644)', fontFamily: "'Aldrich', sans-serif" },

  { id: 'starscourge_radiant', name: "STARSCOURGE : RADIANT", chance: 100000000, nativeChance: 20000000, weather: 'starfall', color: '#fff700', textColor: '#000000', gradient: 'linear-gradient(135deg,#fff700,#ffae00)', fontFamily: "'Oldenburg', sans-serif" },

  { id: 'starscourge_eventide', name: "✦ STARSCOURGE ✦ EVENTIDE ✦", chance: 142000000, nativeChance: 28400000, weather: 'starfall', color: '#5a4cff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#0a0618,#5a4cff)', fontFamily: "'Aladin', sans-serif" },

  { id: 'spectraflow', name: "◇ Spectraflow ◇", chance: 100000000, color: '#ff6bd6', textColor: '#000000', gradient: 'linear-gradient(135deg,#ff6bd6,#8a2be2)', fontFamily: "'Whisper', cursive" },

  { id: 'overture', name: "Overture", chance: 150000000, color: '#fff176', textColor: '#000000', gradient: 'linear-gradient(135deg,#fff176,#fbc02d)', fontFamily: "'Ysabeau', sans-serif" },

  { id: 'symphony', name: "Symphony", chance: 175000000, nativeChance: 43750000, biome: 'SAKURA', nativeBiome: 'sakura', color: '#1f2933', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1f2933,#4b5563)', fontFamily: "'Imprima', sans-serif" },

  { id: 'ironsong', name: "Ironsong", chance: 189604225, nativeChance: 37920845, biome: 'SAKURA', nativeBiome: 'sakura', color: '#7a8188', textColor: '#f4f4f4', gradient: 'linear-gradient(135deg,#3b4046,#9ea7b0)', fontFamily: "'Imprima', sans-serif" },

  { id: 'twilight_withering', name: "Twilight -Withering Grace", chance: 180000000, nativeChance: 18000000, time: 'nighttime', color: '#00bcd4', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#00bcd4,#004d60)', fontFamily: "'Nabla', sans-serif" },

  { id: 'felled', name: "♱ FELLED ♱", chance: 180000000, nativeChance: 30000000, weather: 'hell', color: '#5c0000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#5c0000,#ff0000)', fontFamily: "'Atkinson Hyperlegible', sans-serif" },

  { id: 'impeached', name: "IMPEACHED", chance: 200000000, nativeChance: 40000000, weather: 'corruption', color: '#00cccc', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#00cccc,#003333)', fontFamily: "'Magra', sans-serif" },

  { id: 'lumenpool', name: "~ Lumenpool ~", chance: 220000000, nativeChance: 55000000, biome: 'DEEP SEA', nativeBiome: 'deep sea', weather: 'rainy', color: '#fff59d', textColor: '#000000', gradient: 'linear-gradient(135deg,#fff59d,#fbc02d)', fontFamily: "'Alumni Sans', sans-serif" },

  { id: 'hypervolt_everstorm', name: "HYPERVOLT : · E V E R - S T O R M ·", chance: 225000000, color: '#f1c40f', textColor: '#000000', gradient: 'linear-gradient(135deg,#f1c40f,#ffea70)', fontFamily: "'Electrolize', sans-serif" },

  { id: 'oppression', name: "[O P P R E S S I O N]", chance: 220000000, weather: 'glitched', color: '#7f1d1d', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#7f1d1d,#000000)', fontFamily: "'League Gothic', sans-serif" },

  { id: 'astral_zodiac', name: "🔆Astral : Zodiac ☾", chance: 267200000, nativeChance: 53440000, weather: 'starfall', color: '#c0392b', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#c0392b,#8e44ad)', fontFamily: "'Rubik Wet Paint', sans-serif" },

  { id: 'astral_legendarium', name: "ASTRAL - LEGENDARIUM", chance: 267200000, nativeChance: 53440000, weather: 'starfall', color: '#2980b9', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2980b9,#0a2342)', fontFamily: "'Love Ya Like A Sister', sans-serif" },

  { id: 'prophecy', name: "PROPHECY", chance: 275649430, nativeChance: 55129886, weather: 'heaven', color: '#16a085', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#16a085,#003f3f)', fontFamily: "'Saira Semi Condensed', sans-serif" },

  { id: 'exotic_void', name: "Exotic◇Void", chance: 299999999, nativeChance: 60000000, biome: 'JUNGLE', nativeBiome: 'jungle', color: '#ffffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffffff,#000000)', fontFamily: "'Saira Stencil One', sans-serif" },

  { id: 'overture_history', name: "OVERTURE I HISTORY", chance: 300000000, color: '#2c3e50', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2c3e50,#000000)', fontFamily: "'Recursive', sans-serif" },

  { id: 'bloodlust', name: "+ B L O O D L U S T +", chance: 300000000, nativeChance: 50000000, weather: 'hell', color: '#b30000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#b30000,#ff0000)', fontFamily: "'Creepster', sans-serif" },

  { id: 'maelstrom', name: "MAELSTROM", chance: 309999999, nativeChance: 103333333, weather: 'windy', color: '#6b7280', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#6b7280,#1f2933)', fontFamily: "'Noto Music', sans-serif" },

  { id: 'perpetual', name: "«Perpetual»", chance: 315000000, color: '#00ffff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#00ffff,#003333)', fontFamily: "'Lexend', sans-serif" },

  { id: 'lotusfall', name: "LOTUSFALL", chance: 320000000, nativeChance: 80000000, biome: 'SAKURA', nativeBiome: 'sakura', color: '#ff00ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff00ff,#7a007a)', fontFamily: "'Varta', sans-serif" },

  { id: 'orchestra', name: "♩ Orchestra ♩", chance: 336870912, color: '#00cc66', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#00cc66,#004422)', fontFamily: "'Jaro', sans-serif" },

  { id: 'archangel', name: "ARCHANGEL", chance: 350000000, nativeChance: 70000000, weather: 'heaven', color: '#e6ffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#e6ffff,#ffffff)', fontFamily: "'Sorts Mill Goudy', serif" },

  { id: 'atlas', name: "ATLAS", chance: 360000000, nativeChance: 90000000, weather: 'sandstorm', color: '#3a2f23', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#3a2f23,#c2b280)', fontFamily: "'Joti One', sans-serif" },

  { id: 'flora_evergreen', name: "Flora : Evergreen", chance: 370073730, nativeChance: 74014746, biome: 'JUNGLE', nativeBiome: 'jungle', color: '#4a7c59', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#4a7c59,#a8d5ba)', fontFamily: "'Sacramento', cursive" },

  { id: 'chillsear', name: "CHILLSEAR", chance: 375000000, nativeChance: 125000000, weather: 'snowy', color: '#eaffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#eaffff,#9de3ff)', fontFamily: "'Barlow', sans-serif" },

  { id: 'abyssal_hunter', name: "Abyssal Hunter", chance: 400000000, nativeChance: 100000000, biome: 'DEEP SEA', nativeBiome: 'deep sea', weather: 'rainy', color: '#001b2e', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#001b2e,#003f5c)', fontFamily: "'M PLUS Rounded 1c', sans-serif" },

  { id: 'gargantua', name: "GARGANTUA", chance: 430000000, nativeChance: 86000000, weather: 'starfall', color: '#0b132b', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#0b132b,#1c2541)', fontFamily: "'IBM Plex Sans', sans-serif" },

  { id: 'apostolos', name: "APOSTOLOS", chance: 444000000, color: '#002bff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#002bff,#00b3ff)', fontFamily: "'Almendra', serif" },

  { id: 'unknown_glorious', name: "⍰ unknown ⍰", chance: 444444444, biomeExclusive: 'LIMBO', color: '#1aff00', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1aff00,#000000)', fontFamily: "'Wix Madefor Display', sans-serif" },

  { id: 'kyawthuite_remembrance', name: "Kyawthuite : Remembrance", chance: 450000000, color: '#00e5ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#00e5ff,#004d60)', fontFamily: "'Alegreya SC', serif" },

  { id: 'ruins', name: "《 Ruins 》", chance: 500000000, color: '#2b2b2b', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2b2b2b,#6e6e6e)', fontFamily: "'Cossette Titre', sans-serif" },

  { id: 'matrix_overdrive', name: "{♢ MATRIX /◆ OVERDRIVE ♢}", chance: 503000000, nativeChance: 251500000, weather: 'cyberspace', color: '#7f8c8d', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#7f8c8d,#00ff99)', fontFamily: "'Cutive Mono', monospace" },

  { id: 'elude', name: "Elude", chance: 555555555, biomeExclusive: 'LIMBO', color: '#1abc9c', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1abc9c,#0b5345)', fontFamily: "'Gruppo', sans-serif" },

  { id: 'sophyra', name: "Sophyra", chance: 570000000, color: '#1f3cff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1f3cff,#00b3ff)', fontFamily: "'Average Sans', sans-serif" },

  { id: 'matrix_reality', name: "MATRIX ▫ REALITY", chance: 601020102, nativeChance: 300510051, weather: 'cyberspace', color: '#ffe600', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffe600,#00ff66)', fontFamily: "'Libertinus Mono', monospace" },

  { id: 'breakpoint', name: "Breakpoint", chance: 179220641, weather: 'cyberspace', color: '#ff9f7a', textColor: '#1c0b05', gradient: 'linear-gradient(135deg,#3a1210,#ff9f7a)', fontFamily: "'Black Ops One', sans-serif" },

  { id: 'prologue', name: "PROLOGUE", chance: 666616111, biomeExclusive: 'LIMBO', color: '#00ff00', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#00ff00,#003300)', fontFamily: "'Belanosima', sans-serif" },

  { id: 'pythios', name: "PYTHIOS", chance: 666666666, nativeChance: 111111111, weather: 'hell', color: '#ff00ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff00ff,#5c005c)', fontFamily: "'Jockey One', sans-serif" },

  { id: 'sovereign', name: "SOVEREIGN", chance: 750000000, color: '#001aff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#001aff,#000000)', fontFamily: "'Noto Sans Cypro Minoan', sans-serif" },

  { id: 'ruins_withered', name: "《 ⬥ Ruins : Withered ⬥ 》", chance: 800000000, color: '#7a007a', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#7a007a,#2b2b2b)', fontFamily: "'Ysabeau Office', sans-serif" },

  { id: 'aegis', name: "﴾AEGIS﴿", chance: 825000000, nativeChance: 412500000, weather: 'cyberspace', color: '#ff0000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff0000,#330000)', fontFamily: "'Lexend Mega', sans-serif" },

  { id: 'dreamscape', name: "dreamscape", chance: 850000000, biomeExclusive: 'LIMBO', color: '#e74c3c', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#e74c3c,#8e1b1b)', fontFamily: "'Fredoka', sans-serif" },

  { id: 'dreammetric', name: "Dreammetric", chance: 320000000, weather: 'dreamspace', color: '#ff3b3b', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff3b3b,#5c0000)', fontFamily: "'Noto Sans Display', sans-serif" },

  { id: 'ascendant', name: "ASCENDANT", chance: 935000000, nativeChance: 187000000, weather: 'heaven', color: '#ff6f61', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff6f61,#fff0e6)', fontFamily: "'Barlow Semi Condensed', sans-serif" },

  { id: 'layers', name: "LAYERS", chance: 2500000000, color: '#3498db', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#3498db,#1b4f72)', fontFamily: "'Signika Negative', sans-serif" },

  { id: 'illusionary', name: "illusionary", chance: 10000000, biomeExclusive: 'CYBERSPACE', weather: 'cyberspace', ignoreLuck: true, color: '#4b7bec', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#4b7bec,#000000)', fontFamily: "'Kedebideri', sans-serif" },

  { id: 'afterimage', name: "// AFTERIMAGE", chance: 176880331, nativeChance: 35376066, weather: 'cyberspace', color: '#a58cff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#120a2f,#6d4cff)', fontFamily: "'Kedebideri', sans-serif" },

  { id: 'nyctophobia', name: "Ň̫̈Y̵̢̮̟̎Ç͍̲̉̕T̺͗̐Ǫ͍̱P̦H̴̫̒͏̤̮O̱̺̗̚B̷͎̱͘Į̗͈̻͊Ã͕̳͘", chance: 1011111010, biomeExclusive: 'LIMBO', color: '#000000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#000000,#1a1a1a)', fontFamily: "'Be Vietnam Pro', sans-serif" },

  { id: 'pixelation', name: "▣ PIXELATION ▣", chance: 1073741824, nativeChance: 536870912, weather: 'cyberspace', color: '#fff200', textColor: '#000000', gradient: 'linear-gradient(135deg,#fff200,#ff7f00)', fontFamily: "'Galdeano', sans-serif" },

  { id: 'luminosity', name: "[ Luminosity ]", chance: 1200000000, color: '#9b59b6', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#9b59b6,#2c145a)', fontFamily: "'Rationale', sans-serif" },

  { id: 'leviathan', name: "LEVIATHAN", chance: 1730400000, nativeChance: 346080000, biome: 'DEEP SEA', nativeBiome: 'deep sea', biomeExclusive: ['RAINY', 'GLITCHED', 'DEEP SEA'], color: '#00ffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#00ffff,#006666)', fontFamily: "'Urbanist', sans-serif" },

  { id: 'breakthrough', name: "BREAKTHROUGH", chance: 1999999999, excludeWeather: 'null', color: '#222222ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff0000,#ffae00)', fontFamily: "'Zalando Sans Expanded', sans-serif" },

  { id: 'equinox', name: "『Equinox』", chance: 2500000000, color: '#ffffffff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1abc9c,#0b5345)', fontFamily: "'Rubik Gemstones', sans-serif" },

  { id: 'monarch', name: "MONARCH", chance: 3000000000, nativeChance: 600000000, weather: 'corruption', color: '#6200ffff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1abc9c,#0b5345)', fontFamily: "'Cardo', serif" },





  { id: 'defined', name: "Undefined : Defined", chance: 2222000, nativeChance: 2222, weather: 'null', color: '#f5f5f5', textColor: '#000000', gradient: 'linear-gradient(135deg,#f5f5f5,#9e9e9e)', fontFamily: "'B612 Mono', monospace" },

  { id: 'kromat1k', name: "CHROMATIC: Kromat1k", chance: 40000000, color: '#ff3cac', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff3cac,#784ba0)', fontFamily: "'Azeret Mono', monospace" },

  { id: 'impeached_im_peach', name: "IMPEACHED : i'm peach", chance: 400000000, color: '#ffe066', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffe066,#ff9f1c)', fontFamily: "'Notable', sans-serif" },

  { id: 'watermelon', name: "Watermelon", chance: 320000, nativeChance: 64000, biome: 'JUNGLE', nativeBiome: 'jungle', color: '#2ecc71', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2ecc71,#c0392b)', fontFamily: "'Varela Round', sans-serif" },

  { id: 'star_rider_starfish', name: "Star Rider : Starfish", chance: 250000, nativeChance: 25000, weather: 'starfall', color: '#7ffcff', textColor: '#000000', gradient: 'linear-gradient(135deg,#7ffcff,#ff9ad5)', fontFamily: "'Rubik Beastly', sans-serif" },

  { id: 'shardsurfer', name: "《 Shard┃Surfer 》", chance: 225000000, nativeChance: 75000000, weather: 'snowy', color: '#003cff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#003cff,#00e5ff)', fontFamily: "'Spinnaker', sans-serif" },

  { id: 'innovator', name: "INNOVATOR", chance: 30000000, color: '#1f8fff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1f8fff,#0b3c5d)', fontFamily: "'Cantora One', sans-serif" },

  { id: 'pump', name: "PUMP", chance: 200000, weather: 'pumpkin_moon', biomeExclusive: 'PUMPKIN MOON', color: '#ff8c00', textColor: '#000000', gradient: 'linear-gradient(135deg,#ff8c00,#ff4500)', fontFamily: "'Bungee', sans-serif" },

  { id: 'lunar_nightfall', name: "Lunar ☾ Nightfall", chance: 3000000, weather: 'graveyard', biomeExclusive: 'GRAVEYARD', color: '#2b2dff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2b2dff,#000428)', fontFamily: "'Rye', sans-serif" },

  { id: 'vital', name: "Vital", chance: 6000000, weather: 'pumpkin_moon', biomeExclusive: 'PUMPKIN MOON', color: '#000000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#000000,#434343)', fontFamily: "'DM Sans', sans-serif" },

  { id: 'moonflower', name: "Moonflower", chance: 10000000, nativeChance: 2500000, biome: 'SAKURA', nativeBiome: 'sakura', weather: 'pumpkin_moon', biomeExclusive: 'PUMPKIN MOON', color: '#fff2a8', textColor: '#000000', gradient: 'linear-gradient(135deg,#fff2a8,#ffd700)', fontFamily: "'Mr De Haviland', cursive" },

  { id: 'cryptfire', name: "『Cryptfire』", chance: 21000000, weather: 'graveyard', biomeExclusive: 'GRAVEYARD', color: '#ff00aa', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff00aa,#6a00ff)', fontFamily: "'Grenze Gotisch', sans-serif" },

  { id: 'soul_hunter', name: "SOUL HUNTER", chance: 40000000, weather: 'graveyard', biomeExclusive: 'GRAVEYARD', color: '#1c2b4a', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1c2b4a,#000000)', fontFamily: "'Stack Sans Notch', sans-serif" },

  { id: 'dullahan', name: "DULLAHAN", chance: 72000000, weather: 'graveyard', biomeExclusive: 'GRAVEYARD', color: '#8b0000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#8b0000,#000000)', fontFamily: "'Lunasima', sans-serif" },

  { id: 'nightmare_sky', name: "》 NIGHTMARE SKY 《", chance: 190000000, weather: 'pumpkin_moon', biomeExclusive: 'PUMPKIN MOON', color: '#f5f5f5', textColor: '#000000', gradient: 'linear-gradient(135deg,#f5f5f5,#9e9e9e)', fontFamily: "'Nosifer', sans-serif" },

  { id: 'harvester', name: "【HARVESTER】", chance: 666000000, weather: 'graveyard', biomeExclusive: 'GRAVEYARD', color: '#ffcc33', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffcc33,#8b0000)', fontFamily: "'Numans', sans-serif" },

  { id: 'apostolos_veil', name: "APOSTOLOS : VEIL", chance: 800000000, weather: 'pumpkin_moon', biomeExclusive: 'PUMPKIN MOON', color: '#b00020', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#b00020,#2b0000)', fontFamily: "'Vollkorn', serif" },

  { id: 'wonderland', name: "Wonderland", chance: 12000000, nativeChance: 4000000, weather: 'snowy', color: '#e6f7ff', textColor: '#000000', gradient: 'linear-gradient(135deg,#e6f7ff,#b3e5ff)', fontFamily: "'Schibsted Grotesk', sans-serif" },

  { id: 'santafrost', name: "Santa-Frost", chance: 45000000, nativeChance: 15000000, weather: 'snowy', color: '#1c1c1c', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1c1c1c,#c0392b)', fontFamily: "'Comfortaa', sans-serif" },

  { id: 'winter_fantasy', name: "< Winter Fantasy >", chance: 72000000, nativeChance: 24000000, weather: 'snowy', color: '#9fdcff', textColor: '#000000', gradient: 'linear-gradient(135deg,#9fdcff,#ffffff)', fontFamily: "'Oxygen', sans-serif" },

  { id: 'express', name: "Express", chance: 90000000, nativeChance: 30000000, weather: 'snowy', color: '#ff3b3b', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff3b3b,#ffffff)', fontFamily: "'Finlandica', sans-serif" },

  { id: 'abominable', name: "{ABOMINABLE}", chance: 120000000, nativeChance: 40000000, weather: 'snowy', color: '#b3ffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#b3ffff,#5dade2)', fontFamily: "'Noto Znamenny Musical Notation', sans-serif" },

  { id: 'atlas_yuletide', name: "Atlas : Yuletide", chance: 510000000, nativeChance: 170000000, weather: 'snowy', color: '#fff2b2', textColor: '#000000', gradient: 'linear-gradient(135deg,#fff2b2,#ffd700)', fontFamily: "'Bungee Shade', sans-serif" },

  { id: 'pukeko', name: "pukeko", chance: 3198, color: '#00ff66', textColor: '#000000', gradient: 'linear-gradient(135deg,#00ff66,#003300)', fontFamily: "'Coiny', sans-serif" },

  { id: 'troll', name: ":Troll:", chance: 1000000, color: '#6a0dad', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#6a0dad,#2c145a)', fontFamily: "'Ranchers', sans-serif" },

  { id: 'toll', name: "⦗ T O L L ⦘", chance: 222000000, color: '#e3b695', textColor: '#0f0f0f', gradient: 'linear-gradient(135deg,#e3b695,#7b5a4a)', fontFamily: "'Cinzel', serif" },

  { id: 'onion', name: "Onion", chance: 8000000, color: '#d6ccff', textColor: '#000000', gradient: 'linear-gradient(135deg,#d6ccff,#6c5ce7)', fontFamily: "'Days One', sans-serif" },

  { id: 'the_glock_of_the_sky', name: "the glock of the sky", chance: 170000000, color: '#fff1a8', textColor: '#000000', gradient: 'linear-gradient(135deg,#fff1a8,#ffd700)', fontFamily: "'Rubik Microbe', sans-serif" },

  { id: 'manta', name: "Manta", chance: 300000000, nativeChance: 150000000, biome: 'DEEP SEA', nativeBiome: 'deep sea', weather: 'blazing_sun', color: '#00cfcf', textColor: '#000000', gradient: 'linear-gradient(135deg,#00cfcf,#004d4d)', fontFamily: "'Paytone One', sans-serif" },

  { id: 'aegis_watergun', name: "AEGIS : WATERGUN", chance: 825000000, nativeChance: 412500000, biome: 'DEEP SEA', nativeBiome: 'deep sea', weather: 'blazing_sun', color: '#000000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#000000,#00bfff)', fontFamily: "'Archivo Black', sans-serif" },



  // --- Halloween 2025 ---

  { id: 'pump_trickster', name: "Pump : Trickster", chance: 600000, weather: 'pumpkin_moon', biomeExclusive: 'PUMPKIN MOON', color: '#95a5a6', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#95a5a6,#7f8c8d)', fontFamily: "'Libre Franklin', sans-serif" },

  { id: 'celestialwicked', name: "Celestial:WICKED", chance: 1500000, weather: 'pumpkin_moon', biomeExclusive: 'PUMPKIN MOON', color: '#0000ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#0000ff,#7f8c8d)', fontFamily: "'Redacted', sans-serif" },

  { id: 'lunar_cultist', name: "Lunar : Cultist", chance: 2000000, weather: 'graveyard', biomeExclusive: 'GRAVEYARD', color: '#e74c3c', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#e74c3c,#7f8c8d)', fontFamily: "'Jacquard 12', sans-serif" },

  { id: 'headless', name: "Headless", chance: 3200000, weather: 'graveyard', biomeExclusive: 'GRAVEYARD', color: '#e74c3c', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#e74c3c,#7f8c8d)', fontFamily: "'TASA Explorer', sans-serif" },

  { id: 'werewolf', name: "Werewolf", chance: 3600000, weather: 'graveyard', biomeExclusive: 'GRAVEYARD', color: '#ffffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffffff,#7f8c8d)', fontFamily: "'PT Sans Narrow', sans-serif" },

  { id: 'shucks', name: "SHUCKS", chance: 4460000, weather: 'blood_rain', biomeExclusive: 'BLOOD RAIN', color: '#8e44ad', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#8e44ad,#7f8c8d)', fontFamily: "'Antic', sans-serif" },

  { id: 'oni', name: "Oni", chance: 6666666, weather: 'blood_rain', biomeExclusive: 'BLOOD RAIN', color: '#95a5a6', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#95a5a6,#7f8c8d)', fontFamily: "'Archivo', sans-serif" },

  { id: 'sinister', name: "Sinister", chance: 15000000, weather: 'pumpkin_moon', biomeExclusive: 'PUMPKIN MOON', color: '#1abc9c', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1abc9c,#7f8c8d)', fontFamily: "'Butcherman', sans-serif" },

  { id: 'headless_horseman', name: "H E A D L E S S H O R S E M A N", chance: 32000000, weather: 'pumpkin_moon', biomeExclusive: 'PUMPKIN MOON', color: '#000000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#000000,#7f8c8d)', fontFamily: "'Overpass', sans-serif" },

  { id: 'reaper', name: "Reaper", chance: 66000000, weather: 'blood_rain', biomeExclusive: 'BLOOD RAIN', color: '#3498db', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#3498db,#7f8c8d)', fontFamily: "'Metal Mania', sans-serif" },

  { id: 'runic_accursed', name: "RUNIC : ACCURSED", chance: 82000000, weather: 'blood_rain', biomeExclusive: 'BLOOD RAIN', color: '#e74c3c', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#e74c3c,#7f8c8d)', fontFamily: "'Saira', sans-serif" },

  { id: 'bloodgarden', name: "Bloodgarden", chance: 88000000, weather: 'blood_rain', biomeExclusive: 'BLOOD RAIN', color: '#2c3e50', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2c3e50,#7f8c8d)', fontFamily: "'Jolly Lodger', sans-serif" },

  { id: 'grief', name: "GRIEF", chance: 88250000, weather: 'graveyard', biomeExclusive: 'GRAVEYARD', color: '#ffffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffffff,#7f8c8d)', fontFamily: "'Ysabeau SC', sans-serif" },

  { id: 'crimson', name: "├ CRIMSON ┤", chance: 120000000, weather: 'blood_rain', biomeExclusive: 'BLOOD RAIN', color: '#e74c3c', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#e74c3c,#7f8c8d)', fontFamily: "'Bowlby One SC', sans-serif" },

  { id: 'graveborn', name: "GRAVEBORN", chance: 290000000, weather: 'graveyard', biomeExclusive: 'GRAVEYARD', color: '#ffffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffffff,#7f8c8d)', fontFamily: "'Mystery Quest', sans-serif" },

  { id: 'afterparty', name: "A F T E R P A R T Y", chance: 440000000, weather: 'graveyard', biomeExclusive: 'GRAVEYARD', color: '#0000ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#0000ff,#7f8c8d)', fontFamily: "'Cagliostro', sans-serif" },

  { id: 'phantasma', name: "Phantasma", chance: 462000000, weather: 'pumpkin_moon', biomeExclusive: 'PUMPKIN MOON', color: '#2c3e50', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2c3e50,#7f8c8d)', fontFamily: "'UnifrakturCook', sans-serif" },

  { id: 'apocalypse', name: "APOCALYPSE", chance: 624000000, weather: 'graveyard', biomeExclusive: 'GRAVEYARD', color: '#1abc9c', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1abc9c,#7f8c8d)', fontFamily: "'Ancizar Sans', sans-serif" },

  { id: 'wraith_light', name: "W:R:A:I:T:H / L:I:G:H:T", chance: 695000000, weather: 'blood_rain', biomeExclusive: 'BLOOD RAIN', color: '#ffffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffffff,#7f8c8d)', fontFamily: "'Familjen Grotesk', sans-serif" },

  { id: 'malediction', name: "MALEDICTION", chance: 730000000, weather: 'blood_rain', biomeExclusive: 'BLOOD RAIN', color: '#ffff00', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffff00,#7f8c8d)', fontFamily: "'Prosto One', sans-serif" },

  { id: 'banshee', name: "〔BANSHEE〕", chance: 730000000, weather: 'graveyard', biomeExclusive: 'GRAVEYARD', color: '#f1c40f', textColor: '#000000', gradient: 'linear-gradient(135deg,#f1c40f,#7f8c8d)', fontFamily: "'Jacquard 12 Charted', sans-serif" },

  { id: 'ravage', name: "RAVAGE", chance: 930000000, weather: 'graveyard', biomeExclusive: 'GRAVEYARD', color: '#00ff00', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#00ff00,#7f8c8d)', fontFamily: "'Calistoga', sans-serif" },

  { id: 'arachnophobia', name: "<ARACHNOPHOBIA>", chance: 940000000, weather: 'pumpkin_moon', biomeExclusive: 'PUMPKIN MOON', color: '#2c3e50', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2c3e50,#7f8c8d)', fontFamily: "'Tulpen One', sans-serif" },

  { id: 'lamenthyr', name: "LAMENTHYR", chance: 1000000000, weather: 'blood_rain', biomeExclusive: 'BLOOD RAIN', color: '#e74c3c', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#e74c3c,#7f8c8d)', fontFamily: "'Abril Fatface', sans-serif" },

  { id: 'erebus', name: "Erebus", chance: 1200000000, weather: 'blood_rain', biomeExclusive: 'BLOOD RAIN', color: '#000000', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#000000,#7f8c8d)', fontFamily: "'Noto Sans Elymaic', sans-serif" },

  // --- Christmas 2025 ---

  { id: 'snowball', name: "«Snowball»", chance: 10000, nativeChance: 5000, weather: 'aurora', color: '#e74c3c', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#e74c3c,#7f8c8d)', fontFamily: "'Tomorrow', sans-serif" },

  { id: 'star_rider_snowflake', name: "Star Rider : Snowflake", chance: 240000, nativeChance: 120000, weather: 'aurora', color: '#ff00ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff00ff,#7f8c8d)', fontFamily: "'Elsie', sans-serif" },

  { id: 'cryogenic', name: "Cryogenic", chance: 250000, biomeExclusive: 'AURORA', weather: 'aurora', ignoreLuck: true, color: '#f1c40f', textColor: '#000000', gradient: 'linear-gradient(135deg,#f1c40f,#7f8c8d)', fontFamily: "'Rubik Mono One', sans-serif" },

  { id: 'gingerbread', name: "Gingerbread", chance: 3750000, nativeChance: 1875000, weather: 'aurora', color: '#e74c3c', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#e74c3c,#7f8c8d)', fontFamily: "'Zalando Sans SemiExpanded', sans-serif" },

  { id: 'jack_frost', name: "Jack Frost", chance: 4700000, nativeChance: 2350000, weather: 'aurora', color: '#1abc9c', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#1abc9c,#7f8c8d)', fontFamily: "'Mouse Memoirs', sans-serif" },

  { id: 'lost_soul_wander', name: "Lost Soul - WANDER", chance: 9400000, nativeChance: 4700000, weather: 'aurora', color: '#ffffff', textColor: '#000000', gradient: 'linear-gradient(135deg,#ffffff,#7f8c8d)', fontFamily: "'Fira Sans Condensed', sans-serif" },

  { id: 'frostwood', name: "« Frostwood »", chance: 24500000, nativeChance: 12250000, weather: 'aurora', color: '#3498db', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#3498db,#7f8c8d)', fontFamily: "'Plus Jakarta Sans', sans-serif" },

  { id: 'north_pole', name: "- North Pole -", chance: 45000000, nativeChance: 22500000, weather: 'aurora', color: '#00ff00', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#00ff00,#7f8c8d)', fontFamily: "'SUSE Mono', sans-serif" },

  { id: 'sky_burst', name: "Sky Burst!", chance: 60000000, nativeChance: 30000000, weather: 'aurora', color: '#00ffff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#00ffff,#7f8c8d)', fontFamily: "'Londrina Sketch', sans-serif" },

  { id: 'encase', name: "[ENCASE]", chance: 230000000, nativeChance: 115000000, weather: 'aurora', color: '#8e44ad', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#8e44ad,#7f8c8d)', fontFamily: "'Josefin Sans', sans-serif" },

  { id: 'cryofang', name: "CryoFang", chance: 380000000, nativeChance: 190000000, weather: 'aurora', color: '#00ffff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#00ffff,#7f8c8d)', fontFamily: "'Afacad Flux', sans-serif" },

  { id: 'nrthern', name: "‹ NØRTHERN ›", chance: 405000000, nativeChance: 202500000, weather: 'aurora', color: '#ff00ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff00ff,#7f8c8d)', fontFamily: "'Darker Grotesque', sans-serif" },

  { id: 'eve_night', name: "Eve - Night", chance: 424000000, nativeChance: 212000000, weather: 'aurora', color: '#e74c3c', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#e74c3c,#7f8c8d)', fontFamily: "'Funnel Display', sans-serif" },

  { id: 'workshop', name: "Workshop", chance: 700000000, nativeChance: 350000000, weather: 'aurora', color: '#2c3e50', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#2c3e50,#7f8c8d)', fontFamily: "'Italiana', sans-serif" },

  { id: 'parol', name: "PAROL", chance: 760000000, nativeChance: 380000000, weather: 'aurora', color: '#00ffff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#00ffff,#7f8c8d)', fontFamily: "'Titillium Web', sans-serif" },

  { id: 'frostveil', name: "SOVEREIGN : Frostveil", chance: 1000000000, nativeChance: 500000000, weather: 'aurora', color: '#3498db', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#3498db,#7f8c8d)', fontFamily: "'Sora', sans-serif" },

  { id: 'winter_garden', name: "Winter Garden", chance: 1450012025, nativeChance: 725006013, weather: 'aurora', color: '#ff00ff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#ff00ff,#7f8c8d)', fontFamily: "'Fjalla One', sans-serif" },

  { id: 'dream_traveler', name: "Dream Traveler", chance: 2025012025, nativeChance: 1012506013, weather: 'aurora', color: '#00ffff', textColor: '#ffffff', gradient: 'linear-gradient(135deg,#00ffff,#7f8c8d)', fontFamily: "'Anek Latin', sans-serif" },



  // --- Legendary Auras ---

  { id: 'aeternitas', name: "A E T E R N I T A S", chance: 10000000000, nativeChance: 3333333333, weather: 'sandstorm', color: '#c9a227', textColor: '#1a1408', gradient: 'linear-gradient(135deg,#c9a227,#1a1408)', fontFamily: "'Encode Sans Semi Condensed', sans-serif" },



];
