import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { VERSES } from '../data/content';
import { StarsBackground, FloatingParticles } from '../components/Effects';

function VerseCard({ verse, index }) {
  const isQuran = verse.type === 'quran';
  const [loved, setLoved] = React.useState(false);

  return (
    <motion.div
      className="glass-card verse-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -4, borderColor: 'rgba(255, 211, 138, 0.4)' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
      }}
    >
      <div>
        {/* Label */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          color: 'var(--cyan)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '20px',
          opacity: 0.7,
        }}>
          {verse.label}
        </p>

        {isQuran ? (
          <>
            {/* Arabic text */}
            <p
              className="arabic-text"
              dir="rtl"
              lang="ar"
            >
              {verse.arabic}
            </p>
            {/* Translation */}
            <p className="arabic-translation">
              "{verse.translation}"
            </p>
            {/* Reference */}
            <p className="arabic-reference">
              — {verse.reference}
            </p>
          </>
        ) : (
          <>
            <Heart size={20} style={{ color: 'var(--flower-pink)', margin: '0 auto 16px', opacity: 0.6 }} />
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'var(--lavender)',
              lineHeight: 1.8,
            }}>
              "{verse.text}"
            </p>
          </>
        )}
      </div>

      {/* Interactive Reaction Button */}
      <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(138, 228, 255, 0.1)' }}>
        <button
          onClick={() => setLoved(!loved)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '0.78rem',
            background: loved ? 'rgba(255, 158, 189, 0.2)' : 'rgba(138, 228, 255, 0.06)',
            border: loved ? '1px solid var(--flower-pink)' : '1px solid rgba(138, 228, 255, 0.2)',
            color: loved ? 'var(--flower-pink)' : 'var(--lavender)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <Heart size={13} fill={loved ? 'var(--flower-pink)' : 'none'} />
          <span>{loved ? 'Saved to Heart ✨' : 'Hold in Heart'}</span>
        </button>
      </div>
    </motion.div>
  );
}

export default function VersesSection() {
  return (
    <section
      className="section"
      id="verses"
      style={{
        background: 'linear-gradient(180deg, rgba(7, 21, 47, 0.4) 0%, rgba(11, 31, 70, 0.35) 50%, rgba(7, 21, 47, 0.4) 100%)',
        padding: '80px 24px',
      }}
    >
      <StarsBackground count={40} />
      <FloatingParticles count={6} color="rgba(255, 211, 138, 0.08)" />

      {/* Geometric decoration */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '200px',
          border: '1px solid rgba(255, 211, 138, 0.06)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%) rotate(45deg)',
          width: '200px',
          height: '200px',
          border: '1px solid rgba(200, 199, 255, 0.04)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1060px', margin: '0 auto' }}>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Words to Keep Close to Your Heart
        </motion.h2>

        <div className="verse-cards-grid">
          {VERSES.map((v, i) => (
            <VerseCard key={i} verse={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
