import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { StarsBackground, FloatingParticles } from '../components/Effects';

export default function BirthdayMessageSection() {
  return (
    <section
      className="section"
      id="birthday-message"
      style={{
        background: 'linear-gradient(180deg, rgba(7, 21, 47, 0.45) 0%, rgba(11, 31, 70, 0.4) 50%, rgba(16, 44, 91, 0.45) 100%)',
      }}
    >
      <StarsBackground count={40} />
      <FloatingParticles count={6} color="rgba(255, 211, 138, 0.1)" />

      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '12px' }}
        >
          <Gift size={32} style={{ color: 'var(--sunrise-gold)' }} />
        </motion.div>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          A Birthday Wish, Just for You
        </motion.h2>

        <motion.div
          className="glass-card message-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>Happy Birthday, Sahrish!</p>

          <p>
            Today is all about celebrating you — the wonderful person you are and the happiness you bring to the people around you.
          </p>

          <p>
            I hope this new year of your life brings you peace, beautiful opportunities, genuine happiness, and countless reasons to smile.
          </p>

          <p>
            Whenever life feels difficult, remember the beautiful reminders you love: Allah does not burden a soul beyond what it can bear, and He is with you wherever you are.
          </p>

          <p>
            May Allah protect you, guide you, grant you success in your goals, and fill your heart with peace.
          </p>

          <p>
            Keep smiling, keep growing, and never stop believing in the beautiful things that lie ahead.
          </p>

          <p>
            You deserve a birthday filled with happiness and a year filled with blessings.
          </p>

          <p style={{ color: 'var(--sunrise-gold)', fontWeight: 500, marginTop: '24px' }}>
            Happy Birthday once again, my very best friend!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
