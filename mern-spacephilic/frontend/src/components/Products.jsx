export default function Products() {
  return (
    <section id="products" style={{
      minHeight: '100vh',
      padding: '8rem 5% 4rem',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontFamily: "'Glacial Indifference', sans-serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '900',
          letterSpacing: '5px',
          marginBottom: '5rem',
          color: '#fff',
          textAlign: 'center',
          textShadow: '0 0 15px rgba(80, 140, 255, 0.3), 0 3px 10px rgba(0, 0, 0, 0.8)'
        }}>
          OUR PRODUCTS
        </h2>

        {/* RUPAK Product */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '8rem'
        }}>
          <div>
            <h3 style={{
              fontFamily: "'Glacial Indifference', sans-serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#fff'
            }}>
              RUPAK
            </h3>
            <p style={{
              fontFamily: "'Glacial Indifference', sans-serif",
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: 'rgba(221, 221, 221, 0.89)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '2rem',
              opacity: 0.8
            }}>
              Reusable Launch Vehicle
            </p>
            <p style={{
              fontFamily: "'Glacial Indifference', sans-serif",
              fontSize: '1rem',
              lineHeight: '1.8',
              color: 'rgba(221, 221, 221, 0.7)',
              marginBottom: '1.5rem'
            }}>
              RUPAK is our flagship reusable rocket designed for reliable and cost-effective access to low Earth orbit.
              With a 28-meter length and 1.2-meter diameter, it delivers payloads up to 250kg with unprecedented efficiency.
            </p>
            <p style={{
              fontFamily: "'Glacial Indifference', sans-serif",
              fontSize: '1rem',
              lineHeight: '1.8',
              color: 'rgba(221, 221, 221, 0.7)'
            }}>
              Featuring a carbon fiber booster with retractable landing legs, RUPAK exemplifies modern aerospace engineering
              with its ability to land and be relaunched multiple times, dramatically reducing launch costs.
            </p>

            {/* Specs */}
            <div style={{
              marginTop: '2rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem'
            }}>
              <div>
                <div style={{
                  fontFamily: "'Glacial Indifference', sans-serif",
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  opacity: 0.5,
                  marginBottom: '0.5rem'
                }}>
                  Payload Mass
                </div>
                <div style={{
                  fontFamily: "'Glacial Indifference', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#fff'
                }}>
                  250kg
                </div>
              </div>
              <div>
                <div style={{
                  fontFamily: "'Glacial Indifference', sans-serif",
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  opacity: 0.5,
                  marginBottom: '0.5rem'
                }}>
                  Combined Thrust
                </div>
                <div style={{
                  fontFamily: "'Glacial Indifference', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#fff'
                }}>
                  288KN
                </div>
              </div>
            </div>
          </div>

          {/* RUPAK Image Placeholder */}
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
            margin: '0 auto'
          }}>
            <span style={{ color: '#444', fontSize: '1rem', letterSpacing: '2px', textAlign: 'center', padding: '2rem' }}>
              RUPAK ROCKET IMAGE<br/>(1:4 ratio)
            </span>
          </div>
        </div>

        {/* Shakti Engine Product */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Shakti Image Placeholder */}
          <div style={{
            width: '100%',
            maxWidth: '500px',
            aspectRatio: '1/1',
            background: 'rgba(1, 0, 0, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(221, 221, 221, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            margin: '0 auto'
          }}>
            <span style={{ color: '#444', fontSize: '1rem', letterSpacing: '2px', textAlign: 'center', padding: '2rem' }}>
              SHAKTI ENGINE IMAGE<br/>(1:1 ratio)
            </span>
          </div>

          <div>
            <h3 style={{
              fontFamily: "'Glacial Indifference', sans-serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#fff'
            }}>
              SHAKTI ENGINE
            </h3>
            <p style={{
              fontFamily: "'Glacial Indifference', sans-serif",
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: 'rgba(221, 221, 221, 0.89)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '2rem',
              opacity: 0.8
            }}>
              Advanced Propulsion Technology
            </p>
            <p style={{
              fontFamily: "'Glacial Indifference', sans-serif",
              fontSize: '1rem',
              lineHeight: '1.8',
              color: 'rgba(221, 221, 221, 0.7)',
              marginBottom: '1.5rem'
            }}>
              Shakti is a modern bi-propellant rocket engine designed for high reliability and affordable production.
              It uses SLM-based additive manufacturing to cut part count, reduce mass, and avoid complex fabrication steps.
            </p>
            <p style={{
              fontFamily: "'Glacial Indifference', sans-serif",
              fontSize: '1rem',
              lineHeight: '1.8',
              color: 'rgba(221, 221, 221, 0.7)',
              marginBottom: '1.5rem'
            }}>
              Its electric-pump architecture removes the need for turbopumps and gives clean, predictable control during operation.
              Nine Shakti engines work together on the first stage to deliver strong lift capability with natural redundancy.
            </p>

            {/* Engine Specs */}
            <table style={{
              width: '100%',
              marginTop: '2rem',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr>
                  <th style={{
                    fontFamily: "'Glacial Indifference', sans-serif",
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    opacity: 0.5,
                    padding: '0.75rem 0',
                    textAlign: 'left',
                    borderBottom: '1px solid rgba(221, 221, 221, 0.1)'
                  }}>Propellant</th>
                  <th style={{
                    fontFamily: "'Glacial Indifference', sans-serif",
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    opacity: 0.5,
                    padding: '0.75rem 0',
                    textAlign: 'left',
                    borderBottom: '1px solid rgba(221, 221, 221, 0.1)'
                  }}>Cycle</th>
                  <th style={{
                    fontFamily: "'Glacial Indifference', sans-serif",
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    opacity: 0.5,
                    padding: '0.75rem 0',
                    textAlign: 'left',
                    borderBottom: '1px solid rgba(221, 221, 221, 0.1)'
                  }}>Thrust</th>
                  <th style={{
                    fontFamily: "'Glacial Indifference', sans-serif",
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    opacity: 0.5,
                    padding: '0.75rem 0',
                    textAlign: 'left',
                    borderBottom: '1px solid rgba(221, 221, 221, 0.1)'
                  }}>ISP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{
                    fontFamily: "'Glacial Indifference', sans-serif",
                    fontSize: '1rem',
                    fontWeight: '500',
                    padding: '1rem 0',
                    color: '#fff'
                  }}>Bi-propellants</td>
                  <td style={{
                    fontFamily: "'Glacial Indifference', sans-serif",
                    fontSize: '1rem',
                    fontWeight: '500',
                    padding: '1rem 0',
                    color: '#fff'
                  }}>Electric-fed</td>
                  <td style={{
                    fontFamily: "'Glacial Indifference', sans-serif",
                    fontSize: '1rem',
                    fontWeight: '500',
                    padding: '1rem 0',
                    color: '#fff'
                  }}>32 kN</td>
                  <td style={{
                    fontFamily: "'Glacial Indifference', sans-serif",
                    fontSize: '1rem',
                    fontWeight: '500',
                    padding: '1rem 0',
                    color: '#fff'
                  }}>301</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
