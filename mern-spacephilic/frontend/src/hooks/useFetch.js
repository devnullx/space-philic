/**
 * Custom hook for data fetching
 * Handles loading, error, and success states
 */

import { useState, useEffect } from 'react'
import { LOADING_STATES } from '../constants'

const useFetch = (fetchFunction, deps = []) => {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState(LOADING_STATES.IDLE)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      setStatus(LOADING_STATES.LOADING)
      setError(null)

      try {
        const result = await fetchFunction()
        if (isMounted) {
          setData(result)
          setStatus(LOADING_STATES.SUCCESS)
        }
      } catch (err) {
        if (isMounted) {
          setError(err.response?.data?.message || err.message || 'An error occurred')
          setStatus(LOADING_STATES.ERROR)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, deps)

  const refetch = async () => {
    setStatus(LOADING_STATES.LOADING)
    setError(null)

    try {
      const result = await fetchFunction()
      setData(result)
      setStatus(LOADING_STATES.SUCCESS)
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'An error occurred')
      setStatus(LOADING_STATES.ERROR)
    }
  }

  return {
    data,
    status,
    error,
    isLoading: status === LOADING_STATES.LOADING,
    isError: status === LOADING_STATES.ERROR,
    isSuccess: status === LOADING_STATES.SUCCESS,
    refetch,
  }
}

export default useFetch
