export default function Team() {
  const teamMembers = [
    {
      name: "Aditya Kushwaha",
      position: "Co-Founder & CEO",
      linkedin: "https://www.linkedin.com/in/aaakii/"
    },
    {
      name: "Indra Chaudhary",
      position: "Co-Founder & CTO",
      linkedin: "https://www.linkedin.com/in/indra-chaudhary/"
    },
    {
      name: "Harshwardhan Singh",
      position: "Co-Founder & CFO",
      linkedin: "https://www.linkedin.com/in/harshwardhan-singh-5699a3229/"
    },
    {
      name: "Shashank Shukla",
      position: "Head of Avionics",
      linkedin: "https://www.linkedin.com/in/shashank-shukla-8b9679252/"
    },
    {
      name: "Praneet Tiwari",
      position: "Head of Manufacturing",
      linkedin: "https://www.linkedin.com/in/praneet-tiwari-7073ba221/"
    },
    {
      name: "Himanshu Verma",
      position: "Head of Structures",
      linkedin: "https://www.linkedin.com/in/himanshu-verma-iitd/"
    }
  ];

  return (
    <section id="team" style={{
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
          OUR TEAM
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {teamMembers.map((member, index) => (
            <div key={index} style={{
              background: 'rgba(221, 221, 221, 0.05)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '15px',
              padding: '2.5rem 2rem',
              border: '1px solid rgba(221, 221, 221, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
            }}
            >
              {/* Profile Image Placeholder */}
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(221, 221, 221, 0.2)',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'rgba(221, 221, 221, 0.3)'
              }}>
                👤
              </div>

              <h3 style={{
                fontFamily: "'Glacial Indifference', sans-serif",
                fontSize: '1.4rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                color: '#fff'
              }}>
                {member.name}
              </h3>

              <p style={{
                fontFamily: "'Glacial Indifference', sans-serif",
                fontSize: '0.95rem',
                letterSpacing: '0.05em',
                color: 'rgba(221, 221, 221, 0.6)',
                marginBottom: '1.5rem'
              }}>
                {member.position}
              </p>

              {/* LinkedIn Link */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(221, 221, 221, 0.1)',
                  border: '1px solid rgba(221, 221, 221, 0.3)',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0077b5';
                  e.currentTarget.style.borderColor = '#0077b5';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(221, 221, 221, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(221, 221, 221, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg
                  width="20"
                  height="20"
                  fill="rgba(221, 221, 221, 0.89)"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452H17.21v-5.569c0-1.327-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.982V9h3.1v1.561h.045c.431-.817 1.484-1.679 3.054-1.679 3.268 0 3.868 2.15 3.868 4.945v6.625zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zm1.558 13.019H3.779V9h3.116v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
