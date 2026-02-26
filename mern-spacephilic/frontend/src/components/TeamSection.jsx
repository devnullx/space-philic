export default function TeamSection({ teamMembers }) {
  return (
    <section style={{ padding: '6rem 5%', background: '#010000' }}>
      <h2 className="section-title">OUR TEAM</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '3rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {teamMembers.map((member) => (
          <div
            key={member.id}
            style={{
              background: '#010000',
              borderRadius: '10px',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{
              width: '150px',
              height: '150px',
              background: '#010000',
              borderRadius: '50%',
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid rgba(221, 221, 221, 0.3)',
              overflow: 'hidden'
            }}>
              {member.photo_url ? (
                <img src={member.photo_url} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span style={{ color: '#444', fontSize: '0.8rem', letterSpacing: '1px' }}>PHOTO</span>
              )}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '1px' }}>
              {member.name}
            </h3>
            <p style={{ fontSize: '1rem', color: 'rgba(221, 221, 221, 0.89)', marginBottom: '1rem' }}>
              {member.role}
            </p>
            {member.education && (
              <p style={{ fontSize: '0.9rem', color: 'rgba(221, 221, 221, 0.89)', marginBottom: '0.8rem', lineHeight: '1.4' }}>
                {member.education}
              </p>
            )}
            {member.experience && (
              <p style={{ fontSize: '0.85rem', color: 'rgba(221, 221, 221, 0.89)', marginBottom: '0.5rem' }}>
                {member.experience}
              </p>
            )}
            {member.focus_areas && (
              <p style={{ fontSize: '0.85rem', color: 'rgba(221, 221, 221, 0.89)', lineHeight: '1.4' }}>
                {member.focus_areas}
              </p>
            )}

            {member.linkedin_url && (
              <div style={{ marginTop: '1rem' }}>
                <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
