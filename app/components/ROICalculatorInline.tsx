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
          <div style={{ width: '96px', height: '4px', background: '#C39340', margin: '0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Calculator Inputs */}
          <div style={{ background: '#284155', borderRadius: '16px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#C39340', marginBottom: '1.5rem' }}>Calculate Your Returns</h3>

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
                onFocus={(e) => e.currentTarget.style.outline = '2px solid #C39340'}
                onBlur={(e) => e.currentTarget.style.outline = 'none'}
              />
              <input
                type="range"
                min="500000"
                max="2000000"
                step="50000"
                value={unitCost}
                onChange={(e) => setUnitCost(Number(e.target.value))}
                style={{ width: '100%', marginTop: '0.5rem', accentColor: '#C39340' }}
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
                onFocus={(e) => e.currentTarget.style.outline = '2px solid #C39340'}
                onBlur={(e) => e.currentTarget.style.outline = 'none'}
              />
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={concentration}
                onChange={(e) => setConcentration(Number(e.target.value))}
                style={{ width: '100%', marginTop: '0.5rem', accentColor: '#C39340' }}
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
                onFocus={(e) => e.currentTarget.style.outline = '2px solid #C39340'}
                onBlur={(e) => e.currentTarget.style.outline = 'none'}
              />
              <input
                type="range"
                min="30"
                max="730"
                step="30"
                value={deploymentDays}
                onChange={(e) => setDeploymentDays(Number(e.target.value))}
                style={{ width: '100%', marginTop: '0.5rem', accentColor: '#C39340' }}
              />
            </div>
          </div>

          {/* Results Display */}
          <div>
            <div style={{ background: 'linear-gradient(to bottom right, #C39340, #b38736)', borderRadius: '16px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>Projected Returns</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '1rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.25rem' }}>Daily Recovery</p>
                  <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>{results.dailyRecovery}g</p>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '1rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.25rem' }}>Total Gold Recovery</p>
                  <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>{results.totalRecovery.toFixed(0)}g</p>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '1rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.25rem' }}>Projected Revenue</p>
                  <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>${results.revenue.toLocaleString()}</p>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '1rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.25rem' }}>Breakeven Point</p>
                  <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>{results.breakeven} days</p>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.25rem' }}>≈ {(results.breakeven / 30).toFixed(1)} months</p>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '1rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.25rem' }}>Return on Investment</p>
                  <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>{results.roi.toFixed(1)}%</p>
                </div>
              </div>
            </div>

            {/* Example Display */}
            <div style={{ background: '#284155', borderRadius: '12px', padding: '1.5rem', borderLeft: '4px solid #C39340', marginBottom: '1.5rem' }}>
              <p style={{ color: '#d1d5db', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Example Scenario:</p>
              <p style={{ color: 'white', fontWeight: '600' }}>
                $700k unit = breakeven in 5 months at 15g/day recovery
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              style={{ width: '100%', background: '#C39340', color: 'white', padding: '1rem 2rem', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: '600', border: 'none', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#b38736'; e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#C39340'; e.currentTarget.style.transform = 'scale(1)'; }}
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
