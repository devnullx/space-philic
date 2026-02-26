-- Create Team Members Table
CREATE TABLE IF NOT EXISTS team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  education TEXT,
  experience VARCHAR(255),
  focus_areas TEXT,
  linkedin_url VARCHAR(500),
  photo_url VARCHAR(500),
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create Platforms Table
CREATE TABLE IF NOT EXISTS platforms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  number INTEGER UNIQUE NOT NULL,
  category VARCHAR(50) NOT NULL CHECK (category IN ('COMMERCIAL', 'LABORATORY', 'DEFENCE')),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Insert Team Members
INSERT INTO team_members (name, role, education, experience, focus_areas, linkedin_url, order_index) VALUES
('Indra Narayan CHAUDHARY', 'Founder | CEO', 'B.Tech (Aero. Engg.)', 'Experience: 7+ years', 'FA: Strategy, IT, Operations, PM', 'https://www.linkedin.com/in/indra-narayan-chaudhary-893906171/', 1),
('Devesh SANYAL', 'COO', 'MBA-IIT Kanpur, Mechanical Engineer', 'Experience: ~ 7 years', 'FA: R&D, Space Dynamics Control Law design, Flight controller, Flight Mechanics', 'https://www.linkedin.com/in/deveshs24/', 2),
('Corey Glickman', 'Chief Growth & Innovation Officer', '30+ Industry experience, Made 5+ startups to full grown business', 'Experience: ~ 4 years', 'FA: Strategy, Operations', 'https://www.linkedin.com/in/corey-glickman/', 3),
('Kamalpreet Singh', 'Mission Design Engineer', 'MS (Space & Astronautical Engg), Sapienza Università di Roma, Italy', 'Experience: ~ 5 years', 'FA: R&D, Propulsion, Mission Planning', 'https://www.linkedin.com/in/kamalpreet-singh-23531b106/', 4),
('Abhishek TIWARI', 'Mentor', 'IIT-Kanpur', 'Experience: ~ 7 years', 'FA: R&D, Design', 'https://www.linkedin.com/in/tabhishek02/', 5),
('Dr. Salahudden', 'Financial Advisor', '20+ years in Strategy, Business Process Restructuring, Enterprise Risk Management, Customer Experience', '15+ years with 9 years of Merchant Banking, Investment Banking, Transaction Advisory, Financial Valuations and Business Development', NULL, NULL, 6),
('Mr Maneesh Srivastava', 'Co-Founder', 'AlphaValue Consulting', NULL, 'FA: R&D, Design', 'https://www.linkedin.com/in/maneeshsrivastav/', 7),
('Nikhil Kumar', 'R&D Engineer', NULL, 'Experience: ~ 5 years', 'FA: R&D, Propulsion, Mission Planning', NULL, 8),
('RUPAK', 'Inventor', 'Monolithic Non-Dynamic Cryogenic Pump for Rocket Application', 'Experience: ~3 years', NULL, NULL, 9);

-- Insert Platforms
INSERT INTO platforms (number, category, title, description) VALUES
(1, 'COMMERCIAL', 'Fully-Integrated Payload Platform', 'The upper stage is designed to carry and deploy satellites with a maximum payload mass of 250 kg, providing a reliable platform for placing small and micro-spacecraft into their designated orbits. It supports standard deployment interfaces and ensures precise injection accuracy for commercial, scientific, and institutional missions.'),
(2, 'LABORATORY', 'Long Endurance Platform', 'Provides a dedicated platform for carrying multiple independent experimental payloads into low Earth orbit, enabling controlled environmental exposure, in-situ measurement, and continuous real-time data acquisition. The system supports scientific research, material testing, biological studies, and technology validation under true orbital conditions.'),
(3, 'DEFENCE', 'Rapid-Response Payload Platform', 'Provides an independent rapid-response launch service capable of deploying defence payloads within a 24-hour window. The Rupak ensures priority readiness, minimal turnaround time, and assured access to orbit for critical national-security missions, enabling real-time tactical support, rapid replenishment, and immediate space-based capability restoration.');

-- Create indexes for better performance
CREATE INDEX idx_team_members_order ON team_members(order_index);
CREATE INDEX idx_platforms_number ON platforms(number);

-- Enable Row Level Security (RLS)
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE platforms ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access
CREATE POLICY "Allow public read access to team_members"
  ON team_members FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access to platforms"
  ON platforms FOR SELECT
  USING (true);
