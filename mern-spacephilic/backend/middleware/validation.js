/**
 * Request validation middleware
 */

export const validateContactForm = (req, res, next) => {
  const { name, email, subject, message } = req.body

  const errors = []

  if (!name || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long')
  }

  if (!email || !isValidEmail(email)) {
    errors.push('Valid email is required')
  }

  if (!subject || subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters long')
  }

  if (!message || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long')
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    })
  }

  next()
}

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
