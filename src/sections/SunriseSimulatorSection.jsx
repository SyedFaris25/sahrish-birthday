import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Sparkles, Sunrise } from 'lucide-react';
import { StarsBackground, FloatingPetals } from '../components/Effects';

export default function SunriseSimulatorSection() {
  const [glow, setGlow] = useState(15);

  // Dynamic sky color interpolation based on glow percentage
  const getSkyGradient = (val) => {
    const t = val / 100;
    if (t < 0.3) {
      // Midnight to Twilight
      return `linear-gradient(180deg, #050d21 0%, #07152f 40%, #0b1f46 70%, #131a3a 100%)`;
    } else if (t < 0.7) {
      // Twilight to Dawn
      return `linear-gradient(180deg, #091a3e 0%, #1e1b4b 30%, #431b4e 60%, #85374b 85%, #b45309 100%)`;
    } else {
      // Full Golden Dawn
      return `linear-gradient(180deg, #1e293b 0%, #312e81 20%, #701a75 45%, #b45309 70%, #ea580c 85%, #fde047 100%)`;
    }
  };

  const getSunPosition = (val) => {
    // Sun rises from bottom (0% glow = below horizon, 100% glow = shining high)
    const bottomPercent = -20 + (val * 0.75); // from -20% to 55%
    return `${bottomPercent}%`;
  };

  const getSunOpacity = (val) => {
    return Math.max(0, (val - 15) / 85);
  };

  const getStarsOpacity = (val) => {
    return Math.max(0, 1 - (val / 75));
  };

  return (
    <section
      className="section"
      id="sunrise-simulator"
      style={{
        position: 'relative',
        padding: '90px 24px',
        overflow: 'hidden',
        minHeight: 'auto',
      }}
    >
      <StarsBackground count={40} />
      <FloatingPetals count={8} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '920px', margin: '0 auto' }}>
        
        {/* Main Simulator Card (matching user screenshot) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, rgba(11, 31, 70, 0.85), rgba(7, 21, 47, 0.95))',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '24px',
            border: '2px solid rgba(138, 228, 255, 0.25)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(138, 228, 255, 0.1)',
            padding: 'clamp(24px, 4vw, 44px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle cosmic glow reflection inside the card */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-30%',
              right: '-10%',
              width: '350px',
              height: '350px',
              background: `radial-gradient(circle, rgba(255, 211, 138, ${glow * 0.0025}) 0%, transparent 70%)`,
              pointerEvents: 'none',
              transition: 'background 0.3s ease',
            }}
          />

          {/* Top Header Row */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '32px',
          }}>
            <div>
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--sunrise-gold)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}>
                <Sun size={15} style={{ color: 'var(--sunrise-gold)' }} />
                <span>Meaning of Sahrish = Sunrise / Dawn</span>
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.7rem, 4vw, 2.5rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: '8px',
              }}>
                Sunrise Dawn Simulator
              </h2>

              {/* Description */}
              <p style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                color: 'var(--lavender)',
                opacity: 0.85,
              }}>
                Drag the slider to transform the midnight sky into a golden dawn.
              </p>
            </div>

            {/* Sky Glow Pill Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 20px',
              borderRadius: '999px',
              background: 'rgba(16, 44, 91, 0.7)',
              border: '1px solid rgba(138, 228, 255, 0.35)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
            }}>
              <span style={{
                color: 'var(--sunrise-gold)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.95rem',
                letterSpacing: '0.02em',
              }}>
                Sky Glow: {glow}%
              </span>
            </div>
          </div>

          {/* Range Slider Container */}
          <div style={{ marginTop: '24px', marginBottom: '8px' }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                id="dawn-simulator-slider"
                type="range"
                min="0"
                max="100"
                value={glow}
                onChange={(e) => setGlow(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '10px',
                  borderRadius: '999px',
                  outline: 'none',
                  WebkitAppearance: 'none',
                  appearance: 'none',
                  cursor: 'pointer',
                  background: `linear-gradient(90deg, #16163d 0%, #1e1b4b 35%, #b45309 70%, #fde047 100%)`,
                  border: '1px solid rgba(255, 211, 138, 0.25)',
                }}
              />
            </div>

            {/* Slider Labels */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '12px',
              fontSize: '0.85rem',
              fontWeight: 500,
            }}>
              <span style={{
                color: glow < 30 ? 'var(--cyan)' : 'var(--lavender)',
                opacity: glow < 30 ? 1 : 0.6,
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <Moon size={14} /> Midnight (0%)
              </span>
              <span style={{
                color: glow > 70 ? 'var(--sunrise-gold)' : 'var(--lavender)',
                opacity: glow > 70 ? 1 : 0.6,
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <Sunrise size={15} /> Golden Dawn (100%)
              </span>
            </div>
          </div>

          {/* Interactive Cinematic Dawn Window */}
          <motion.div
            style={{
              marginTop: '36px',
              height: '240px',
              borderRadius: '18px',
              position: 'relative',
              overflow: 'hidden',
              background: getSkyGradient(glow),
              border: '1px solid rgba(255, 211, 138, 0.3)',
              boxShadow: `0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 40px rgba(255, 211, 138, ${glow * 0.003})`,
              transition: 'background 0.4s ease, box-shadow 0.4s ease',
            }}
          >
            {/* Twinkling stars in viewport (fade as sun rises) */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: getStarsOpacity(glow),
                transition: 'opacity 0.4s ease',
                pointerEvents: 'none',
              }}
            >
              <StarsBackground count={35} />
            </div>

            {/* Rising Golden Sun */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                bottom: getSunPosition(glow),
                transform: 'translateX(-50%)',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #FFF7D6 0%, #FFD38A 50%, #f59e0b 80%, rgba(245, 158, 11, 0) 100%)',
                boxShadow: `0 0 60px 20px rgba(255, 211, 138, ${glow * 0.008}), 0 0 100px 40px rgba(234, 88, 12, ${glow * 0.005})`,
                opacity: getSunOpacity(glow),
                transition: 'bottom 0.2s ease-out, opacity 0.3s ease',
                pointerEvents: 'none',
              }}
            />

            {/* Horizon Mountains Silhouette */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '90px',
                pointerEvents: 'none',
              }}
            >
              <svg viewBox="0 0 1000 90" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                {/* Back ridges */}
                <path
                  d="M0,90 L0,50 Q150,15 300,45 Q450,10 600,40 Q750,15 900,45 L1000,30 L1000,90 Z"
                  fill={glow > 60 ? 'rgba(75, 29, 79, 0.7)' : 'rgba(16, 44, 91, 0.7)'}
                  style={{ transition: 'fill 0.4s ease' }}
                />
                {/* Front ridges */}
                <path
                  d="M0,90 L0,65 Q200,35 400,60 Q600,30 800,55 L1000,45 L1000,90 Z"
                  fill={glow > 60 ? '#1f132e' : '#07152F'}
                  style={{ transition: 'fill 0.4s ease' }}
                />
              </svg>
            </div>

            {/* Warm Sunlight Reflection Rays at Dawn */}
            {glow > 45 && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(ellipse at 50% 100%, rgba(255, 211, 138, ${(glow - 40) * 0.006}) 0%, transparent 70%)`,
                  pointerEvents: 'none',
                  transition: 'background 0.3s ease',
                }}
              />
            )}

            {/* Live Status Caption Inside Window */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '20px',
                right: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 3,
              }}
            >
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                color: glow > 60 ? '#FFE8B8' : 'var(--lavender)',
                textShadow: '0 2px 8px rgba(0,0,0,0.8)',
              }}>
                {glow < 20 && "Deep midnight sky — stars twinkling in peaceful silence."}
                {glow >= 20 && glow < 60 && "Twilight breaks — the universe awakens with color."}
                {glow >= 60 && glow < 90 && "Morning light arrives — warm golden amber sunrise."}
                {glow >= 90 && "Full golden dawn — 'Sahrish', the light of a new day! ✨"}
              </span>

              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.8rem',
                color: '#FFD38A',
                fontWeight: 600,
                textShadow: '0 2px 8px rgba(0,0,0,0.8)',
              }}>
                <Sparkles size={13} />
                {glow}% Light
              </span>
            </div>
          </motion.div>

          {/* Quick Preset Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '24px',
            flexWrap: 'wrap',
          }}>
            {[
              { label: '🌙 Midnight', val: 0 },
              { label: '🌆 Twilight', val: 45 },
              { label: '🌅 Golden Dawn', val: 100 },
            ].map((preset) => (
              <button
                key={preset.val}
                onClick={() => setGlow(preset.val)}
                className="btn-secondary"
                style={{
                  padding: '8px 18px',
                  fontSize: '0.85rem',
                  borderColor: glow === preset.val ? 'var(--sunrise-gold)' : 'rgba(138, 228, 255, 0.25)',
                  background: glow === preset.val ? 'rgba(255, 211, 138, 0.15)' : 'rgba(11, 31, 70, 0.5)',
                  color: glow === preset.val ? 'var(--sunrise-gold)' : 'var(--lavender)',
                }}
              >
                {preset.label}
              </button>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
