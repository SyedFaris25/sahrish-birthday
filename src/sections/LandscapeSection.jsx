import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, Sun, Moon, Feather } from 'lucide-react';
import { FloatingPetals, ShootingStars } from '../components/Effects';

export default function LandscapeSection() {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <section
      className="section section-short"
      id="landscape"
      style={{
        background: 'linear-gradient(180deg, rgba(7, 21, 47, 0.4) 0%, rgba(11, 31, 70, 0.3) 50%, rgba(7, 21, 47, 0.45) 100%)',
        padding: '90px 24px',
      }}
    >
      <FloatingPetals count={8} />
      <ShootingStars count={3} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1060px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '999px',
              background: 'rgba(16, 44, 91, 0.7)',
              border: '1px solid rgba(255, 211, 138, 0.3)',
              color: 'var(--sunrise-gold)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <Compass size={15} />
            <span>Visual Memories & Deep Reflections</span>
          </motion.div>

          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ marginBottom: '16px' }}
          >
            Two Worlds, One Unbreakable Bond
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--lavender)',
              maxWidth: '680px',
              margin: '0 auto',
              opacity: 0.9,
              lineHeight: 1.7,
            }}
          >
            "A visual journey from the calm daylight of rolling alpine hills to the cosmic miracle of split shooting stars."
          </motion.p>
        </div>

        {/* ── SCENE 1: DAYLIGHT & OPEN HORIZONS (HOWL'S MOVING CASTLE HILL) ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9 }}
          style={{
            background: 'linear-gradient(135deg, rgba(16, 44, 91, 0.8), rgba(7, 21, 47, 0.9))',
            border: '1.5px solid rgba(138, 228, 255, 0.25)',
            borderRadius: '24px',
            padding: 'clamp(20px, 3.5vw, 36px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
            marginBottom: '64px',
            overflow: 'hidden',
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '36px',
            alignItems: 'center',
          }}>
            {/* Image Frame */}
            <div style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxHeight: '480px',
            }}>
              <img
                src="/assets/howl-moving-castle-hill.jpg"
                alt="Studio Ghibli scene of walking across a flower-covered alpine meadow beneath an enormous blue sky with towering clouds"
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '480px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                loading="lazy"
                decoding="async"
              />
              {/* Bottom Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 65%, rgba(7, 21, 47, 0.85) 100%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Top Badge */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(7, 21, 47, 0.8)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 211, 138, 0.4)',
                color: 'var(--sunrise-gold)',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}>
                <Sun size={14} />
                <span>Scene I • Sunshine, Blooming Hills & Serenity</span>
              </div>
            </div>

            {/* Meaningful Narrative Card */}
            <div>
              <span style={{
                color: 'var(--cyan)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '8px',
              }}>
                Daylight of Hope
              </span>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                color: '#FFFFFF',
                marginBottom: '14px',
                lineHeight: 1.3,
              }}>
                The Quiet Comfort of True Companionship
              </h3>

              <p style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
                color: 'var(--lavender)',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '20px',
              }}>
                Some friendships don't need constant noise to be real. They feel like this open hill — peaceful, vast, and comforting. Like walking side by side under a clear morning sky where the breeze is gentle, there's no judgment, and there's always room to breathe. Sahrish, your presence brings that exact sense of calm clarity and light to everyone around you.
              </p>

              {/* Trait Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '24px',
              }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: 'rgba(138, 228, 255, 0.1)',
                  color: 'var(--cyan)',
                  fontSize: '0.8rem',
                  border: '1px solid rgba(138, 228, 255, 0.2)',
                }}>
                  🌸 Blooming Days
                </span>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: 'rgba(255, 211, 138, 0.1)',
                  color: 'var(--sunrise-gold)',
                  fontSize: '0.8rem',
                  border: '1px solid rgba(255, 211, 138, 0.25)',
                }}>
                  🌤️ Gentle Mornings
                </span>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: 'rgba(255, 158, 189, 0.1)',
                  color: 'var(--flower-pink)',
                  fontSize: '0.8rem',
                  border: '1px solid rgba(255, 158, 189, 0.2)',
                }}>
                  🕊️ Unconditional Care
                </span>
              </div>

              <button
                onClick={() => setActiveStory(activeStory === 'scene1' ? null : 'scene1')}
                className="btn-secondary"
                style={{
                  fontSize: '0.85rem',
                  padding: '9px 18px',
                  borderColor: activeStory === 'scene1' ? 'var(--sunrise-gold)' : 'rgba(138, 228, 255, 0.3)',
                  background: activeStory === 'scene1' ? 'rgba(255, 211, 138, 0.15)' : 'rgba(138, 228, 255, 0.08)',
                }}
              >
                <Feather size={14} />
                <span>{activeStory === 'scene1' ? 'Close Reflection' : 'Read Friendship Note ✨'}</span>
              </button>

              {/* Expandable Note */}
              <AnimatePresence>
                {activeStory === 'scene1' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{
                      marginTop: '18px',
                      padding: '18px 22px',
                      borderRadius: '16px',
                      background: 'rgba(11, 31, 70, 0.8)',
                      border: '1px solid var(--sunrise-gold)',
                      fontFamily: 'var(--font-heading)',
                      fontStyle: 'italic',
                      color: '#FFF5E0',
                      fontSize: '0.98rem',
                      lineHeight: 1.7,
                      boxShadow: '0 8px 25px rgba(255, 211, 138, 0.15)',
                    }}
                  >
                    "Whenever life feels loud or overwhelming, I hope you remember that you have a friend who truly values you and prays for your peace. May every path you choose in life be as beautiful and promising as this flowering hill."
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>


        {/* ── SCENE 2: MIDNIGHT OF SHOOTING STARS (YOUR NAME COMET SPLIT) ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, delay: 0.15 }}
          style={{
            background: 'linear-gradient(135deg, rgba(16, 44, 91, 0.8), rgba(7, 21, 47, 0.9))',
            border: '1.5px solid rgba(138, 228, 255, 0.25)',
            borderRadius: '24px',
            padding: 'clamp(20px, 3.5vw, 36px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
            overflow: 'hidden',
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '36px',
            alignItems: 'center',
          }}>
            {/* Image Frame */}
            <div style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxHeight: '480px',
            }}>
              <img
                src="/assets/your-name-shooting-stars.jpg"
                alt="Your Name anime scene with two characters looking up at the split comet Tiamat trailing blue and violet stardust across twilight sky"
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '480px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                loading="lazy"
                decoding="async"
              />
              {/* Bottom Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 65%, rgba(7, 21, 47, 0.85) 100%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Top Badge */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(7, 21, 47, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(138, 228, 255, 0.4)',
                color: 'var(--cyan)',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}>
                <Moon size={14} />
                <span>Scene II • Comet Twilight & Silent Prayers</span>
              </div>
            </div>

            {/* Meaningful Narrative Card */}
            <div>
              <span style={{
                color: 'var(--sunrise-gold)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '8px',
              }}>
                Midnight of Endless Wishes
              </span>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                color: '#FFFFFF',
                marginBottom: '14px',
                lineHeight: 1.3,
              }}>
                A Sky Full of Prayers & Wishes for Sahrish
              </h3>

              <p style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
                color: 'var(--lavender)',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '20px',
              }}>
                Under this starlit sky, every bright meteor trail across the dark blue cosmos represents a sincere prayer sent upward for you. A wish that your heart always stays at peace, that you find strength when you are tired, that every dream you quietly cherish becomes reality, and that Allah envelops your life in blessings and protection.
              </p>

              {/* Trait Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '24px',
              }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: 'rgba(138, 228, 255, 0.1)',
                  color: 'var(--cyan)',
                  fontSize: '0.8rem',
                  border: '1px solid rgba(138, 228, 255, 0.2)',
                }}>
                  💫 Silent Duas
                </span>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: 'rgba(255, 211, 138, 0.1)',
                  color: 'var(--sunrise-gold)',
                  fontSize: '0.8rem',
                  border: '1px solid rgba(255, 211, 138, 0.25)',
                }}>
                  🌌 Boundless Potential
                </span>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: 'rgba(200, 199, 255, 0.1)',
                  color: 'var(--lavender)',
                  fontSize: '0.8rem',
                  border: '1px solid rgba(200, 199, 255, 0.2)',
                }}>
                  🤍 Unbreakable Trust
                </span>
              </div>

              <button
                onClick={() => setActiveStory(activeStory === 'scene2' ? null : 'scene2')}
                className="btn-secondary"
                style={{
                  fontSize: '0.85rem',
                  padding: '9px 18px',
                  borderColor: activeStory === 'scene2' ? 'var(--cyan)' : 'rgba(138, 228, 255, 0.3)',
                  background: activeStory === 'scene2' ? 'rgba(138, 228, 255, 0.15)' : 'rgba(138, 228, 255, 0.08)',
                }}
              >
                <Sparkles size={14} />
                <span>{activeStory === 'scene2' ? 'Close Reflection' : 'Read Celestial Dua ✨'}</span>
              </button>

              {/* Expandable Note */}
              <AnimatePresence>
                {activeStory === 'scene2' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{
                      marginTop: '18px',
                      padding: '18px 22px',
                      borderRadius: '16px',
                      background: 'rgba(11, 31, 70, 0.8)',
                      border: '1px solid var(--cyan)',
                      fontFamily: 'var(--font-heading)',
                      fontStyle: 'italic',
                      color: '#E8F4FF',
                      fontSize: '0.98rem',
                      lineHeight: 1.7,
                      boxShadow: '0 8px 25px rgba(138, 228, 255, 0.15)',
                    }}
                  >
                    "True friendship doesn't fade with time or distance. Like the stars that shine across light-years of midnight sky, my genuine support and prayers for your happiness will always remain constant. Happy Birthday, my very best friend."
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
