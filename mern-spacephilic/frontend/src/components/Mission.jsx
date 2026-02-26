export default function Mission() {
  return (
    <section id="mission" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8rem 5% 4rem',
      position: 'relative'
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
          OUR MISSION
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
          Space Philic is pioneering affordable and reliable access to space through innovative reusable launch technology.
          Our mission is to democratize space access for commercial, scientific, and defense applications, making orbital
          deployment accessible to organizations of all sizes across India and beyond.
        </p>
      </div>
    </section>
  )
}
