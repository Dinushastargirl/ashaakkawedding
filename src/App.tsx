import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CinematicVideoOpening } from './components/CinematicVideoOpening';
import { FloatingNav } from './components/FloatingNav';
import { FloatingPetals } from './components/common/FloatingPetals';
import { ButterfliesOverlay } from './components/common/ButterfliesOverlay';
import { ScenicBackdrop } from './components/common/ScenicBackdrop';
import { HeroSection } from './components/HeroSection';
import { LoveStorySection } from './components/LoveStorySection';
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
    <div className="relative min-h-screen bg-transparent selection:bg-[#521782] selection:text-white overflow-x-hidden">
      
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
          {/* Scenic Floral Motion Video (inside.mp4) + Radial Vignette + Wisteria Canopy */}
          <ScenicBackdrop />

          {/* Gentle Fluttering 3D Butterflies */}
          <ButterfliesOverlay count={5} theme="inside" />

          {/* Ambient Rising Purple & Gold Rose Petals */}
          <FloatingPetals />

          {/* Bottom Navigation & Floating Sound Toggle */}
          <FloatingNav />

          <main>
            {/* 1. Hero Section: Ornate Letterbox Frame with Joshua & Asha, Oct 17, 2026 */}
            <HeroSection />

            {/* 2. Love Story: Two Hearts, One Celebration & Milestone Spine Timeline */}
            <LoveStorySection />

            {/* 3. Wedding Countdown: 4 Frosted Velvet Glass Cards */}
            <CountdownSection />

            {/* 4. Ceremony & Reception Event Cards + Save to Google Calendar */}
            <EventDetailsSection />

            {/* 5. Moments in Time: 4-Column Photo Gallery + Lightbox Modal */}
            <PhotoExperienceSection />

            {/* 6. Holy Matrimony Scripture: Matthew 19:6 */}
            <BibleVerseSection />

            {/* 7. RSVP Section: Attendee Reservation with Supabase Persistence */}
            <RSVPSection />

            {/* 8. Final Christian Wedding Message & Scripture */}
            <ClosingSection />
          </main>
        </motion.div>
      )}
    </div>
  );
}
