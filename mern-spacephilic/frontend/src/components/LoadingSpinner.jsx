/**
 * Loading Spinner Component
 */

const LoadingSpinner = ({ size = 'medium', message = 'Loading...' }) => {
  const sizes = {
    small: '24px',
    medium: '48px',
    large: '64px',
  }

  const spinnerSize = sizes[size] || sizes.medium

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      minHeight: '200px',
    }}>
      <div
        style={{
          width: spinnerSize,
          height: spinnerSize,
          border: '4px solid rgba(255, 255, 255, 0.1)',
          borderTop: '4px solid #0066cc',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      {message && (
        <p style={{
          marginTop: '1rem',
          color: '#888',
          fontSize: '0.875rem',
        }}>
          {message}
        </p>
      )}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  )
}

export default LoadingSpinner
