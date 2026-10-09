import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { StarsBackground, FloatingPetals, FloatingParticles } from '../components/Effects';
import HiddenSurprise from '../components/HiddenSurprise';

export default function FinalSection() {
  return (
    <section
      className="section"
      id="final"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Cinematic sunrise background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(
            180deg,
            #07152F 0%,
            #0B1F46 20%,
            #1a2a5e 35%,
            #4a5a9e 50%,
            #c08060 65%,
            #f0a860 78%,
            #FFD38A 90%,
            #FFE8B8 100%
          )`,
          pointerEvents: 'none',
        }}
      />

      <StarsBackground count={25} />
      <FloatingPetals count={10} />
      <FloatingParticles count={8} color="rgba(255, 211, 138, 0.15)" />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '700px' }}>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ color: 'var(--white)' }}
        >
          Happy Birthday, Sahrish Banu
        </motion.h2>

        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            padding: '40px 32px',
            background: 'rgba(7, 21, 47, 0.35)',
            backdropFilter: 'blur(12px)',
            maxWidth: '650px',
            margin: '0 auto',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            color: 'var(--white)',
            lineHeight: 2,
            marginBottom: '16px',
          }}>
            May your life be as beautiful as the sunrise your name reminds us of, as peaceful as a sky full of stars, and as full of hope as a brand-new morning.
          </p>

          <p style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            color: 'var(--white)',
            lineHeight: 2,
            marginBottom: '24px',
          }}>
            May Allah bless your journey, protect your heart, and guide you toward everything that is good for you.
          </p>

          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
            fontWeight: 600,
            color: 'var(--sunrise-gold)',
          }}>
            Happy Birthday, Sahrish Banu!
          </p>
        </motion.div>

        {/* Made for you + hidden star */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            marginTop: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
            color: 'rgba(255, 255, 255, 0.7)',
          }}>
            Made especially for you, my very best friend.
          </p>

          {/* Hidden surprise star */}
          <HiddenSurprise />
        </motion.div>
      </div>

      {/* Back to top */}
      <motion.button
        id="back-to-top-btn"
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </section>
  );
}
