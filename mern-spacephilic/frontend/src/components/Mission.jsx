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
        margin: '0 auto'
      }}>
        <h2 style={{
          fontFamily: "'Glacial Indifference', sans-serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '900',
          letterSpacing: '5px',
          marginBottom: '4rem',
          color: '#fff',
          textAlign: 'center',
          textShadow: '0 0 20px rgba(80, 140, 255, 0.4), 0 3px 10px rgba(0, 0, 0, 0.8)',
          animation: 'fadeInDown 1s ease-out'
        }}>
          OUR MISSION
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
          gap: 'clamp(3rem, 6vw, 5rem)',
          alignItems: 'center'
        }}>
          {/* Left-aligned Image */}
          <div style={{
            width: '100%',
            maxWidth: '550px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'slideInLeft 1s ease-out 0.3s backwards'
          }}>
            <img
              src="/satellite.png"
              alt="Space Philic Satellite"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 40px rgba(80, 140, 255, 0.3))',
                transition: 'transform 0.4s ease, filter 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05) rotate(2deg)';
                e.target.style.filter = 'drop-shadow(0 0 50px rgba(80, 140, 255, 0.5))';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) rotate(0deg)';
                e.target.style.filter = 'drop-shadow(0 0 40px rgba(80, 140, 255, 0.3))';
              }}
            />
          </div>

          {/* Mission Text */}
          <div style={{
            padding: 'clamp(1rem, 3vw, 2rem)',
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(80, 140, 255, 0.05))',
            borderRadius: '20px',
            border: '1px solid rgba(80, 140, 255, 0.2)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            animation: 'slideInRight 1s ease-out 0.3s backwards'
          }}>
            <p style={{
              fontFamily: "'Glacial Indifference', sans-serif",
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              lineHeight: '1.9',
              color: 'rgba(221, 221, 221, 0.95)',
              letterSpacing: '0.03em',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
            }}>
              Space Philic is pioneering affordable and reliable access to space through innovative reusable launch technology.
              Our mission is to democratize space access for commercial, scientific, and defense applications, making orbital
              deployment accessible to organizations of all sizes across India and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
