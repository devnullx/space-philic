/**
 * Axios configuration
 * Centralized HTTP client setup
 */

import axios from 'axios'
import env from '../config/env'

const apiClient = axios.create({
  baseURL: env.apiUrl,
  timeout: env.apiTimeout,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    if (env.enableDebug) {
      console.log('API Request:', config.method.toUpperCase(), config.url)
    }
    return config
  },
  (error) => {
    if (env.enableDebug) {
      console.error('Request Error:', error)
    }
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    if (env.enableDebug) {
      console.log('API Response:', response.status, response.config.url)
    }
    return response
  },
  (error) => {
    if (env.enableDebug) {
      console.error('Response Error:', error.response?.status, error.message)
    }

    // Handle common errors
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('Unauthorized access')
          break
        case 404:
          console.error('Resource not found')
          break
        case 500:
          console.error('Server error')
          break
        default:
          console.error('API Error:', error.response.data?.message || error.message)
      }
    } else if (error.request) {
      console.error('Network error - no response received')
    }

    return Promise.reject(error)
  }
)

export default apiClient
