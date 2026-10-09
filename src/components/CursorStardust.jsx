import React, { useEffect, useRef } from 'react';

/**
 * CursorStardust Component
 * Spawns magical celestial stardust embers and anime sparkles that drift and twinkle
 * wherever the user moves their cursor or drags their finger.
 */
export default function CursorStardust() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles = [];
    const colors = ['#8AE4FF', '#FFD38A', '#C8C7FF', '#FFB7D5', '#FFFFFF'];

    const spawnParticles = (x, y) => {
      // Limit total particles to avoid any lag
      if (particles.length > 80) return;
      
      const count = Math.random() < 0.6 ? 2 : 1;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.3;
        particles.push({
          x: x + (Math.random() * 8 - 4),
          y: y + (Math.random() * 8 - 4),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4, // gentle upward drift
          size: Math.random() * 2.8 + 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          decay: Math.random() * 0.025 + 0.02,
          isSparkle: Math.random() > 0.65,
        });
      }
    };

    const handleMouseMove = (e) => {
      spawnParticles(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        spawnParticles(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;

        if (p.isSparkle) {
          // Draw tiny 4-point anime star
          const s = p.size * 1.4;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - s);
          ctx.quadraticCurveTo(p.x, p.y, p.x + s, p.y);
          ctx.quadraticCurveTo(p.x, p.y, p.x, p.y + s);
          ctx.quadraticCurveTo(p.x, p.y, p.x - s, p.y);
          ctx.quadraticCurveTo(p.x, p.y, p.x, p.y - s);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
}
