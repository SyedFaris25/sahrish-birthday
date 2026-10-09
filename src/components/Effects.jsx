import React, { useState } from 'react';

/* ── Stars Background ── */
export function StarsBackground({ count = 50 }) {
  const [stars] = useState(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 4}s`,
      delay: `${Math.random() * 5}s`,
      large: Math.random() > 0.8,
    }));
  });

  return (
    <div className="stars-bg" aria-hidden="true">
      {stars.map(s => (
        <div
          key={s.id}
          className={`star${s.large ? ' star--large' : ''}`}
          style={{
            left: s.left,
            top: s.top,
            '--duration': s.duration,
            '--delay': s.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ── Floating Particles ── */
export function FloatingParticles({ count = 12, color = 'rgba(138, 228, 255, 0.3)', size = 4 }) {
  const [particles] = useState(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      bottom: `${-10 - Math.random() * 20}%`,
      duration: `${8 + Math.random() * 12}s`,
      delay: `${Math.random() * 10}s`,
      w: size + Math.random() * size,
    }));
  });

  return (
    <>
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          aria-hidden="true"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: `${p.w}px`,
            height: `${p.w}px`,
            background: color,
            '--duration': p.duration,
            '--delay': p.delay,
          }}
        />
      ))}
    </>
  );
}

/* ── Floating Petals ── */
export function FloatingPetals({ count = 8 }) {
  const [petals] = useState(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${-5 - Math.random() * 10}%`,
      duration: `${10 + Math.random() * 10}s`,
      delay: `${Math.random() * 15}s`,
      size: 8 + Math.random() * 8,
    }));
  });

  return (
    <>
      {petals.map(p => (
        <div
          key={p.id}
          className="petal"
          aria-hidden="true"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            '--duration': p.duration,
            '--delay': p.delay,
          }}
        />
      ))}
    </>
  );
}

/* ── Shooting Stars ── */
export function ShootingStars({ count = 3 }) {
  const [shooters] = useState(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${10 + Math.random() * 40}%`,
      top: `${5 + Math.random() * 30}%`,
      duration: `${4 + Math.random() * 6}s`,
      delay: `${i * 5 + Math.random() * 5}s`,
    }));
  });

  return (
    <>
      {shooters.map(s => (
        <div
          key={s.id}
          className="shooting-star"
          aria-hidden="true"
          style={{
            left: s.left,
            top: s.top,
            '--duration': s.duration,
            '--delay': s.delay,
          }}
        />
      ))}
    </>
  );
}

/* ── Clouds ── */
export function Clouds({ count = 4 }) {
  const [clouds] = useState(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${-10 + Math.random() * 100}%`,
      top: `${10 + Math.random() * 40}%`,
      width: 200 + Math.random() * 300,
      height: 80 + Math.random() * 120,
      duration: `${40 + Math.random() * 40}s`,
    }));
  });

  return (
    <>
      {clouds.map(c => (
        <div
          key={c.id}
          className="cloud"
          aria-hidden="true"
          style={{
            left: c.left,
            top: c.top,
            width: `${c.width}px`,
            height: `${c.height}px`,
            '--duration': c.duration,
          }}
        />
      ))}
    </>
  );
}
