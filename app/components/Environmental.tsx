export default function Environmental() {
  return (
    <section id="environmental" className="relative bg-[#284155] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Environmental Neutrality Commitment
          </h2>
          <div className="w-24 h-1 bg-[#C39340] mx-auto"></div>
        </div>

        {/* Zero Harm Pledge */}
        <div className="bg-[#0D2F44] rounded-2xl p-12 shadow-2xl mb-12 text-center border-4 border-[#C39340]">
          <div className="inline-block bg-[#C39340] rounded-full p-6 mb-6">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-[#C39340] mb-4">"Zero Harm" Gold Extraction Pledge</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AurumFlux<sup>®</sup> is committed to extracting oceanic gold without disrupting marine ecosystems.
            Our closed-loop system ensures that seawater returns to its natural state after processing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Seawater-to-Seawater Closed Loop */}
          <div className="bg-[#33546D] rounded-xl p-8 shadow-xl transform hover:scale-105 transition-all">
            <div className="bg-[#C39340] rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-4">Seawater-to-Seawater Closed Loop</h3>
            <p className="text-gray-300 text-center">
              Water intake and discharge maintain identical chemical composition, ensuring zero environmental impact on marine chemistry.
            </p>
          </div>

          {/* AI-Based Adaptive Flow Rate */}
          <div className="bg-[#33546D] rounded-xl p-8 shadow-xl transform hover:scale-105 transition-all">
            <div className="bg-[#C39340] rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-4">AI-Based Adaptive Flow Rate</h3>
            <p className="text-gray-300 text-center">
              Machine learning algorithms continuously adjust water flow to optimize extraction while preventing disruption to local currents.
            </p>
          </div>

          {/* Marine Life Protection */}
          <div className="bg-[#33546D] rounded-xl p-8 shadow-xl transform hover:scale-105 transition-all">
            <div className="bg-[#C39340] rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-4">Marine Life Protection</h3>
            <p className="text-gray-300 text-center">
              Advanced intake filtering prevents any marine organisms from entering the system, protecting biodiversity at all operational depths.
            </p>
          </div>
        </div>

        {/* Infographic Placeholder */}
        <div className="bg-[#0D2F44] rounded-2xl p-8 shadow-2xl mb-8">
          <div className="aspect-video bg-gradient-to-br from-[#284155] to-[#0D2F44] rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/closed-loop-diagram.jpg')] bg-cover bg-center opacity-60"></div>
            <div className="relative z-10 text-center p-8">
              <svg className="w-32 h-32 mx-auto text-[#C39340] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <p className="text-gray-300 font-semibold">Closed Loop System Infographic</p>
              <p className="text-sm text-gray-400 mt-2">Seawater In → Gold Extraction → Purified Seawater Out</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-[#C39340] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#b38736] transition-all transform hover:scale-105 shadow-lg"
          >
            View Environmental Addendum
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L1440 0V120H0Z" fill="#0D2F44"/>
        </svg>
      </div>
    </section>
  );
}
