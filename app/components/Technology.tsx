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
    <section id="technology" className="relative bg-[#284155] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Technology – How AurumFlux<sup>®</sup> Works
          </h2>
          <div className="w-24 h-1 bg-[#e6b84f] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Schematic */}
          <div className="relative">
            <div className="bg-[#0D2F44] rounded-2xl p-8 shadow-2xl border border-[#33546D]">
              {/* Placeholder for full system image */}
              <div className="aspect-square bg-gradient-to-br from-[#33546D] to-[#0D2F44] rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/aurumflux-system.jpg')] bg-cover bg-center opacity-80"></div>
                <div className="relative z-10 text-center p-8">
                  <div className="w-48 h-48 mx-auto border-4 border-[#e6b84f] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-32 h-32 text-[#e6b84f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300">Interactive System Diagram</p>
                  <p className="text-xs text-gray-400 mt-2">Hover/click subsystems below for details</p>
                </div>
              </div>

              {/* Interactive Hotspots */}
              <div className="grid grid-cols-2 gap-3">
                {techFeatures.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    onMouseEnter={() => setActiveFeature(feature.id)}
                    className={`p-3 rounded-lg transition-all transform hover:scale-105 ${
                      activeFeature === feature.id
                        ? 'bg-[#e6b84f] text-white shadow-lg'
                        : 'bg-[#284155] text-gray-300 hover:bg-[#33546D]'
                    }`}
                  >
                    <span className="text-sm font-semibold">{feature.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Details */}
          <div className="space-y-6">
            {techFeatures.map((feature) => (
              <div
                key={feature.id}
                className={`transition-all duration-500 ${
                  activeFeature === feature.id
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 h-0 overflow-hidden'
                }`}
              >
                <div className="bg-[#0D2F44] rounded-xl p-8 shadow-xl border-l-4 border-[#e6b84f]">
                  <h3 className="text-2xl font-bold text-[#e6b84f] mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="#"
                className="inline-flex items-center bg-[#e6b84f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d4a838] transition-all transform hover:scale-105 shadow-lg"
              >
                See the Full System Patent
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M1440 0L0 120H1440V0Z" fill="#33546D"/>
        </svg>
      </div>
    </section>
  );
}
