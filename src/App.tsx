import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CinematicVideoOpening } from './components/CinematicVideoOpening';
import { FloatingNav } from './components/FloatingNav';
import { HeroSection } from './components/HeroSection';
import { FramedWeddingDetailsCard } from './components/FramedWeddingDetailsCard';
import { BibleVerseSection } from './components/BibleVerseSection';
import { CountdownSection } from './components/CountdownSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { PhotoExperienceSection } from './components/PhotoExperienceSection';
import { RSVPSection } from './components/RSVPSection';
import { ClosingSection } from './components/ClosingSection';
import { audioManager } from './utils/audioManager';

export default function App() {
  const [hasEnteredInvitation, setHasEnteredInvitation] = useState(false);

  const handleEnterInvitation = () => {
    setHasEnteredInvitation(true);
    // Start gentle ambient acoustic music once user enters the invitation
    audioManager.start();
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] selection:bg-[#521782] selection:text-white overflow-x-hidden">
      
      {/* 1. Video-First Opening Experience -> Fade -> Cover -> Tap To Enter */}
      <AnimatePresence mode="wait">
        {!hasEnteredInvitation && (
          <CinematicVideoOpening onEnterInvitation={handleEnterInvitation} />
        )}
      </AnimatePresence>

      {/* 2. Main Wedding Invitation (Revealed after Tap To Enter) */}
      {hasEnteredInvitation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-0 pb-20 sm:pb-24"
        >
          {/* Bottom Navigation & Floating Sound Toggle */}
          <FloatingNav />

          <main>
            {/* 1. Hero Section: Joshua & Asha, Christian Holy Matrimony & Reception, 17th October 2026 */}
            <HeroSection />

            {/* 2. Wedding Details: Framed Card with 5:30 PM Service, 7:30 PM Reception, Add to Google Calendar */}
            <FramedWeddingDetailsCard />

            {/* 3. Bible Verse: Matthew 19:6 with Christian Cross & Floral accents */}
            <BibleVerseSection />

            {/* 4. Wedding Countdown: Days, Hours, Minutes, Seconds to 17th October 2026, 5:30 PM */}
            <CountdownSection />

            {/* 5. Ceremony & Reception Details */}
            <EventDetailsSection />

            {/* 6. Photo Gallery */}
            <PhotoExperienceSection />

            {/* 7. RSVP Section: We Would Love To Celebrate With You */}
            <RSVPSection />

            {/* 8. Final Christian Wedding Message & Scripture */}
            <ClosingSection />
          </main>
        </motion.div>
      )}
    </div>
  );
}
