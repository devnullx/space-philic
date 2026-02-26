export default function VisionMission() {
  return (
    <section style={{ padding: '6rem 5%', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        <div style={{ padding: '3rem', background: '#010000', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', letterSpacing: '3px', color: '#fff' }}>
            VISION
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(221, 221, 221, 0.89)' }}>
            To develop and operate cutting edge space technology to support life on planets or in space.
          </p>
        </div>

        <div style={{ padding: '3rem', background: '#010000', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', letterSpacing: '3px', color: '#fff' }}>
            MISSION
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(221, 221, 221, 0.89)' }}>
            To become a pioneer in space tech industry by developing a sustainable ecosystem.
          </p>
        </div>
      </div>
    </section>
  )
}
