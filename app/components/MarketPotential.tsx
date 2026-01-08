export default function MarketPotential() {
  const competitiveEdges = [
    {
      title: 'No Excavation',
      description: 'Unlike traditional mining, AurumFlux operates without disturbing land or marine ecosystems.',
    },
    {
      title: 'No Land Footprint',
      description: 'Oceanic deployment eliminates the need for mining sites, permits, or environmental rehabilitation.',
    },
    {
      title: 'High-Yield Extraction Every 24 Hours',
      description: 'Continuous operation delivers consistent daily gold recovery with minimal downtime.',
    },
  ];

  const deploymentZones = [
    { zone: 'Gulf Stream', potential: 'High', concentration: '15-18 ppt' },
    { zone: 'Pacific Equator', potential: 'Very High', concentration: '18-20 ppt' },
    { zone: 'Mediterranean', potential: 'Medium', concentration: '10-15 ppt' },
    { zone: 'Indian Ocean', potential: 'High', concentration: '12-16 ppt' },
  ];

  return (
    <section id="market" className="relative bg-[#33546D] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Market Potential & Strategic Positioning
          </h2>
          <div className="w-24 h-1 bg-[#C39340] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Global Gold Demand Growth */}
          <div className="bg-[#284155] rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#C39340] mb-6">Global Gold Demand Growth</h3>
            <div className="bg-[#0D2F44] rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">2024</span>
                  <div className="flex-1 mx-4 bg-[#33546D] rounded-full h-4 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-[#C39340] rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <span className="text-[#C39340] font-semibold">4,500 tonnes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">2025</span>
                  <div className="flex-1 mx-4 bg-[#33546D] rounded-full h-4 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-[#C39340] rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <span className="text-[#C39340] font-semibold">4,900 tonnes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">2026</span>
                  <div className="flex-1 mx-4 bg-[#33546D] rounded-full h-4 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-[#C39340] rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <span className="text-[#C39340] font-semibold">5,300 tonnes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">2027</span>
                  <div className="flex-1 mx-4 bg-[#33546D] rounded-full h-4 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-[#C39340] rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <span className="text-[#C39340] font-semibold">5,800 tonnes</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-6 text-center">
                Annual growth rate: 8-12% | Market value: $420B+
              </p>
            </div>
          </div>

          {/* Deployment Map */}
          <div className="bg-[#284155] rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#C39340] mb-6">High-Concentration Ocean Areas</h3>
            <div className="bg-[#0D2F44] rounded-xl p-6 mb-4">
              <div className="aspect-video bg-gradient-to-br from-[#284155] to-[#0D2F44] rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/world-map-deployment.jpg')] bg-cover bg-center opacity-50"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-24 h-24 mx-auto text-[#C39340]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-300 mt-2">Global Deployment Zones</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {deploymentZones.map((zone, index) => (
                <div key={index} className="bg-[#0D2F44] rounded-lg p-3 flex justify-between items-center">
                  <span className="text-white font-medium">{zone.zone}</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400 text-sm">{zone.concentration}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      zone.potential === 'Very High' ? 'bg-[#C39340] text-white' :
                      zone.potential === 'High' ? 'bg-[#C39340]/70 text-white' :
                      'bg-[#33546D] text-gray-300'
                    }`}>
                      {zone.potential}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive Edge */}
        <div className="bg-[#0D2F44] rounded-2xl p-8 lg:p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-[#C39340] mb-8 text-center">Competitive Edge</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competitiveEdges.map((edge, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#C39340] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{edge.title}</h4>
                <p className="text-gray-300">{edge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-[#C39340] to-[#b38736] rounded-xl p-6 text-center shadow-xl">
            <p className="text-4xl font-bold text-white mb-2">20M</p>
            <p className="text-white/90">Tons of Gold in Oceans</p>
          </div>
          <div className="bg-gradient-to-br from-[#C39340] to-[#b38736] rounded-xl p-6 text-center shadow-xl">
            <p className="text-4xl font-bold text-white mb-2">$1.3T</p>
            <p className="text-white/90">Total Market Value</p>
          </div>
          <div className="bg-gradient-to-br from-[#C39340] to-[#b38736] rounded-xl p-6 text-center shadow-xl">
            <p className="text-4xl font-bold text-white mb-2">71%</p>
            <p className="text-white/90">Earth's Surface is Ocean</p>
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L1440 0V120H0Z" fill="#1F242B"/>
        </svg>
      </div>
    </section>
  );
}
