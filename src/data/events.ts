export interface THSEvent {
  id: string;
  slug: string;
  title: string;
  city: string;
  stateCountry: string;
  dates: string;
  monthYear: string;
  dateBadge: string;
  type: 'SEMINAR' | 'RETREAT' | 'WORKSHOP';
  status: string;
  isEarlyOpen: boolean;
  venue: string;
  description: string;
  image: string;
  price?: string;
  spotsTotal?: number;
  spotsLeft?: number;
  schedule?: { time: string; title: string; detail: string }[];
}

export const EVENTS: THSEvent[] = [
  {
    id: 'dc-2026',
    slug: 'washington-dc',
    title: 'Washington, D.C. Handstand Seminar',
    city: 'Washington, D.C.',
    stateCountry: 'USA',
    dates: 'December 11–12, 2026',
    monthYear: 'DECEMBER 2026',
    dateBadge: 'DEC 11–12',
    type: 'SEMINAR',
    status: 'EARLY REGISTRATION OPEN',
    isEarlyOpen: true,
    venue: 'Physicality Studio',
    description: 'Two days of hands-on handstand training with the THS founders: alignment, drills and live corrections for every level.',
    image: '/images/event_washington_dc.png',
    price: '$495 Early Bird / $595 Standard',
    spotsTotal: 20,
    spotsLeft: 6,
    schedule: [
      {
        time: 'Day 1 — 09:30 AM – 12:30 PM',
        title: 'Wrist Biomechanics, Scapular Elevation & The Stack',
        detail: 'Anatomy of the handstand platform, joint preparation, wall alignment drills, and finding your effortless vertical line.',
      },
      {
        time: 'Day 1 — 02:00 PM – 05:00 PM',
        title: 'Kick-Up Consistency, Balance Reflexes & Bail Mechanics',
        detail: 'Overcoming fear of falling, active finger pressure cues, bail mechanics, and progressive entry strategies.',
      },
      {
        time: 'Day 2 — 09:30 AM – 12:30 PM',
        title: 'Shape Changes, Straddle, Tuck & Press Mechanics',
        detail: 'Compression work, posterior pelvic tilt transitions, straddle and tuck shapes, and eccentric press drills.',
      },
      {
        time: 'Day 2 — 02:00 PM – 04:30 PM',
        title: 'Live Spotting Lab, Programming Workshop & Q&A',
        detail: 'Hands-on partner spotting practice, individualized weekly programming frameworks, and open Q&A with all 3 founders.',
      },
    ],
  },
  {
    id: 'la-2027',
    slug: 'los-angeles',
    title: 'Los Angeles Handstand Intensive',
    city: 'Los Angeles, California',
    stateCountry: 'USA',
    dates: 'June 4–6, 2027',
    monthYear: 'JUNE 2027',
    dateBadge: 'JUN 4–6',
    type: 'SEMINAR',
    status: 'COMING SOON',
    isEarlyOpen: false,
    venue: 'Primal Moves Studio',
    description: 'Three days of structured handstand education in LA, from first kick-ups to refining a free standing hold.',
    image: '/images/event_los_angeles.png',
    price: 'Pricing TBA',
    spotsTotal: 24,
    spotsLeft: 24,
  },
  {
    id: 'tulum-2027',
    slug: 'tulum',
    title: 'Tulum Handstand Immersion Retreat',
    city: 'Tulum, Mexico',
    stateCountry: 'Mexico',
    dates: 'September 13–17, 2027',
    monthYear: 'SEPTEMBER 2027',
    dateBadge: 'SEP 13–17',
    type: 'RETREAT',
    status: 'COMING SOON',
    isEarlyOpen: false,
    venue: 'Tulum Cenote Wellness Sanctuary',
    description: 'Train, rest and recover by the Caribbean. A five-day handstand retreat with daily sessions and time to explore.',
    image: '/images/event_tulum_mexico.png',
    price: 'Pricing TBA',
    spotsTotal: 18,
    spotsLeft: 18,
  },
];

