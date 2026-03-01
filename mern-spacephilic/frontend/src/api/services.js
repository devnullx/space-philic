/**
 * API Services
 * All API calls centralized here
 */

import apiClient from './axios.config'
import { API_ENDPOINTS } from '../constants'

/**
 * Platform Services
 */
export const platformService = {
  getAll: async () => {
    const response = await apiClient.get(API_ENDPOINTS.PLATFORMS)
    return response.data
  },

  getById: async (id) => {
    const response = await apiClient.get(`${API_ENDPOINTS.PLATFORMS}/${id}`)
    return response.data
  },
}

/**
 * Team Services
 */
export const teamService = {
  getAll: async () => {
    const response = await apiClient.get(API_ENDPOINTS.TEAM)
    return response.data
  },

  getById: async (id) => {
    const response = await apiClient.get(`${API_ENDPOINTS.TEAM}/${id}`)
    return response.data
  },
}

/**
 * Contact Services
 */
export const contactService = {
  submit: async (data) => {
    const response = await apiClient.post(API_ENDPOINTS.CONTACT, data)
    return response.data
  },
}

export default {
  platform: platformService,
  team: teamService,
  contact: contactService,
}
