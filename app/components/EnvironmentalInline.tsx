export default function Environmental() {
  return (
    <section id="environmental" style={{ position: 'relative', background: '#284155', padding: '5rem 0 8rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: '#0b1a2d', marginBottom: '1rem' }}>
            Environmental Neutrality Commitment
          </h2>
          <div style={{ width: '96px', height: '4px', background: '#e6b84f', margin: '0 auto' }}></div>
        </div>

        {/* Zero Harm Pledge */}
        <div style={{ background: '#0D2F44', borderRadius: '16px', padding: '3rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', marginBottom: '3rem', textAlign: 'center', border: '4px solid #e6b84f' }}>
          <div style={{ display: 'inline-block', background: '#e6b84f', borderRadius: '50%', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <svg style={{ width: '64px', height: '64px', color: '#0b1a2d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#e6b84f', marginBottom: '1rem' }}>"Zero Harm" Gold Extraction Pledge</h3>
          <p style={{ fontSize: '1.25rem', color: '#d1d5db', maxWidth: '48rem', margin: '0 auto' }}>
            AurumFlux<sup>®</sup> is committed to extracting oceanic gold without disrupting marine ecosystems.
            Our closed-loop system ensures that seawater returns to its natural state after processing.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* Seawater-to-Seawater Closed Loop */}
          <div style={{ background: '#33546D', borderRadius: '12px', padding: '2rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ background: 'radial-gradient(circle at 30% 30%, #fff2b8 0%, #f7d774 20%, #e6b84f 45%, #ffd778 65%, #b8860b 100%)', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -3px 5px rgba(0, 0, 0, 0.3)', border: '2px solid #b8860b', margin: '0 auto 1.5rem' }}>
              <svg style={{ width: '32px', height: '32px', color: '#0b1a2d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0b1a2d', textAlign: 'center', marginBottom: '1rem' }}>Seawater-to-Seawater Closed Loop</h3>
            <p style={{ color: '#d1d5db', textAlign: 'center' }}>
              Water intake and discharge maintain identical chemical composition, ensuring zero environmental impact on marine chemistry.
            </p>
          </div>

          {/* AI-Based Adaptive Flow Rate */}
          <div style={{ background: '#33546D', borderRadius: '12px', padding: '2rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ background: 'radial-gradient(circle at 30% 30%, #fff2b8 0%, #f7d774 20%, #e6b84f 45%, #ffd778 65%, #b8860b 100%)', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -3px 5px rgba(0, 0, 0, 0.3)', border: '2px solid #b8860b', margin: '0 auto 1.5rem' }}>
              <svg style={{ width: '32px', height: '32px', color: '#0b1a2d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0b1a2d', textAlign: 'center', marginBottom: '1rem' }}>AI-Based Adaptive Flow Rate</h3>
            <p style={{ color: '#d1d5db', textAlign: 'center' }}>
              Machine learning algorithms continuously adjust water flow to optimize extraction while preventing disruption to local currents.
            </p>
          </div>

          {/* Marine Life Protection */}
          <div style={{ background: '#33546D', borderRadius: '12px', padding: '2rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ background: 'radial-gradient(circle at 30% 30%, #fff2b8 0%, #f7d774 20%, #e6b84f 45%, #ffd778 65%, #b8860b 100%)', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -3px 5px rgba(0, 0, 0, 0.3)', border: '2px solid #b8860b', margin: '0 auto 1.5rem' }}>
              <svg style={{ width: '32px', height: '32px', color: '#0b1a2d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0b1a2d', textAlign: 'center', marginBottom: '1rem' }}>Marine Life Protection</h3>
            <p style={{ color: '#d1d5db', textAlign: 'center' }}>
              Advanced intake filtering prevents any marine organisms from entering the system, protecting biodiversity at all operational depths.
            </p>
          </div>
        </div>

        {/* Infographic Placeholder */}
        <div style={{ background: '#0D2F44', borderRadius: '16px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', marginBottom: '2rem' }}>
          <div style={{ aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden' }}>
            <img src="/images/closed-loop-diagram.png" alt="Closed Loop System Diagram" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="#"
            style={{ display: 'inline-flex', alignItems: 'center', background: 'radial-gradient(circle at 30% 30%, #fff2b8 0%, #f7d774 20%, #e6b84f 45%, #ffd778 65%, #b8860b 100%)', color: '#0b1a2d', padding: '1rem 2rem', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: '700', boxShadow: '0 12px 20px rgba(0, 0, 0, 0.35), 0 4px 6px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.35), inset 0 -4px 6px rgba(0, 0, 0, 0.35)', textShadow: '0 1px 1px rgba(255, 255, 255, 0.3), 0 -1px 1px rgba(0, 0, 0, 0.6)', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.filter = 'brightness(1.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(1)'; }}
          >
            View Environmental Addendum
            <svg style={{ width: '20px', height: '20px', marginLeft: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <path d="M0 120L1440 0V120H0Z" fill="#0D2F44"/>
        </svg>
      </div>
    </section>
  );
}
