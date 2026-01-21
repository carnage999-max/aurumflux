import Navigation from '../components/Navigation';

const pollutantItems = [
  'Mercury removal aligned with international reduction frameworks.',
  'No mercury use in gold recovery.',
  'No chemical dispersants or secondary contamination.',
];

export default function RegulatoryCompliancePage() {
  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      <Navigation />

      <section style={{ position: 'relative', background: '#0D2F44', padding: '8rem 0 6rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Regulatory & Compliance
          </h1>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <path d="M1440 0L0 120H1440V0Z" fill="#284155"/>
          </svg>
        </div>
      </section>

      <section style={{ position: 'relative', background: '#284155', padding: '5rem 0 7rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
              Toxic Pollutant Remediation
            </h2>
            <div style={{ width: '96px', height: '4px', background: '#e6b84f', margin: '0 auto' }}></div>
          </div>

          <div style={{ background: '#0D2F44', borderRadius: '16px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', borderLeft: '4px solid #e6b84f' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {pollutantItems.map((item) => (
                <li key={item} style={{ color: '#d1d5db', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e6b84f', marginTop: '0.5rem', flexShrink: 0 }}></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
