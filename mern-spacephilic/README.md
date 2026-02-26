# Space Philic - RUPAK Reusable Launch Vehicle Website

A modern full-stack MERN application with Supabase PostgreSQL database for Space Philic's RUPAK rocket platform.

## Tech Stack

- **Frontend**: React 18 + Vite
- **Backend**: Node.js + Express
- **Database**: Supabase (PostgreSQL)
- **Styling**: Vanilla CSS

## Project Structure

```
mern-spacephilic/
├── backend/
│   ├── config/
│   │   ├── supabase.js         # Supabase client configuration
│   │   └── database.sql        # Database schema and seed data
│   ├── controllers/
│   │   ├── teamController.js   # Team member API logic
│   │   └── platformController.js
│   ├── routes/
│   │   ├── teamRoutes.js
│   │   └── platformRoutes.js
│   ├── server.js               # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── VisionMission.jsx
│   │   │   ├── ShaktiEngine.jsx
│   │   │   ├── PayloadPlatforms.jsx
│   │   │   ├── TeamSection.jsx
│   │   │   └── Footer.jsx
│   │   ├── styles/
│   │   │   └── index.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## Setup Instructions

### 1. Supabase Setup

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to SQL Editor and run the contents of `backend/config/database.sql`
4. Get your Project URL and Anon Key from Settings > API

### 2. Backend Setup

```bash
cd mern-spacephilic/backend
npm install
```

Create `.env` file in the backend directory:

```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173

# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

Start the backend server:

```bash
npm run dev
```

The API will be available at `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

## API Endpoints

### Team Members
- `GET /api/team` - Get all team members
- `GET /api/team/:id` - Get single team member

### Platforms
- `GET /api/platforms` - Get all payload platforms
- `GET /api/platforms/:id` - Get single platform

### Health Check
- `GET /api/health` - Server health status

## Features

- ✅ Responsive design for all devices
- ✅ Server-side data fetching from Supabase
- ✅ Rate limiting and security headers
- ✅ CORS configured for development
- ✅ LinkedIn integration for team members
- ✅ Dark theme with pure black background (#010000)
- ✅ Dynamic content from database

## VS Code Port Forwarding (for live sharing)

1. Start both servers (backend on port 5000, frontend on port 5173)
2. In VS Code, open the Terminal
3. Click on the "PORTS" tab
4. Click "Forward a Port"
5. Add port 5173 (frontend) - this will generate a public URL
6. Share the generated URL with anyone to access your live site

Alternatively, use the VS Code command palette (Ctrl+Shift+P):
- Search for "Forward a Port"
- Enter 5173
- Right-click the forwarded port and select "Port Visibility" > "Public"

## Deployment

### Backend (Render/Railway/Heroku)
- Set environment variables
- Deploy the `backend` folder

### Frontend (Vercel/Netlify)
- Update API URL in axios calls to your production backend URL
- Deploy the `frontend` folder

### Database
- Already hosted on Supabase cloud

## Image Requirements

When adding images to the site:

1. **Main RUPAK Rocket**: 1:4 aspect ratio (vertical)
2. **SHAKTI Engine**: 16:9 or 4:3 aspect ratio (landscape)
3. **Platform Rockets**: 1:3 aspect ratio (vertical)
4. **Team Photos**: 1:1 aspect ratio (square)

Upload images to Supabase Storage and update URLs in database.

## License

Copyright © 2024 Space Philic. All rights reserved.
