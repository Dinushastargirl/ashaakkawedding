import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { SectionHeader } from './common/SectionHeader';
import { PurpleFloralCorner } from './common/PurpleFloralCorner';
import { supabase } from '../utils/supabase';
import { CheckCircle2, HeartHandshake, Send, Users, User, MessageSquare, Sparkles, AlertCircle } from 'lucide-react';

export const RSVPSection: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('1');
  const [attendance, setAttendance] = useState<'attending' | 'declining'>('attending');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    guests: string;
    attendance: 'attending' | 'declining';
    message?: string;
  } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('joshua_asha_rsvp');
    if (saved) {
      try {
        setSubmittedData(JSON.parse(saved));
      } catch {
        // ignore
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      name: name.trim(),
      guests: attendance === 'attending' ? guests : '0',
      attendance,
      message: message.trim() || undefined,
    };

    try {
      // 1. Store directly in Supabase Database
      const { error } = await supabase.from('rsvps').insert([
        {
          name: payload.name,
          guests: payload.guests,
          attendance: payload.attendance,
          message: payload.message || null,
        }
      ]);

      if (error) {
        console.error("Supabase RSVP insert error:", error);
      }

      // 2. Persist locally
      localStorage.setItem('joshua_asha_rsvp', JSON.stringify(payload));
      setSubmittedData(payload);

      // 3. Confetti on attending
      if (attendance === 'attending') {
        confetti({
          particleCount: 85,
          spread: 75,
          origin: { y: 0.7 },
          colors: ['#D4AF37', '#521782', '#E5C578', '#FAF7F2'],
        });
      }
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      setErrorMessage("Could not save to server, but your RSVP has been recorded on this device.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    localStorage.removeItem('joshua_asha_rsvp');
    setSubmittedData(null);
    setName('');
    setMessage('');
    setAttendance('attending');
    setErrorMessage(null);
  };

  return (
    <section id="rsvp" className="relative mx-auto max-w-4xl scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20">
      {/* Section Header */}
      <SectionHeader
        preTitle="Celebrate With Us"
        title="We Would Love To Celebrate With You"
        subtitle="Kindly grace us with your response so that we may reserve your seat"
        dividerWidth="w-[230px]"
      />

      {/* Velvet Homecoming RSVP Card */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto max-w-2xl rounded-[28px] px-6 py-10 sm:px-12 sm:py-14 velvet-card text-left"
      >
        {/* Purple Floral Corners */}
        <PurpleFloralCorner position="top-left" size={85} />
        <PurpleFloralCorner position="top-right" size={85} />
        <PurpleFloralCorner position="bottom-left" size={85} />
        <PurpleFloralCorner position="bottom-right" size={85} />

        {/* 4 Corner Gold Brackets */}
        <span aria-hidden="true" className="pointer-events-none">
          <span className="absolute top-[13px] left-[13px] w-[18px] h-[18px] border-t border-l border-[#C3A45C] rounded-tl-[3px]" />
          <span className="absolute top-[13px] right-[13px] w-[18px] h-[18px] border-t border-r border-[#C3A45C] rounded-tr-[3px]" />
          <span className="absolute bottom-[13px] left-[13px] w-[18px] h-[18px] border-b border-l border-[#C3A45C] rounded-bl-[3px]" />
          <span className="absolute bottom-[13px] right-[13px] w-[18px] h-[18px] border-b border-r border-[#C3A45C] rounded-br-[3px]" />
        </span>

        {/* Top Medallion Circle */}
        <div className="text-center mb-6">
          <span 
            className="inline-grid h-16 w-16 place-items-center rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #521782, #230738)',
              border: '1px solid rgba(176, 138, 63, 0.75)',
              boxShadow: '0 0 0 4px rgba(251, 245, 234, 0.9), 0 0 0 5px rgba(176, 138, 63, 0.4), 0 8px 18px -10px rgba(35, 7, 56, 0.4)',
            }}
          >
            <HeartHandshake className="h-8 w-8 text-[#D4AF37]" />
          </span>
        </div>

        <AnimatePresence mode="wait">
          {submittedData ? (
            /* Success Confirmation Card */
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-4"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#EFE6FB] border border-[#D4BEE4]">
                <CheckCircle2 className="h-7 w-7 text-[#521782]" />
              </div>

              <h3 className="font-serif italic text-2xl sm:text-3xl text-purple-foil">
                Thank You, {submittedData.name}!
              </h3>

              <p className="mt-2 font-body text-lg text-[#4A154B]">
                {submittedData.attendance === 'attending' ? (
                  <>
                    Your RSVP has been saved in our guest list! We are thrilled to celebrate our Holy Matrimony with you.
                    <br />
                    <span className="font-semibold text-[#521782]">
                      Guests Confirmed: {submittedData.guests}
                    </span>
                  </>
                ) : (
                  <>
                    Your response has been saved. You will be dearly missed, but we carry your warm prayers and blessings in our hearts.
                  </>
                )}
              </p>

              {submittedData.message && (
                <div className="mt-5 rounded-xl border border-[#B08A3F]/40 bg-white/70 p-4 italic text-[#3C1061]">
                  "{submittedData.message}"
                </div>
              )}

              <div className="mt-8">
                <button
                  onClick={handleReset}
                  className="font-sans text-xs uppercase tracking-widest text-[#8C6D2A] hover:underline cursor-pointer"
                >
                  Edit or Submit Another RSVP
                </button>
              </div>
            </motion.div>
          ) : (
            /* Interactive RSVP Form */
            <form key="form" onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="flex items-center gap-2 rounded-xl bg-amber-50 border border-amber-200 p-3 text-amber-800 text-xs">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Attendance Selection Buttons */}
              <div>
                <label className="block font-sans text-xs uppercase tracking-[0.2em] text-[#8C6D2A] font-semibold mb-3">
                  Will You Attend? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendance('attending')}
                    className={`relative flex items-center justify-center gap-2 rounded-2xl py-3.5 px-4 font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all border cursor-pointer ${
                      attendance === 'attending'
                        ? 'border-[#B08A3F] bg-gradient-to-r from-[#230738] to-[#4E144A] text-[#FAF7F2] shadow-md'
                        : 'border-[#E8DCF5] bg-white/60 text-[#5C4566] hover:bg-white'
                    }`}
                  >
                    <Sparkles className={`h-4 w-4 ${attendance === 'attending' ? 'text-[#E5C578]' : 'text-[#8C6D2A]'}`} />
                    <span>Joyfully Attending</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance('declining')}
                    className={`relative flex items-center justify-center gap-2 rounded-2xl py-3.5 px-4 font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all border cursor-pointer ${
                      attendance === 'declining'
                        ? 'border-[#8C6D2A] bg-[#5C4566] text-white shadow-md'
                        : 'border-[#E8DCF5] bg-white/60 text-[#5C4566] hover:bg-white'
                    }`}
                  >
                    <span>Unable To Attend</span>
                  </button>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block font-sans text-xs uppercase tracking-[0.2em] text-[#8C6D2A] font-semibold mb-2">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8C6D2A]" />
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. John & Sarah Perera"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-[#B08A3F]/50 bg-white/80 py-3.5 pl-11 pr-4 font-serif text-base text-[#230738] placeholder:text-[#8C6D2A]/50 focus:border-[#521782] focus:bg-white focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Number of Guests */}
              {attendance === 'attending' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label htmlFor="guests" className="block font-sans text-xs uppercase tracking-[0.2em] text-[#8C6D2A] font-semibold mb-2">
                    Number of Guests Attending
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8C6D2A]" />
                    <select
                      id="guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full appearance-none rounded-2xl border border-[#B08A3F]/50 bg-white/80 py-3.5 pl-11 pr-4 font-serif text-base text-[#230738] focus:border-[#521782] focus:bg-white focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests (Family)</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Optional Message */}
              <div>
                <label htmlFor="message" className="block font-sans text-xs uppercase tracking-[0.2em] text-[#8C6D2A] font-semibold mb-2">
                  Prayer or Blessing for the Couple (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 h-4 w-4 text-[#8C6D2A]" />
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Share a warm wish or scripture blessing..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-2xl border border-[#B08A3F]/50 bg-white/80 py-3 pl-11 pr-4 font-serif text-base text-[#230738] placeholder:text-[#8C6D2A]/50 focus:border-[#521782] focus:bg-white focus:outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Action */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || !name.trim()}
                  className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full border border-[#B08A3F] bg-gradient-to-r from-[#230738] via-[#4E144A] to-[#230738] py-4 px-8 font-sans text-xs uppercase tracking-[0.28em] text-[#FAF7F2] font-semibold shadow-lg transition-all duration-300 hover:shadow-xl active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  <Send className="h-4 w-4 text-[#E5C578] transition-transform duration-300 group-hover:translate-x-1" />
                  <span>{isSubmitting ? 'Saving to Guest List...' : 'Confirm & Save RSVP'}</span>
                </button>
              </div>
            </form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
