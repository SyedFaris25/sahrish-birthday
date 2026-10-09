import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import { WISHES } from '../data/content';
import { StarsBackground, FloatingParticles } from '../components/Effects';

export default function WishesSection() {
  const [currentWish, setCurrentWish] = useState(null);
  const lastIndexRef = useRef(-1);

  const generateWish = useCallback(() => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * WISHES.length);
    } while (newIndex === lastIndexRef.current && WISHES.length > 1);
    lastIndexRef.current = newIndex;
    setCurrentWish(WISHES[newIndex]);
  }, []);

  return (
    <section
      className="section section-short"
      id="wishes"
      style={{
        background: 'linear-gradient(180deg, rgba(7, 21, 47, 0.4) 0%, rgba(11, 31, 70, 0.35) 50%, rgba(7, 21, 47, 0.4) 100%)',
        minHeight: 'auto',
        padding: '80px 24px',
      }}
    >
      <StarsBackground count={30} />
      <FloatingParticles count={4} color="rgba(255, 158, 189, 0.1)" />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', maxWidth: '600px' }}>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Make a Birthday Wish
        </motion.h2>

        <motion.button
          id="make-wish-btn"
          onClick={generateWish}
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{ marginBottom: '24px' }}
        >
          <Wand2 size={18} />
          {currentWish ? 'Make Another Wish' : 'Make a Wish'}
        </motion.button>

        <AnimatePresence mode="wait">
          {currentWish && (
            <motion.div
              key={currentWish}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="glass-card wish-display"
            >
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                color: 'var(--sunrise-gold)',
                lineHeight: 1.8,
              }}>
                "{currentWish}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
