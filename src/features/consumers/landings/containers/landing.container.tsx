'use client';

import { FC } from 'react';
import NavbarComponent from '../components/navbar.component';
import FloatingButtonsComponent from '../components/floating-buttons.component';
import SocialProofComponent from '../components/social-proof.component';
import PromoSliderComponent from '../components/promo-slider.component';
import { Hours } from '../components/hours/hours.component';

const LandingContainer: FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <NavbarComponent />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <SocialProofComponent />
        <PromoSliderComponent />
        <Hours/>
      </div>
      <FloatingButtonsComponent />
    </main>
  );
};

export default LandingContainer; 