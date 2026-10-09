import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Sparkles, Shield, Heart, Quote, Star, Award } from 'lucide-react';
import { StarsBackground, FloatingPetals, FloatingParticles } from '../components/Effects';

export default function AliciaSection() {
  const [noteOpen, setNoteOpen] = useState(false);

  const characterTraits = [
    {
      id: 'resilience',
      icon: <Shield size={20} style={{ color: 'var(--sunrise-gold)' }} />,
      title: 'Quiet Resilience & Discipline',
      reflection:
        'Alicia never waits for someone else to pave her path — she builds her own strength through discipline, intellect, and grace. Just like her, you possess that admirable inner resilience that stays composed and determined through every challenge life presents.',
      tag: 'Strength',
    },
    {
      id: 'authenticity',
      icon: <Crown size={20} style={{ color: 'var(--cyan)' }} />,
      title: 'Unapologetic Authenticity',
      reflection:
        'She never compromises who she is just to please others. You carry that exact rare elegance: being sincerely, unapologetically true to yourself, walking with dignity without ever needing to wear a false mask.',
      tag: 'Grace',
    },
    {
      id: 'loyalty',
      icon: <Heart size={20} style={{ color: 'var(--flower-pink)' }} />,
      title: 'Fierce Loyalty & Sincerity',
      reflection:
        'Beneath her sharp poise is an unwavering heart that fiercely protects and values those who truly matter. Having you as a best friend is a blessing because your care, loyalty, and honesty are genuine and irreplaceable.',
      tag: 'Friendship',
    },
  ];

  return (
    <section
      className="section"
      id="alicia"
      style={{
        background: 'linear-gradient(180deg, rgba(7, 21, 47, 0.4) 0%, rgba(11, 31, 70, 0.45) 50%, rgba(16, 44, 91, 0.4) 100%)',
        padding: '90px 24px',
        overflow: 'hidden',
      }}
    >
      <StarsBackground count={50} />
      <FloatingPetals count={8} />
      <FloatingParticles count={6} color="rgba(255, 211, 138, 0.15)" />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1080px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            <Crown size={15} />
            <span>Her Favorite Character • Alicia Williams</span>
          </motion.div>

          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ marginBottom: '16px' }}
          >
            Grace, Ambition & An Unshakable Spirit
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
            "We are drawn to characters who mirror the strength, dignity, and fierce sincerity we hold within ourselves."
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'center',
        }}>

          {/* Left Column: Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(16, 44, 91, 0.85), rgba(7, 21, 47, 0.95))',
              border: '2px solid rgba(138, 228, 255, 0.25)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(138, 228, 255, 0.12)',
              overflow: 'hidden',
              padding: '16px',
              maxWidth: '380px',
              margin: '0 auto',
            }}
          >
            {/* Portrait Image Frame */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '420px',
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 211, 138, 0.3)',
            }}>
              <img
                src="/assets/alicia-williams.jpg"
                alt="Alicia Williams portrait"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 55%, rgba(7, 21, 47, 0.95) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Character Badge Overlay */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(7, 21, 47, 0.75)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 211, 138, 0.4)',
                color: 'var(--sunrise-gold)',
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <Award size={13} />
                <span>The Villainess Who Stole Hearts</span>
              </div>
            </div>

            {/* Character Footer & Interactive Trigger */}
            <div style={{ padding: '20px 16px 12px', textAlign: 'center' }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                color: 'var(--cyan)',
                marginBottom: '4px',
              }}>
                Alicia Williams
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--sunrise-gold)',
                marginBottom: '16px',
                opacity: 0.9,
              }}>
                I'll Become a Villainess Who Goes Down in History
              </p>

              <button
                onClick={() => setNoteOpen(!noteOpen)}
                className="btn-secondary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  padding: '10px 16px',
                  borderColor: noteOpen ? 'var(--sunrise-gold)' : 'rgba(138, 228, 255, 0.3)',
                  background: noteOpen ? 'rgba(255, 211, 138, 0.15)' : 'rgba(138, 228, 255, 0.08)',
                }}
              >
                <Sparkles size={15} style={{ color: 'var(--sunrise-gold)' }} />
                <span>{noteOpen ? 'Close Alicia’s Note' : 'A Special Note for Sahrish ✨'}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Meaningful Connection & Trait Reflections */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* Interactive Note Banner (if opened) */}
            <AnimatePresence>
              {noteOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 211, 138, 0.12), rgba(11, 31, 70, 0.9))',
                    border: '1.5px solid var(--sunrise-gold)',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    boxShadow: '0 8px 30px rgba(255, 211, 138, 0.15)',
                    position: 'relative',
                  }}
                >
                  <Quote size={24} style={{ color: 'var(--sunrise-gold)', opacity: 0.6, marginBottom: '8px' }} />
                  <p style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    color: '#FFFFFF',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: '10px',
                  }}>
                    "To become someone who goes down in history, you don't need to conquer kingdoms or seek the approval of the crowd. You just have to stand tall, stay fiercely true to who you are, and bring your own radiant light into the lives around you. Happy Birthday, Sahrish."
                  </p>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--sunrise-gold)',
                    fontWeight: 600,
                    textAlign: 'right',
                    letterSpacing: '0.05em',
                  }}>
                    — Especially for your special day 👑
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Section Tabs: Why Sahrish Mirrors Alicia */}
            <div style={{
              background: 'rgba(11, 31, 70, 0.6)',
              backdropFilter: 'blur(12px)',
              borderRadius: '20px',
              border: '1px solid rgba(138, 228, 255, 0.2)',
              padding: '28px 24px',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.3)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '20px',
              }}>
                <Star size={18} style={{ color: 'var(--sunrise-gold)' }} />
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  color: 'var(--white)',
                  fontWeight: 600,
                }}>
                  The Qualities That Shine in You
                </h3>
              </div>

              {/* Trait Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {characterTraits.map((trait) => (
                  <div
                    key={trait.id}
                    style={{
                      background: 'rgba(7, 21, 47, 0.55)',
                      borderRadius: '14px',
                      border: '1px solid rgba(138, 228, 255, 0.15)',
                      padding: '16px 18px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {trait.icon}
                        <h4 style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.05rem',
                          color: 'var(--cyan)',
                          fontWeight: 600,
                        }}>
                          {trait.title}
                        </h4>
                      </div>
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        background: 'rgba(255, 211, 138, 0.1)',
                        color: 'var(--sunrise-gold)',
                        border: '1px solid rgba(255, 211, 138, 0.25)',
                      }}>
                        {trait.tag}
                      </span>
                    </div>

                    <p style={{
                      fontSize: '0.88rem',
                      color: 'var(--lavender)',
                      opacity: 0.88,
                      lineHeight: 1.65,
                      margin: 0,
                    }}>
                      {trait.reflection}
                    </p>
                  </div>
                ))}
              </div>

              {/* Thoughtful Closing Quote */}
              <div style={{
                marginTop: '24px',
                paddingTop: '18px',
                borderTop: '1px solid rgba(138, 228, 255, 0.12)',
                textAlign: 'center',
              }}>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: 'var(--sunrise-gold)',
                  opacity: 0.95,
                  margin: 0,
                }}>
                  "Never shrink your light to make others comfortable. Keep shining with your own grace."
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
