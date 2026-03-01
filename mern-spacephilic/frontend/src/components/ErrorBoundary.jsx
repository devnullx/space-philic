/**
 * Error Boundary Component
 * Catches and handles React component errors
 */

import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error Boundary Caught:', error, errorInfo)
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: '#1a1a1a',
          color: '#fff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Oops! Something went wrong
          </h1>
          <p style={{ marginBottom: '2rem', color: '#888' }}>
            We're sorry for the inconvenience. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              backgroundColor: '#0066cc',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Refresh Page
          </button>
          {this.props.showDetails && this.state.error && (
            <details style={{ marginTop: '2rem', textAlign: 'left', maxWidth: '600px' }}>
              <summary style={{ cursor: 'pointer', marginBottom: '1rem' }}>
                Error Details
              </summary>
              <pre style={{
                backgroundColor: '#2a2a2a',
                padding: '1rem',
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '0.875rem',
              }}>
                {this.state.error.toString()}
                {'\n\n'}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
