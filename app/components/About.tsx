export default function About() {
  return (
    <section id="about" className="relative bg-[#1F242B] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About the Founder & Vision
          </h2>
          <div className="w-24 h-1 bg-[#e6b84f] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#284155] to-[#0D2F44] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#e6b84f]">
              <div className="aspect-square flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/founder-photo.jpg')] bg-cover bg-center opacity-60"></div>
                <div className="relative z-10 text-center">
                  <div className="w-48 h-48 mx-auto bg-[#e6b84f] rounded-full flex items-center justify-center mb-6 border-4 border-white">
                    <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-xl font-semibold">Visionary Leadership</p>
                  <p className="text-gray-300 mt-2">Pioneering Oceanic Wealth Extraction</p>
                </div>
              </div>
            </div>

            {/* Innovation Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#e6b84f] rounded-full p-6 shadow-2xl">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>

          {/* Story & Vision */}
          <div className="space-y-6">
            <div className="bg-[#284155] rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#e6b84f] mb-4">Personal Story of Origin</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Oceanic wealth extraction as the next gold rush.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The vision for AurumFlux<sup>®</sup> was born from a simple realization: beneath the waves lies an untapped fortune worth trillions.
                While traditional mining depletes terrestrial resources and scars landscapes, the ocean holds 20 million tons of dissolved gold—enough
                to revolutionize the global economy without harming our planet.
              </p>
            </div>

            <div className="bg-[#284155] rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#e6b84f] mb-4">Track Record of Innovation</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-[#e6b84f] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-300">Pioneer in sustainable oceanic resource extraction technology</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-[#e6b84f] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-300">Developer of proprietary ion-exchange gold separation systems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-[#e6b84f] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-300">Committed to zero-impact environmental engineering</p>
                </div>
              </div>
            </div>

            {/* Signature Quote */}
            <div className="bg-gradient-to-br from-[#0D2F44] to-[#284155] rounded-xl p-8 shadow-2xl border-l-4 border-[#e6b84f] relative">
              <svg className="absolute top-4 left-4 w-12 h-12 text-[#e6b84f] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl lg:text-2xl text-white font-semibold italic pl-8 relative z-10">
                "If you knew there was $1 trillion beneath your feet, would you just walk away?"
              </p>
              <p className="text-gray-400 mt-4 pl-8 text-sm">— Founder's Vision Statement</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-[#e6b84f] rounded-2xl p-12 shadow-2xl text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            To unlock the ocean's wealth responsibly, proving that prosperity and environmental stewardship
            are not mutually exclusive. AurumFlux<sup>®</sup> represents the future of resource extraction—sustainable,
            innovative, and limitless.
          </p>
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
