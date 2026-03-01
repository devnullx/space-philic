/**
 * Logging utility
 */

const LOG_LEVELS = {
  ERROR: 'ERROR',
  WARN: 'WARN',
  INFO: 'INFO',
  DEBUG: 'DEBUG',
}

class Logger {
  constructor() {
    this.level = process.env.LOG_LEVEL || 'INFO'
  }

  formatMessage(level, message, data = null) {
    const timestamp = new Date().toISOString()
    const dataStr = data ? `\n${JSON.stringify(data, null, 2)}` : ''
    return `[${timestamp}] [${level}] ${message}${dataStr}`
  }

  error(message, data = null) {
    console.error(this.formatMessage(LOG_LEVELS.ERROR, message, data))
  }

  warn(message, data = null) {
    console.warn(this.formatMessage(LOG_LEVELS.WARN, message, data))
  }

  info(message, data = null) {
    console.info(this.formatMessage(LOG_LEVELS.INFO, message, data))
  }

  debug(message, data = null) {
    if (this.level === 'DEBUG') {
      console.log(this.formatMessage(LOG_LEVELS.DEBUG, message, data))
    }
  }
}

export default new Logger()
