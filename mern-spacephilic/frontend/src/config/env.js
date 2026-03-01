/**
 * Environment configuration
 * Centralizes all environment variables
 */

const env = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  apiTimeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 10000,
  nodeEnv: import.meta.env.VITE_NODE_ENV || 'development',
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  enableDebug: import.meta.env.VITE_ENABLE_DEBUG === 'true',
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
}

export default env
