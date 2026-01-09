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
    <section id="contact" className="relative bg-[#284155] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Secure Investor Access & Contact
          </h2>
          <div className="w-24 h-1 bg-[#e6b84f] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#0D2F44] rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#e6b84f] mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#e6b84f] rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:info@aurumfluxocean.com" className="text-white hover:text-[#e6b84f] transition-colors text-lg">
                      info@aurumfluxocean.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#e6b84f] rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Mailing Address</p>
                    <p className="text-white text-lg">AurumFlux Ocean</p>
                    <p className="text-gray-300">PO Box 52</p>
                    <p className="text-gray-300">Detroit, ME 04929</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Tiers */}
            <div className="bg-[#0D2F44] rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#e6b84f] mb-6">Investment Tiers</h3>
              <div className="space-y-4">
                <div className="bg-[#284155] rounded-lg p-4 border-l-4 border-[#e6b84f]">
                  <h4 className="text-white font-semibold text-lg mb-1">Individual Investor</h4>
                  <p className="text-gray-300">&lt;$1M</p>
                </div>
                <div className="bg-[#284155] rounded-lg p-4 border-l-4 border-[#e6b84f]">
                  <h4 className="text-white font-semibold text-lg mb-1">Premium Investor</h4>
                  <p className="text-gray-300">$1M – $10M</p>
                </div>
                <div className="bg-[#284155] rounded-lg p-4 border-l-4 border-[#e6b84f]">
                  <h4 className="text-white font-semibold text-lg mb-1">Strategic Partner</h4>
                  <p className="text-gray-300">&gt;$10M</p>
                </div>
              </div>
            </div>

            {/* NDA Notice */}
            <div className="bg-gradient-to-br from-[#e6b84f] to-[#d4a838] rounded-xl p-6 shadow-xl">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div>
                  <h4 className="text-white font-semibold mb-2">Confidential Information</h4>
                  <p className="text-white/90 text-sm">
                    All investor communications require NDA execution. Download or DocuSign available upon request.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0D2F44] rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#e6b84f] mb-6">Investor Interest Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#284155] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e6b84f]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#284155] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e6b84f]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#284155] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e6b84f]"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="investmentTier" className="block text-white font-semibold mb-2">
                  Investment Interest *
                </label>
                <select
                  id="investmentTier"
                  name="investmentTier"
                  required
                  value={formData.investmentTier}
                  onChange={handleChange}
                  className="w-full bg-[#284155] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e6b84f]"
                >
                  <option value="">Select Investment Tier</option>
                  <option value="individual">&lt;$1M - Individual Investor</option>
                  <option value="premium">$1M – $10M - Premium Investor</option>
                  <option value="strategic">&gt;$10M - Strategic Partner</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#284155] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e6b84f] resize-none"
                  placeholder="Tell us about your investment interests..."
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="nda"
                  required
                  className="mt-1 w-5 h-5 accent-[#e6b84f]"
                />
                <label htmlFor="nda" className="text-sm text-gray-300">
                  I agree to execute an NDA before receiving confidential information about AurumFlux<sup>®</sup>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#e6b84f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#d4a838] transition-all transform hover:scale-105 shadow-lg"
              >
                Submit Investor Inquiry
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you acknowledge that your information will be handled in accordance with our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="border-t border-[#33546D] pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#e6b84f] rounded-full flex items-center justify-center">
                <span className="text-[#1F242B] font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold text-white">AurumFlux Ocean<sup className="text-xs">®</sup></span>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AurumFlux Ocean . All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#e6b84f] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e6b84f] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
