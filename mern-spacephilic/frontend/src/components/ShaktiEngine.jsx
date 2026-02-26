export default function ShaktiEngine() {
  const specs = [
    { value: 'Bi-propellants', label: 'Propellant Type' },
    { value: 'Electric-fed', label: 'Feed System' },
    { value: '32KN', label: 'Thrust' },
    { value: '301', label: 'ISP' }
  ]

  return (
    <section id="specs" style={{ padding: '6rem 5%', background: '#010000' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '4rem', fontWeight: '900', letterSpacing: '8px', marginBottom: '1rem' }}>
            SHAKTI
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(221, 221, 221, 0.89)', letterSpacing: '2px' }}>
            The Engine
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          marginTop: '4rem'
        }}>
          <div style={{
            width: '100%',
            aspectRatio: '4/3',
            background: '#010000',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(221, 221, 221, 0.3)'
          }}>
            <span style={{ color: '#444', fontSize: '1.2rem', letterSpacing: '2px', textAlign: 'center' }}>
              SHAKTI ENGINE IMAGE (16:9 or 4:3)
            </span>
          </div>

          <div style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>
              Advanced Bi-Propellant Technology
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(221, 221, 221, 0.89)', marginBottom: '2rem' }}>
              Shakti is a modern bi-propellant rocket engine designed for high reliability and affordable production.
              It uses SLM-based additive manufacturing to cut part count, reduce mass, and avoid complex fabrication steps.
              Its electric-pump architecture removes the need for turbopumps and gives clean, predictable control during operation.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              {specs.map((spec, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  padding: '1.5rem',
                  background: '#010000',
                  borderRadius: '8px'
                }}>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', display: 'block', marginBottom: '0.5rem' }}>
                    {spec.value}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(221, 221, 221, 0.89)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {spec.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
