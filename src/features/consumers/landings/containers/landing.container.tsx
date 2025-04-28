'use client';

import { FC } from 'react';
import NavbarComponent from '../components/navbar.component';
import FloatingButtonsComponent from '../components/floating-buttons.component';
import SocialProofComponent from '../components/social-proof.component';
import PromoSliderComponent from '../components/promo-slider.component';
import { Hours } from '../components/hours/hours.component';
import { SectionTitle } from '../components/section-title';
import { Location } from '../components/location';

const LandingContainer: FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <NavbarComponent />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <SectionTitle title="BIENVENIDO" component="h1" />
        <SocialProofComponent />
        <SectionTitle title="PLANES" />
        <PromoSliderComponent />
        <SectionTitle title="HORARIOS" />
        <Hours/>
        <SectionTitle title="UBÍCANOS" />
        <Location />
      </div>
      <FloatingButtonsComponent />
    </main>
  );
};

export default LandingContainer; 