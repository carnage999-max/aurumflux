export default function Science() {
  const hotZones = [
    { location: 'Gulf Stream', concentration: '13-18 parts per trillion', depth: '50-200m' },
    { location: 'Pacific Equator', concentration: '15-20 parts per trillion', depth: '100-300m' },
    { location: 'Mediterranean Sea', concentration: '10-15 parts per trillion', depth: '75-250m' },
  ];

  return (
    <section id="science" style={{ position: 'relative', background: '#33546D', padding: '5rem 0 8rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Validated Science and Engineering
          </h2>
          <div style={{ width: '96px', height: '4px', background: '#e6b84f', margin: '0 auto' }}></div>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e6b84f', marginBottom: '2rem', textAlign: 'center' }}>
            Gold Ion Concentrations in Hot Zones
          </h3>
          <div style={{ background: '#284155', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                <thead style={{ background: '#0D2F44' }}>
                  <tr>
                    <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#e6b84f', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>Location</th>
                    <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#e6b84f', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>Concentration</th>
                    <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#e6b84f', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>Optimal Depth</th>
                  </tr>
                </thead>
                <tbody>
                  {hotZones.map((zone, index) => (
                    <tr key={index} style={{ borderTop: '1px solid #33546D', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#33546D'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                      <td style={{ padding: '1rem 1.5rem', color: 'white', fontWeight: '500', whiteSpace: 'nowrap' }}>{zone.location}</td>
                      <td style={{ padding: '1rem 1.5rem', color: '#d1d5db', whiteSpace: 'nowrap' }}>{zone.concentration}</td>
                      <td style={{ padding: '1rem 1.5rem', color: '#d1d5db', whiteSpace: 'nowrap' }}>{zone.depth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {[
            { title: 'Lab Testing Results', image: '/images/rinsing-gold-from-smelter.png' },
            { title: 'Material Testing', image: '/images/gold-on-collectors.png' },
            { title: 'Modeling Results', image: '/images/workers-at-ocean-bottom.png' },
            { title: 'Field Testing', image: '/images/gold-poured-into-a-mould.png' }
          ].map((item, i) => (
            <div key={i} style={{ background: '#284155', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1rem' }}>
                <p style={{ fontSize: '0.875rem', textAlign: 'center', color: '#d1d5db' }}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', background: 'radial-gradient(circle at 30% 30%, #fff2b8 0%, #f7d774 20%, #e6b84f 45%, #ffd778 65%, #b8860b 100%)', color: '#0b1a2d', padding: '1rem 2rem', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: '700', boxShadow: '0 12px 20px rgba(0, 0, 0, 0.35), 0 4px 6px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.35), inset 0 -4px 6px rgba(0, 0, 0, 0.35)', textShadow: '0 1px 1px rgba(255, 255, 255, 0.3), 0 -1px 1px rgba(0, 0, 0, 0.6)', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.filter = 'brightness(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(1)'; }}>
            Download Environmental & Recovery Reports
            <svg style={{ width: '20px', height: '20px', marginLeft: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <path d="M0 120L1440 0V120H0Z" fill="#1F242B"/>
        </svg>
      </div>
    </section>
  );
}
