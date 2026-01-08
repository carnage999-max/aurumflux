'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <>
      {/* Desktop Navigation */}
      <nav
        className="hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled ? 'rgba(31, 36, 43, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.3)' : 'none'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/images/aurumflux-logo.png" alt="AurumFlux Logo" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
              <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                AurumFlux<sup style={{ fontSize: '12px' }}>®</sup>
              </span>
            </div>

            {/* Desktop Menu */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <button onClick={() => scrollToSection('technology')} style={{ color: '#d1d5db', cursor: 'pointer', background: 'none', border: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C39340'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                Technology
              </button>
              <button onClick={() => scrollToSection('science')} style={{ color: '#d1d5db', cursor: 'pointer', background: 'none', border: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C39340'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                Science
              </button>
              <button onClick={() => scrollToSection('roi')} style={{ color: '#d1d5db', cursor: 'pointer', background: 'none', border: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C39340'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                ROI Calculator
              </button>
              <button onClick={() => scrollToSection('environmental')} style={{ color: '#d1d5db', cursor: 'pointer', background: 'none', border: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C39340'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                Environmental
              </button>
              <button onClick={() => scrollToSection('security')} style={{ color: '#d1d5db', cursor: 'pointer', background: 'none', border: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C39340'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                Security
              </button>
              <button onClick={() => scrollToSection('market')} style={{ color: '#d1d5db', cursor: 'pointer', background: 'none', border: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C39340'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                Market
              </button>
              <button onClick={() => scrollToSection('about')} style={{ color: '#d1d5db', cursor: 'pointer', background: 'none', border: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C39340'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                style={{
                  background: '#C39340',
                  color: 'white',
                  padding: '8px 24px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
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
                Investor Portal
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Logo with inline tabs */}
      <nav
        className="lg:hidden fixed top-0 left-0 right-0 z-50"
        style={{
          background: isScrolled ? 'rgba(31, 36, 43, 0.95)' : 'rgba(31, 36, 43, 0.9)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          padding: '12px 16px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/images/aurumflux-logo.png" alt="AurumFlux Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0 }} />
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white', whiteSpace: 'nowrap' }}>
              AurumFlux<sup style={{ fontSize: '9px' }}>®</sup>
            </span>
          </div>

          {/* Inline Tabs - Technology and About */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              onClick={() => scrollToSection('technology')}
              style={{
                padding: '6px 12px',
                background: '#284155',
                color: 'white',
                borderRadius: '9999px',
                border: 'none',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection('about')}
              style={{
                padding: '6px 12px',
                background: '#284155',
                color: 'white',
                borderRadius: '9999px',
                border: 'none',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              About
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
