import { useState } from 'react'

export default function Contact() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({ message: '', type: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ message: '', type: '' })

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzFgYIfIHUusWM3kg7gRwEXJ6PJoc50fmsyvEdwAl8IKvrUCc6g-mOOfoqTT3TVzpIG/exec'

    try {
      const data = {
        ...formData,
        timestamp: new Date().toISOString()
      }

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      setFormStatus({
        message: "Message sent! We'll get back to you soon.",
        type: 'success'
      })
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      setFormStatus({
        message: 'Something went wrong. Please email us directly.',
        type: 'error'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" style={{
      minHeight: '100vh',
      padding: 'clamp(6rem, 10vw, 8rem) clamp(3%, 5vw, 5%) clamp(3rem, 5vw, 4rem)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        perspective: '1200px'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}>
          {/* FRONT */}
          <div style={{
            width: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            textAlign: 'center',
            padding: '3rem 2rem'
          }}>
            <h2 style={{
              fontFamily: "'Glacial Indifference', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              letterSpacing: '5px',
              marginBottom: '2rem',
              color: '#fff',
              textShadow: '0 0 15px rgba(80, 140, 255, 0.3), 0 3px 10px rgba(0, 0, 0, 0.8)'
            }}>
              Ready to Launch?
            </h2>
            <p style={{
              fontFamily: "'Glacial Indifference', sans-serif",
              fontSize: '1.1rem',
              color: 'rgba(221, 221, 221, 0.7)',
              marginBottom: '2.5rem',
              lineHeight: '1.6'
            }}>
              Get in touch with our team to discuss your mission requirements and booking options.
            </p>
            <button
              onClick={() => setIsFlipped(true)}
              style={{
                display: 'inline-block',
                padding: 'clamp(0.8rem, 3vw, 1rem) clamp(2rem, 6vw, 3rem)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px',
                background: 'transparent',
                color: '#fff',
                fontFamily: "'Glacial Indifference', sans-serif",
                fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              Book Your Launch →
            </button>
          </div>

          {/* BACK */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            padding: '2rem 1.5rem'
          }}>
            <div style={{
              background: 'rgba(221, 221, 221, 0.05)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '15px',
              padding: '2rem',
              border: '1px solid rgba(221, 221, 221, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem'
              }}>
                <span style={{
                  fontFamily: "'Glacial Indifference', sans-serif",
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  letterSpacing: '0.05em',
                  color: '#fff'
                }}>
                  Get in Touch
                </span>
                <button
                  onClick={() => setIsFlipped(false)}
                  style={{
                    background: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontFamily: "'Glacial Indifference', sans-serif",
                    fontSize: '0.75rem',
                    padding: '0.4rem 1rem',
                    borderRadius: '100px',
                    cursor: 'pointer',
                    letterSpacing: '0.08em',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)'
                    e.target.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'
                    e.target.style.color = 'rgba(255, 255, 255, 0.5)'
                  }}
                >
                  ← Back
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.1rem' }}>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Glacial Indifference', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    opacity: 0.4,
                    marginBottom: '0.4rem'
                  }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '0.7rem 0.9rem',
                      color: '#fff',
                      fontFamily: "'Glacial Indifference', sans-serif",
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.35)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>

                <div style={{ marginBottom: '1.1rem' }}>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Glacial Indifference', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    opacity: 0.4,
                    marginBottom: '0.4rem'
                  }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '0.7rem 0.9rem',
                      color: '#fff',
                      fontFamily: "'Glacial Indifference', sans-serif",
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.35)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>

                <div style={{ marginBottom: '1.1rem' }}>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Glacial Indifference', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    opacity: 0.4,
                    marginBottom: '0.4rem'
                  }}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '0.7rem 0.9rem',
                      color: '#fff',
                      fontFamily: "'Glacial Indifference', sans-serif",
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.35)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>

                <div style={{ marginBottom: '1.1rem' }}>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Glacial Indifference', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    opacity: 0.4,
                    marginBottom: '0.4rem'
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    rows="3"
                    required
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '0.7rem 0.9rem',
                      color: '#fff',
                      fontFamily: "'Glacial Indifference', sans-serif",
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                      minHeight: '80px',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.35)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    marginTop: '0.5rem',
                    padding: '0.8rem',
                    border: 'none',
                    borderRadius: '8px',
                    background: '#fff',
                    color: '#000',
                    fontFamily: "'Glacial Indifference', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    opacity: isSubmitting ? 0.4 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) e.target.style.opacity = '0.85'
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) e.target.style.opacity = '1'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              {formStatus.message && (
                <div style={{
                  textAlign: 'center',
                  marginTop: '1rem',
                  fontSize: '0.82rem',
                  letterSpacing: '0.03em',
                  color: formStatus.type === 'success' ? '#4ade80' : '#f87171'
                }}>
                  {formStatus.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
