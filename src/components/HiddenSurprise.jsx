import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HiddenSurprise() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        className="hidden-star-btn"
        onClick={() => setRevealed(true)}
        aria-label="Hidden surprise star"
        title="A little secret"
        id="hidden-star-btn"
      >
        <div className="hidden-star-glow" />
      </button>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.5 }}
            className="glass-card"
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '280px',
              padding: '24px 20px',
              marginBottom: '12px',
              textAlign: 'center',
              zIndex: 100,
            }}
          >
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: 'var(--sunrise-gold)',
              lineHeight: 1.7,
              marginBottom: '12px',
            }}>
              "You found a little secret hidden in your universe.
            </p>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: 'var(--lavender)',
              lineHeight: 1.7,
            }}>
              May your days be filled with peace, your heart with hope, and your life with beautiful new beginnings."
            </p>
            <button
              onClick={() => setRevealed(false)}
              style={{
                marginTop: '16px',
                fontSize: '0.75rem',
                color: 'var(--cyan)',
                opacity: 0.6,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
