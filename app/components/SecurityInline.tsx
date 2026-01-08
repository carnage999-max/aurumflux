export default function Security() {
  const securityFeatures = [
    {
      title: 'Onboard Military-Grade Surveillance',
      description: 'Advanced 360° camera systems with thermal imaging and night vision capabilities monitor the unit continuously.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      ),
    },
    {
      title: 'Satellite Tether',
      description: 'Real-time GPS tracking and satellite communication ensure constant location monitoring and instant alert systems.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
    {
      title: 'Auto-Relocation Avoidance System',
      description: 'AI-powered collision detection and autonomous repositioning keeps units safe from vessels and underwater hazards.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
    },
    {
      title: 'Drone Oversight Loop',
      description: 'Periodic autonomous drone patrols provide aerial surveillance and visual confirmation of unit integrity.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      ),
    },
  ];

  return (
    <section id="security" style={{ position: 'relative', background: '#0D2F44', padding: '5rem 0 8rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Anti-Theft and Collision Avoidance
          </h2>
          <div style={{ width: '96px', height: '4px', background: '#C39340', margin: '0 auto' }}></div>
        </div>

        {/* Security Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              style={{ background: '#284155', borderRadius: '12px', padding: '2rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)', transition: 'all 0.3s', borderLeft: '4px solid #C39340' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ background: '#C39340', borderRadius: '8px', padding: '0.75rem', flexShrink: 0 }}>
                  <svg style={{ width: '32px', height: '32px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.75rem' }}>{feature.title}</h3>
                  <p style={{ color: '#d1d5db' }}>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Visualization */}
        <div style={{ background: '#284155', borderRadius: '16px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#C39340', marginBottom: '1.5rem', textAlign: 'center' }}>Multi-Layer Security Protocol</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {/* Layer 1 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ background: '#0D2F44', borderRadius: '50%', width: '96px', height: '96px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <span style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#C39340' }}>1</span>
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>Detection</h4>
              <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>
                Surveillance systems identify threats in real-time
              </p>
            </div>

            {/* Layer 2 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ background: '#0D2F44', borderRadius: '50%', width: '96px', height: '96px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <span style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#C39340' }}>2</span>
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>Alert</h4>
              <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>
                Instant satellite notification to command center
              </p>
            </div>

            {/* Layer 3 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ background: '#0D2F44', borderRadius: '50%', width: '96px', height: '96px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <span style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#C39340' }}>3</span>
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>Response</h4>
              <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>
                Autonomous evasion or lockdown protocols engaged
              </p>
            </div>
          </div>
        </div>

        {/* Security Image Placeholder */}
        <div style={{ background: '#284155', borderRadius: '16px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', marginBottom: '2rem' }}>
          <div style={{ aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden' }}>
            <img src="/images/security-features.png" alt="Security Features" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="#"
            style={{ display: 'inline-flex', alignItems: 'center', background: '#C39340', color: 'white', padding: '1rem 2rem', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: '600', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', textDecoration: 'none', transition: 'all 0.3s' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#b38736'; e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#C39340'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            View Full Security Protocol
            <svg style={{ width: '20px', height: '20px', marginLeft: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <path d="M1440 0L0 120H1440V0Z" fill="#33546D"/>
        </svg>
      </div>
    </section>
  );
}
