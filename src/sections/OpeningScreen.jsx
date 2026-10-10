import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { StarsBackground, FloatingPetals, FloatingParticles, Clouds } from '../components/Effects';

export default function OpeningScreen({ onEnter }) {
  const [exiting, setExiting] = useState(false);
  const [blownCandles, setBlownCandles] = useState([false, false, false]);

  const allCandlesBlown = blownCandles.every(Boolean);

  const blowCandle = (index) => {
    setBlownCandles((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  const handleClick = () => {
    setExiting(true);
    setTimeout(() => onEnter(), 800);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(ellipse at 50% 30%, rgba(16, 44, 91, 0.45) 0%, rgba(7, 21, 47, 0.8) 100%)',
            backdropFilter: 'blur(6px)',
            padding: '24px',
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          <StarsBackground count={80} />
          <Clouds count={5} />
          <FloatingPetals count={10} />
          <FloatingParticles count={8} color="rgba(255, 211, 138, 0.2)" />

          {/* Soft light glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '-20%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120%',
              height: '40%',
              background: 'radial-gradient(ellipse at center, rgba(255, 211, 138, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Interactive Birthday Cake SVG */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '24px', position: 'relative', zIndex: 2 }}
          >
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <svg width="100" height="100" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Interactive birthday cake">
                {/* Candle flame 1 */}
                {!blownCandles[0] && (
                  <ellipse
                    cx="30"
                    cy="12"
                    rx="4"
                    ry="7"
                    fill="#FFD38A"
                    opacity="0.9"
                    onClick={() => blowCandle(0)}
                    style={{ cursor: 'pointer' }}
                  >
                    <animate attributeName="ry" values="7;8;6;7" dur="2s" repeatCount="indefinite" />
                  </ellipse>
                )}
                {/* Candle flame 2 */}
                {!blownCandles[1] && (
                  <ellipse
                    cx="40"
                    cy="10"
                    rx="4"
                    ry="8"
                    fill="#FFD38A"
                    opacity="0.9"
                    onClick={() => blowCandle(1)}
                    style={{ cursor: 'pointer' }}
                  >
                    <animate attributeName="ry" values="8;6;9;8" dur="1.8s" repeatCount="indefinite" />
                  </ellipse>
                )}
                {/* Candle flame 3 */}
                {!blownCandles[2] && (
                  <ellipse
                    cx="50"
                    cy="12"
                    rx="4"
                    ry="7"
                    fill="#FFD38A"
                    opacity="0.9"
                    onClick={() => blowCandle(2)}
                    style={{ cursor: 'pointer' }}
                  >
                    <animate attributeName="ry" values="7;9;6;7" dur="2.2s" repeatCount="indefinite" />
                  </ellipse>
                )}

                {/* Candle glow */}
                {!allCandlesBlown && (
                  <ellipse cx="40" cy="10" rx="20" ry="15" fill="#FFD38A" opacity="0.15" />
                )}

                {/* Candles (Clickable) */}
                <rect x="28" y="18" width="4" height="18" rx="2" fill="#FF9EBD" onClick={() => blowCandle(0)} style={{ cursor: 'pointer' }} />
                <rect x="38" y="16" width="4" height="20" rx="2" fill="#8AE4FF" onClick={() => blowCandle(1)} style={{ cursor: 'pointer' }} />
                <rect x="48" y="18" width="4" height="18" rx="2" fill="#C8C7FF" onClick={() => blowCandle(2)} style={{ cursor: 'pointer' }} />

                {/* Cake top */}
                <rect x="14" y="36" width="52" height="18" rx="4" fill="#1a3468" stroke="#8AE4FF" strokeWidth="1" opacity="0.8" />
                {/* Cake bottom */}
                <rect x="10" y="54" width="60" height="18" rx="4" fill="#102C5B" stroke="#C8C7FF" strokeWidth="1" opacity="0.8" />
                {/* Frosting */}
                <path d="M14 36 Q20 32, 26 36 Q32 32, 38 36 Q44 32, 50 36 Q56 32, 66 36" stroke="#FF9EBD" strokeWidth="2" fill="none" opacity="0.8" />
                {/* Stars on cake */}
                <circle cx="24" cy="45" r="1.5" fill="#FFD38A" opacity="0.7" />
                <circle cx="40" cy="63" r="1.5" fill="#FFD38A" opacity="0.7" />
                <circle cx="56" cy="45" r="1.5" fill="#FFD38A" opacity="0.7" />
              </svg>
            </div>

            {/* Candle helper prompt */}
            <p style={{
              fontSize: '0.8rem',
              color: allCandlesBlown ? 'var(--sunrise-gold)' : 'var(--lavender)',
              opacity: 0.9,
              marginTop: '4px',
              fontWeight: 500,
            }}>
              {allCandlesBlown ? "✨ All wishes made & sent to the universe! ✨" : "✨ Tap the candles to make a wish & blow them out!"}
            </p>
          </motion.div>

          {/* Pre-heading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
              color: 'var(--lavender)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            A Little Surprise for Someone Special
          </motion.p>

          {/* HAPPY BIRTHDAY */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 7vw, 4rem)',
              fontWeight: 700,
              color: 'var(--cyan)',
              background: 'linear-gradient(135deg, var(--cyan), var(--lavender), var(--flower-pink))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '8px',
              lineHeight: 1.1,
              position: 'relative',
              zIndex: 2,
            }}
          >
            Happy Birthday
          </motion.h1>

          {/* SAHRISH BANU */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.6rem, 5vw, 3rem)',
              fontWeight: 600,
              color: 'var(--sunrise-gold)',
              marginBottom: '24px',
              lineHeight: 1.2,
              position: 'relative',
              zIndex: 2,
            }}
          >
            Sahrish Banu
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)',
              color: 'var(--lavender)',
              maxWidth: '500px',
              marginBottom: '40px',
              opacity: 0.95,
              position: 'relative',
              zIndex: 2,
            }}
          >
            "To my very best friend — a little universe made just for you."
          </motion.p>

          {/* Button */}
          <motion.button
            id="open-surprise-btn"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleClick}
            className="btn-primary"
            style={{ position: 'relative', zIndex: 2 }}
          >
            <Sparkles size={18} />
            Open Your Birthday Surprise
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>

  );
}
