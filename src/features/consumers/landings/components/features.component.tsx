import { FC } from 'react';
import { useTheme } from '@/features/styles/hooks/use-theme.hook';
import Image from 'next/image';

const features = [
  {
    title: 'Virtual Pet System',
    description: 'Your fitness companion grows and evolves as you achieve your goals. Feed and care for your pet by completing workouts!',
    image: '/images/virtual-pet.png',
  },
  {
    title: 'Mission System',
    description: 'Complete daily, weekly, and monthly missions to earn points and unlock rewards. Stay motivated with exciting challenges!',
    image: '/images/missions.png',
  },
  {
    title: 'Social Features',
    description: 'Connect with friends, join group challenges, and share your progress. Make fitness fun and social!',
    image: '/images/social.png',
  },
  {
    title: 'Interactive Gym Map',
    description: 'See real-time gym activity, find available equipment, and connect with other members. Make the most of your gym time!',
    image: '/images/gym-map.png',
  },
];

const FeaturesComponent: FC = () => {
  const theme = useTheme();
  const panelTheme = theme.getPanelTheme('consumer');

  return (
    <section className={`py-20 ${panelTheme.background}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-12 ${panelTheme.text}`}>
          Transform Your Fitness Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                p-6 rounded-lg
                ${panelTheme.accent} bg-opacity-10
                hover:bg-opacity-20 transition-all
              `}
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${panelTheme.text}`}>
                {feature.title}
              </h3>
              <p className={`text-sm ${panelTheme.text} opacity-80`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent; 