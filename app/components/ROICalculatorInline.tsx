'use client';

import { useState, useEffect } from 'react';

export default function ROICalculator() {
  const [unitCost, setUnitCost] = useState(700000);
  const [concentration, setConcentration] = useState(15);
  const [deploymentDays, setDeploymentDays] = useState(365);
  const [results, setResults] = useState({
    dailyRecovery: 0,
    totalRecovery: 0,
    revenue: 0,
    breakeven: 0,
    roi: 0,
  });

  useEffect(() => {
    const goldPricePerGram = 65;
    const dailyRecovery = concentration;
    const totalRecovery = dailyRecovery * deploymentDays;
    const revenue = totalRecovery * goldPricePerGram;
    const breakeven = unitCost / (dailyRecovery * goldPricePerGram);
    const roi = ((revenue - unitCost) / unitCost) * 100;

    setResults({
      dailyRecovery,
      totalRecovery,
      revenue,
      breakeven: Math.ceil(breakeven),
      roi,
    });
  }, [unitCost, concentration, deploymentDays]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="roi" style={{ position: 'relative', background: '#1F242B', padding: '5rem 0 8rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Investor ROI & Revenue Tool
          </h2>
          <div style={{ width: '96px', height: '4px', background: '#e6b84f', margin: '0 auto' }}></div>
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto 3rem', background: '#0D2F44', borderRadius: '16px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', borderLeft: '4px solid #e6b84f' }}>
          <p style={{ fontSize: '1.25rem', fontWeight: '700', color: '#e6b84f', marginBottom: '1rem' }}>
            A modular ocean remediation and resource recovery platform.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Gold as revenue engine',
              'Microplastics as environmental scale',
              'Mercury as regulatory and public health solution',
            ].map((item) => (
              <li key={item} style={{ color: '#d1d5db', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e6b84f', marginTop: '0.5rem', flexShrink: 0 }}></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Calculator Inputs */}
          <div style={{ background: '#284155', borderRadius: '16px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e6b84f', marginBottom: '1.5rem' }}>Calculate Your Returns</h3>

            {/* Unit Cost */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>
                Unit Cost ($)
              </label>
              <input
                type="number"
                value={unitCost}
                onChange={(e) => setUnitCost(Number(e.target.value))}
                style={{ width: '100%', background: '#0D2F44', color: 'white', padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', outline: 'none' }}
                onFocus={(e) => e.currentTarget.style.outline = '2px solid #e6b84f'}
                onBlur={(e) => e.currentTarget.style.outline = 'none'}
              />
              <input
                type="range"
                min="500000"
                max="2000000"
                step="50000"
                value={unitCost}
                onChange={(e) => setUnitCost(Number(e.target.value))}
                style={{ width: '100%', marginTop: '0.5rem', accentColor: '#e6b84f' }}
              />
            </div>

            {/* Oceanic Concentration */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>
                Daily Recovery (grams/day)
              </label>
              <input
                type="number"
                value={concentration}
                onChange={(e) => setConcentration(Number(e.target.value))}
                style={{ width: '100%', background: '#0D2F44', color: 'white', padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', outline: 'none' }}
                onFocus={(e) => e.currentTarget.style.outline = '2px solid #e6b84f'}
                onBlur={(e) => e.currentTarget.style.outline = 'none'}
              />
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={concentration}
                onChange={(e) => setConcentration(Number(e.target.value))}
                style={{ width: '100%', marginTop: '0.5rem', accentColor: '#e6b84f' }}
              />
            </div>

            {/* Deployment Days */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>
                Deployment Days
              </label>
              <input
                type="number"
                value={deploymentDays}
                onChange={(e) => setDeploymentDays(Number(e.target.value))}
                style={{ width: '100%', background: '#0D2F44', color: 'white', padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', outline: 'none' }}
                onFocus={(e) => e.currentTarget.style.outline = '2px solid #e6b84f'}
                onBlur={(e) => e.currentTarget.style.outline = 'none'}
              />
              <input
                type="range"
                min="30"
                max="730"
                step="30"
                value={deploymentDays}
                onChange={(e) => setDeploymentDays(Number(e.target.value))}
                style={{ width: '100%', marginTop: '0.5rem', accentColor: '#e6b84f' }}
              />
            </div>
          </div>

          {/* Results Display */}
          <div>
            <div style={{ background: 'radial-gradient(circle at 30% 30%, #fff2b8 0%, #f7d774 20%, #e6b84f 45%, #ffd778 65%, #b8860b 100%)', borderRadius: '16px', padding: '2rem', boxShadow: '0 12px 20px rgba(0, 0, 0, 0.35), 0 4px 6px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.35), inset 0 -4px 6px rgba(0, 0, 0, 0.35)', border: '2px solid #b8860b', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0b1a2d', marginBottom: '1.5rem', textShadow: '0 1px 1px rgba(255, 255, 255, 0.3), 0 -1px 1px rgba(0, 0, 0, 0.6)' }}>Projected Returns</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'rgba(11, 26, 45, 0.15)', borderRadius: '8px', padding: '1rem', border: '1px solid rgba(11, 26, 45, 0.2)' }}>
                  <p style={{ fontSize: '0.875rem', color: '#1a1a1a', marginBottom: '0.25rem', fontWeight: '600' }}>Daily Recovery</p>
                  <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#0b1a2d', textShadow: '0 1px 1px rgba(255, 255, 255, 0.3)' }}>{results.dailyRecovery}g</p>
                </div>

                <div style={{ background: 'rgba(11, 26, 45, 0.15)', borderRadius: '8px', padding: '1rem', border: '1px solid rgba(11, 26, 45, 0.2)' }}>
                  <p style={{ fontSize: '0.875rem', color: '#1a1a1a', marginBottom: '0.25rem', fontWeight: '600' }}>Total Gold Recovery</p>
                  <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#0b1a2d', textShadow: '0 1px 1px rgba(255, 255, 255, 0.3)' }}>{results.totalRecovery.toFixed(0)}g</p>
                </div>

                <div style={{ background: 'rgba(11, 26, 45, 0.15)', borderRadius: '8px', padding: '1rem', border: '1px solid rgba(11, 26, 45, 0.2)' }}>
                  <p style={{ fontSize: '0.875rem', color: '#1a1a1a', marginBottom: '0.25rem', fontWeight: '600' }}>Projected Revenue</p>
                  <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#0b1a2d', textShadow: '0 1px 1px rgba(255, 255, 255, 0.3)' }}>${results.revenue.toLocaleString()}</p>
                </div>

                <div style={{ background: 'rgba(11, 26, 45, 0.15)', borderRadius: '8px', padding: '1rem', border: '1px solid rgba(11, 26, 45, 0.2)' }}>
                  <p style={{ fontSize: '0.875rem', color: '#1a1a1a', marginBottom: '0.25rem', fontWeight: '600' }}>Breakeven Point</p>
                  <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#0b1a2d', textShadow: '0 1px 1px rgba(255, 255, 255, 0.3)' }}>{results.breakeven} days</p>
                  <p style={{ fontSize: '0.875rem', color: '#1a1a1a', marginTop: '0.25rem', fontWeight: '600' }}>≈ {(results.breakeven / 30).toFixed(1)} months</p>
                </div>

                <div style={{ background: 'rgba(11, 26, 45, 0.15)', borderRadius: '8px', padding: '1rem', border: '1px solid rgba(11, 26, 45, 0.2)' }}>
                  <p style={{ fontSize: '0.875rem', color: '#1a1a1a', marginBottom: '0.25rem', fontWeight: '600' }}>Return on Investment</p>
                  <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#0b1a2d', textShadow: '0 1px 1px rgba(255, 255, 255, 0.3)' }}>{results.roi.toFixed(1)}%</p>
                </div>
              </div>
            </div>

            {/* Example Display */}
            <div style={{ background: '#284155', borderRadius: '12px', padding: '1.5rem', borderLeft: '4px solid #e6b84f', marginBottom: '1.5rem' }}>
              <p style={{ color: '#d1d5db', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Example Scenario:</p>
              <p style={{ color: 'white', fontWeight: '600' }}>
                $700k unit = breakeven in 5 months at 15g/day recovery
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              style={{ width: '100%', background: 'radial-gradient(circle at 30% 30%, #fff2b8 0%, #f7d774 20%, #e6b84f 45%, #ffd778 65%, #b8860b 100%)', color: '#0b1a2d', padding: '1rem 2rem', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: '700', border: 'none', cursor: 'pointer', boxShadow: '0 12px 20px rgba(0, 0, 0, 0.35), 0 4px 6px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.35), inset 0 -4px 6px rgba(0, 0, 0, 0.35)', textShadow: '0 1px 1px rgba(255, 255, 255, 0.3), 0 -1px 1px rgba(0, 0, 0, 0.6)', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.filter = 'brightness(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(1)'; }}
              onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.98)'; e.currentTarget.style.boxShadow = 'inset 0 6px 10px rgba(0,0,0,0.4)'; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.35), 0 4px 6px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.35), inset 0 -4px 6px rgba(0, 0, 0, 0.35)'; }}
            >
              Schedule a Strategy Call
            </button>
          </div>
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
