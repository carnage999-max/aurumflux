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
    <section id="roi" className="relative bg-[#1F242B] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Investor ROI & Revenue Tool
          </h2>
          <div className="w-24 h-1 bg-[#e6b84f] mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-12 bg-[#0D2F44] rounded-2xl p-8 shadow-2xl border-l-4 border-[#e6b84f]">
          <p className="text-xl font-bold text-[#e6b84f] mb-4">
            A modular ocean remediation and resource recovery platform.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>Gold as revenue engine</li>
            <li>Microplastics as environmental scale</li>
            <li>Mercury as regulatory and public health solution</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="bg-[#284155] rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#e6b84f] mb-6">Calculate Your Returns</h3>

            {/* Unit Cost */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">
                Unit Cost ($)
              </label>
              <input
                type="number"
                value={unitCost}
                onChange={(e) => setUnitCost(Number(e.target.value))}
                className="w-full bg-[#0D2F44] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e6b84f]"
              />
              <input
                type="range"
                min="500000"
                max="2000000"
                step="50000"
                value={unitCost}
                onChange={(e) => setUnitCost(Number(e.target.value))}
                className="w-full mt-2 accent-[#e6b84f]"
              />
            </div>

            {/* Oceanic Concentration */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">
                Daily Recovery (grams/day)
              </label>
              <input
                type="number"
                value={concentration}
                onChange={(e) => setConcentration(Number(e.target.value))}
                className="w-full bg-[#0D2F44] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e6b84f]"
              />
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={concentration}
                onChange={(e) => setConcentration(Number(e.target.value))}
                className="w-full mt-2 accent-[#e6b84f]"
              />
            </div>

            {/* Deployment Days */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">
                Deployment Days
              </label>
              <input
                type="number"
                value={deploymentDays}
                onChange={(e) => setDeploymentDays(Number(e.target.value))}
                className="w-full bg-[#0D2F44] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e6b84f]"
              />
              <input
                type="range"
                min="30"
                max="730"
                step="30"
                value={deploymentDays}
                onChange={(e) => setDeploymentDays(Number(e.target.value))}
                className="w-full mt-2 accent-[#e6b84f]"
              />
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#e6b84f] to-[#d4a838] rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Projected Returns</h3>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm text-white/80 mb-1">Daily Recovery</p>
                  <p className="text-3xl font-bold text-white">{results.dailyRecovery}g</p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm text-white/80 mb-1">Total Gold Recovery</p>
                  <p className="text-3xl font-bold text-white">{results.totalRecovery.toFixed(0)}g</p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm text-white/80 mb-1">Projected Revenue</p>
                  <p className="text-3xl font-bold text-white">${results.revenue.toLocaleString()}</p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm text-white/80 mb-1">Breakeven Point</p>
                  <p className="text-3xl font-bold text-white">{results.breakeven} days</p>
                  <p className="text-sm text-white/70 mt-1">≈ {(results.breakeven / 30).toFixed(1)} months</p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm text-white/80 mb-1">Return on Investment</p>
                  <p className="text-3xl font-bold text-white">{results.roi.toFixed(1)}%</p>
                </div>
              </div>
            </div>

            {/* Example Display */}
            <div className="bg-[#284155] rounded-xl p-6 border-l-4 border-[#e6b84f]">
              <p className="text-gray-300 text-sm mb-2">Example Scenario:</p>
              <p className="text-white font-semibold">
                $700k unit = breakeven in 5 months at 15g/day recovery
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="w-full bg-[#e6b84f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#d4a838] transition-all transform hover:scale-105 shadow-lg"
            >
              Schedule a Strategy Call
            </button>
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M1440 0L0 120H1440V0Z" fill="#284155"/>
        </svg>
      </div>
    </section>
  );
}
