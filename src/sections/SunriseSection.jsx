import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';
import { StarsBackground, FloatingPetals } from '../components/Effects';

export default function SunriseSection() {
  return (
    <section
      className="section"
      id="sunrise"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      {/* Sunrise gradient background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(
            180deg,
            #07152F 0%,
            #0B1F46 15%,
            #1a2a5e 28%,
            #3a4a8e 40%,
            #6a6aaa 50%,
            #c08060 60%,
            #e09050 68%,
            #f0a860 75%,
            #FFD38A 85%,
            #FFE8B8 95%,
            #FFF5E0 100%
          )`,
          pointerEvents: 'none',
        }}
      />

      {/* Fading stars at top */}
      <StarsBackground count={30} />

      {/* Mountain silhouettes */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '20%',
          left: 0,
          right: 0,
          height: '200px',
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 1200 200" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M0,200 L0,120 Q100,40 200,100 Q300,30 400,80 Q500,20 600,90 Q700,30 800,70 Q900,20 1000,100 Q1100,50 1200,90 L1200,200 Z" fill="rgba(16, 44, 91, 0.4)" />
          <path d="M0,200 L0,150 Q150,80 300,130 Q450,60 600,120 Q750,70 900,110 Q1050,80 1200,130 L1200,200 Z" fill="rgba(7, 21, 47, 0.3)" />
        </svg>
      </div>

      {/* Green hills with flowers at bottom */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '15%',
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M0,100 L0,40 Q200,10 400,35 Q600,5 800,30 Q1000,15 1200,40 L1200,100 Z" fill="#1a4a2e" opacity="0.7" />
          <path d="M0,100 L0,60 Q300,30 600,55 Q900,35 1200,60 L1200,100 Z" fill="#1a5a30" opacity="0.6" />
        </svg>
      </div>

      {/* Sun glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '22%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '150px',
          background: 'radial-gradient(ellipse at bottom, rgba(255, 211, 138, 0.5) 0%, rgba(255, 211, 138, 0.2) 30%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <FloatingPetals count={8} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '650px' }}>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ color: 'var(--white)' }}
        >
          The Meaning Behind Your Name
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 700,
            color: 'var(--white)',
            marginBottom: '8px',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}>
            Sahrish Banu
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ marginBottom: '32px' }}
        >
          <Sun size={36} style={{ color: 'var(--sunrise-gold)', marginBottom: '12px' }} />
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #FFD38A, #f0a860, #FFE8B8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Sunrise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card"
          style={{
            padding: '32px 28px',
            background: 'rgba(7, 21, 47, 0.4)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            color: 'var(--white)',
            lineHeight: 1.9,
            opacity: 0.9,
          }}>
            "Sunrise is the moment darkness begins to give way to light.
            <br /><br />
            And your name carries that beautiful meaning."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
