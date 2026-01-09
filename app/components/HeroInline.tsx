'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(13, 47, 68, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(195, 147, 64, 0.2)';
      ctx.lineWidth = 1;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = 'rgba(195, 147, 64, 0.6)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i !== j) {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#0D2F44'
    }}>
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(13, 47, 68, 0.5), rgba(13, 47, 68, 0.7), rgba(13, 47, 68, 1))',
        zIndex: 10
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        textAlign: 'center',
        padding: '0 1rem',
        maxWidth: '80rem',
        margin: '0 auto',
        paddingTop: '5rem'
      }}>
        {/* Hero Image */}
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
          <img src="/images/aurumflux-collector-ocean.png" alt="AurumFlux Collector in Ocean" style={{ width: '100%', maxWidth: '400px', height: 'auto', objectFit: 'contain', borderRadius: '20px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)', border: '3px solid #e6b84f' }} />
        </div>

        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 4.5rem)',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1.5rem',
          lineHeight: '1.2'
        }}>
          Unlocking Oceanic Wealth — The Future of Gold Harvesting
        </h1>

        <p style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
          color: '#e6b84f',
          marginBottom: '3rem',
          maxWidth: '48rem',
          margin: '0 auto 3rem'
        }}>
          The ocean holds 20 million tons of dissolved gold. AurumFlux<sup>®</sup> is how we extract it.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          <button
            onClick={() => scrollToSection('technology')}
            style={{
              position: 'relative',
              background: 'radial-gradient(circle at 30% 30%, #fff2b8 0%, #f7d774 20%, #e6b84f 45%, #ffd778 65%, #b8860b 100%)',
              color: '#0b1a2d',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              fontSize: '1.125rem',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 12px 20px rgba(0, 0, 0, 0.35), 0 4px 6px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.35), inset 0 -4px 6px rgba(0, 0, 0, 0.35)',
              transition: 'all 0.3s ease',
              minWidth: '200px',
              textShadow: '0 1px 1px rgba(255, 255, 255, 0.3), 0 -1px 1px rgba(0, 0, 0, 0.6)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.filter = 'brightness(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'brightness(1)';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)';
              e.currentTarget.style.boxShadow = 'inset 0 6px 10px rgba(0,0,0,0.4)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.35), 0 4px 6px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.35), inset 0 -4px 6px rgba(0, 0, 0, 0.35)';
            }}
          >
            See How It Works
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            style={{
              position: 'relative',
              background: 'transparent',
              color: '#e6b84f',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              fontSize: '1.125rem',
              fontWeight: '700',
              border: '2px solid #e6b84f',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '200px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'radial-gradient(circle at 30% 30%, #fff2b8 0%, #f7d774 20%, #e6b84f 45%, #ffd778 65%, #b8860b 100%)';
              e.currentTarget.style.color = '#0b1a2d';
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.35), 0 4px 6px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.35), inset 0 -4px 6px rgba(0, 0, 0, 0.35)';
              e.currentTarget.style.textShadow = '0 1px 1px rgba(255, 255, 255, 0.3), 0 -1px 1px rgba(0, 0, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#e6b84f';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.textShadow = 'none';
            }}
          >
            Investor Portal
          </button>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
          <svg style={{ width: '24px', height: '24px', color: '#e6b84f' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 30 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <path d="M0 120L1440 0V120H0Z" fill="#284155"/>
        </svg>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }
        @media (min-width: 640px) {
          div:first-of-type > div {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
}
