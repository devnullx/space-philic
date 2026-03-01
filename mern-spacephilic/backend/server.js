import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import teamRoutes from './routes/teamRoutes.js'
import platformRoutes from './routes/platformRoutes.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'
import { requestLogger } from './middleware/logger.js'
import logger from './utils/logger.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV || 'development'

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
})

// CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = process.env.CORS_ORIGINS
      ? process.env.CORS_ORIGINS.split(',')
      : ['http://localhost:5173', 'http://localhost:5174']

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
}

// Security & Performance Middleware
app.use(helmet({
  contentSecurityPolicy: NODE_ENV === 'production',
  crossOriginEmbedderPolicy: NODE_ENV === 'production',
}))
app.use(compression())
app.use(cors(corsOptions))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Logging Middleware
app.use(requestLogger)

// Rate Limiting
app.use('/api/', limiter)

// API Routes
app.use('/api/team', teamRoutes)
app.use('/api/platforms', platformRoutes)

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'OK',
    message: 'Space Philic API is running',
    environment: NODE_ENV,
    database: 'Supabase PostgreSQL',
    timestamp: new Date().toISOString(),
  })
})

// API Info Endpoint
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Space Philic API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      platforms: '/api/platforms',
      team: '/api/team',
    },
  })
})

// 404 Handler (must be after all routes)
app.use(notFound)

// Global Error Handler (must be last)
app.use(errorHandler)

// Start Server
const server = app.listen(PORT, () => {
  logger.info(`Server started successfully`)
  logger.info(`Environment: ${NODE_ENV}`)
  logger.info(`Port: ${PORT}`)
  logger.info(`Database: Supabase PostgreSQL`)
  logger.info(`Supabase URL: ${process.env.SUPABASE_URL || 'Not configured'}`)
})

// Graceful Shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    logger.info('HTTP server closed')
    process.exit(0)
  })
})

process.on('SIGINT', () => {
  logger.info('SIGINT signal received: closing HTTP server')
  server.close(() => {
    logger.info('HTTP server closed')
    process.exit(0)
  })
})
