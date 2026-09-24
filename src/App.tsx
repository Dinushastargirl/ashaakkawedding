import { useState, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CinematicVideoOpening } from './components/CinematicVideoOpening';
import { FloatingNav } from './components/FloatingNav';
import { FloatingPetals } from './components/common/FloatingPetals';
import { ButterfliesOverlay } from './components/common/ButterfliesOverlay';
import { ScenicBackdrop } from './components/common/ScenicBackdrop';
import { HeroSection } from './components/HeroSection';
import { audioManager } from './utils/audioManager';
import { mediaPreloader } from './utils/mediaPreloader';

// Code-split non-critical downstream sections so first screen loads in milliseconds
const LoveStorySection = lazy(() => import('./components/LoveStorySection').then(m => ({ default: m.LoveStorySection })));
const CountdownSection = lazy(() => import('./components/CountdownSection').then(m => ({ default: m.CountdownSection })));
const EventDetailsSection = lazy(() => import('./components/EventDetailsSection').then(m => ({ default: m.EventDetailsSection })));
const PhotoExperienceSection = lazy(() => import('./components/PhotoExperienceSection').then(m => ({ default: m.PhotoExperienceSection })));
const BibleVerseSection = lazy(() => import('./components/BibleVerseSection').then(m => ({ default: m.BibleVerseSection })));
const RSVPSection = lazy(() => import('./components/RSVPSection').then(m => ({ default: m.RSVPSection })));
const ClosingSection = lazy(() => import('./components/ClosingSection').then(m => ({ default: m.ClosingSection })));

export default function App() {
  const [hasEnteredInvitation, setHasEnteredInvitation] = useState(false);
  const [transitionStage, setTransitionStage] = useState<'idle' | 'light-bloom' | 'light-reveal'>('idle');

  const handleEnterInvitation = async () => {
    if (transitionStage !== 'idle' || hasEnteredInvitation) return;

    // 1. Ensure wedding music continues without interruption
    audioManager.start();

    // 2. Begin cinematic radiant bright light bloom spreading across screen (750ms)
    setTransitionStage('light-bloom');

    // 3. Silently wait for Scene 2 video to buffer underneath if not yet ready
    await mediaPreloader.waitForScene2Ready(750);

    // 4. Exactly as the screen is fully bathed in golden wedding light, switch to Scene 2
    setTimeout(() => {
      setHasEnteredInvitation(true);

      // Preload Scene 3 (Photos, Events, Ceremony) silently
      mediaPreloader.prepareScene3();

      // 5. Light smoothly softens and dissolves away (900ms), seamlessly revealing Scene 2
      setTransitionStage('light-reveal');

      setTimeout(() => {
        setTransitionStage('idle');
      }, 900);
    }, 750);
  };

  return (
    <div className="relative min-h-screen bg-[#0c0214] selection:bg-[#521782] selection:text-white overflow-x-hidden">
      {/* 
        Scenic Floral Motion Inside Video (inside.mp4) is mounted at z-0,
        buffering and ready in background so light reveal shows it running seamlessly with zero gap!
      */}
      <ScenicBackdrop active={hasEnteredInvitation} />

      {/* 1. Full-Screen Cinematic Opening Experience */}
      <AnimatePresence>
        {!hasEnteredInvitation && (
          <CinematicVideoOpening onEnterInvitation={handleEnterInvitation} />
        )}
      </AnimatePresence>

      {/* 
        Cinematic Bright Light Bloom Transition Curtain:
        - At the end of Scene 1, a luminous celestial golden light gradually spreads across the entire screen
        - The radiant light naturally covers the screen and hides the transition completely
        - Scene 2 is already buffered and playing underneath
        - As the light softens, Scene 2 is seamlessly unveiled as one continuous cinematic sequence
      */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{
          opacity: transitionStage === 'light-bloom' ? 1 : (transitionStage === 'light-reveal' ? 0 : 0),
        }}
        transition={{
          duration: transitionStage === 'light-bloom' ? 0.75 : 0.9,
          ease: transitionStage === 'light-bloom' ? 'easeIn' : 'easeOut',
        }}
        className={`pointer-events-none fixed inset-0 z-[60] overflow-hidden ${
          transitionStage === 'idle' ? 'hidden' : 'block'
        }`}
      >
        {/* Core Warm Ivory/Gold Light Flood */}
        <div className="absolute inset-0 bg-[#FFFDF5]" />

        {/* Radiant Center Sunburst Bloom */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #FFFFFF 0%, #FFF7DE 35%, #FDECB6 65%, #FAF2DE 100%)',
          }}
        />

        {/* Anamorphic Horizontal Golden Lens Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            className="w-[180vw] h-[60vh] rounded-full opacity-90 blur-3xl"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(245,218,142,0.85) 40%, rgba(212,175,55,0.4) 70%, transparent 100%)',
            }}
          />
        </div>
      </motion.div>

      {/* 2. Main Wedding Invitation Content (Revealed with cinematic radiance) */}
      {hasEnteredInvitation && (
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative z-10 pb-20 sm:pb-24"
        >
          {/* Gentle Fluttering Natural Butterflies (20 instances using cached WebP) */}
          <ButterfliesOverlay count={20} theme="inside" />

          {/* Ambient Rising Purple & Gold Rose Petals */}
          <FloatingPetals />

          {/* Bottom Navigation & Floating Sound Toggle */}
          <FloatingNav />

          <main className="relative z-10">
            {/* 1. Hero Section: Velvet Homecoming Letterbox Frame over inside video */}
            <HeroSection />

            <Suspense fallback={null}>
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
            </Suspense>
          </main>
        </motion.div>
      )}
    </div>
  );
}

