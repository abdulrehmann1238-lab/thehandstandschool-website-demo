export interface PricingPlan {
  id: string;
  name: string;
  durationMonths: number;
  priceTotal: number;
  pricePerMonth: number;
  description: string;
  subtext?: string;
  savings?: string;
  badge?: string;
  ctaText: string;
  kajabiOfferId: string;
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1-month',
    name: '1 MONTH',
    durationMonths: 1,
    priceTotal: 500,
    pricePerMonth: 500,
    description: 'One month of personalized programming and coaching to help you build a strong foundation.',
    subtext: 'No long-term commitment. Take us for a test drive.',
    ctaText: 'GET 1 MONTH',
    kajabiOfferId: 'kajabi-ths-1mo-500',
    features: [
      'Personalized custom weekly training plan',
      'Weekly video review & technical feedback',
      'Direct messaging with your designated coach',
      'Wrist resilience & mobility routine',
      'Full access to THS movement library',
    ],
  },
  {
    id: '3-months',
    name: '3 MONTHS',
    durationMonths: 3,
    priceTotal: 1200,
    pricePerMonth: 400,
    description: 'Three months of personalized programming and coaching built around your goals.',
    savings: 'Save $300 compared to the 1-month rate.',
    ctaText: 'GET 3 MONTHS',
    kajabiOfferId: 'kajabi-ths-3mo-1200',
    features: [
      'Everything in 1 Month plan',
      'Monthly 1:1 live strategy call',
      'Progressive phase transitions (foundation to line)',
      'Shape changes & press handstand progressions',
      'Coach leadership team program review',
      'Priority video turnaround within 48 hours',
    ],
  },
  {
    id: '6-months',
    name: '6 MONTHS',
    durationMonths: 6,
    priceTotal: 2100,
    pricePerMonth: 350,
    description: 'Give yourself more time to build, progress, refine and work toward bigger handstand goals.',
    savings: 'Save $900 compared to the 1-month rate.',
    badge: 'BEST VALUE',
    ctaText: 'GET 6 MONTHS',
    kajabiOfferId: 'kajabi-ths-6mo-2100',
    features: [
      'Everything in 3 Month plan',
      'Bi-weekly live video check-ins',
      'Advanced shape & one-arm handstand track',
      'Comprehensive biomechanics review with Dr. Robert Adams',
      'Direct WhatsApp accountability access',
      'Complimentary admission to any 1 THS live seminar',
    ],
  },
];

