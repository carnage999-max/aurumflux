export default function MarketPotential() {
  const competitiveEdges = [
    {
      title: 'No Excavation',
      description: 'Unlike traditional mining, AurumFlux operates without disturbing land or marine ecosystems.',
    },
    {
      title: 'No Land Footprint',
      description: 'Oceanic deployment eliminates the need for mining sites, permits, or environmental rehabilitation.',
    },
    {
      title: 'High-Yield Extraction Every 24 Hours',
      description: 'Continuous operation delivers consistent daily gold recovery with minimal downtime.',
    },
  ];

  const deploymentZones = [
    { zone: 'Gulf Stream', potential: 'High', concentration: '15-18 ppt' },
    { zone: 'Pacific Equator', potential: 'Very High', concentration: '18-20 ppt' },
    { zone: 'Mediterranean', potential: 'Medium', concentration: '10-15 ppt' },
    { zone: 'Indian Ocean', potential: 'High', concentration: '12-16 ppt' },
  ];

  return (
    <section id="market" style={{ position: 'relative', background: '#33546D', padding: '5rem 0 8rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Market Potential & Strategic Positioning
          </h2>
          <div style={{ width: '96px', height: '4px', background: '#C39340', margin: '0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', marginBottom: '4rem' }}>
          {/* Global Gold Demand Growth */}
          <div style={{ background: '#284155', borderRadius: '16px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#C39340', marginBottom: '1.5rem' }}>Global Gold Demand Growth</h3>
            <div style={{ background: '#0D2F44', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'white', minWidth: '60px' }}>2024</span>
                  <div style={{ flex: 1, margin: '0 1rem', background: '#33546D', borderRadius: '9999px', height: '16px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', insetBlock: 0, left: 0, background: '#C39340', borderRadius: '9999px', width: '70%' }}></div>
                  </div>
                  <span style={{ color: '#C39340', fontWeight: '600', minWidth: '100px', textAlign: 'right' }}>4,500 tonnes</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'white', minWidth: '60px' }}>2025</span>
                  <div style={{ flex: 1, margin: '0 1rem', background: '#33546D', borderRadius: '9999px', height: '16px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', insetBlock: 0, left: 0, background: '#C39340', borderRadius: '9999px', width: '80%' }}></div>
                  </div>
                  <span style={{ color: '#C39340', fontWeight: '600', minWidth: '100px', textAlign: 'right' }}>4,900 tonnes</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'white', minWidth: '60px' }}>2026</span>
                  <div style={{ flex: 1, margin: '0 1rem', background: '#33546D', borderRadius: '9999px', height: '16px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', insetBlock: 0, left: 0, background: '#C39340', borderRadius: '9999px', width: '90%' }}></div>
                  </div>
                  <span style={{ color: '#C39340', fontWeight: '600', minWidth: '100px', textAlign: 'right' }}>5,300 tonnes</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'white', minWidth: '60px' }}>2027</span>
                  <div style={{ flex: 1, margin: '0 1rem', background: '#33546D', borderRadius: '9999px', height: '16px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', insetBlock: 0, left: 0, background: '#C39340', borderRadius: '9999px', width: '100%' }}></div>
                  </div>
                  <span style={{ color: '#C39340', fontWeight: '600', minWidth: '100px', textAlign: 'right' }}>5,800 tonnes</span>
                </div>
              </div>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginTop: '1.5rem', textAlign: 'center' }}>
                Annual growth rate: 8-12% | Market value: $420B+
              </p>
            </div>
          </div>

          {/* Deployment Map */}
          <div style={{ background: '#284155', borderRadius: '16px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#C39340', marginBottom: '1.5rem' }}>High-Concentration Ocean Areas</h3>
            <div style={{ background: '#0D2F44', borderRadius: '12px', padding: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden' }}>
                <img src="/images/world-map-deployment.jpg" alt="Global Deployment Zones" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {deploymentZones.map((zone, index) => (
                <div key={index} style={{ background: '#0D2F44', borderRadius: '8px', padding: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'white', fontWeight: '500' }}>{zone.zone}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{zone.concentration}</span>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      background: zone.potential === 'Very High' ? '#C39340' : zone.potential === 'High' ? 'rgba(195, 147, 64, 0.7)' : '#33546D',
                      color: 'white'
                    }}>
                      {zone.potential}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive Edge */}
        <div style={{ background: '#0D2F44', borderRadius: '16px', padding: '2rem 3rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
          <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#C39340', marginBottom: '2rem', textAlign: 'center' }}>Competitive Edge</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {competitiveEdges.map((edge, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ background: '#C39340', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <svg style={{ width: '32px', height: '32px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.75rem' }}>{edge.title}</h4>
                <p style={{ color: '#d1d5db' }}>{edge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Statistics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
          <div style={{ background: 'linear-gradient(to bottom right, #C39340, #b38736)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}>
            <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>20M</p>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Tons of Gold in Oceans</p>
          </div>
          <div style={{ background: 'linear-gradient(to bottom right, #C39340, #b38736)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}>
            <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>$1.3T</p>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Total Market Value</p>
          </div>
          <div style={{ background: 'linear-gradient(to bottom right, #C39340, #b38736)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}>
            <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>71%</p>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Earth's Surface is Ocean</p>
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <path d="M0 120L1440 0V120H0Z" fill="#1F242B"/>
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
