# Space Philic - Production Deployment Guide

## Overview
This guide covers deploying the Space Philic MERN stack application to production.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Environment Setup](#environment-setup)
3. [Building for Production](#building-for-production)
4. [Deployment Options](#deployment-options)
5. [Security Considerations](#security-considerations)
6. [Monitoring & Logging](#monitoring--logging)

---

## Project Structure

```
mern-spacephilic/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── api/             # API services & axios config
│   │   ├── components/      # React components
│   │   ├── config/          # Environment configuration
│   │   ├── constants/       # App constants
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   ├── styles/          # CSS styles
│   │   ├── App.jsx          # Main App component
│   │   └── main.jsx         # Entry point
│   ├── .env.development     # Development environment
│   ├── .env.production      # Production environment
│   └── vite.config.js       # Vite configuration
│
└── backend/                 # Express.js backend
    ├── config/              # Database & service configs
    ├── controllers/         # Route controllers
    ├── middleware/          # Custom middleware
    ├── models/              # Data models
    ├── routes/              # API routes
    ├── utils/               # Utility functions
    ├── .env                 # Environment variables
    └── server.js            # Entry point
```

---

## Environment Setup

### Frontend Environment Variables

**`.env.development`**
```env
VITE_API_URL=http://localhost:5000/api
VITE_API_TIMEOUT=10000
VITE_NODE_ENV=development
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=true
```

**`.env.production`**
```env
VITE_API_URL=https://api.spacephilic.com/api
VITE_API_TIMEOUT=10000
VITE_NODE_ENV=production
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=false
```

### Backend Environment Variables

**`.env`**
```env
# Server Configuration
PORT=5000
NODE_ENV=production

# Supabase Configuration
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# CORS Origins (comma-separated)
CORS_ORIGINS=https://spacephilic.com,https://www.spacephilic.com

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Logging
LOG_LEVEL=info
```

---

## Building for Production

### Frontend Build

```bash
cd frontend
npm install
npm run build
```

This creates an optimized production build in the `dist/` directory.

**Build Features:**
- Minified JavaScript & CSS
- Code splitting for better performance
- Vendor chunk separation
- Tree shaking for smaller bundle size

### Backend Preparation

```bash
cd backend
npm install --production
```

---

## Deployment Options

### Option 1: Vercel (Frontend) + Railway (Backend)

#### Frontend on Vercel
```bash
cd frontend
vercel --prod
```

**Vercel Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

#### Backend on Railway
1. Connect your repository
2. Set environment variables
3. Railway will auto-deploy from main branch

---

### Option 2: AWS (Full Stack)

#### Frontend on S3 + CloudFront
1. Build frontend: `npm run build`
2. Upload `dist/` to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain

#### Backend on EC2 or ECS
1. Use PM2 for process management
2. Configure NGINX as reverse proxy
3. Set up SSL certificates

---

### Option 3: Docker Deployment

**Frontend Dockerfile:**
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Backend Dockerfile:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
```

**docker-compose.yml:**
```yaml
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    env_file:
      - ./backend/.env
```

---

## Security Considerations

### Frontend Security
- ✅ Content Security Policy via Helmet
- ✅ XSS protection through React
- ✅ Environment variables not exposed
- ✅ HTTPS only in production
- ✅ Secure API communication

### Backend Security
- ✅ Helmet.js for HTTP headers
- ✅ CORS properly configured
- ✅ Rate limiting enabled
- ✅ Input validation middleware
- ✅ Error handling (no stack traces in production)
- ✅ Compression enabled
- ✅ Request size limits

### Checklist Before Deployment
- [ ] All environment variables set
- [ ] CORS origins configured correctly
- [ ] Rate limiting properly tuned
- [ ] Database credentials secured
- [ ] SSL/TLS certificates installed
- [ ] Logging configured
- [ ] Error tracking set up (Sentry, etc.)
- [ ] Health check endpoints working

---

## Monitoring & Logging

### Backend Logging
The application uses a custom logger (`utils/logger.js`) with levels:
- ERROR: Critical errors
- WARN: Warnings
- INFO: General information
- DEBUG: Detailed debug info

**Access logs:**
```bash
# Set LOG_LEVEL in .env
LOG_LEVEL=info
```

### Health Check Endpoints

**Backend:**
```
GET /api/health
Response: {
  success: true,
  status: "OK",
  environment: "production",
  database: "Supabase PostgreSQL",
  timestamp: "2026-03-01T..."
}
```

### Recommended Monitoring Tools
- **Uptime:** UptimeRobot, Pingdom
- **Application:** New Relic, Datadog
- **Errors:** Sentry, LogRocket
- **Analytics:** Google Analytics, Mixpanel

---

## Performance Optimization

### Frontend
- Code splitting implemented
- Lazy loading for components
- Image optimization
- Caching strategies via headers
- CDN for static assets

### Backend
- Response compression
- Connection pooling (Supabase)
- Rate limiting
- Request/response caching

---

## Rollback Strategy

### Quick Rollback
1. Keep previous deployment artifacts
2. Use git tags for releases
3. Implement blue-green deployment
4. Database migrations should be reversible

---

## Support & Maintenance

### Regular Tasks
- Monitor error logs daily
- Review rate limit hits
- Check database performance
- Update dependencies monthly
- Security patches ASAP

### Emergency Contacts
- DevOps: [contact]
- Database Admin: [contact]
- Security Team: [contact]

---

## Additional Resources
- [Vite Production Guide](https://vitejs.dev/guide/build.html)
- [Express.js Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [Supabase Documentation](https://supabase.com/docs)

---

**Last Updated:** March 2026
**Version:** 1.0.0
