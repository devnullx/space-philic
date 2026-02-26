import dotenv from 'dotenv';
import connectDB from './config/database.js';
import TeamMember from './models/TeamMember.js';
import Platform from './models/Platform.js';

dotenv.config();

const teamMembers = [
  {
    name: 'Indra Narayan CHAUDHARY',
    role: 'Founder | CEO',
    education: 'B.Tech (Aero. Engg.)',
    experience: 'Experience: 7+ years',
    focusAreas: 'FA: Strategy, IT, Operations, PM',
    linkedinUrl: 'https://www.linkedin.com/in/indra-narayan-chaudhary-893906171/',
    order: 1
  },
  {
    name: 'Devesh SANYAL',
    role: 'COO',
    education: 'MBA-IIT Kanpur, Mechanical Engineer',
    experience: 'Experience: ~ 7 years',
    focusAreas: 'FA: R&D, Space Dynamics Control Law design, Flight controller, Flight Mechanics',
    linkedinUrl: 'https://www.linkedin.com/in/deveshs24/',
    order: 2
  },
  {
    name: 'Corey Glickman',
    role: 'Chief Growth & Innovation Officer',
    education: '30+ Industry experience, Made 5+ startups to full grown business',
    experience: 'Experience: ~ 4 years',
    focusAreas: 'FA: Strategy, Operations',
    linkedinUrl: 'https://www.linkedin.com/in/corey-glickman/',
    order: 3
  },
  {
    name: 'Kamalpreet Singh',
    role: 'Mission Design Engineer',
    education: 'MS (Space & Astronautical Engg), Sapienza Università di Roma, Italy',
    experience: 'Experience: ~ 5 years',
    focusAreas: 'FA: R&D, Propulsion, Mission Planning',
    linkedinUrl: 'https://www.linkedin.com/in/kamalpreet-singh-23531b106/',
    order: 4
  },
  {
    name: 'Abhishek TIWARI',
    role: 'Mentor',
    education: 'IIT-Kanpur',
    experience: 'Experience: ~ 7 years',
    focusAreas: 'FA: R&D, Design',
    linkedinUrl: 'https://www.linkedin.com/in/tabhishek02/',
    order: 5
  },
  {
    name: 'Dr. Salahudden',
    role: 'Financial Advisor',
    education: '20+ years in Strategy, Business Process Restructuring, Enterprise Risk Management, Customer Experience',
    experience: '15+ years with 9 years of Merchant Banking, Investment Banking, Transaction Advisory, Financial Valuations and Business Development',
    order: 6
  },
  {
    name: 'Mr Maneesh Srivastava',
    role: 'Co-Founder',
    education: 'AlphaValue Consulting',
    focusAreas: 'FA: R&D, Design',
    linkedinUrl: 'https://www.linkedin.com/in/maneeshsrivastav/',
    order: 7
  },
  {
    name: 'Nikhil Kumar',
    role: 'R&D Engineer',
    experience: 'Experience: ~ 5 years',
    focusAreas: 'FA: R&D, Propulsion, Mission Planning',
    order: 8
  },
  {
    name: 'RUPAK',
    role: 'Inventor',
    education: 'Monolithic Non-Dynamic Cryogenic Pump for Rocket Application',
    experience: 'Experience: ~3 years',
    order: 9
  }
];

const platforms = [
  {
    number: 1,
    category: 'COMMERCIAL',
    title: 'Fully-Integrated Payload Platform',
    description: 'The upper stage is designed to carry and deploy satellites with a maximum payload mass of 250 kg, providing a reliable platform for placing small and micro-spacecraft into their designated orbits. It supports standard deployment interfaces and ensures precise injection accuracy for commercial, scientific, and institutional missions.'
  },
  {
    number: 2,
    category: 'LABORATORY',
    title: 'Long Endurance Platform',
    description: 'Provides a dedicated platform for carrying multiple independent experimental payloads into low Earth orbit, enabling controlled environmental exposure, in-situ measurement, and continuous real-time data acquisition. The system supports scientific research, material testing, biological studies, and technology validation under true orbital conditions.'
  },
  {
    number: 3,
    category: 'DEFENCE',
    title: 'Rapid-Response Payload Platform',
    description: 'Provides an independent rapid-response launch service capable of deploying defence payloads within a 24-hour window. The Rupak ensures priority readiness, minimal turnaround time, and assured access to orbit for critical national-security missions, enabling real-time tactical support, rapid replenishment, and immediate space-based capability restoration.'
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await TeamMember.deleteMany();
    await Platform.deleteMany();

    // Insert seed data
    await TeamMember.insertMany(teamMembers);
    await Platform.insertMany(platforms);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
