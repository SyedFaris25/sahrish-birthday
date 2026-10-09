import React from 'react';
import { motion } from 'framer-motion';
import { StarsBackground, FloatingParticles, ShootingStars } from '../components/Effects';

export default function FavoriteColorSection() {
  return (
    <section
      className="section"
      id="favorite-color"
      style={{
        background: 'linear-gradient(180deg, rgba(7, 21, 47, 0.35) 0%, rgba(11, 31, 70, 0.4) 50%, rgba(7, 21, 47, 0.35) 100%)',
      }}
    >
      <StarsBackground count={80} />
      <FloatingParticles count={6} color="rgba(138, 228, 255, 0.1)" />
      <ShootingStars count={3} />

      {/* Constellation-style decorative lines */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `
            radial-gradient(circle at 20% 30%, rgba(138, 228, 255, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 80% 60%, rgba(200, 199, 255, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(85, 185, 232, 0.02) 0%, transparent 30%)
          `,
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '650px' }}>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          A Universe Painted in Your Favorite Color
        </motion.h2>

        {/* Dark blue showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #07152F, #102C5B, #1a3a70)',
            margin: '0 auto 32px',
            boxShadow: '0 0 40px rgba(85, 185, 232, 0.15), 0 0 80px rgba(16, 44, 91, 0.3), inset 0 0 30px rgba(138, 228, 255, 0.05)',
            border: '2px solid rgba(138, 228, 255, 0.15)',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'var(--lavender)',
            lineHeight: 1.8,
          }}
        >
          "Some colors are beautiful.<br />
          And then there is the color that feels like you."
        </motion.p>
      </div>
    </section>
  );
}
