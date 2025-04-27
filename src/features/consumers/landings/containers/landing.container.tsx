'use client';

import { FC } from 'react';
import { useTheme } from '@/features/styles/hooks/use-theme.hook';
import { useScroll } from '@/features/styles/hooks/use-scroll.hook';
import HeroComponent from '@/features/consumers/landings/components/hero.component';
import BenefitsComponent from '@/features/consumers/landings/components/benefits.component';
import MembershipComponent from '@/features/consumers/landings/components/membership.component';
import ScheduleComponent from '@/features/consumers/landings/components/schedule.component';
import LocationComponent from '@/features/consumers/landings/components/location.component';
import ContactComponent from '@/features/consumers/landings/components/contact.component';
import FloatingButtonsComponent from '@/features/consumers/landings/components/floating-buttons.component';
import ResultsComponent from '@/features/consumers/landings/components/results.component';
import InnovationComponent from '@/features/consumers/landings/components/innovation.component';
import CommunityComponent from '@/features/consumers/landings/components/community.component';
import FinalCTAComponent from '@/features/consumers/landings/components/final-cta.component';
import FooterComponent from '@/features/consumers/landings/components/footer.component';

const LandingContainer: FC = () => {
  const theme = useTheme();
  const panelTheme = theme.getPanelTheme('consumer');
  const { isVisible, scrollToSection } = useScroll();

  return (
    <main className={`min-h-screen ${panelTheme.background}`}>
      <section id="hero" className={`transition-opacity duration-500 ${isVisible['hero'] ? 'opacity-100' : 'opacity-0'}`}>
        <HeroComponent />
      </section>
      <section id="benefits" className={`transition-opacity duration-500 ${isVisible['benefits'] ? 'opacity-100' : 'opacity-0'}`}>
        <BenefitsComponent />
      </section>
      <section id="results" className={`transition-opacity duration-500 ${isVisible['results'] ? 'opacity-100' : 'opacity-0'}`}>
        <ResultsComponent />
      </section>
      <section id="innovation" className={`transition-opacity duration-500 ${isVisible['innovation'] ? 'opacity-100' : 'opacity-0'}`}>
        <InnovationComponent />
      </section>
      <section id="community" className={`transition-opacity duration-500 ${isVisible['community'] ? 'opacity-100' : 'opacity-0'}`}>
        <CommunityComponent />
      </section>
      <section id="membership" className={`transition-opacity duration-500 ${isVisible['membership'] ? 'opacity-100' : 'opacity-0'}`}>
        <MembershipComponent />
      </section>
      <section id="schedule" className={`transition-opacity duration-500 ${isVisible['schedule'] ? 'opacity-100' : 'opacity-0'}`}>
        <ScheduleComponent />
      </section>
      <section id="location" className={`transition-opacity duration-500 ${isVisible['location'] ? 'opacity-100' : 'opacity-0'}`}>
        <LocationComponent />
      </section>
      <section id="contact" className={`transition-opacity duration-500 ${isVisible['contact'] ? 'opacity-100' : 'opacity-0'}`}>
        <ContactComponent />
      </section>
      <section id="final-cta" className={`transition-opacity duration-500 ${isVisible['final-cta'] ? 'opacity-100' : 'opacity-0'}`}>
        <FinalCTAComponent />
      </section>
      <FloatingButtonsComponent />
      <FooterComponent />
    </main>
  );
};

export default LandingContainer; 