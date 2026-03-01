export default function Hero() {

  return (
    <>
      {/* Navigation Bar */}
      <nav style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: 1001,
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.65) 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(80, 140, 255, 0.25)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1rem, 3vw, 2rem)',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
        <div className="nav-links" style={{
          display: 'flex',
          gap: 'clamp(1rem, 3vw, 2.5rem)',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <a href="#mission" style={{
            color: 'rgba(221, 221, 221, 0.7)',
            textDecoration: 'none',
            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
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
            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
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
            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
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
            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
            fontFamily: "'Glacial Indifference', sans-serif",
            letterSpacing: '0.05em',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#fff'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(221, 221, 221, 0.7)'}
          >Team</a>
          <a href="#contact" style={{
            color: 'rgba(221, 221, 221, 0.7)',
            textDecoration: 'none',
            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
            fontFamily: "'Glacial Indifference', sans-serif",
            letterSpacing: '0.05em',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#fff'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(221, 221, 221, 0.7)'}
          >Contact</a>
        </div>
      </nav>

      {/* SpacePhilic Logo - Above Navbar with Gap */}
      <div style={{
        position: 'fixed',
        top: '-17px',
        left: 'clamp(1.5rem, 4vw, 3rem)',
        zIndex: 1002,
        animation: 'fadeInDown 1s ease-out'
      }}>
        <img
          src="/logo-spacephilic.png"
          alt="Space Philic"
          style={{
            height: 'clamp(80px, 12vw, 130px)',
            width: 'auto',
            objectFit: 'contain',
            maxWidth: '450px',
            filter: 'drop-shadow(0 0 20px rgba(80, 140, 255, 0.5))',
            transition: 'transform 0.4s ease, filter 0.4s ease',
            cursor: 'pointer',
            display: 'block'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.08)';
            e.target.style.filter = 'drop-shadow(0 0 30px rgba(80, 140, 255, 0.8))';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.filter = 'drop-shadow(0 0 20px rgba(80, 140, 255, 0.5))';
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>

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
          {/* Rupak Logo at very top - centered */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(2rem, 5vw, 4rem)',
            animation: 'fadeInDown 1s ease-out',
            position: 'relative'
          }}>
            <img
              src="/logo-rocket.png"
              alt="RUPAK - Reusable Launch Vehicle"
              style={{
                maxWidth: '100%',
                width: 'clamp(500px, 70vw, 1200px)',
                height: 'auto',
                objectFit: 'contain',
                marginBottom: '1rem',
                filter: 'drop-shadow(0 0 20px rgba(80, 140, 255, 0.3))',
                transition: 'width 0.3s ease, transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.4rem)',
              color: 'rgba(221, 221, 221, 0.95)',
              letterSpacing: 'clamp(2px, 1.5vw, 4px)',
              fontWeight: '300',
              textTransform: 'uppercase',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
            }}>
              Reusable Launch Vehicle
            </p>
          </div>

          {/* RUPAK Platform Image - right below logo with broad margins */}
          <div style={{
            width: '100%',
            maxWidth: '700px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'clamp(2rem, 5vw, 4rem) auto',
            padding: '0 clamp(1rem, 4vw, 3rem)',
            animation: 'fadeInUp 1s ease-out 0.3s backwards'
          }}>
            <img
              src="/platform-1.png"
              alt="RUPAK Commercial Payload Platform"
              style={{
                width: 'clamp(500px, 100vw, 1800px)',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.25))',
                transition: 'width 0.3s ease, transform 0.3s ease, filter 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.03)';
                e.target.style.filter = 'drop-shadow(0 0 50px rgba(80, 140, 255, 0.4))';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.filter = 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.25))';
              }}
            />
          </div>

          {/* Specs Table - centered below image */}
          <table style={{
            width: '100%',
            maxWidth: '700px',
            borderCollapse: 'collapse',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '15px',
            overflow: 'hidden',
            marginBottom: 'clamp(2rem, 5vw, 3rem)',
            border: '1px solid rgba(80, 140, 255, 0.3)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(80, 140, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            animation: 'fadeInUp 1s ease-out 0.6s backwards'
          }}>
            <thead>
              <tr style={{ background: 'linear-gradient(135deg, rgba(80, 140, 255, 0.2), rgba(80, 140, 255, 0.05))' }}>
                <th style={{
                  padding: 'clamp(1rem, 2vw, 1.2rem)',
                  textAlign: 'center',
                  fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: 'clamp(1px, 1vw, 2px)',
                  color: 'rgba(221, 221, 221, 0.8)',
                  borderRight: '1px solid rgba(80, 140, 255, 0.2)'
                }}>
                  Payload Mass
                </th>
                <th style={{
                  padding: 'clamp(1rem, 2vw, 1.2rem)',
                  textAlign: 'center',
                  fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: 'clamp(1px, 1vw, 2px)',
                  color: 'rgba(221, 221, 221, 0.8)',
                  borderRight: '1px solid rgba(80, 140, 255, 0.2)'
                }}>
                  Rocket Type
                </th>
                <th style={{
                  padding: 'clamp(1rem, 2vw, 1.2rem)',
                  textAlign: 'center',
                  fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: 'clamp(1px, 1vw, 2px)',
                  color: 'rgba(221, 221, 221, 0.8)'
                }}>
                  Combined Thrust
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{
                  padding: 'clamp(1.5rem, 3vw, 2rem) clamp(0.5rem, 2vw, 1rem)',
                  textAlign: 'center',
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  fontWeight: 'bold',
                  color: '#fff',
                  borderRight: '1px solid rgba(80, 140, 255, 0.2)',
                  background: 'linear-gradient(135deg, rgba(80, 140, 255, 0.05), transparent)',
                  textShadow: '0 2px 10px rgba(80, 140, 255, 0.3)'
                }}>
                  250kg
                </td>
                <td style={{
                  padding: 'clamp(1.5rem, 3vw, 2rem) clamp(0.5rem, 2vw, 1rem)',
                  textAlign: 'center',
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  fontWeight: 'bold',
                  color: '#fff',
                  borderRight: '1px solid rgba(80, 140, 255, 0.2)',
                  background: 'linear-gradient(135deg, transparent, rgba(80, 140, 255, 0.05))',
                  textShadow: '0 2px 10px rgba(80, 140, 255, 0.3)'
                }}>
                  Reusable
                </td>
                <td style={{
                  padding: 'clamp(1.5rem, 3vw, 2rem) clamp(0.5rem, 2vw, 1rem)',
                  textAlign: 'center',
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  fontWeight: 'bold',
                  color: '#fff',
                  background: 'linear-gradient(135deg, rgba(80, 140, 255, 0.05), transparent)',
                  textShadow: '0 2px 10px rgba(80, 140, 255, 0.3)'
                }}>
                  288KN
                </td>
              </tr>
            </tbody>
          </table>

          {/* Book Your Launch Button - centered at bottom */}
          <div style={{ animation: 'fadeInUp 1s ease-out 0.9s backwards' }}>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{
                display: 'inline-block',
                padding: 'clamp(1rem, 3vw, 1.2rem) clamp(2.5rem, 6vw, 3.5rem)',
                border: '2px solid rgba(80, 140, 255, 0.5)',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, rgba(80, 140, 255, 0.2), rgba(80, 140, 255, 0.05))',
                color: '#fff',
                fontFamily: "'Glacial Indifference', sans-serif",
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                fontWeight: '700',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                boxShadow: '0 8px 25px rgba(80, 140, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, rgba(80, 140, 255, 0.4), rgba(80, 140, 255, 0.15))';
                e.target.style.borderColor = 'rgba(80, 140, 255, 0.8)';
                e.target.style.transform = 'translateY(-3px) scale(1.02)';
                e.target.style.boxShadow = '0 12px 35px rgba(80, 140, 255, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, rgba(80, 140, 255, 0.2), rgba(80, 140, 255, 0.05))';
                e.target.style.borderColor = 'rgba(80, 140, 255, 0.5)';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 8px 25px rgba(80, 140, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
              }}
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
