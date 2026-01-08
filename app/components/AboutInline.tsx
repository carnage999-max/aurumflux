export default function About() {
  return (
    <section id="about" style={{ position: 'relative', background: '#1F242B', padding: '5rem 0 8rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            About the Founder & Vision
          </h2>
          <div style={{ width: '96px', height: '4px', background: '#C39340', margin: '0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Founder Image/Visual */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '4px solid #C39340' }}>
            <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
              <img src="/images/workers-deployment.png" alt="Team Deployment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Story & Vision */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#284155', borderRadius: '12px', padding: '2rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#C39340', marginBottom: '1rem' }}>Personal Story of Origin</h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.75', marginBottom: '1rem' }}>
                Oceanic wealth extraction as the next gold rush.
              </p>
              <p style={{ color: '#d1d5db', lineHeight: '1.75' }}>
                The vision for AurumFlux<sup>®</sup> was born from a simple realization: beneath the waves lies an untapped fortune worth trillions.
                While traditional mining depletes terrestrial resources and scars landscapes, the ocean holds 20 million tons of dissolved gold—enough
                to revolutionize the global economy without harming our planet.
              </p>
            </div>

            <div style={{ background: '#284155', borderRadius: '12px', padding: '2rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#C39340', marginBottom: '1rem' }}>Track Record of Innovation</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <svg style={{ width: '24px', height: '24px', color: '#C39340', flexShrink: 0, marginTop: '0.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p style={{ color: '#d1d5db' }}>Pioneer in sustainable oceanic resource extraction technology</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <svg style={{ width: '24px', height: '24px', color: '#C39340', flexShrink: 0, marginTop: '0.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p style={{ color: '#d1d5db' }}>Developer of proprietary ion-exchange gold separation systems</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <svg style={{ width: '24px', height: '24px', color: '#C39340', flexShrink: 0, marginTop: '0.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p style={{ color: '#d1d5db' }}>Committed to zero-impact environmental engineering</p>
                </div>
              </div>
            </div>

            {/* Signature Quote */}
            <div style={{ background: 'linear-gradient(to bottom right, #0D2F44, #284155)', borderRadius: '12px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', borderLeft: '4px solid #C39340', position: 'relative' }}>
              <svg style={{ position: 'absolute', top: '1rem', left: '1rem', width: '48px', height: '48px', color: '#C39340', opacity: 0.2 }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', color: 'white', fontWeight: '600', fontStyle: 'italic', paddingLeft: '2rem', position: 'relative', zIndex: 10 }}>
                "If you knew there was $1 trillion beneath your feet, would you just walk away?"
              </p>
              <p style={{ color: '#9ca3af', marginTop: '1rem', paddingLeft: '2rem', fontSize: '0.875rem' }}>— Founder's Vision Statement</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div style={{ marginTop: '4rem', background: '#C39340', borderRadius: '16px', padding: '3rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Our Mission</h3>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '64rem', margin: '0 auto', lineHeight: '1.75' }}>
            To unlock the ocean's wealth responsibly, proving that prosperity and environmental stewardship
            are not mutually exclusive. AurumFlux<sup>®</sup> represents the future of resource extraction—sustainable,
            innovative, and limitless.
          </p>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <path d="M1440 0L0 120H1440V0Z" fill="#284155"/>
        </svg>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          div[style*="grid-template-columns: 1fr"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
