import React, { useEffect, useRef } from 'react';

/**
 * GalaxyUniverse Component
 * Renders an immersive, animated cosmic universe background with:
 * - High-density twinkling stars of different magnitudes and colors
 * - Multi-layered glowing nebula clouds (interstellar navy, violet, cyan, and stardust gold)
 * - Drifting cosmic dust particles
 * - Occasional realistic shooting stars with luminous trails
 * - 4-point anime sparkle stars (cross-stars)
 */
export default function GalaxyUniverse() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Stars collection
    let stars = [];
    let nebulae = [];
    let shootingStars = [];
    let sparkles = [];

    // Colors tailored to midnight blue universe theme
    const starColors = [
      '#ffffff',
      '#E8F4FF',
      '#C8C7FF', // lavender
      '#8AE4FF', // cyan
      '#FFD38A', // sunrise gold
      '#FFB7D5', // soft flower pink
    ];

    function initStars() {
      // 1. Generate 220 twinkling stars
      const starCount = Math.floor((width * height) / 6000); // responsive density
      stars = [];
      for (let i = 0; i < Math.max(140, Math.min(starCount, 300)); i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() < 0.85 ? Math.random() * 1.2 + 0.4 : Math.random() * 2 + 1.2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          baseAlpha: Math.random() * 0.7 + 0.2,
          alpha: Math.random(),
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
        });
      }

      // 2. Sparkle stars (4-point cross anime sparkles)
      sparkles = [];
      for (let i = 0; i < 18; i++) {
        sparkles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 5 + 4,
          color: Math.random() > 0.4 ? '#8AE4FF' : '#FFD38A',
          alpha: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.015 + 0.008,
          dir: Math.random() > 0.5 ? 1 : -1,
          rot: Math.random() * Math.PI,
        });
      }

      // 3. Ambient nebula cosmic centers
      nebulae = [
        { x: width * 0.2, y: height * 0.25, r: width * 0.45, color1: 'rgba(29, 20, 69, 0.45)', color2: 'rgba(11, 31, 70, 0)' },
        { x: width * 0.8, y: height * 0.4, r: width * 0.5, color1: 'rgba(16, 44, 91, 0.5)', color2: 'rgba(7, 21, 47, 0)' },
        { x: width * 0.5, y: height * 0.75, r: width * 0.6, color1: 'rgba(40, 24, 75, 0.35)', color2: 'rgba(11, 31, 70, 0)' },
        { x: width * 0.15, y: height * 0.85, r: width * 0.35, color1: 'rgba(138, 228, 255, 0.07)', color2: 'rgba(7, 21, 47, 0)' },
        { x: width * 0.85, y: height * 0.15, r: width * 0.35, color1: 'rgba(255, 211, 138, 0.06)', color2: 'rgba(7, 21, 47, 0)' },
      ];
    }

    initStars();

    // Spawn shooting star periodically
    let lastShoot = Date.now();
    function maybeSpawnShootingStar() {
      const now = Date.now();
      if (now - lastShoot > 3500 && Math.random() < 0.6) {
        lastShoot = now;
        const startX = Math.random() * width * 0.9;
        const startY = Math.random() * height * 0.4;
        const length = Math.random() * 120 + 80;
        const speed = Math.random() * 8 + 7;
        const angle = (Math.PI / 4) + (Math.random() * 0.2 - 0.1); // ~45 deg

        shootingStars.push({
          x: startX,
          y: startY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          length,
          life: 1,
          decay: Math.random() * 0.015 + 0.012,
          color: Math.random() > 0.5 ? '#8AE4FF' : '#FFFFFF',
        });
      }
    }

    // Render loop
    function render() {
      ctx.clearRect(0, 0, width, height);

      // Deep celestial galaxy space gradient base
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#040B1A');
      bgGrad.addColorStop(0.3, '#07152F');
      bgGrad.addColorStop(0.65, '#0B1F46');
      bgGrad.addColorStop(1, '#050E22');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw soft nebula clouds
      for (const n of nebulae) {
        const rad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        rad.addColorStop(0, n.color1);
        rad.addColorStop(1, n.color2);
        ctx.fillStyle = rad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw stars with smooth twinkling
      for (const s of stars) {
        s.alpha += s.twinkleSpeed * s.twinkleDir;
        if (s.alpha >= 1) {
          s.alpha = 1;
          s.twinkleDir = -1;
        } else if (s.alpha <= s.baseAlpha * 0.3) {
          s.alpha = s.baseAlpha * 0.3;
          s.twinkleDir = 1;
        }

        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();

        // Extra soft glow for larger stars
        if (s.radius > 1.4) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = s.color;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // Draw 4-point sparkle stars
      for (const sp of sparkles) {
        sp.alpha += sp.speed * sp.dir;
        if (sp.alpha >= 1) {
          sp.alpha = 1;
          sp.dir = -1;
        } else if (sp.alpha <= 0.15) {
          sp.alpha = 0.15;
          sp.dir = 1;
        }

        ctx.save();
        ctx.translate(sp.x, sp.y);
        ctx.globalAlpha = sp.alpha;
        ctx.strokeStyle = sp.color;
        ctx.fillStyle = sp.color;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 10;
        ctx.shadowColor = sp.color;

        const s = sp.size;
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.quadraticCurveTo(0, 0, s, 0);
        ctx.quadraticCurveTo(0, 0, 0, s);
        ctx.quadraticCurveTo(0, 0, -s, 0);
        ctx.quadraticCurveTo(0, 0, 0, -s);
        ctx.fill();
        ctx.restore();
      }

      // Update & draw shooting stars
      maybeSpawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life -= ss.decay;

        if (ss.life <= 0 || ss.x > width + 100 || ss.y > height + 100) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x - (ss.vx / 8) * ss.length;
        const tailY = ss.y - (ss.vy / 8) * ss.length;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.7, ss.color === '#8AE4FF' ? 'rgba(138, 228, 255, 0.4)' : 'rgba(255, 255, 255, 0.4)');
        grad.addColorStop(1, ss.color);

        ctx.save();
        ctx.globalAlpha = Math.max(0, ss.life);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 8;
        ctx.shadowColor = ss.color;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.stroke();

        // Head of shooting star
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="galaxy-universe-container"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />

      {/* Atmospheric Cosmic Spiral Overlay */}
      <div
        className="cosmic-dust-glow"
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 75% 20%, rgba(138, 228, 255, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 25% 65%, rgba(200, 199, 255, 0.07) 0%, transparent 50%),
            radial-gradient(circle at 60% 85%, rgba(255, 211, 138, 0.06) 0%, transparent 40%)
          `,
          pointerEvents: 'none',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}
