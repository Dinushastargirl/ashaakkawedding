// Beautiful Romantic Wedding Song Engine
// Plays a warm, emotional acoustic piano & strings arrangement
// Timeless Wedding Chord Progression in D Major (D - A - Bm - F#m - G - D - G - A)

class WeddingSongEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private timerId: number | null = null;
  private masterGain: GainNode | null = null;
  private listeners: Array<(playing: boolean) => void> = [];

  // Frequencies for Canon in D chord harmonies
  // D major chord tones:
  // Chord 1 (D): D3, F#3, A3, D4, F#4, A4
  // Chord 2 (A): A2, E3, A3, C#4, E4, A4
  // Chord 3 (Bm): B2, F#3, B3, D4, F#4, B4
  // Chord 4 (F#m): F#2, C#3, F#3, A3, C#4, F#4
  // Chord 5 (G): G2, D3, G3, B3, D4, G4
  // Chord 6 (D/F#): F#2, D3, A3, D4, F#4, A4
  // Chord 7 (G): G2, D3, G3, B3, D4, G4
  // Chord 8 (A): A2, E3, A3, C#4, E4, A4

  private chordProgressions = [
    { bass: 146.83, notes: [220.00, 293.66, 369.99, 440.00, 587.33] }, // D
    { bass: 110.00, notes: [164.81, 220.00, 277.18, 329.63, 440.00] }, // A
    { bass: 123.47, notes: [185.00, 246.94, 293.66, 369.99, 493.88] }, // Bm
    { bass: 92.50,  notes: [138.59, 185.00, 220.00, 277.18, 369.99] }, // F#m
    { bass: 98.00,  notes: [146.83, 196.00, 246.94, 293.66, 392.00] }, // G
    { bass: 146.83, notes: [185.00, 220.00, 293.66, 369.99, 440.00] }, // D
    { bass: 98.00,  notes: [146.83, 196.00, 246.94, 293.66, 392.00] }, // G
    { bass: 110.00, notes: [164.81, 220.00, 277.18, 329.63, 440.00] }, // A
  ];

  private currentChordIndex = 0;
  private arpeggioStep = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.14, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Plays a warm acoustic note with soft hammer attack and gentle resonance
  private playPianoNote(freq: number, duration: number = 3.0, volume: number = 0.15) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Triangle wave creates warm acoustic piano/harp resonance
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      // Soft gentle attack
      gain.gain.linearRampToValueAtTime(volume, now + 0.04);
      // Natural exponential acoustic decay
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    } catch {
      // ignore
    }
  }

  // Warm string/cello bass swell
  private playWarmBass(freq: number, duration: number = 3.6) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.22, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    } catch {
      // ignore
    }
  }

  public start() {
    if (this.isPlaying) return;
    this.initContext();
    this.isPlaying = true;
    this.notify();

    this.timerId = window.setInterval(() => {
      if (!this.isPlaying || this.isMuted) return;

      const chord = this.chordProgressions[this.currentChordIndex];
      
      // Play deep warm bass note at the beginning of each chord (every 4 steps)
      if (this.arpeggioStep === 0) {
        this.playWarmBass(chord.bass, 3.8);
      }

      // Play flowing arpeggio melody note
      const noteFreq = chord.notes[this.arpeggioStep % chord.notes.length];
      this.playPianoNote(noteFreq, 2.5, 0.16);

      // Add gentle octave sparkle on alternate steps
      if (this.arpeggioStep === 2) {
        const sparkle = chord.notes[chord.notes.length - 1] * 1.5;
        this.playPianoNote(sparkle, 2.0, 0.08);
      }

      this.arpeggioStep++;
      if (this.arpeggioStep >= 4) {
        this.arpeggioStep = 0;
        this.currentChordIndex = (this.currentChordIndex + 1) % this.chordProgressions.length;
      }
    }, 460);
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.notify();
  }

  public toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public subscribe(listener: (playing: boolean) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(l => l(this.isPlaying));
  }
}

export const audioManager = new WeddingSongEngine();
