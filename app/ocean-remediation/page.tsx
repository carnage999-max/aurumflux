import Navigation from '../components/Navigation';

const coreCapabilities = [
  'Gold recovery (existing system)',
  'Microplastics interception',
  'Mercury removal and stabilization',
  'Single platform, isolated subsystems',
];

const architectureModules = [
  {
    href: '/#technology',
    label: 'Gold Extraction Core (locked, electrochemical)',
    image: '/images/aurumflux-system.png',
    alt: 'Gold extraction core system',
  },
  {
    href: '/ocean-remediation/microplastics',
    label: 'Microplastics Capture Module (external, high-throughput)',
    image: '/images/microplastic-capture.png',
    alt: 'Microplastics capture module',
  },
  {
    href: '/ocean-remediation/mercury',
    label: 'Mercury Capture Module (sealed, adsorption-based)',
    image: '/images/mercury.png',
    alt: 'Mercury capture module',
  },
];

export default function OceanRemediationPage() {
  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      <Navigation />

      <section style={{ position: 'relative', background: '#0D2F44', padding: '8rem 0 6rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
            A Modular Ocean Remediation Platform
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: '#d1d5db', lineHeight: '1.7' }}>
            Aureum removes valuable resources from the ocean while simultaneously extracting toxic and persistent pollutants—without chemicals, wildlife harm, or secondary contamination.
          </p>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <path d="M1440 0L0 120H1440V0Z" fill="#284155"/>
          </svg>
        </div>
      </section>

      <section style={{ position: 'relative', background: '#284155', padding: '5rem 0 7rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
              Core Capabilities
            </h2>
            <div style={{ width: '96px', height: '4px', background: '#e6b84f', margin: '0 auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {coreCapabilities.map((capability) => (
              <div key={capability} style={{ background: '#0D2F44', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)', border: '1px solid #33546D' }}>
                <p style={{ color: 'white', fontWeight: '600', textAlign: 'center' }}>{capability}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <path d="M0 120L1440 0V120H0Z" fill="#1F242B"/>
          </svg>
        </div>
      </section>

      <section style={{ position: 'relative', background: '#1F242B', padding: '5rem 0 8rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
              One Platform. Three Isolated Systems.
            </h2>
            <div style={{ width: '96px', height: '4px', background: '#e6b84f', margin: '0 auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {architectureModules.map((module) => (
              <a key={module.label} href={module.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#0D2F44', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)', borderLeft: '4px solid #e6b84f', height: '100%' }}>
                  <div style={{ width: '100%', aspectRatio: '16/9', background: '#284155', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem', boxSizing: 'border-box' }}>
                    <img src={module.image} alt={module.alt} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ padding: '1.75rem' }}>
                    <p style={{ color: '#e6b84f', fontWeight: '700', fontSize: '1.125rem', lineHeight: '1.5' }}>{module.label}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
