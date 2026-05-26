import { Trainer, Plan, Review, Service } from './types';

// Let's import our custom-generated images for absolute authenticity and perfect visuals!
export const HERO_IMAGE = '/src/assets/images/hero_gym_red_black_1779807988535.png';
export const TRAINER_IMAGE = '/src/assets/images/trainer_showcase_1779808020180.png';

export const GYM_CONTACT = {
  phone: '8124254419',
  whatsappUrl: (message: string) => `https://wa.me/918124254419?text=${encodeURIComponent(message)}`,
  address: 'Pattabiram, Chennai, Tamil Nadu - 600072 (Near Railway Station, Elite Strength Hub)',
  rating: 4.9,
  reviewsCount: 384,
};

export const SERVICES: Service[] = [
  {
    id: 'strength',
    title: 'Elite Strength & Muscle',
    description: 'Heavy duty platforms, premium dumbbells up to 60kg, and professional hammer-strength lines.',
    longDescription: 'Our iron zone features Olympic weightlifting platforms, multiple squat racks, specialized bars, and customized isolation machinery designed to pack on raw power and lean muscle mass under scientific metrics.',
    iconName: 'Dumbbell',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'hiit-cardio',
    title: 'High-Octane Cardio & HIIT',
    description: 'Slam battles, assault bikes, curved motorless treadmills, and dynamic rowing circuits.',
    longDescription: 'Ditch the boring treadmill reviews. Melt fat and skyrocket cardiovascular capacity with our structured HIIT training systems utilizing professional sled tracks, climbing ropes, and commercial air-bikes.',
    iconName: 'Zap',
    imageUrl: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'crossfit',
    title: 'CrossFit & Tactical Athletics',
    description: 'Calisthenics rigs, kettlebell suites, plyometric steps, and functional movement arrays.',
    longDescription: 'Build real-world athletic output. Our open functional playground trains agility, core stability, and rotational threshold so your body performs exactly like the high-powered machine it looks like.',
    iconName: 'Flame',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'recovery',
    title: 'Steam Therapy & Recovery Room',
    description: 'Deep tissue recovery, professional dry sauna, steam chambers, and ice hydrotherapy.',
    longDescription: 'The workout doesn’t end at the last rep. Activate optimal vascular circulation and wash away lactic build-up with our certified state-of-the-art steam installations and cryo-inspired cold baths.',
    iconName: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop',
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'rocky',
    name: 'Vikram "Rocky" Prasanna',
    role: 'Head of Strength & Condition',
    bio: 'Former State Powerlifting champion with over 12+ years of transformational expertise. Specializes in building raw strength with absolute biomechanical precision.',
    image: TRAINER_IMAGE, // Our epic, cinematic red-neon trainer image!
    specialties: ['Powerlifting', 'Hypertrophy Programming', 'Olympic Lifting', 'Body Recomposition'],
    certifications: ['ISSA Master Certified Trainer', 'CSCS Strength Specialist', 'Kettlebell Master Level II'],
    quote: 'Excuses don\'t build iron shoulders. You show up, you execute, or you stay the same.',
  },
  {
    id: 'sarah',
    name: 'Sarah Jennifer',
    role: 'Lead HIIT & Functional Coach',
    bio: 'National track athlete specialized in aerobic optimization. Sarah leverages heart-rate-guided intervals to push cardiovascular capacity past standard limits.',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop',
    specialties: ['High-Intensity Interval Training', 'Athletic Agility', 'Mobility & Joint Rehab'],
    certifications: ['NASM Corrective Exercise Specialist (CES)', 'ACE Certified Advanced Athletics'],
    quote: 'Your limits are just physical warnings that your mind has already accepted.',
  },
  {
    id: 'kabir',
    name: 'Kabir Dev',
    role: 'Elite Transformation Specialist',
    bio: 'Master of contest prep and custom macronutrient restructuring. Kabir has audited and led over 500+ dramatic jawline-and-muscle body transformations in South India.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    specialties: ['Contest Prep / Bodybuilding', 'Macro & Micro Nutrition', 'Lifestyle Restructuring'],
    certifications: ['Precision Nutrition Level 2 Coach', 'IFBB Pro Trainer Certification'],
    quote: 'Dieting isn\'t starvation; it is the strategic fuel that chisels your hard work into stone.',
  }
];

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Rookie Power',
    basePrice: 1500,
    period: 'month',
    description: 'Perfect for beginners looking to establish consistent iron habits in their local region.',
    features: [
      'Access to full Strength & Conditioning Zone',
      'Daily steam room & locker credentials',
      'Standard orientation workout plan',
      'Free high-speed wi-fi and hydro station access',
      'Available shift: Morning (5AM - 11AM) or Evening (4PM - 10PM)'
    ],
    popular: false,
  },
  {
    id: 'black-card',
    name: 'Site Cart Signature Black Card',
    basePrice: 3200,
    period: 'quarter',
    description: 'Our most sought-after signature workout pass. Full unrestricted elite training tier.',
    features: [
      '24/7 VIP Gym Access to all sections',
      '2 Dedicated Personal Assessment sessions with Coach Rocky',
      'Unrestricted steam bath & recovery room booking',
      'Customized diet blueprint and monthly micro-audit',
      'Bring a guest for free (2 visits per month)',
      '15% off Site Cart supplementary items'
    ],
    popular: true,
  },
  {
    id: 'annual-alpha',
    name: 'Annual Alpha Shield',
    basePrice: 9999,
    period: 'year',
    description: 'The ultimate fitness pledge. Chisel a whole year of premium performance with maximum cost-efficiency.',
    features: [
      'Complete 1-year unrestricted membership (Best value rate)',
      'Free customized training kit (Shaker, gym bag, lifting straps)',
      'Unlimited personal trainer checkpoint consultations',
      'Priority booking on all premium steam bath chambers',
      'Full nutrition counseling updates every quarter',
      'Official Site Cart Hall of Flame ranking board access'
    ],
    popular: false,
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Karthik Raja',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    comment: 'Absolutely hands down the best gym facility in the Pattabiram area. The red and black aesthetic is incredibly motivating. Coach Vikram Rocky took time to guide my barbell posture, and the equipment is top tier!',
    date: '3 weeks ago',
    planJoined: 'Signature Black Card'
  },
  {
    id: 'rev-2',
    author: 'Deepika S.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    comment: 'The 50% discount for students is a lifesaver! I showed my collegiate ID card and logged into the monthly program instantly. Plus, the steam room recovery after final exams is incredible.',
    date: '1 month ago',
    planJoined: 'Rookie Power [Student Discount]'
  },
  {
    id: 'rev-3',
    author: 'Mohammed Irshad',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    comment: 'Site Cart Gym has insane equipment variety. Squat racks are always clean, and the dumbbell rack goes all the way up to heavy weights. Customer coordination via WhatsApp is super fast!',
    date: '2 months ago',
    planJoined: 'Annual Alpha Shield'
  },
  {
    id: 'rev-4',
    author: 'Ravi Teja',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop',
    rating: 4.8,
    comment: 'Spacious floor, energetic music, and awesome dynamic lighting. The trainers are friendly and actually push you to do your personal records. Best decision of the year!',
    date: '2 weeks ago',
    planJoined: 'Signature Black Card'
  }
];
