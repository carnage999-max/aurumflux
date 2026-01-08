'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentTier: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your interest! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" style={{ position: 'relative', background: '#284155', padding: '5rem 0 8rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Secure Investor Access & Contact
          </h2>
          <div style={{ width: '96px', height: '4px', background: '#C39340', margin: '0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
          {/* Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ background: '#0D2F44', borderRadius: '16px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#C39340', marginBottom: '1.5rem' }}>Get in Touch</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: '#C39340', borderRadius: '8px', padding: '0.75rem', flexShrink: 0 }}>
                    <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Email</p>
                    <a href="mailto:aurum@fluxventures.com" style={{ color: 'white', fontSize: '1.125rem', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C39340'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
                      aurum@fluxventures.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: '#C39340', borderRadius: '8px', padding: '0.75rem', flexShrink: 0 }}>
                    <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Mailing Address</p>
                    <p style={{ color: 'white', fontSize: '1.125rem' }}>Nathan Reardon</p>
                    <p style={{ color: '#d1d5db' }}>PO Box 52</p>
                    <p style={{ color: '#d1d5db' }}>Detroit, ME 04929</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Tiers */}
            <div style={{ background: '#0D2F44', borderRadius: '16px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#C39340', marginBottom: '1.5rem' }}>Investment Tiers</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: '#284155', borderRadius: '8px', padding: '1rem', borderLeft: '4px solid #C39340' }}>
                  <h4 style={{ color: 'white', fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.25rem' }}>Individual Investor</h4>
                  <p style={{ color: '#d1d5db' }}>&lt;$1M</p>
                </div>
                <div style={{ background: '#284155', borderRadius: '8px', padding: '1rem', borderLeft: '4px solid #C39340' }}>
                  <h4 style={{ color: 'white', fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.25rem' }}>Premium Investor</h4>
                  <p style={{ color: '#d1d5db' }}>$1M – $10M</p>
                </div>
                <div style={{ background: '#284155', borderRadius: '8px', padding: '1rem', borderLeft: '4px solid #C39340' }}>
                  <h4 style={{ color: 'white', fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.25rem' }}>Strategic Partner</h4>
                  <p style={{ color: '#d1d5db' }}>&gt;$10M</p>
                </div>
              </div>
            </div>

            {/* NDA Notice */}
            <div style={{ background: 'linear-gradient(to bottom right, #C39340, #b38736)', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <svg style={{ width: '24px', height: '24px', color: 'white', flexShrink: 0, marginTop: '0.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div>
                  <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>Confidential Information</h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem' }}>
                    All investor communications require NDA execution. Download or DocuSign available upon request.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: '#0D2F44', borderRadius: '16px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#C39340', marginBottom: '1.5rem' }}>Investor Interest Form</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={{ width: '100%', background: '#284155', color: 'white', padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', outline: 'none' }}
                  placeholder="John Doe"
                  onFocus={(e) => e.currentTarget.style.outline = '2px solid #C39340'}
                  onBlur={(e) => e.currentTarget.style.outline = 'none'}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: 'block', color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{ width: '100%', background: '#284155', color: 'white', padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', outline: 'none' }}
                  placeholder="john@example.com"
                  onFocus={(e) => e.currentTarget.style.outline = '2px solid #C39340'}
                  onBlur={(e) => e.currentTarget.style.outline = 'none'}
                />
              </div>

              <div>
                <label htmlFor="phone" style={{ display: 'block', color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ width: '100%', background: '#284155', color: 'white', padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', outline: 'none' }}
                  placeholder="+1 (555) 123-4567"
                  onFocus={(e) => e.currentTarget.style.outline = '2px solid #C39340'}
                  onBlur={(e) => e.currentTarget.style.outline = 'none'}
                />
              </div>

              <div>
                <label htmlFor="investmentTier" style={{ display: 'block', color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Investment Interest *
                </label>
                <select
                  id="investmentTier"
                  name="investmentTier"
                  required
                  value={formData.investmentTier}
                  onChange={handleChange}
                  style={{ width: '100%', background: '#284155', color: 'white', padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', outline: 'none' }}
                  onFocus={(e) => e.currentTarget.style.outline = '2px solid #C39340'}
                  onBlur={(e) => e.currentTarget.style.outline = 'none'}
                >
                  <option value="">Select Investment Tier</option>
                  <option value="individual">&lt;$1M - Individual Investor</option>
                  <option value="premium">$1M – $10M - Premium Investor</option>
                  <option value="strategic">&gt;$10M - Strategic Partner</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  style={{ width: '100%', background: '#284155', color: 'white', padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', outline: 'none', resize: 'none' }}
                  placeholder="Tell us about your investment interests..."
                  onFocus={(e) => e.currentTarget.style.outline = '2px solid #C39340'}
                  onBlur={(e) => e.currentTarget.style.outline = 'none'}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <input
                  type="checkbox"
                  id="nda"
                  required
                  style={{ marginTop: '0.25rem', width: '20px', height: '20px', accentColor: '#C39340' }}
                />
                <label htmlFor="nda" style={{ fontSize: '0.875rem', color: '#d1d5db' }}>
                  I agree to execute an NDA before receiving confidential information about AurumFlux<sup>®</sup>
                </label>
              </div>

              <button
                type="submit"
                style={{ width: '100%', background: '#C39340', color: 'white', padding: '1rem 2rem', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: '600', border: 'none', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#b38736'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#C39340'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                Submit Investor Inquiry
              </button>

              <p style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center' }}>
                By submitting this form, you acknowledge that your information will be handled in accordance with our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', marginTop: '5rem' }}>
        <div style={{ borderTop: '1px solid #33546D', paddingTop: '2rem', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img src="/images/aurumflux-logo.png" alt="AurumFlux Logo" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>AurumFlux<sup style={{ fontSize: '0.75rem' }}>®</sup></span>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
              © 2025{new Date().getFullYear() > 2025 ? ` - ${new Date().getFullYear()}` : ''} AurumFlux. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C39340'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
                Privacy Policy
              </a>
              <a href="#" style={{ color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C39340'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          div[style*="grid-template-columns: 1fr"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 768px) {
          div[style*="flex-direction: column"]:has(> div > p:contains("©")) {
            flex-direction: row !important;
            justify-content: space-between !important;
          }
        }
      `}</style>
    </section>
  );
}
