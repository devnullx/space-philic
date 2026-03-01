export default function Vision() {
  return (
    <section id="vision" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8rem 5% 4rem',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontFamily: "'Glacial Indifference', sans-serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '900',
          letterSpacing: '5px',
          marginBottom: '4rem',
          color: '#fff',
          textShadow: '0 0 20px rgba(80, 140, 255, 0.4), 0 3px 10px rgba(0, 0, 0, 0.8)',
          animation: 'fadeInDown 1s ease-out'
        }}>
          OUR VISION
        </h2>
        <div style={{
          padding: 'clamp(2rem, 4vw, 3rem)',
          background: 'linear-gradient(135deg, rgba(80, 140, 255, 0.08), rgba(0, 0, 0, 0.4))',
          borderRadius: '25px',
          border: '1px solid rgba(80, 140, 255, 0.25)',
          boxShadow: '0 15px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(80, 140, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(15px)',
          animation: 'fadeInUp 1s ease-out 0.3s backwards',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(80, 140, 255, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          <p style={{
            fontFamily: "'Glacial Indifference', sans-serif",
            fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
            lineHeight: '2',
            color: 'rgba(221, 221, 221, 0.95)',
            maxWidth: '950px',
            margin: '0 auto',
            letterSpacing: '0.03em',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
            position: 'relative',
            zIndex: 1
          }}>
            To become India's leading provider of responsive and cost-effective launch services, enabling rapid deployment
            of satellites and payloads while fostering innovation in space technology. We envision a future where space
            access is <span style={{
              color: 'rgba(80, 140, 255, 0.9)',
              fontWeight: '600',
              textShadow: '0 0 10px rgba(80, 140, 255, 0.5)'
            }}>routine, reliable, and within reach</span> for every organization with ambitions beyond Earth.
          </p>
        </div>
      </div>
    </section>
  )
}
