export default function Science() {
  const hotZones = [
    { location: 'Gulf Stream', concentration: '13-18 parts per trillion', depth: '50-200m' },
    { location: 'Pacific Equator', concentration: '15-20 parts per trillion', depth: '100-300m' },
    { location: 'Mediterranean Sea', concentration: '10-15 parts per trillion', depth: '75-250m' },
  ];

  return (
    <section id="science" className="relative bg-[#33546D] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Validated Science and Engineering
          </h2>
          <div className="w-24 h-1 bg-[#e6b84f] mx-auto"></div>
        </div>

        {/* Gold Ion Concentrations Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#e6b84f] mb-8 text-center">
            Gold Ion Concentrations in Hot Zones
          </h3>
          <div className="bg-[#284155] rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0D2F44]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#e6b84f] uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#e6b84f] uppercase tracking-wider">
                      Concentration
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#e6b84f] uppercase tracking-wider">
                      Optimal Depth
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#33546D]">
                  {hotZones.map((zone, index) => (
                    <tr key={index} className="hover:bg-[#33546D] transition-colors">
                      <td className="px-6 py-4 text-white font-medium">{zone.location}</td>
                      <td className="px-6 py-4 text-gray-300">{zone.concentration}</td>
                      <td className="px-6 py-4 text-gray-300">{zone.depth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Lab Photos and Testing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Lab Photo 1 */}
          <div className="bg-[#284155] rounded-xl overflow-hidden shadow-xl group cursor-pointer transform hover:scale-105 transition-all">
            <div className="aspect-square bg-gradient-to-br from-[#0D2F44] to-[#284155] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/lab-photos.jpg')] bg-cover bg-center opacity-70"></div>
              <svg className="w-16 h-16 text-[#e6b84f] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="p-4">
              <p className="text-sm text-center text-gray-300">Lab Testing Results</p>
            </div>
          </div>

          {/* Material Testing */}
          <div className="bg-[#284155] rounded-xl overflow-hidden shadow-xl group cursor-pointer transform hover:scale-105 transition-all">
            <div className="aspect-square bg-gradient-to-br from-[#0D2F44] to-[#284155] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/material-testing.jpg')] bg-cover bg-center opacity-70"></div>
              <svg className="w-16 h-16 text-[#e6b84f] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div className="p-4">
              <p className="text-sm text-center text-gray-300">Material Testing</p>
            </div>
          </div>

          {/* Modeling Results */}
          <div className="bg-[#284155] rounded-xl overflow-hidden shadow-xl group cursor-pointer transform hover:scale-105 transition-all">
            <div className="aspect-square bg-gradient-to-br from-[#0D2F44] to-[#284155] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/modeling-results.jpg')] bg-cover bg-center opacity-70"></div>
              <svg className="w-16 h-16 text-[#e6b84f] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="p-4">
              <p className="text-sm text-center text-gray-300">Modeling Results</p>
            </div>
          </div>

          {/* Field Testing */}
          <div className="bg-[#284155] rounded-xl overflow-hidden shadow-xl group cursor-pointer transform hover:scale-105 transition-all">
            <div className="aspect-square bg-gradient-to-br from-[#0D2F44] to-[#284155] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/field-testing.jpg')] bg-cover bg-center opacity-70"></div>
              <svg className="w-16 h-16 text-[#e6b84f] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="p-4">
              <p className="text-sm text-center text-gray-300">Field Testing</p>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-[#e6b84f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#d4a838] transition-all transform hover:scale-105 shadow-lg"
          >
            Download Environmental & Recovery Reports
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
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
