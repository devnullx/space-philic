export default function PayloadPlatform() {
  const platforms = [
    {
      number: "1",
      title: "250kg COMMERCIAL",
      subtitle: "Payload Platform",
      description: "The upper stage is designed to carry and deploy satellites with a maximum payload mass of 250 kg, providing a reliable platform for placing small and micro-spacecraft into their designated orbits. It supports standard deployment interfaces and ensures precise injection accuracy for commercial, scientific, and institutional missions."
    },
    {
      number: "2",
      title: "Long Endurance LABORATORY",
      subtitle: "Platform",
      description: "Provides a dedicated platform for carrying multiple independent experimental payloads into low Earth orbit, enabling controlled environmental exposure, in-situ measurement, and continuous real-time data acquisition. The system supports scientific research, material testing, biological studies, and technology validation under true orbital conditions."
    },
    {
      number: "3",
      title: "Fully-Integrated DEFENCE",
      subtitle: "Payload Platform",
      description: "Provides an independent rapid-response launch service capable of deploying defence payloads within a 24-hour window. The Rupak ensures priority readiness, minimal turnaround time, and assured access to orbit for critical national-security missions, enabling real-time tactical support, rapid replenishment, and immediate space-based capability restoration."
    }
  ];

  return (
    <section style={{
      padding: '6rem 5%',
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
          PAYLOAD PLATFORMS
        </h2>

        {platforms.map((platform, index) => (
          <div key={index} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center',
            marginBottom: 'clamp(3rem, 6vw, 6rem)',
            minHeight: 'auto'
          }}>
            <div style={{
              order: index % 2 === 0 ? 1 : 2
            }}>
              <div style={{
                fontFamily: "'Glacial Indifference', sans-serif",
                fontSize: '8rem',
                fontWeight: '700',
                opacity: 0.15,
                lineHeight: 1,
                marginBottom: '-2rem'
              }}>
                {platform.number}
              </div>
              <h3 style={{
                fontFamily: "'Glacial Indifference', sans-serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: '700',
                marginBottom: '0.5rem',
                color: '#fff'
              }}>
                {platform.title}
              </h3>
              <p style={{
                fontFamily: "'Glacial Indifference', sans-serif",
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                opacity: 0.6,
                marginBottom: '2rem'
              }}>
                {platform.subtitle}
              </p>
              <p style={{
                fontFamily: "'Glacial Indifference', sans-serif",
                fontSize: '1rem',
                lineHeight: '1.8',
                color: 'rgba(221, 221, 221, 0.7)'
              }}>
                {platform.description}
              </p>
            </div>

            <div style={{
              order: index % 2 === 0 ? 2 : 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src={`/platform-${platform.number}.png`}
                alt={platform.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.2))'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
