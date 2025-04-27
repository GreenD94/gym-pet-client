import { FC } from 'react';
import { useTheme } from '@/features/styles/hooks/use-theme.hook';
import { Card, Typography } from '@/features/styles/components';

const ScheduleComponent: FC = () => {
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
          HORARIO DE ENTRENAMIENTO
        </Typography>

        <div className="max-w-2xl mx-auto">
          <Card
            panel="consumer"
            className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl"
            padding="lg"
          >
            {/* Weekdays */}
            <div className="mb-8">
              <Typography
                variant="h3"
                weight="semibold"
                className={`mb-4 text-[#19b5e9]`}
              >
                LUNES A VIERNES
              </Typography>
              <Typography
                variant="body"
                className={`text-xl ${panelTheme.text}`}
              >
                6:30 AM - 8:00 PM
              </Typography>
            </div>

            {/* Weekends */}
            <div>
              <Typography
                variant="h3"
                weight="semibold"
                className={`mb-4 text-[#19b5e9]`}
              >
                SÁBADO Y FERIADOS
              </Typography>
              <Typography
                variant="body"
                className={`text-xl ${panelTheme.text}`}
              >
                7:00 AM - 1:00 PM
              </Typography>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleComponent; 