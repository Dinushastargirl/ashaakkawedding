export interface WeddingEvent {
  title: string;
  subtitle: string;
  time: string;
  description: string;
  venuePlaceholder: string;
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
    landscape: "/video_landscape.mp4", // 1920x1080 for Laptop and Tablets
    portrait: "/video_portrait.mp4",   // 1080x1920 for Phones
  },
  scripture: {
    verse: "“What therefore God has joined together, let not man separate.”",
    citation: "Matthew 19:6",
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
      venuePlaceholder: "Venue details coming soon",
      iconName: "church",
    },
    reception: {
      title: "Dinner & Reception",
      subtitle: "Dinner, Fellowship & Celebration",
      time: "7:30 PM",
      description: "An evening of fellowship, joy, toasts, and a grand feast with family and friends.",
      venuePlaceholder: "Venue details coming soon",
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
    coupleHero: "/couple.jpg",
    coupleEditorial: "/couple.jpg",
    flowers: "/flowers.jpg",
    rings: "/rings.jpg",
    chapel: "/ceremony_chapel.jpg",
  },
  contact: {
    rsvpNotice: "Kindly respond at your earliest convenience so we may reserve your seat.",
    supportNote: "For questions or updates, please reach out directly to the couple.",
  },
};
