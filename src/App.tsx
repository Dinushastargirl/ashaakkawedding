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
  const [transitionStage, setTransitionStage] = useState<'idle' | 'fade-out' | 'fade-in'>('idle');

  const handleEnterInvitation = () => {
    if (transitionStage !== 'idle' || hasEnteredInvitation) return;

    // 1. Begin smooth Fade Out of intro video to deep velvet black (600ms)
    setTransitionStage('fade-out');

    // Ensure audio plays without interruption
    audioManager.start();

    // 2. Once screen has smoothly faded out (600ms), switch to inside invitation
    setTimeout(() => {
      setHasEnteredInvitation(true);
      setTransitionStage('fade-in');

      // 3. Fade in inside video & invitation content gracefully (850ms)
      setTimeout(() => {
        setTransitionStage('idle');
      }, 850);
    }, 600);
  };

  return (
    <div className="relative min-h-screen bg-[#0c0214] selection:bg-[#521782] selection:text-white overflow-x-hidden">
      {/* 
        Scenic Floral Motion Inside Video (inside.mp4) is mounted at z-0,
        buffering and ready in background so fade-in reveals it instantly with zero gap!
      */}
      <ScenicBackdrop active={hasEnteredInvitation} />

      {/* 1. Full-Screen Cinematic Opening Experience */}
      <AnimatePresence>
        {!hasEnteredInvitation && (
          <CinematicVideoOpening onEnterInvitation={handleEnterInvitation} />
        )}
      </AnimatePresence>

      {/* 
        Cinematic Transition Curtain:
        - Fades from 0 to 1 during 'fade-out' (intro dims gracefully to black)
        - Fades from 1 to 0 during 'fade-in' (inside video & invitation glow up into view)
        - Creates a seamless, breath-taking chapter change
      */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{
          opacity: transitionStage === 'fade-out' ? 1 : 0,
        }}
        transition={{
          duration: transitionStage === 'fade-out' ? 0.6 : 0.85,
          ease: 'easeInOut',
        }}
        className="pointer-events-none fixed inset-0 z-[60] bg-[#0c0214]"
      />

      {/* 2. Main Wedding Invitation Content (Revealed with cinematic fade-in) */}
      {hasEnteredInvitation && (
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
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
