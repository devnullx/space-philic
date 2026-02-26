export default function PayloadPlatforms({ platforms }) {
  return (
    <section style={{ padding: '6rem 5%', maxWidth: '1600px', margin: '0 auto' }}>
      <h2 className="section-title">PAYLOAD PLATFORMS</h2>

      {platforms.map((platform, index) => (
        <div
          key={platform.id}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '6rem',
            padding: '3rem',
            background: '#010000',
            borderRadius: '15px',
            flexDirection: index % 2 === 1 ? 'row-reverse' : 'row'
          }}
        >
          <div style={{
            width: '100%',
            aspectRatio: '1/3',
            background: '#010000',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(221, 221, 221, 0.3)',
            order: index % 2 === 1 ? 2 : 1
          }}>
            <span style={{
              color: '#444',
              fontSize: '1rem',
              letterSpacing: '2px',
              textAlign: 'center',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed'
            }}>
              ROCKET IMAGE (1:3 ratio)
            </span>
          </div>

          <div style={{ padding: '2rem', order: index % 2 === 1 ? 1 : 2 }}>
            <div style={{ fontSize: '5rem', fontWeight: '900', color: 'rgba(255, 255, 255, 0.1)', lineHeight: '1', marginBottom: '1rem' }}>
              {platform.number}
            </div>
            <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '3px', color: 'rgba(221, 221, 221, 0.89)', marginBottom: '0.5rem' }}>
              {platform.category}
            </p>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '2px' }}>
              {platform.title}
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(221, 221, 221, 0.89)' }}>
              {platform.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
