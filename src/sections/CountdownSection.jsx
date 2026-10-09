import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Sparkles, PartyPopper } from 'lucide-react';
import { BIRTHDAY_TARGET_UTC } from '../data/content';
import { StarsBackground, FloatingParticles, FloatingPetals } from '../components/Effects';

function getTimeLeft() {
  const now = Date.now();
  const target = BIRTHDAY_TARGET_UTC.getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, reached: true, past: diff < -86400000 };
  }

  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    reached: false,
    past: false,
  };
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = useCallback((n) => String(n).padStart(2, '0'), []);

  // POST-BIRTHDAY state
  if (time.past) {
    return (
      <section className="section" id="countdown" style={{
        background: 'linear-gradient(180deg, rgba(7, 21, 47, 0.45) 0%, rgba(11, 31, 70, 0.35) 50%, rgba(7, 21, 47, 0.5) 100%)',
      }}>
        <StarsBackground count={60} />
        <FloatingPetals count={8} />
        <FloatingParticles count={10} color="rgba(255, 211, 138, 0.15)" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: '600px' }}
        >
          <PartyPopper size={40} style={{ color: 'var(--sunrise-gold)', marginBottom: '16px' }} />
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: 'var(--sunrise-gold)',
            marginBottom: '16px',
          }}>
            Your Day Was Special — And So Are You
          </h2>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            color: 'var(--lavender)',
            opacity: 0.9,
          }}>
            May the happiness of your birthday stay with you throughout the year.
          </p>
        </motion.div>
      </section>
    );
  }

  // BIRTHDAY state
  if (time.reached) {
    return (
      <section className="section" id="countdown" style={{
        background: 'linear-gradient(180deg, #07152F 0%, #0B1F46 30%, #1a3468 60%, rgba(255,211,138,0.1) 100%)',
      }}>
        <StarsBackground count={60} />
        <FloatingPetals count={15} />
        <FloatingParticles count={15} color="rgba(255, 211, 138, 0.2)" />
        <FloatingParticles count={10} color="rgba(255, 158, 189, 0.15)" size={6} />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: '600px' }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <PartyPopper size={48} style={{ color: 'var(--sunrise-gold)', marginBottom: '20px' }} />
          </motion.div>

          <motion.p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.8rem, 2vw, 1rem)',
              color: 'var(--cyan)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            It's Your Day!
          </motion.p>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--sunrise-gold), var(--flower-pink))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '24px',
            lineHeight: 1.2,
          }}>
            Happy Birthday, Sahrish Banu!
          </h2>

          <a href="#birthday-message" className="btn-primary" style={{ textDecoration: 'none' }}>
            <Sparkles size={18} />
            Open Your Birthday Surprise
          </a>
        </motion.div>
      </section>
    );
  }

  // COUNTDOWN state
  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <section className="section" id="countdown" style={{
      background: 'linear-gradient(180deg, rgba(7, 21, 47, 0.4) 0%, rgba(11, 31, 70, 0.3) 50%, rgba(7, 21, 47, 0.4) 100%)',
    }}>
      <StarsBackground count={60} />
      <FloatingParticles count={8} color="rgba(138, 228, 255, 0.15)" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', position: 'relative', zIndex: 2, width: '100%', maxWidth: '700px' }}
      >
        <Clock size={32} style={{ color: 'var(--cyan)', marginBottom: '16px' }} />

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
          color: 'var(--cyan)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}>
          Someone Special's Day Is Almost Here
        </p>

        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          color: 'var(--lavender)',
          marginBottom: '40px',
          fontWeight: 400,
        }}>
          Counting down to your special day, Sahrish.
        </h2>

        <div className="countdown-container">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              className="glass-card countdown-unit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={u.value}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="countdown-number"
                >
                  {pad(u.value)}
                </motion.div>
              </AnimatePresence>
              <div className="countdown-label">{u.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
