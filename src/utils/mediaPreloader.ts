/**
 * Media Preloader Service
 * Silently pre-buffers and caches upcoming videos, audio, and WebP photos
 * so transitions feel like one continuous cinematic film with 0ms latency.
 */

import { getAssetUrl } from './assetHelper';

class MediaPreloader {
  private preloadedImages = new Set<string>();
  private preloadedVideos = new Set<string>();
  private scene2VideoReady = false;
  private scene2ReadyListeners: Array<() => void> = [];

  /**
   * Preload an image URL into browser memory and GPU decode cache
   */
  public preloadImage(url: string): Promise<void> {
    if (!url || this.preloadedImages.has(url)) return Promise.resolve();

    return new Promise((resolve) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        this.preloadedImages.add(url);
        resolve();
      };
      img.onerror = () => {
        // Resolve anyway to avoid blocking execution
        resolve();
      };
      img.src = url;
    });
  }

  /**
   * Silently pre-buffer a video in the background without auto-playing it
   */
  public preloadVideo(url: string): void {
    if (!url || this.preloadedVideos.has(url) || typeof document === 'undefined') return;

    this.preloadedVideos.add(url);
    const video = document.createElement('video');
    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;
    video.src = url;
    video.load();
  }

  /**
   * Mark Scene 2 background video as ready/buffered
   */
  public markScene2VideoReady(): void {
    this.scene2VideoReady = true;
    this.scene2ReadyListeners.forEach((cb) => cb());
    this.scene2ReadyListeners = [];
  }

  public isScene2Ready(): boolean {
    return this.scene2VideoReady;
  }

  /**
   * Wait until Scene 2 video has buffered enough data, or timeout gracefully
   */
  public waitForScene2Ready(maxWaitMs = 1200): Promise<void> {
    if (this.scene2VideoReady) return Promise.resolve();

    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        resolve(); // Timeout fallback so user experience is never stuck
      }, maxWaitMs);

      this.scene2ReadyListeners.push(() => {
        clearTimeout(timer);
        resolve();
      });
    });
  }

  /**
   * Preload Scene 2 assets while Scene 1 is actively playing
   */
  public prepareScene2(isMobile: boolean): void {
    // 1. Preload posters for Scene 2
    const insidePoster = isMobile
      ? getAssetUrl('inside/inside_vertical_poster.webp')
      : getAssetUrl('inside/inside_horizontal_poster.webp');
    this.preloadImage(insidePoster);

    // 2. Preload butterflies (canonical high-quality WebP & GIF versions)
    const butterflies = ['b1.webp', 'b3.webp', 'b4.gif', 'b6.webp'];
    butterflies.forEach((b) => this.preloadImage(getAssetUrl(`butterfly/${b}`)));
  }

  /**
   * Preload Scene 3 (Photos, Events, Ceremony) as soon as Scene 2 begins
   */
  public prepareScene3(): void {
    // Use requestIdleCallback or setTimeout so preloading doesn't contend with Scene 2 entrance animation
    const run = () => {
      const photos = [
        getAssetUrl('photos/0U5A4855.webp'),
        getAssetUrl('photos/0U5A5059.webp'),
        getAssetUrl('photos/0U5A5096.webp'),
        getAssetUrl('photos/0U5A5193.webp'),
        getAssetUrl('photos/0U5A5286.webp'),
        getAssetUrl('ceremony_chapel.webp'),
        getAssetUrl('flowers.webp'),
        getAssetUrl('rings.webp'),
        getAssetUrl('couple.webp'),
      ];

      photos.forEach((src) => this.preloadImage(src));
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      (window as unknown as { requestIdleCallback: (fn: () => void) => void }).requestIdleCallback(run);
    } else {
      setTimeout(run, 350);
    }
  }
}

export const mediaPreloader = new MediaPreloader();
