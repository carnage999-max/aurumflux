'use client';

import Navigation from './components/Navigation';
import Hero from './components/HeroInline';
import Technology from './components/TechnologyInline';
import Science from './components/ScienceInline';
import ROICalculator from './components/ROICalculatorInline';
import Environmental from './components/EnvironmentalInline';
import Security from './components/SecurityInline';
import MarketPotential from './components/MarketPotentialInline';
import About from './components/AboutInline';
import Contact from './components/ContactInline';

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      <Navigation />
      <Hero />
      <Technology />
      <Science />
      <ROICalculator />
      <Environmental />
      <Security />
      <MarketPotential />
      <About />
      <Contact />
    </div>
  );
}
