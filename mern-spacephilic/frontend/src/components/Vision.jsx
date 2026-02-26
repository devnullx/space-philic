export default function Vision() {
  return (
    <section id="vision" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8rem 5% 4rem',
      position: 'relative',
      background: 'linear-gradient(180deg, #000 0%, #0a0a0a 100%)'
    }}>
      <div style={{
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontFamily: "'Glacial Indifference', sans-serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '900',
          letterSpacing: '5px',
          marginBottom: '3rem',
          color: '#fff',
          textShadow: '0 0 15px rgba(80, 140, 255, 0.3), 0 3px 10px rgba(0, 0, 0, 0.8)'
        }}>
          OUR VISION
        </h2>
        <p style={{
          fontFamily: "'Glacial Indifference', sans-serif",
          fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
          lineHeight: '1.8',
          color: 'rgba(221, 221, 221, 0.89)',
          maxWidth: '900px',
          margin: '0 auto',
          letterSpacing: '0.03em'
        }}>
          To become India's leading provider of responsive and cost-effective launch services, enabling rapid deployment
          of satellites and payloads while fostering innovation in space technology. We envision a future where space
          access is routine, reliable, and within reach for every organization with ambitions beyond Earth.
        </p>
      </div>
    </section>
  )
}
