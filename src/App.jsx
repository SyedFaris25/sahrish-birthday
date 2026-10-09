import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalaxyUniverse from './components/GalaxyUniverse';
import CursorStardust from './components/CursorStardust';
import CelestialMusicBox from './components/CelestialMusicBox';
import OpeningScreen from './sections/OpeningScreen';
import CountdownSection from './sections/CountdownSection';
import HeroSection from './sections/HeroSection';
import SunriseSimulatorSection from './sections/SunriseSimulatorSection';
import AliciaSection from './sections/AliciaSection';
import SunriseSection from './sections/SunriseSection';
import VersesSection from './sections/VersesSection';
import LandscapeSection from './sections/LandscapeSection';
import BirthdayMessageSection from './sections/BirthdayMessageSection';
import FriendshipSection from './sections/FriendshipSection';
import FinalSection from './sections/FinalSection';

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {/* Permanent deep cosmic universe background */}
      <GalaxyUniverse />

      {/* Interactive cursor stardust trail */}
      <CursorStardust />

      {/* Floating ambient music-box player */}
      <CelestialMusicBox />

      {/* Opening screen overlay */}
      {!entered && <OpeningScreen onEnter={() => setEntered(true)} />}

      {/* Main website — always rendered but hidden behind the overlay until entered */}
      <AnimatePresence>
        {entered && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <CountdownSection />
            <HeroSection />
            <SunriseSimulatorSection />
            <AliciaSection />
            <SunriseSection />
            <VersesSection />
            <LandscapeSection />
            <BirthdayMessageSection />
            <FriendshipSection />
            <FinalSection />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
