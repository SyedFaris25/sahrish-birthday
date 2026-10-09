import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Flame } from 'lucide-react';
import { StarsBackground } from '../components/Effects';

export default function FriendshipSection() {
  const [lanterns, setLanterns] = useState([]);

  const releaseLantern = () => {
    const id = Date.now();
    const newLantern = {
      id,
      left: Math.random() * 70 + 15, // 15% to 85%
      duration: Math.random() * 4 + 7, // 7 to 11s float
    };
    setLanterns((prev) => [...prev, newLantern]);

    // Cleanup after animation completes
    setTimeout(() => {
      setLanterns((prev) => prev.filter((l) => l.id !== id));
    }, 11000);
  };

  return (
    <section
      className="section"
      id="friendship"
      style={{
        background: 'linear-gradient(180deg, rgba(16, 44, 91, 0.45) 0%, rgba(11, 31, 70, 0.4) 50%, rgba(7, 21, 47, 0.4) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <StarsBackground count={30} />

      {/* Floating Animated Lanterns */}
      <AnimatePresence>
        {lanterns.map((l) => (
          <motion.div
            key={l.id}
            initial={{ y: 200, opacity: 0, scale: 0.6 }}
            animate={{
              y: -window.innerHeight - 300,
              opacity: [0, 1, 0.9, 0.7, 0],
              scale: [0.6, 1, 0.85, 0.7],
              x: [0, 15, -15, 20, -10],
            }}
            transition={{ duration: l.duration, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: `${l.left}%`,
              bottom: '50px',
              zIndex: 10,
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Glowing Lantern Body */}
            <div
              style={{
                width: '38px',
                height: '52px',
                borderRadius: '8px 8px 14px 14px',
                background: 'linear-gradient(180deg, #FFB74D 0%, #FF8F00 50%, #E65100 100%)',
                boxShadow: '0 0 25px 8px rgba(255, 179, 0, 0.7), 0 0 50px 15px rgba(255, 109, 0, 0.4)',
                border: '1px solid #FFE082',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {/* Inner Flame */}
              <div
                style={{
                  width: '12px',
                  height: '18px',
                  background: '#FFF9C4',
                  borderRadius: '50% 50% 35% 35%',
                  boxShadow: '0 0 10px 4px #FFF',
                  animation: 'flicker 0.6s infinite alternate',
                }}
              />
            </div>
            {/* Bottom Glow Sparkle */}
            <div
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#FFD54F',
                boxShadow: '0 0 8px 3px #FFB300',
                marginTop: '4px',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '720px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '12px' }}
        >
          <Users size={32} style={{ color: 'var(--lavender)' }} />
        </motion.div>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          A Little Something About Our Friendship
        </motion.h2>

        <motion.div
          className="glass-card message-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            Some people make ordinary moments special simply by being part of them.
          </p>

          <p>
            I'm grateful to have you as my best friend, and I hope the world gives you as many reasons to smile as you give to the people around you.
          </p>

          <p>
            No matter how busy life gets or how much things change, I hope you always remember that you are appreciated.
          </p>

          {/* Interactive Sky Lantern Release Button */}
          <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(138, 228, 255, 0.15)' }}>
            <motion.button
              onClick={releaseLantern}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #FFB74D, #FF8F00)',
                color: '#211000',
                boxShadow: '0 4px 20px rgba(255, 179, 0, 0.4)',
                fontSize: '0.95rem',
                margin: '0 auto',
              }}
            >
              <Flame size={18} style={{ color: '#FFE082' }} />
              <span>Release a Glowing Sky Lantern 🏮</span>
            </motion.button>
            <p style={{
              fontSize: '0.8rem',
              color: 'var(--sunrise-gold)',
              marginTop: '10px',
              opacity: 0.85,
            }}>
              Tap to release a lantern of silent prayers into the midnight sky!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
