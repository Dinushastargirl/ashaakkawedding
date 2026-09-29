import { getAssetUrl } from '../utils/assetHelper';

export interface WeddingEvent {
  title: string;
  subtitle: string;
  time: string;
  description: string;
  venuePlaceholder: string;
  mapUrl?: string;
  mapQuery?: string;
  iconName: 'church' | 'champagne' | 'rings' | 'music';
}

export interface WeddingConfig {
  couple: {
    groom: string;
    bride: string;
    initials: string;
    groomFull: string;
    brideFull: string;
    subheading: string;
    tagline: string;
  };
  date: {
    displayDate: string;
    shortDate: string;
    dayOfWeek: string;
    month: string;
    day: number;
    year: number;
    isoDateTime: string;
  };
  videos: {
    landscape: string; // 1920x1080 for Laptops & Tablets
    portrait: string;  // 1080x1920 for Phones
  };
  scripture: {
    verse: string;
    citation: string;
  };
  loveStory: {
    heading: string;
    quote: string;
    subtext: string;
  };
  events: {
    ceremony: WeddingEvent;
    reception: WeddingEvent;
  };
  timeline: Array<{
    time: string;
    title: string;
    description: string;
  }>;
  photos: {
    coupleHero: string;
    coupleEditorial: string;
    flowers: string;
    rings: string;
    chapel: string;
  };
  gallery: Array<{
    id: number;
    url: string;
    fallbackUrl?: string;
    title: string;
    subtitle: string;
    caption: string;
    aspect?: 'tall' | 'wide' | 'square';
  }>;
  contact: {
    rsvpNotice: string;
    supportNote: string;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: "Joshua",
    bride: "Asha",
    initials: "J & A",
    groomFull: "Joshua",
    brideFull: "Asha",
    subheading: "Christian Holy Matrimony & Reception",
    tagline: "Together with their families, joyfully invite you to celebrate their holy matrimony under God.",
  },
  date: {
    displayDate: "Saturday, 17th October 2026",
    shortDate: "17th October 2026",
    dayOfWeek: "Saturday",
    month: "October",
    day: 17,
    year: 2026,
    isoDateTime: "2026-10-17T17:30:00+05:30",
  },
  videos: {
    landscape: getAssetUrl("inside/inside_horizontal.mp4"), // Faststart 1280x720 24fps
    portrait: getAssetUrl("inside/inside_vertical.mp4"),    // Faststart 720x1280 mobile
  },
  scripture: {
    verse: "“This is the season Jacob takes root and Israel blossoms and fills all the world with fruit.”",
    citation: "Isaiah 27:6",
  },
  loveStory: {
    heading: "Two Lives • One Promise • One God",
    quote: "“Two hearts, two journeys, and one beautiful promise before God.”",
    subtext: "A sacred union forged in faith, blessed by family, and bounded by eternal love.",
  },
  events: {
    ceremony: {
      title: "Christian Wedding Service",
      subtitle: "Holy Matrimony in the presence of God & Loved Ones",
      time: "5:30 PM",
      description: "Join us as we exchange sacred vows and receive God's blessings.",
      venuePlaceholder: "The Farm Retreat Resorts",
      mapUrl: "https://maps.app.goo.gl/2WUq6FvyibMaTf8t5?g_st=iw",
      iconName: "church",
    },
    reception: {
      title: "Dinner & Reception",
      subtitle: "Dinner, Fellowship & Celebration",
      time: "7:30 PM",
      description: "An evening of fellowship, joy, toasts, and a grand feast with family and friends.",
      venuePlaceholder: "The Farm Retreat Resorts",
      mapUrl: "https://maps.app.goo.gl/2WUq6FvyibMaTf8t5?g_st=iw",
      iconName: "champagne",
    },
  },
  timeline: [
    {
      time: "5:30 PM",
      title: "Christian Wedding Service",
      description: "Processional, Scripture reading, exchange of sacred vows & rings.",
    },
    {
      time: "7:30 PM",
      title: "Dinner & Reception",
      description: "Celebration, fellowship, toasts, and an exquisite dinner banquet.",
    },
  ],
  photos: {
    coupleHero: getAssetUrl("photos/0U5A5059.webp"),
    coupleEditorial: getAssetUrl("photos/0U5A4855.webp"),
    flowers: getAssetUrl("flowers.webp"),
    rings: getAssetUrl("rings.webp"),
    chapel: getAssetUrl("ceremony_chapel.webp"),
  },
  gallery: [
    {
      id: 1,
      url: getAssetUrl("photos/0U5A4855.webp"),
      fallbackUrl: getAssetUrl("photos/0U5A4855.jpg"),
      title: "A Sacred Covenant",
      subtitle: "A Sacred Covenant",
      caption: "Two hearts bound by God's eternal love and grace.",
      aspect: "wide"
    },
    {
      id: 2,
      url: getAssetUrl("photos/0U5A5059.webp"),
      fallbackUrl: getAssetUrl("photos/0U5A5059.jpg"),
      title: "Steps into Forever",
      subtitle: "Steps into Forever",
      caption: "Under the shelter of the Almighty, walking side by side.",
      aspect: "wide"
    },
    {
      id: 3,
      url: getAssetUrl("photos/0U5A5096.webp"),
      fallbackUrl: getAssetUrl("photos/0U5A5096.jpg"),
      title: "Standing in Faith",
      subtitle: "Standing in Faith",
      caption: "United in purpose, faith, and unconditional devotion.",
      aspect: "tall"
    },
    {
      id: 4,
      url: getAssetUrl("photos/0U5A5193.webp"),
      fallbackUrl: getAssetUrl("photos/0U5A5193.jpg"),
      title: "Pure Happiness",
      subtitle: "Pure Happiness",
      caption: "Blessed with laughter, peace, and eternal joy.",
      aspect: "tall"
    },
    {
      id: 5,
      url: getAssetUrl("photos/0U5A5286.webp"),
      fallbackUrl: getAssetUrl("photos/0U5A5286.jpg"),
      title: "Walking in Light",
      subtitle: "Walking in Light",
      caption: "Together in Christ's love, yesterday, today, and forever.",
      aspect: "wide"
    }
  ],
  contact: {
    rsvpNotice: "Kindly respond at your earliest convenience so we may reserve your seat.",
    supportNote: "For questions or updates, please reach out directly to the couple.",
  },
};
