import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { StarsBackground, FloatingParticles, Clouds, ShootingStars } from '../components/Effects';

export default function HeroSection() {
  return (
    <section
      className="section"
      id="hero"
      style={{
        background: 'linear-gradient(180deg, rgba(7, 21, 47, 0.4) 0%, rgba(11, 31, 70, 0.3) 30%, rgba(16, 44, 91, 0.35) 60%, rgba(26, 52, 104, 0.4) 80%, rgba(255, 211, 138, 0.05) 100%)',
        minHeight: '100vh',
      }}
    >
      <StarsBackground count={70} />
      <Clouds count={6} />
      <FloatingParticles count={10} color="rgba(200, 199, 255, 0.12)" />
      <ShootingStars count={2} />

      {/* Soft horizon glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: 'linear-gradient(transparent, rgba(255, 211, 138, 0.04))',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '700px' }}>
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 7vw, 4.5rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--cyan), var(--lavender))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '24px',
            lineHeight: 1.1,
          }}
        >
          Sahrish Banu
        </motion.h1>

        {/* Sunrise quote */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: 'var(--sunrise-gold)',
            marginBottom: '12px',
            lineHeight: 1.6,
          }}
        >
          "Your name means Sunrise,<br />
          and some people bring their own light into the world."
        </motion.p>

        {/* Universe line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: 'var(--lavender)',
            marginBottom: '40px',
            opacity: 0.85,
          }}
        >
          "A little universe, created just for you."
        </motion.p>

        {/* Enter button */}
        <motion.a
          id="enter-universe-btn"
          href="#sunrise-simulator"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="btn-primary"
          style={{ textDecoration: 'none' }}
        >
          Enter Your Universe
          <ChevronDown size={18} />
        </motion.a>
      </div>
    </section>
  );
}
