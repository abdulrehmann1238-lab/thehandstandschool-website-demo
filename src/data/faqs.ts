export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'how-it-works',
    question: 'How does personalized coaching work?',
    answer:
      'Once enrolled, you complete our comprehensive Student Intake Form. Your assigned lead coach assesses your mobility, strength, and current hold via video, then delivers your custom weekly training program inside the platform. Each week, you submit training clips and receive detailed voiceover video feedback pinpointing your exact corrections.',
  },
  {
    id: 'beginner-qualification',
    question: 'Do I need to already hold a handstand to start?',
    answer:
      'No. Many of our students begin with zero seconds of freestanding balance or even a fear of kicking up. Our foundational programming begins at the wall, strengthening wrist tolerance, scapular elevation, and core compression before progressing to freestanding balance.',
  },
  {
    id: 'feedback-frequency',
    question: 'How often will I receive feedback?',
    answer:
      'You receive thorough weekly video analysis from your designated coach. In addition, 3-month and 6-month students have monthly 1:1 live strategy calls and direct coach communication for questions between workouts.',
  },
  {
    id: 'changing-goals',
    question: 'Can I change my training goals as I progress?',
    answer:
      'Absolutely. As you master the basic freestanding line, your programming naturally shifts toward your next milestones—such as straddle press handstands, hollowback shape changes, Mexican handstands, or one-arm progressions.',
  },
  {
    id: 'ths-difference',
    question: 'How is THS different from generic templates and Instagram drills?',
    answer:
      'Generic plans give everyone the same 10 exercises regardless of individual wrist anatomy or shoulder mobility. At THS, your program is written specifically for your body. Furthermore, every coach reviews their student roster with the founder leadership team (Andrew, Dr. Robert, and Kyle), giving you the collective brain trust of 3 master coaches.',
  },
  {
    id: 'kajabi-student-portal',
    question: 'How do I access my coaching portal?',
    answer:
      'All video libraries, personalized workout assignments, and community boards are securely accessed through our custom Kajabi member portal. You can log in from any web browser or mobile app with seamless 24/7 access.',
  },
];

