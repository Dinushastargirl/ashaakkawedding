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
    // Ensure audio continues smoothly
    audioManager.start();
  };

  return (
    <div className="relative min-h-screen bg-transparent selection:bg-[#521782] selection:text-white overflow-x-hidden">
      {/* 
        Scenic Floral Motion Inside Video (inside.mp4) is mounted at z-0 from the start,
        buffering in the background so when the intro video ends, the inside video appears 
        at the EXACT SAME TIME with ZERO gap!
      */}
      <ScenicBackdrop />

      {/* 1. Full-Screen Cinematic Opening Experience with exact Image 2 layout */}
      <AnimatePresence>
        {!hasEnteredInvitation && (
          <CinematicVideoOpening onEnterInvitation={handleEnterInvitation} />
        )}
      </AnimatePresence>

      {/* 2. Main Wedding Invitation Content (Revealed simultaneously at video finish) */}
      {hasEnteredInvitation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 pb-20 sm:pb-24"
        >
          {/* Gentle Fluttering Natural Butterflies (20 instances) */}
          <ButterfliesOverlay count={20} theme="inside" />

          {/* Ambient Rising Purple & Gold Rose Petals */}
          <FloatingPetals />

          {/* Bottom Navigation & Floating Sound Toggle */}
          <FloatingNav />

          <main className="relative z-10">
            {/* 1. Hero Section: Velvet Homecoming Letterbox Frame over inside video */}
            <HeroSection />

            {/* 2. Love Story: Two Hearts, One Celebration & Milestone Spine Timeline */}
            <LoveStorySection />

            {/* 3. Wedding Countdown: 4 Frosted Velvet Glass Cards */}
            <CountdownSection />

            {/* 4. Ceremony & Reception Event Cards + Save to Google Calendar */}
            <EventDetailsSection />

            {/* 5. Moments in Time: 4 Authentic Pre-Shoot Photos + Lightbox Modal */}
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
