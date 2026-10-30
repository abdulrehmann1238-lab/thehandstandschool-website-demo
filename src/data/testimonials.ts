export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  highlight?: string;
  source: 'Online Coaching' | 'Teacher Training' | 'Seminar';
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'erin-phillips',
    name: 'Erin Phillips',
    role: 'Certified Coach Graduate',
    quote:
      'The structure created plenty of space for us to be heard, ask questions and connect with our small group, which made the experience feel both personal and empowering. I feel like I\'ve been truly set up for success to start teaching group classes, workshops, or even 1-on-1 sessions.',
    avatar: '/images/avatar_erin_phillips.png',
    highlight: 'set up for success to start teaching group classes',
    source: 'Teacher Training',
  },
  {
    id: 'marcus-t',
    name: 'Marcus Thorne',
    role: 'Online Coaching Student (10 Months)',
    quote:
      'Before THS, I was throwing myself at the wall for two years hoping something would stick. Within 8 weeks of personalized programming, I unlocked my first 30-second consistent freestanding hold with complete breath control.',
    avatar: '/images/avatar_erin_phillips.png',
    highlight: 'unlocked my first 30-second consistent hold',
    source: 'Online Coaching',
  },
  {
    id: 'sarah-l',
    name: 'Sarah Lin',
    role: 'Yoga Instructor & Handstand Practitioner',
    quote:
      'The weekly video feedback is what makes this program worth 10x the investment. My coach spotted a micro-adjustment in my wrist elevation that eliminated my nagging wrist pain and stacked my shoulders effortlessly.',
    avatar: '/images/avatar_erin_phillips.png',
    highlight: 'weekly video feedback is what makes this program worth 10x',
    source: 'Online Coaching',
  },
  {
    id: 'david-k',
    name: 'David Keller',
    role: 'Movement Coach & Gym Owner',
    quote:
      'Having three elite coaches review your programming behind the scenes gives you absolute confidence that every set and rep you do has a clear purpose. The progress is measurable and real.',
    avatar: '/images/avatar_erin_phillips.png',
    highlight: 'absolute confidence that every set and rep has a clear purpose',
    source: 'Online Coaching',
  },
];

