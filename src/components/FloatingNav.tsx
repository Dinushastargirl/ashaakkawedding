import React, { useState, useEffect } from 'react';
import { audioManager } from '../utils/audioManager';
import { Volume2, VolumeX } from 'lucide-react';

export const FloatingNav: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const unsub = audioManager.subscribe((playing) => {
      setIsPlaying(playing);
    });
    setIsPlaying(audioManager.getIsPlaying());

    // Observe active section on scroll
    const handleScroll = () => {
      const sections = ['hero', 'ceremony', 'reception', 'gallery', 'rsvp'];
      const scrollY = window.scrollY + 300;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      unsub();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMusic = () => {
    audioManager.toggle();
  };

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Ceremony', href: '#details', id: 'ceremony' },
    { label: 'Reception', href: '#details', id: 'reception' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'RSVP', href: '#rsvp', id: 'rsvp' },
  ];

  return (
    <>
      {/* Top Right Floating Sound Toggle Pill */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40">
        <button
          onClick={toggleMusic}
          title={isPlaying ? "Mute ambient music" : "Play ambient music"}
          className={`flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-sans uppercase tracking-[0.2em] backdrop-blur-md shadow-lg transition-all active:scale-95 cursor-pointer ${
            isPlaying
              ? 'border-[#D4AF37] bg-[#230738]/90 text-[#E5C578] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
              : 'border-[#C5A059]/40 bg-[#150323]/80 text-[#FAF7F2]/80 hover:bg-[#230738]'
          }`}
        >
          {isPlaying ? (
            <>
              <Volume2 className="h-3.5 w-3.5 text-[#E5C578] animate-pulse" />
              <span className="text-[0.65rem] font-semibold hidden xs:inline">Sound On</span>
              <span className="flex items-end gap-0.5 h-2.5">
                <span className="w-0.5 h-2 bg-[#E5C578] animate-pulse" />
                <span className="w-0.5 h-3 bg-[#E5C578] animate-pulse delay-75" />
                <span className="w-0.5 h-1.5 bg-[#E5C578] animate-pulse delay-150" />
              </span>
            </>
          ) : (
            <>
              <VolumeX className="h-3.5 w-3.5 text-[#FAF7F2]/60" />
              <span className="text-[0.65rem] font-semibold hidden xs:inline">Sound Off</span>
            </>
          )}
        </button>
      </div>

      {/* Minimal Bottom Navigation: Home | Ceremony | Reception | Gallery | RSVP */}
      <div className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav 
          aria-label="Wedding Invitation Navigation"
          className="pointer-events-auto flex items-center gap-1 sm:gap-2 rounded-full border border-[#D4AF37]/50 bg-[#150323]/90 py-2 px-3.5 sm:px-5 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.15)] max-w-fit"
        >
          {navItems.map((item, idx) => (
            <React.Fragment key={item.label}>
              <a
                href={item.href}
                className={`font-sans text-[0.62rem] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] px-2 sm:px-3 py-1 rounded-full transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? 'bg-[#521782] text-[#E5C578] shadow-[0_0_8px_rgba(212,175,55,0.3)]'
                    : 'text-[#FAF7F2]/80 hover:text-[#E5C578] hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
              {idx < navItems.length - 1 && (
                <span className="h-2.5 w-[1px] bg-[#D4AF37]/30 select-none" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </>
  );
};
