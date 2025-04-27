import { FC } from 'react';
import { useTheme } from '@/features/styles/hooks/use-theme.hook';
import { Card, Typography } from '@/features/styles/components';

const LocationComponent: FC = () => {
  const theme = useTheme();
  const panelTheme = theme.getPanelTheme('consumer');

  return (
    <section className={`py-20 ${panelTheme.background}`}>
      <div className="container mx-auto px-4">
        <Typography
          variant="h2"
          weight="bold"
          className={`text-center mb-12 ${panelTheme.text}`}
        >
          UBICANOS
        </Typography>

        <div className="max-w-2xl mx-auto">
          <Card
            panel="consumer"
            className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl text-center"
            padding="lg"
          >
            <Typography
              variant="h3"
              weight="semibold"
              className={`mb-4 text-[#19b5e9]`}
            >
              C.C. COSMOS
            </Typography>
            <Typography
              variant="body"
              className={`text-xl ${panelTheme.text}`}
            >
              PISO 4 / LOCAL 4A-20
            </Typography>

            {/* Map placeholder - To be implemented */}
            <div className="mt-8 aspect-video bg-gray-800 rounded-lg">
              {/* Google Maps or custom map implementation will go here */}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationComponent; 