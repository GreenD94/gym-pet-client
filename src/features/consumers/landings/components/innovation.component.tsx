import { FC } from 'react';
import { useTheme } from '@/features/styles/hooks/use-theme.hook';
import { Card, Typography } from '@/features/styles/components';
import Image from 'next/image';

const features = [
  {
    title: 'Sistema de Mascota Virtual',
    description: 'Tu compañero fitness que crece y evoluciona mientras alcanzas tus objetivos. ¡Alimenta y cuida a tu mascota completando entrenamientos!',
    image: '/images/virtual-pet.png',
    icon: '🐾',
    benefits: [
      'Evolución basada en tu asistencia',
      'Personalización con puntos ganados',
      'Estado de salud vinculado a tu actividad',
      'Habilidades especiales desbloqueables'
    ]
  },
  {
    title: 'Sistema de Misiones',
    description: 'Completa misiones diarias, semanales y mensuales para ganar puntos y desbloquear recompensas. ¡Mantente motivado con desafíos emocionantes!',
    image: '/images/missions.png',
    icon: '🎯',
    benefits: [
      'Misiones diarias personalizadas',
      'Desafíos semanales',
      'Logros mensuales',
      'Recompensas exclusivas'
    ]
  },
  {
    title: 'Características Sociales',
    description: 'Conéctate con amigos, únete a desafíos grupales y comparte tu progreso. ¡Haz que el fitness sea divertido y social!',
    image: '/images/social.png',
    icon: '👥',
    benefits: [
      'Sistema de amigos',
      'Desafíos grupales',
      'Integración con redes sociales',
      'Eventos comunitarios'
    ]
  },
  {
    title: 'Mapa Interactivo del Gimnasio',
    description: 'Ve la actividad del gimnasio en tiempo real, encuentra equipamiento disponible y conéctate con otros miembros. ¡Aprovecha al máximo tu tiempo en el gimnasio!',
    image: '/images/gym-map.png',
    icon: '🗺️',
    benefits: [
      'Visualización en tiempo real',
      'Estado del equipamiento',
      'Zonas de actividad',
      'Puntos de encuentro social'
    ]
  }
];

const InnovationComponent: FC = () => {
  const theme = useTheme();
  const panelTheme = theme.getPanelTheme('consumer');

  return (
    <section className={`py-20 ${panelTheme.background}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            weight="bold"
            className={`mb-4 ${panelTheme.text}`}
          >
            Innovación en Fitness
          </Typography>
          <Typography
            variant="body"
            className={`max-w-2xl mx-auto ${panelTheme.text} opacity-80`}
          >
            Descubre cómo la tecnología transforma tu experiencia fitness con características 
            únicas diseñadas para mantenerte motivado y alcanzar tus objetivos.
          </Typography>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              panel="consumer"
              className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl overflow-hidden"
              padding="none"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#19b5e9]/20 flex items-center justify-center">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <Typography
                    variant="h3"
                    weight="semibold"
                    className={panelTheme.text}
                  >
                    {feature.title}
                  </Typography>
                </div>
                
                <Typography
                  variant="body"
                  className={`mb-6 ${panelTheme.text} opacity-80`}
                >
                  {feature.description}
                </Typography>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#19b5e9]/20 flex items-center justify-center">
                        <span className="text-[#19b5e9] text-sm">✓</span>
                      </div>
                      <Typography
                        variant="body"
                        className={panelTheme.text}
                      >
                        {benefit}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card
            panel="consumer"
            className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl max-w-2xl mx-auto"
            padding="lg"
          >
            <Typography
              variant="h3"
              weight="bold"
              className={`mb-4 ${panelTheme.text}`}
            >
              ¿Listo para Transformar tu Experiencia Fitness?
            </Typography>
            <Typography
              variant="body"
              className={`mb-8 ${panelTheme.text} opacity-80`}
            >
              Únete a nuestra comunidad y descubre cómo la tecnología puede ayudarte a alcanzar tus objetivos fitness de manera más efectiva y divertida.
            </Typography>
            <button
              className="bg-[#19b5e9] hover:bg-[#19b5e9]/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Comienza tu Prueba Gratuita
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InnovationComponent; 