/**
 * Error Message Component
 */

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
      border: '1px solid rgba(255, 0, 0, 0.3)',
      borderRadius: '8px',
      margin: '2rem',
    }}>
      <div style={{
        fontSize: '2rem',
        marginBottom: '1rem',
      }}>
        ⚠️
      </div>
      <h3 style={{
        color: '#ff4444',
        marginBottom: '0.5rem',
        fontSize: '1.25rem',
      }}>
        Error
      </h3>
      <p style={{
        color: '#ddd',
        marginBottom: onRetry ? '1.5rem' : '0',
      }}>
        {message || 'Something went wrong. Please try again.'}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            backgroundColor: '#0066cc',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0052a3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0066cc'}
        >
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorMessage
