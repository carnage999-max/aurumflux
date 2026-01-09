export default function Security() {
  const securityFeatures = [
    {
      title: 'Onboard Military-Grade Surveillance',
      description: 'Advanced 360° camera systems with thermal imaging and night vision capabilities monitor the unit continuously.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      ),
    },
    {
      title: 'Satellite Tether',
      description: 'Real-time GPS tracking and satellite communication ensure constant location monitoring and instant alert systems.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
    {
      title: 'Auto-Relocation Avoidance System',
      description: 'AI-powered collision detection and autonomous repositioning keeps units safe from vessels and underwater hazards.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
    },
    {
      title: 'Drone Oversight Loop',
      description: 'Periodic autonomous drone patrols provide aerial surveillance and visual confirmation of unit integrity.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      ),
    },
  ];

  return (
    <section id="security" className="relative bg-[#0D2F44] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Anti-Theft and Collision Avoidance
          </h2>
          <div className="w-24 h-1 bg-[#e6b84f] mx-auto"></div>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-[#284155] rounded-xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all border-l-4 border-[#e6b84f]"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#e6b84f] rounded-lg p-3 flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Visualization */}
        <div className="bg-[#284155] rounded-2xl p-8 shadow-2xl mb-8">
          <h3 className="text-2xl font-bold text-[#e6b84f] mb-6 text-center">Multi-Layer Security Protocol</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Layer 1 */}
            <div className="text-center">
              <div className="bg-[#0D2F44] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#e6b84f]">1</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Detection</h4>
              <p className="text-sm text-gray-300">
                Surveillance systems identify threats in real-time
              </p>
            </div>

            {/* Layer 2 */}
            <div className="text-center">
              <div className="bg-[#0D2F44] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#e6b84f]">2</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Alert</h4>
              <p className="text-sm text-gray-300">
                Instant satellite notification to command center
              </p>
            </div>

            {/* Layer 3 */}
            <div className="text-center">
              <div className="bg-[#0D2F44] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#e6b84f]">3</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Response</h4>
              <p className="text-sm text-gray-300">
                Autonomous evasion or lockdown protocols engaged
              </p>
            </div>
          </div>
        </div>

        {/* Security Image Placeholder */}
        <div className="bg-[#284155] rounded-2xl p-8 shadow-2xl mb-8">
          <div className="aspect-video bg-gradient-to-br from-[#0D2F44] to-[#284155] rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/security-features.jpg')] bg-cover bg-center opacity-60"></div>
            <div className="relative z-10 text-center p-8">
              <svg className="w-32 h-32 mx-auto text-[#e6b84f] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-gray-300 font-semibold">Corrosion-Resistant Lockbox & Security Systems</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-[#e6b84f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#d4a838] transition-all transform hover:scale-105 shadow-lg"
          >
            View Full Security Protocol
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </a>
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
