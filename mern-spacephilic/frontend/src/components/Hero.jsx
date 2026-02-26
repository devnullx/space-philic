export default function Hero() {
  return (
    <>
      <nav>
        <div className="logo">SPACE PHILIC</div>
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <a href="#mission" style={{
            color: 'rgba(221, 221, 221, 0.7)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontFamily: "'Glacial Indifference', sans-serif",
            letterSpacing: '0.05em',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#fff'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(221, 221, 221, 0.7)'}
          >Mission</a>
          <a href="#vision" style={{
            color: 'rgba(221, 221, 221, 0.7)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontFamily: "'Glacial Indifference', sans-serif",
            letterSpacing: '0.05em',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#fff'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(221, 221, 221, 0.7)'}
          >Vision</a>
          <a href="#products" style={{
            color: 'rgba(221, 221, 221, 0.7)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontFamily: "'Glacial Indifference', sans-serif",
            letterSpacing: '0.05em',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#fff'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(221, 221, 221, 0.7)'}
          >Products</a>
          <a href="#team" style={{
            color: 'rgba(221, 221, 221, 0.7)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontFamily: "'Glacial Indifference', sans-serif",
            letterSpacing: '0.05em',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#fff'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(221, 221, 221, 0.7)'}
          >Team</a>
        </div>
      </nav>

      <section className="hero">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
          padding: '2rem'
        }}>
          {/* Title at very top - centered */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{
              fontFamily: "'Glacial Indifference', sans-serif",
              fontWeight: 'bold',
              fontSize: '4rem',
              letterSpacing: '8px',
              marginBottom: '0.5rem',
              color: '#fff'
            }}>
              RUPAK
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(221, 221, 221, 0.89)',
              letterSpacing: '3px'
            }}>
              Reusable Launch Vehicle
            </p>
          </div>

          {/* Rocket Image - centered */}
          <div style={{
            width: '100%',
            maxWidth: '400px',
            aspectRatio: '1/4',
            background: 'rgba(1, 0, 0, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(221, 221, 221, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '3rem'
          }}>
            <span style={{ color: '#444', fontSize: '1.2rem', letterSpacing: '2px', textAlign: 'center', padding: '2rem' }}>
              RUPAK ROCKET IMAGE (1:4 ratio)
            </span>
          </div>

          {/* Specs Table - centered below image */}
          <table style={{
            width: '100%',
            maxWidth: '600px',
            borderCollapse: 'collapse',
            backgroundColor: 'rgba(221, 221, 221, 0.05)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '3rem',
            border: '1px solid rgba(221, 221, 221, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <th style={{
                  padding: '1rem',
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: '#fff',
                  borderRight: '1px solid rgba(221, 221, 221, 0.1)'
                }}>
                  Payload Mass
                </th>
                <th style={{
                  padding: '1rem',
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: '#fff',
                  borderRight: '1px solid rgba(221, 221, 221, 0.1)'
                }}>
                  Rocket Type
                </th>
                <th style={{
                  padding: '1rem',
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: '#fff'
                }}>
                  Combined Thrust
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{
                  padding: '1.5rem 1rem',
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#fff',
                  borderRight: '1px solid rgba(221, 221, 221, 0.1)'
                }}>
                  250kg
                </td>
                <td style={{
                  padding: '1.5rem 1rem',
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#fff',
                  borderRight: '1px solid rgba(221, 221, 221, 0.1)'
                }}>
                  Reusable
                </td>
                <td style={{
                  padding: '1.5rem 1rem',
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#fff'
                }}>
                  288KN
                </td>
              </tr>
            </tbody>
          </table>

          {/* Book Your Launch Button - centered at bottom */}
          <div>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{
                display: 'inline-block',
                padding: '1rem 3rem',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px',
                background: 'transparent',
                color: '#fff',
                fontFamily: "'Glacial Indifference', sans-serif",
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Book Your Launch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
