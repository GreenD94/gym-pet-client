import React from 'react';
import { HeroSection } from './components';

export const LandingContainer: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* Other sections will be added here */}
    </main>
  );
}; 