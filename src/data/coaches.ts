export interface Coach {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
}

export const COACHES: Coach[] = [
  {
    id: 'andrew-moraru',
    name: 'Andrew Moraru',
    role: 'Lead Coach & Co-Founder',
    credentials: 'Biomechanics & Movement Specialist',
    bio: 'Andrew specializes in body alignment, shoulder mobility, and building rock-solid handstand foundations. Over 15 years coaching gymnasts, yogis, and adult acrobats.',
    image: '/images/coach_andrew_moraru.png',
  },
  {
    id: 'robert-adams',
    name: 'Dr. Robert Adams',
    role: 'Lead Coach & Co-Founder',
    credentials: 'Physical Therapist & Handstand Educator',
    bio: 'Doctor of Physical Therapy and master handstand instructor. Robert bridges athletic performance with injury prevention, wrist health, and motor learning principles.',
    image: '/images/coach_robert_adams.png',
  },
  {
    id: 'kyle-weiger',
    name: 'Kyle Weiger',
    role: 'Lead Coach & Co-Founder',
    credentials: 'World-Renowned Inversion Coach',
    bio: 'Kyle has coached thousands of adult learners worldwide to achieve their first freestanding hold, press handstands, and shape transitions through clear, progressive cues.',
    image: '/images/coach_kyle_weiger.png',
  },
];

