import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import PillarsSection from './components/PillarsSection';
import ProcessSection from './components/ProcessSection';
import InspirationsSection from './components/InspirationsSection';
import ComponentsIntroSection from './components/ComponentsIntroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CTASection from './components/CTASection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <HeroSection />
        <PillarsSection />
        <ProcessSection />
        {/* <InspirationsSection /> */}
        <ComponentsIntroSection />
        <AboutSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}