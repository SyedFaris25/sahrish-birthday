import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Volume2, Music } from 'lucide-react';

// Soothing anime music-box pentatonic frequencies (Hz)
const NOTES = [
  523.25, // C5
  659.25, // E5
  783.99, // G5
  880.00, // A5
  659.25, // E5
  587.33, // D5
  523.25, // C5
  440.00, // A4
  392.00, // G4
  523.25, // C5
  659.25, // E5
  587.33, // D5
  783.99, // G5
  880.00, // A5
  1046.50,// C6
  783.99, // G5
];

/**
 * CelestialMusicBox Component
 * Generates an ethereal, calming music-box melody using the Web Audio API.
 * 100% self-contained (no external audio assets required).
 */
export default function CelestialMusicBox() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);
  const stepRef = useRef(0);

  const playNote = useCallback((freq) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Pure music box sine + subtle chime harmonic
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Sweet bell-like decay
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.09, ctx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 1.7);
  }, []);

  const startMelody = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContextClass();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    stepRef.current = 0;
    timerRef.current = setInterval(() => {
      const noteFreq = NOTES[stepRef.current % NOTES.length];
      playNote(noteFreq);
      stepRef.current += 1;
    }, 420); // Gentle 420ms tempo
  }, [playNote]);

  const stopMelody = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      stopMelody();
      setIsPlaying(false);
    } else {
      startMelody();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 900,
      }}
    >
      <button
        onClick={toggleMusic}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 18px',
          borderRadius: '999px',
          background: isPlaying
            ? 'linear-gradient(135deg, rgba(16, 44, 91, 0.95), rgba(7, 21, 47, 0.95))'
            : 'rgba(7, 21, 47, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: isPlaying ? '1.5px solid var(--sunrise-gold)' : '1px solid rgba(138, 228, 255, 0.3)',
          boxShadow: isPlaying
            ? '0 6px 25px rgba(255, 211, 138, 0.25), 0 0 15px rgba(138, 228, 255, 0.15)'
            : '0 4px 16px rgba(0, 0, 0, 0.4)',
          color: isPlaying ? 'var(--sunrise-gold)' : 'var(--lavender)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        aria-label={isPlaying ? 'Pause Melody' : 'Play Celestial Melody'}
      >
        {isPlaying ? (
          <>
            <Volume2 size={16} style={{ color: 'var(--sunrise-gold)' }} />
            {/* Animated Equalizer Bars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '14px' }}>
              <span className="eq-bar eq-bar-1" />
              <span className="eq-bar eq-bar-2" />
              <span className="eq-bar eq-bar-3" />
            </div>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.02em' }}>
              Birthday Chimes
            </span>
          </>
        ) : (
          <>
            <Music size={15} style={{ color: 'var(--cyan)' }} />
            <span style={{ fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.02em' }}>
              Play Melody 🎵
            </span>
          </>
        )}
      </button>
    </div>
  );
}
