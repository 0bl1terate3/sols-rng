/**
 * Performance Optimizations for Sols RNG Game
 * This file contains various performance improvements and glitch fixes
 */

// ============================================
// 1. AURA LOOKUP CACHE - Prevents repeated array searches
// ============================================
const AuraCache = {
    _idMap: null,
    _nameMap: null,

    // Build the cache on first use
    _buildCache() {
        if (this._idMap) return;
        this._idMap = new Map();
        this._nameMap = new Map();

        if (typeof AURAS !== 'undefined') {
            AURAS.forEach(aura => {
                this._idMap.set(aura.id, aura);
                this._nameMap.set(aura.name.toLowerCase(), aura);
            });
        }
    },

    // Get aura by ID - O(1) instead of O(n)
    getById(id) {
        this._buildCache();
        return this._idMap.get(id) || null;
    },

    // Get aura by name - O(1) instead of O(n)
    getByName(name) {
        this._buildCache();
        return this._nameMap.get(name.toLowerCase()) || null;
    },

    // Invalidate cache (call if AURAS array is modified)
    invalidate() {
        this._idMap = null;
        this._nameMap = null;
    }
};

// Override AURAS.find for backwards compatibility with cached lookups
const originalAurasFind = Array.prototype.find;
if (typeof AURAS !== 'undefined') {
    // Patch common find patterns
    window._optimizedAuraFind = function (predicate) {
        // Check if it's an ID lookup
        const predicateStr = predicate.toString();
        if (predicateStr.includes('.id ===') || predicateStr.includes('.id===')) {
            const match = predicateStr.match(/['"`]([^'"`]+)['"`]/);
            if (match) {
                return AuraCache.getById(match[1]);
            }
        }
        // Fall back to regular find
        return originalAurasFind.call(AURAS, predicate);
    };
}

// ============================================
// 2. THROTTLED SAVE GAME
// ============================================
const ThrottledSave = {
    _pending: false,
    _lastSave: 0,
    _minInterval: 5000, // Minimum 5 seconds between saves
    _timeoutId: null,

    // Call this instead of saveGame() directly
    queueSave() {
        const now = Date.now();

        // If enough time has passed, save immediately
        if (now - this._lastSave >= this._minInterval) {
            this._doSave();
            return;
        }

        // Otherwise, queue a delayed save if not already pending
        if (!this._pending) {
            this._pending = true;
            const delay = this._minInterval - (now - this._lastSave);

            this._timeoutId = setTimeout(() => {
                this._doSave();
            }, delay);
        }
    },

    // Force immediate save (for critical moments)
    forceSave() {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            this._timeoutId = null;
        }
        this._doSave();
    },

    _doSave() {
        this._pending = false;
        this._lastSave = Date.now();

        // Call the original saveGame function
        if (typeof saveGame === 'function') {
            saveGame();
        }
    }
};

// ============================================
// 3. WEATHER PARTICLE POOLING
// ============================================
const ParticlePool = {
    pools: {},
    maxPoolSize: 100,

    // Get a particle element from the pool or create new
    acquire(className) {
        if (!this.pools[className]) {
            this.pools[className] = [];
        }

        if (this.pools[className].length > 0) {
            const el = this.pools[className].pop();
            el.style.display = '';
            return el;
        }

        // Create new element
        const el = document.createElement('div');
        el.classList.add(className);
        return el;
    },

    // Return a particle to the pool instead of destroying
    release(el, className) {
        if (!this.pools[className]) {
            this.pools[className] = [];
        }

        // Remove from DOM
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }

        // Add to pool if not full
        if (this.pools[className].length < this.maxPoolSize) {
            el.style.display = 'none';
            // Reset inline styles
            el.style.cssText = '';
            el.classList.add(className);
            this.pools[className].push(el);
        }
    },

    // Clear all pools
    clear() {
        this.pools = {};
    }
};

// ============================================
// 4. DEBOUNCED UI UPDATES
// ============================================
const DebouncedUpdates = {
    _pending: {},

    // Schedule a debounced function call
    schedule(key, fn, delay = 100) {
        if (this._pending[key]) {
            cancelAnimationFrame(this._pending[key]);
        }

        this._pending[key] = requestAnimationFrame(() => {
            delete this._pending[key];
            fn();
        });
    },

    // For longer delays, use setTimeout
    scheduleDelayed(key, fn, delay = 250) {
        if (this._pending[key]) {
            clearTimeout(this._pending[key]);
        }

        this._pending[key] = setTimeout(() => {
            delete this._pending[key];
            fn();
        }, delay);
    }
};

// ============================================
// 5. RAF-BASED ANIMATION MANAGER
// ============================================
const AnimationManager = {
    _animations: new Map(),
    _running: false,
    _lastTime: 0,

    // Register an animation callback
    register(id, callback, fps = 60) {
        this._animations.set(id, {
            callback,
            fps,
            lastFrame: 0,
            frameInterval: 1000 / fps
        });

        if (!this._running) {
            this._running = true;
            this._lastTime = performance.now();
            requestAnimationFrame(this._tick.bind(this));
        }
    },

    // Unregister an animation
    unregister(id) {
        this._animations.delete(id);

        if (this._animations.size === 0) {
            this._running = false;
        }
    },

    // Main tick function
    _tick(timestamp) {
        if (!this._running) return;

        const delta = timestamp - this._lastTime;

        this._animations.forEach((anim, id) => {
            if (timestamp - anim.lastFrame >= anim.frameInterval) {
                try {
                    anim.callback(delta, timestamp);
                } catch (e) {
                    console.error(`Animation ${id} error:`, e);
                }
                anim.lastFrame = timestamp;
            }
        });

        this._lastTime = timestamp;
        requestAnimationFrame(this._tick.bind(this));
    },

    // Stop all animations
    stopAll() {
        this._animations.clear();
        this._running = false;
    }
};

// ============================================
// 6. MEMORY LEAK PREVENTION
// ============================================
const CleanupManager = {
    _cleanupTasks: [],

    // Register cleanup task
    register(cleanup) {
        this._cleanupTasks.push(cleanup);
    },

    // Run all cleanup tasks
    runAll() {
        this._cleanupTasks.forEach(task => {
            try {
                task();
            } catch (e) {
                console.error('Cleanup error:', e);
            }
        });
        this._cleanupTasks = [];
    }
};

// ============================================
// 7. OPTIMIZED WEATHER PARTICLE CREATION
// ============================================
const OptimizedWeather = {
    // Create particles in batches instead of one at a time
    createParticleBatch(container, className, count, styleGenerator) {
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < count; i++) {
            const particle = ParticlePool.acquire(className);
            const styles = styleGenerator(i);
            Object.assign(particle.style, styles);
            fragment.appendChild(particle);
        }

        container.appendChild(fragment);
    },

    // Use CSS custom properties for animation variations
    setupCSSVariables() {
        const style = document.createElement('style');
        style.id = 'perf-css-vars';
        style.textContent = `
            :root {
                --particle-duration: 1s;
                --particle-opacity: 0.8;
                --particle-size: 4px;
            }
            
            /* GPU-accelerated transforms */
            .raindrop, .snowflake, .dust-particle, .wind-streak {
                will-change: transform, opacity;
                contain: layout style paint;
            }
        `;

        if (!document.getElementById('perf-css-vars')) {
            document.head.appendChild(style);
        }
    }
};

// ============================================
// 8. ROLL PERFORMANCE TRACKING
// ============================================
const PerformanceMonitor = {
    _rollTimes: [],
    _maxSamples: 100,

    // Track roll performance
    startRoll() {
        return performance.now();
    },

    endRoll(startTime) {
        const duration = performance.now() - startTime;
        this._rollTimes.push(duration);

        if (this._rollTimes.length > this._maxSamples) {
            this._rollTimes.shift();
        }

        return duration;
    },

    // Get average roll time
    getAverageRollTime() {
        if (this._rollTimes.length === 0) return 0;
        return this._rollTimes.reduce((a, b) => a + b, 0) / this._rollTimes.length;
    },

    // Check if performance is degrading
    isPerformanceDegrading() {
        if (this._rollTimes.length < 20) return false;

        const recent = this._rollTimes.slice(-10);
        const older = this._rollTimes.slice(-20, -10);

        const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
        const olderAvg = older.reduce((a, b) => a + b, 0) / older.length;

        // If recent rolls are 50% slower, we're degrading
        return recentAvg > olderAvg * 1.5;
    },

    // Log performance stats
    logStats() {
        console.log(`[Performance] Avg roll time: ${this.getAverageRollTime().toFixed(2)}ms`);
        console.log(`[Performance] Degrading: ${this.isPerformanceDegrading()}`);
        console.log(`[Performance] Active animations: ${AnimationManager._animations.size}`);
    }
};

// ============================================
// 9. FIX: Clear orphaned animation elements
// ============================================
function cleanupOrphanedElements() {
    // Remove any leftover flash overlays
    document.querySelectorAll('[data-1b-effect]').forEach(el => {
        if (!el.parentNode) return;
        el.remove();
    });

    // Reset body filters if stuck
    const body = document.body;
    if (body.style.filter && body.style.filter !== 'none') {
        console.log('[Cleanup] Resetting stuck body filter');
        body.style.filter = '';
        body.style.transform = '';
        body.style.animation = '';
    }

    // Clear multiple video overlays
    const overlays = document.querySelectorAll('#video-cutscene-overlay');
    if (overlays.length > 1) {
        console.log('[Cleanup] Removing duplicate video overlays');
        for (let i = 1; i < overlays.length; i++) {
            overlays[i].remove();
        }
    }

    // Reset hidden video overlay if stuck visible
    const videoOverlay = document.getElementById('video-cutscene-overlay');
    if (videoOverlay) {
        const video = videoOverlay.querySelector('video');
        if (videoOverlay.style.display !== 'none' && video && video.paused && video.currentTime === 0) {
            console.log('[Cleanup] Hiding stuck video overlay');
            videoOverlay.style.display = 'none';
        }
    }

    // Clean up orphaned flash/effect divs
    document.querySelectorAll('.flash-overlay, .mythic-flash, .legendary-flash, .unique-flash, .global-flash').forEach(el => {
        // If element has been around for more than 10 seconds, remove it
        if (!el.dataset.createdAt) {
            el.dataset.createdAt = Date.now();
        } else if (Date.now() - parseInt(el.dataset.createdAt) > 10000) {
            console.log('[Cleanup] Removing orphaned flash overlay');
            el.remove();
        }
    });

    // Reset roll overlay if stuck at high opacity for too long
    const rollOverlay = document.getElementById('roll-overlay');
    if (rollOverlay && rollOverlay.style.opacity === '1') {
        // Check if isRolling is false (if accessible)
        if (typeof isRolling !== 'undefined' && !isRolling) {
            // Keep overlay visible for display, that's intentional
        }
    }

    // Clean up any orphaned biome canvases that shouldn't exist
    const biomeCanvases = ['starfall-canvas', 'heaven-canvas', 'blood-rain-canvas',
        'graveyard-canvas', 'cyberspace-canvas', 'dreamspace-canvas'];
    biomeCanvases.forEach(id => {
        const canvases = document.querySelectorAll(`#${id}`);
        if (canvases.length > 1) {
            console.log(`[Cleanup] Removing duplicate ${id} canvases`);
            for (let i = 1; i < canvases.length; i++) {
                canvases[i].remove();
            }
        }
    });

    // Clean up any stuck Howl audio objects (check if too many are playing)
    if (typeof Howler !== 'undefined' && Howler._howls && Howler._howls.length > 20) {
        console.log('[Cleanup] Too many Howl instances, cleaning old ones');
        const howls = Howler._howls;
        for (let i = 0; i < howls.length - 10; i++) {
            if (howls[i] && !howls[i].playing()) {
                howls[i].unload();
            }
        }
    }
}

// ============================================
// 10. AUTO-CLEANUP INTERVAL
// ============================================
function startPerformanceMonitoring() {
    // Run cleanup every 30 seconds
    setInterval(() => {
        cleanupOrphanedElements();

        // Log performance if there are issues
        if (PerformanceMonitor.isPerformanceDegrading()) {
            console.warn('[Performance] Degradation detected, running cleanup...');
            PerformanceMonitor.logStats();
        }
    }, 30000);

    // Setup CSS optimizations
    OptimizedWeather.setupCSSVariables();

    console.log('[Performance] Monitoring started');
}

// Initialize on DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startPerformanceMonitoring);
} else {
    startPerformanceMonitoring();
}

// Export for use in main code
window.SolsPerformance = {
    AuraCache,
    ThrottledSave,
    ParticlePool,
    DebouncedUpdates,
    AnimationManager,
    CleanupManager,
    OptimizedWeather,
    PerformanceMonitor,
    cleanupOrphanedElements
};

console.log('[Performance] Sols RNG Performance module loaded');
