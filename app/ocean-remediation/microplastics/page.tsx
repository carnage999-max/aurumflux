import Navigation from '../../components/Navigation';

const moduleSections = [
  {
    title: 'Problem Statement',
    body: 'Global microplastics contamination and persistence.',
  },
  {
    title: 'Solution',
    body: 'Passive annular capture skirt, no trawling, no pumps.',
  },
  {
    title: 'Operations',
    body: 'Rapid servicing, off-platform processing.',
  },
];

const impactMetrics = ['kg/day', 'surface area treated', 'cumulative removal'];

export default function MicroplasticsPage() {
  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      <Navigation />

      <section style={{ position: 'relative', background: '#0D2F44', padding: '8rem 0 6rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Microplastics Capture Module
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: '#e6b84f' }}>
            External, high-throughput
          </p>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <path d="M1440 0L0 120H1440V0Z" fill="#284155"/>
          </svg>
        </div>
      </section>

      <section style={{ position: 'relative', background: '#284155', padding: '5rem 0 7rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {moduleSections.map((section) => (
            <div key={section.title} style={{ background: '#0D2F44', borderRadius: '12px', padding: '2rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)', borderLeft: '4px solid #e6b84f' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e6b84f', marginBottom: '0.75rem' }}>{section.title}</h2>
              <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>{section.body}</p>
            </div>
          ))}

          <div style={{ background: '#0D2F44', borderRadius: '12px', padding: '2rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)', borderLeft: '4px solid #e6b84f' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e6b84f', marginBottom: '1.25rem' }}>Impact Metrics</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
              {impactMetrics.map((metric) => (
                <div key={metric} style={{ background: '#284155', borderRadius: '10px', padding: '1rem', textAlign: 'center', color: 'white', fontWeight: '600' }}>
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <path d="M0 120L1440 0V120H0Z" fill="#1F242B"/>
          </svg>
        </div>
      </section>
    </div>
  );
}
