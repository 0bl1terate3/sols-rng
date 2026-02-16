/**
 * Deep Sea Underwater Effect
 * DEEP SEA biome background effect for Sol's RNG Clone
 * Based on "Underwater Background #2" by Wakana Y.K.
 */

const deepSeaEffect = (() => {
    let container = null;
    let isActive = false;
    let animationStyles = null;

    function init() {
        // Create container if it doesn't exist
        container = document.getElementById('deepsea-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'deepsea-container';
            container.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                pointer-events: none;
                z-index: 0;
                overflow: hidden;
                opacity: 0;
                transition: opacity 1.5s ease-in-out;
            `;
            document.body.insertBefore(container, document.body.firstChild);
        }

        // Add styles
        if (!document.getElementById('deepsea-styles')) {
            animationStyles = document.createElement('style');
            animationStyles.id = 'deepsea-styles';
            animationStyles.textContent = `
                :root {
                    --deepsea-ratioW: 1;
                }
                
                #deepsea-bg {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-image: linear-gradient(
                        to bottom,
                        rgba(255,255,255,0.3),
                        rgba(100,100,100,0.5) 25%,
                        rgba(80,80,80,0.5) 60%,
                        rgba(20,60,80,0.7)
                    );
                    opacity: 0.5;
                    mix-blend-mode: overlay;
                    z-index: 1;
                }
                
                #deepsea-surface {
                    mix-blend-mode: overlay;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: 2;
                }
                
                #deepsea-surface::before,
                #deepsea-surface::after {
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: linear-gradient(
                        to bottom,
                        rgba(0, 100, 150, 0.3) 0%,
                        rgba(0, 50, 80, 0.5) 50%,
                        rgba(0, 20, 40, 0.7) 100%
                    );
                    background-repeat: repeat-x;
                    
                    --duration: 8s;
                    --lowHeight: 30vh;
                    --highHeight: 70vh;
                    --layerNum: 2;
                    --index: 0;
                    --opacity: 0.4;
                    
                    animation: deepsea-surface var(--duration) linear infinite;
                    animation-delay: calc((var(--duration) / var(--layerNum)) * var(--index) * -1);
                    opacity: 0;
                    mask-image: linear-gradient(to top, white, transparent var(--lowHeight));
                }
                
                #deepsea-surface::before {
                    --index: 0;
                    transform: scale3d(1, -1, 1);
                }
                
                #deepsea-surface::after {
                    --index: 1;
                    transform: scale3d(-1, -1, 1);
                }
                
                #deepsea-caustics {
                    position: fixed;
                    bottom: 0;
                    top: 0;
                    width: 100vw;
                    height: 100vh;
                    filter: url(#deepsea-noise);
                    z-index: 3;
                }
                
                #deepsea-caustics::before,
                #deepsea-caustics::after {
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: repeating-conic-gradient(
                        from 0deg at 50% 50%,
                        rgba(0, 200, 255, 0.1) 0deg,
                        rgba(0, 150, 200, 0.05) 30deg,
                        rgba(0, 100, 150, 0.1) 60deg,
                        rgba(0, 200, 255, 0.05) 90deg
                    );
                    background-repeat: repeat;
                    
                    --duration: 10s;
                    --gapY: 0px;
                    
                    background-size: calc(100vw / var(--deepsea-ratioW)) 30vh;
                    animation: deepsea-caustics calc(var(--duration) * var(--deepsea-ratioW)) linear infinite;
                    opacity: 0.4;
                    mask-image: linear-gradient(
                        to top,
                        white,
                        transparent,
                        transparent,
                        transparent
                    );
                }
                
                #deepsea-caustics::after {
                    --duration: 11s;
                    --gapY: 10vh;
                    animation-delay: -2s;
                    transform: scale3d(-1, 1, 1);
                }
                
                #deepsea-sun {
                    mix-blend-mode: overlay;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: 4;
                }
                
                #deepsea-sun div {
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    transform-origin: 50vw 0;
                    animation: deepsea-sun 7s ease infinite alternate;
                    
                    mask-image: linear-gradient(
                        to bottom,
                        transparent 15%,
                        white 50%,
                        white 55%,
                        transparent 80%
                    );
                }
                
                #deepsea-sun-layer1 {
                    background: linear-gradient(
                        to right,
                        transparent 39%,
                        rgba(100, 200, 255, 0.4) 40%,
                        transparent 41%,
                        transparent 48.5%,
                        rgba(100, 200, 255, 0.5) 50%,
                        transparent 51.5%,
                        transparent 53%,
                        rgba(100, 200, 255, 0.4) 54%,
                        transparent 55%,
                        transparent 70%,
                        rgba(100, 200, 255, 0.3) 71%,
                        transparent 72%
                    );
                }
                
                #deepsea-sun-layer2 {
                    animation-delay: -2s;
                    animation-duration: 7.8s;
                    animation-direction: alternate-reverse;
                    background: linear-gradient(
                        to right,
                        transparent 32%,
                        rgba(80, 180, 230, 0.3) 33%,
                        transparent 34%,
                        transparent 38%,
                        rgba(80, 180, 230, 0.4) 39%,
                        transparent 40%,
                        transparent 53%,
                        rgba(80, 180, 230, 0.3) 54%,
                        transparent 55%,
                        transparent 63.5%,
                        rgba(80, 180, 230, 0.4) 65%,
                        transparent 66.5%
                    );
                }
                
                #deepsea-sun-layer3 {
                    animation-delay: -5s;
                    animation-duration: 8.5s;
                    background: linear-gradient(
                        to right,
                        transparent 38.5%,
                        rgba(60, 160, 210, 0.3) 40%,
                        transparent 41.5%,
                        transparent 47%,
                        rgba(60, 160, 210, 0.4) 48%,
                        transparent 49%,
                        transparent 52%,
                        rgba(60, 160, 210, 0.3) 53%,
                        transparent 54%,
                        transparent 60%,
                        rgba(60, 160, 210, 0.4) 61%,
                        transparent 62%
                    );
                }
                
                /* Bubbles */
                .deepsea-bubble {
                    position: absolute;
                    bottom: -20px;
                    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(100,200,255,0.3));
                    border-radius: 50%;
                    animation: deepsea-bubble-rise linear infinite;
                    pointer-events: none;
                }
                
                /* Particles / Sea snow */
                .deepsea-particle {
                    position: absolute;
                    top: -10px;
                    background: rgba(200, 230, 255, 0.6);
                    border-radius: 50%;
                    animation: deepsea-particle-fall linear infinite;
                    pointer-events: none;
                }
                
                @keyframes deepsea-surface {
                    0% {
                        opacity: 0;
                        background-position: center bottom;
                        background-size: 100% var(--highHeight);
                    }
                    20% {
                        opacity: var(--opacity);
                    }
                    100% {
                        opacity: 0;
                        background-position: center bottom calc(-1 * var(--lowHeight));
                        background-size: 100% var(--lowHeight);
                    }
                }
                
                @keyframes deepsea-caustics {
                    0% {
                        background-position: bottom var(--gapY) left;
                    }
                    100% {
                        background-position: bottom var(--gapY) left -100vw;
                    }
                }
                
                @keyframes deepsea-sun {
                    0% {
                        opacity: 0.15;
                        transform: skew(5deg) scale3d(3, 1.5, 1);
                    }
                    50% {
                        opacity: 0.1;
                        transform: skew(0deg) scale3d(1.5, 1, 1);
                    }
                    100% {
                        opacity: 0.15;
                        transform: skew(-5deg) scale3d(3, 1, 1);
                    }
                }
                
                @keyframes deepsea-bubble-rise {
                    0% {
                        transform: translateY(0) translateX(0) scale(1);
                        opacity: 0.8;
                    }
                    50% {
                        transform: translateY(-50vh) translateX(20px) scale(0.8);
                        opacity: 0.6;
                    }
                    100% {
                        transform: translateY(-120vh) translateX(-10px) scale(0.5);
                        opacity: 0;
                    }
                }
                
                @keyframes deepsea-particle-fall {
                    0% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.6;
                    }
                    90% {
                        opacity: 0.4;
                    }
                    100% {
                        transform: translateY(120vh) translateX(30px);
                        opacity: 0;
                    }
                }
                
                @media (min-aspect-ratio: 2/1) {
                    :root { --deepsea-ratioW: 2; }
                }
                @media (min-aspect-ratio: 3/1) {
                    :root { --deepsea-ratioW: 3; }
                }
            `;
            document.head.appendChild(animationStyles);
        }
    }

    function start() {
        if (isActive) return;

        init();

        // Create SVG filter
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.id = 'deepsea-svg';
        svg.style.display = 'none';
        svg.innerHTML = `
            <filter id="deepsea-noise">
                <feTurbulence type="turbulence" baseFrequency=".05" numOctaves="1" seed="3" stitchTiles="stitch" />
                <feDisplacementMap in="SourceGraphic" scale="10" />
            </filter>
        `;
        container.appendChild(svg);

        // Create background gradient
        const bg = document.createElement('div');
        bg.id = 'deepsea-bg';
        container.appendChild(bg);

        // Create surface
        const surface = document.createElement('div');
        surface.id = 'deepsea-surface';
        container.appendChild(surface);

        // Create caustics
        const caustics = document.createElement('div');
        caustics.id = 'deepsea-caustics';
        container.appendChild(caustics);

        // Create sun rays
        const sun = document.createElement('div');
        sun.id = 'deepsea-sun';
        sun.innerHTML = `
            <div id="deepsea-sun-layer1"></div>
            <div id="deepsea-sun-layer2"></div>
            <div id="deepsea-sun-layer3"></div>
        `;
        container.appendChild(sun);

        // Create bubbles container
        const bubblesContainer = document.createElement('div');
        bubblesContainer.id = 'deepsea-bubbles';
        bubblesContainer.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 5;';
        container.appendChild(bubblesContainer);

        // Spawn bubbles periodically
        const bubbleInterval = setInterval(() => {
            if (!isActive) {
                clearInterval(bubbleInterval);
                return;
            }
            spawnBubble(bubblesContainer);
        }, 300);

        // Create particles container (sea snow)
        const particlesContainer = document.createElement('div');
        particlesContainer.id = 'deepsea-particles';
        particlesContainer.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 5;';
        container.appendChild(particlesContainer);

        // Spawn initial particles
        for (let i = 0; i < 50; i++) {
            setTimeout(() => spawnParticle(particlesContainer), i * 100);
        }

        // Spawn particles periodically
        const particleInterval = setInterval(() => {
            if (!isActive) {
                clearInterval(particleInterval);
                return;
            }
            spawnParticle(particlesContainer);
        }, 200);

        // Apply deep sea color overlay to body
        document.body.style.background = 'linear-gradient(to bottom, #002233 0%, #001520 30%, #000a10 70%, #000508 100%)';

        // Fade in
        requestAnimationFrame(() => {
            container.style.opacity = '1';
        });

        isActive = true;
    }

    function spawnBubble(container) {
        const bubble = document.createElement('div');
        bubble.className = 'deepsea-bubble';
        const size = 3 + Math.random() * 12;
        const x = Math.random() * 100;
        const duration = 8 + Math.random() * 6;

        bubble.style.cssText = `
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            animation-duration: ${duration}s;
            animation-delay: ${Math.random() * 2}s;
        `;

        container.appendChild(bubble);

        // Remove after animation
        setTimeout(() => bubble.remove(), (duration + 2) * 1000);
    }

    function spawnParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'deepsea-particle';
        const size = 1 + Math.random() * 3;
        const x = Math.random() * 100;
        const duration = 15 + Math.random() * 10;

        particle.style.cssText = `
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            animation-duration: ${duration}s;
            animation-delay: ${Math.random() * 5}s;
        `;

        container.appendChild(particle);

        // Remove after animation
        setTimeout(() => particle.remove(), (duration + 5) * 1000);
    }

    function stop() {
        if (!isActive) return;

        if (container) {
            container.style.opacity = '0';
            setTimeout(() => {
                container.innerHTML = '';
            }, 1500);
        }

        // Restore body background
        document.body.style.background = '';

        isActive = false;
    }

    function toggle() {
        if (isActive) {
            stop();
        } else {
            start();
        }
    }

    return {
        init,
        start,
        stop,
        toggle,
        isActive: () => isActive
    };
})();

// Auto-initialize when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => deepSeaEffect.init());
} else {
    deepSeaEffect.init();
}

// Expose to window for global access
window.deepSeaEffect = deepSeaEffect;
