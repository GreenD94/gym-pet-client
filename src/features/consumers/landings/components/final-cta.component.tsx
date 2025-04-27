import { FC, useState } from 'react';
import { useTheme } from '@/features/styles/hooks/use-theme.hook';
import { Card, Typography } from '@/features/styles/components';
import { Button } from '@/features/styles/components';

const faqs = [
  {
    question: '¿Qué incluye la membresía?',
    answer: 'La membresía incluye acceso completo al gimnasio, entrenamiento personalizado, plan de nutrición, acceso a clases grupales y todas las características de nuestra app.'
  },
  {
    question: '¿Hay un período de prueba?',
    answer: 'Sí, ofrecemos una prueba gratuita de 7 días para que puedas experimentar todas nuestras instalaciones y servicios antes de comprometerte.'
  },
  {
    question: '¿Qué horarios tienen?',
    answer: 'Estamos abiertos 24/7 para tu conveniencia. Nuestros entrenadores están disponibles en horarios específicos que puedes consultar en nuestra app.'
  },
  {
    question: '¿Ofrecen clases grupales?',
    answer: 'Sí, ofrecemos una amplia variedad de clases grupales incluyendo yoga, pilates, spinning, HIIT y más. Todas las clases están incluidas en tu membresía.'
  },
  {
    question: '¿Cómo funciona el sistema de mascota virtual?',
    answer: 'La mascota virtual es un compañero de entrenamiento que evoluciona basado en tu asistencia y logros. Cuanto más entrenes, más crecerá y desarrollará habilidades especiales.'
  },
  {
    question: '¿Puedo congelar mi membresía?',
    answer: 'Sí, ofrecemos la opción de congelar tu membresía por períodos específicos. Consulta con nuestro equipo para más detalles sobre las políticas de congelación.'
  }
];

const FinalCTAComponent: FC = () => {
  const theme = useTheme();
  const panelTheme = theme.getPanelTheme('consumer');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className={`py-20 ${panelTheme.background}`}>
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            weight="bold"
            className={`mb-4 ${panelTheme.text}`}
          >
            Comienza tu Transformación Hoy
          </Typography>
          <Typography
            variant="body"
            className={`max-w-2xl mx-auto mb-8 ${panelTheme.text} opacity-80`}
          >
            Únete a nuestra comunidad y descubre cómo podemos ayudarte a alcanzar tus objetivos fitness.
            ¡La primera semana es gratis!
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              panel="consumer"
              className="bg-[#19b5e9] hover:bg-[#19b5e9]/90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Comienza tu Prueba Gratuita
            </Button>
            <Button
              variant="outline"
              size="lg"
              panel="consumer"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Agenda una Visita
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Typography
            variant="h3"
            weight="semibold"
            className={`mb-8 text-center ${panelTheme.text}`}
          >
            Preguntas Frecuentes
          </Typography>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                panel="consumer"
                className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl"
                padding="lg"
              >
                <button
                  className="w-full text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <Typography
                      variant="h3"
                      weight="semibold"
                      className={panelTheme.text}
                    >
                      {faq.question}
                    </Typography>
                    <span className={`text-2xl transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </div>
                  {openFaq === index && (
                    <Typography
                      variant="body"
                      className={`mt-4 ${panelTheme.text} opacity-80`}
                    >
                      {faq.answer}
                    </Typography>
                  )}
                </button>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            panel="consumer"
            className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl text-center"
            padding="lg"
          >
            <div className="w-12 h-12 rounded-full bg-[#19b5e9]/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-[#19b5e9] text-2xl">📞</span>
            </div>
            <Typography
              variant="h3"
              weight="semibold"
              className={`mb-2 ${panelTheme.text}`}
            >
              Llámanos
            </Typography>
            <Typography
              variant="body"
              className={panelTheme.text}
            >
              +58 412-273-1575
            </Typography>
          </Card>

          <Card
            panel="consumer"
            className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl text-center"
            padding="lg"
          >
            <div className="w-12 h-12 rounded-full bg-[#19b5e9]/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-[#19b5e9] text-2xl">📱</span>
            </div>
            <Typography
              variant="h3"
              weight="semibold"
              className={`mb-2 ${panelTheme.text}`}
            >
              WhatsApp
            </Typography>
            <Typography
              variant="body"
              className={panelTheme.text}
            >
              +58 412-273-1575
            </Typography>
          </Card>

          <Card
            panel="consumer"
            className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl text-center"
            padding="lg"
          >
            <div className="w-12 h-12 rounded-full bg-[#19b5e9]/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-[#19b5e9] text-2xl">📍</span>
            </div>
            <Typography
              variant="h3"
              weight="semibold"
              className={`mb-2 ${panelTheme.text}`}
            >
              Visítanos
            </Typography>
            <Typography
              variant="body"
              className={panelTheme.text}
            >
              C.C. COSMOS, PISO 4 / LOCAL 4A-20
            </Typography>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinalCTAComponent; 