import { FC } from 'react';
import { useTheme } from '@/features/styles/hooks/use-theme.hook';
import { Card, Typography } from '@/features/styles/components';

const MembershipComponent: FC = () => {
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
          MARZO LLEGÓ
        </Typography>

        <div className="max-w-4xl mx-auto">
          {/* Special Offer Card */}
          <Card
            panel="consumer"
            className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl mb-12"
            padding="lg"
          >
            <Typography
              variant="h3"
              weight="semibold"
              className={`mb-6 text-[#19b5e9] text-center`}
            >
              ¡Con una nueva oportunidad para alcanzar tus metas!
            </Typography>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Promotion Details */}
              <div>
                <Typography
                  variant="h3"
                  weight="semibold"
                  className={`mb-4 text-[#19b5e9]`}
                >
                  POR SOLO HOY
                </Typography>
                <ul className="space-y-4">
                  <li className="flex items-center text-white">
                    <span className="mr-3 text-[#19b5e9] text-xl">•</span>
                    <span className="font-medium">Mensualidad + entrenador personal</span>
                  </li>
                  <li className="flex items-center text-white">
                    <span className="mr-3 text-[#19b5e9] text-xl">•</span>
                    <span className="font-medium">Plan de entrenamiento diseñado a tu medida</span>
                  </li>
                  <li className="flex items-center text-white">
                    <span className="mr-3 text-[#19b5e9] text-xl">•</span>
                    <span className="font-medium">Asesoría presencial y online para resolver todas tus dudas</span>
                  </li>
                  <li className="flex items-center text-white">
                    <span className="mr-3 text-[#19b5e9] text-xl">•</span>
                    <span className="font-medium">Plan de nutrición adaptado a tus objetivos</span>
                  </li>
                </ul>
              </div>

              {/* Partner Promotion */}
              <div>
                <Typography
                  variant="h3"
                  weight="semibold"
                  className={`mb-4 text-[#19b5e9]`}
                >
                  PROMOCIÓN ESPECIAL
                </Typography>
                <Card
                  panel="consumer"
                  className="bg-[#19b5e9]/10 border-none"
                  padding="lg"
                >
                  <Typography
                    variant="h3"
                    weight="bold"
                    className="text-white mb-4"
                  >
                    2 PERSONAS
                  </Typography>
                  <Typography
                    variant="h2"
                    weight="bold"
                    className="text-[#19b5e9] mb-2"
                  >
                    $30
                  </Typography>
                  <Typography
                    variant="body"
                    className="text-white/80"
                  >
                    ¡NO SE PIERDAN ESTA OPORTUNIDAD!
                  </Typography>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MembershipComponent; 