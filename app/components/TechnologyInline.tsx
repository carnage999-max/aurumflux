'use client';

import { useState } from 'react';

const techFeatures = [
  {
    id: 'intake',
    title: 'Intake Arms',
    description: 'Drawing seawater through advanced filtration systems designed to capture gold ions while maintaining ecological balance.',
  },
  {
    id: 'separation',
    title: 'Gold Ion Separation Chamber',
    description: 'Proprietary ion-exchange technology isolates gold particles from seawater with unprecedented efficiency.',
  },
  {
    id: 'energy',
    title: 'Energy Core',
    description: 'Solar/wave hybrid power system ensures sustainable, autonomous operation in oceanic environments.',
  },
  {
    id: 'discharge',
    title: 'Purified Water Discharge',
    description: 'Clean seawater returns to the ocean, maintaining environmental neutrality and marine ecosystem health.',
  },
];

export default function Technology() {
  const [activeFeature, setActiveFeature] = useState<string | null>('intake');

  return (
    <section id="technology" style={{
      position: 'relative',
      background: '#284155',
      padding: '5rem 0 8rem',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem'
          }}>
            The Technology – How AurumFlux<sup>®</sup> Works
          </h2>
          <div style={{
            width: '96px',
            height: '4px',
            background: '#C39340',
            margin: '0 auto'
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Interactive Schematic */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: '#0D2F44',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid #33546D'
            }}>
              {/* Placeholder for full system image */}
              <div style={{
                aspectRatio: '1',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                overflow: 'hidden'
              }}>
                <img src="/images/aurumflux-system.png" alt="AurumFlux System Diagram" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Interactive Hotspots */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem'
              }}>
                {techFeatures.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    onMouseEnter={() => setActiveFeature(feature.id)}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      transition: 'all 0.3s',
                      background: activeFeature === feature.id ? '#C39340' : '#284155',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer',
                      transform: activeFeature === feature.id ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: activeFeature === feature.id ? '0 10px 15px -3px rgba(0, 0, 0, 0.3)' : 'none'
                    }}
                  >
                    <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>{feature.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Details */}
          <div style={{ minHeight: '300px' }}>
            {techFeatures.map((feature) => (
              <div
                key={feature.id}
                style={{
                  display: activeFeature === feature.id ? 'block' : 'none',
                  animation: activeFeature === feature.id ? 'fadeIn 0.5s' : 'none'
                }}
              >
                <div style={{
                  background: '#0D2F44',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
                  borderLeft: '4px solid #C39340'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#C39340',
                    marginBottom: '1rem'
                  }}>{feature.title}</h3>
                  <p style={{
                    color: '#d1d5db',
                    fontSize: '1.125rem',
                    lineHeight: '1.75'
                  }}>{feature.description}</p>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div style={{ paddingTop: '1.5rem' }}>
              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#C39340',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#b38736';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#C39340';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                See the Full System Patent
                <svg style={{ width: '20px', height: '20px', marginLeft: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <path d="M1440 0L0 120H1440V0Z" fill="#33546D"/>
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 1024px) {
          div[style*="grid-template-columns: 1fr"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
