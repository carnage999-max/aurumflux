'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';

const coreCapabilities = [
  {
    label: 'Gold recovery (existing system)',
  },
  {
    label: 'Microplastics interception',
    image: '/images/aurum-microplastics.png',
    alt: 'Aureum microplastics logo',
  },
  {
    label: 'Mercury removal and stabilization',
    image: '/images/aurum-mercury.png',
    alt: 'Aureum mercury logo',
  },
  {
    label: 'Single platform, isolated subsystems',
  },
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
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openImage = (src: string, alt: string) => {
    setActiveImage({ src, alt });
    setIsZoomed(false);
  };

  const closeImage = () => {
    setActiveImage(null);
    setIsZoomed(false);
  };

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
              <div key={capability.label} style={{ background: '#0D2F44', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)', border: '1px solid #33546D', textAlign: 'center', overflow: 'hidden' }}>
                {capability.image ? (
                  <button
                    type="button"
                    onClick={() => openImage(capability.image as string, capability.alt as string)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', border: 'none', background: '#284155', cursor: 'zoom-in', padding: '1.25rem 1rem' }}
                    aria-label={`Open ${capability.label} image`}
                  >
                    <img
                      src={capability.image}
                      alt={capability.alt}
                      style={{ width: '180px', height: 'auto', objectFit: 'contain', borderRadius: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.35)' }}
                    />
                  </button>
                ) : null}
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ color: 'white', fontWeight: '600' }}>{capability.label}</p>
                </div>
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
              <div key={module.label} style={{ background: '#0D2F44', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)', borderLeft: '4px solid #e6b84f', height: '100%' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', background: '#284155', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem', boxSizing: 'border-box' }}>
                  <button
                    type="button"
                    onClick={() => openImage(module.image, module.alt)}
                    style={{ display: 'inline-flex', border: 'none', background: 'transparent', cursor: 'zoom-in', padding: 0 }}
                    aria-label={`Open ${module.label} image`}
                  >
                    <img src={module.image} alt={module.alt} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </button>
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <a href={module.href} style={{ color: '#e6b84f', fontWeight: '700', fontSize: '1.125rem', lineHeight: '1.5', textDecoration: 'none' }}>
                    {module.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeImage ? (
        <div
          role="dialog"
          aria-modal="true"
          style={{ position: 'fixed', inset: 0, background: 'rgba(13, 47, 68, 0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 60, padding: '1.5rem' }}
          onClick={closeImage}
        >
          <div
            style={{ maxWidth: '960px', width: '100%', textAlign: 'center', position: 'relative' }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeImage}
              style={{ position: 'absolute', top: '-12px', right: '-12px', background: '#e6b84f', color: '#0b1a2d', border: 'none', borderRadius: '9999px', width: '36px', height: '36px', cursor: 'pointer', fontWeight: '700' }}
              aria-label="Close image preview"
            >
              ×
            </button>
            <button
              type="button"
              onClick={() => setIsZoomed((prev) => !prev)}
              style={{ border: 'none', background: 'transparent', cursor: isZoomed ? 'zoom-out' : 'zoom-in', padding: 0 }}
              aria-label="Toggle zoom"
            >
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  borderRadius: '18px',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                  transform: isZoomed ? 'scale(1.4)' : 'scale(1)',
                  transition: 'transform 0.25s ease',
                }}
              />
            </button>
            <p style={{ color: '#d1d5db', marginTop: '1rem' }}>Click image to {isZoomed ? 'zoom out' : 'zoom in'}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
