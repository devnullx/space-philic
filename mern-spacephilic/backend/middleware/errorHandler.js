/**
 * Global error handling middleware
 */

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'

  console.error(`[ERROR] ${statusCode} - ${message}`)
  console.error(err.stack)

  res.status(statusCode).json({
    success: false,
    message: message,
    ...(process.env.NODE_ENV === 'development' && {
      stack: err.stack,
      error: err,
    }),
  })
}

export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}
