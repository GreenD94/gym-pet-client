import { FC } from 'react';
import { useTheme } from '@/features/styles/hooks/use-theme.hook';
import { Card, Typography } from '@/features/styles/components';
import Image from 'next/image';

const benefits = [
  {
    title: 'Equipamiento de Última Generación',
    description: 'Accede a la tecnología fitness más avanzada y equipamiento diseñado para resultados óptimos',
    image: '/images/equipment.jpg',
    icon: '💪',
    features: [
      'Máquinas de última generación',
      'Zona de cardio completa',
      'Área de peso libre',
      'Equipamiento de recuperación'
    ]
  },
  {
    title: 'Entrenadores Expertos',
    description: 'Profesionales certificados dedicados a ayudarte a alcanzar tus objetivos fitness',
    image: '/images/trainers.jpg',
    icon: '👨‍🏫',
    features: [
      'Certificaciones internacionales',
      'Entrenamiento personalizado',
      'Seguimiento de progreso',
      'Asesoría nutricional'
    ]
  },
  {
    title: 'Programas Diversos',
    description: 'Desde clases grupales hasta entrenamiento personal, encuentra el ajuste perfecto para tu viaje fitness',
    image: '/images/programs.jpg',
    icon: '🎯',
    features: [
      'Clases grupales variadas',
      'Entrenamiento personal',
      'Programas especializados',
      'Horarios flexibles'
    ]
  },
  {
    title: 'Comunidad Apoyadora',
    description: 'Únete a una comunidad de personas con objetivos similares en su viaje fitness',
    image: '/images/community.jpg',
    icon: '👥',
    features: [
      'Eventos comunitarios',
      'Desafíos grupales',
      'Red de apoyo',
      'Celebraciones de logros'
    ]
  }
];

const additionalBenefits = [
  {
    title: 'Acceso 24/7',
    description: 'Entrena cuando quieras, sin restricciones de horario',
    icon: '⏰'
  },
  {
    title: 'Planes Personalizados',
    description: 'Programas adaptados a tus objetivos específicos',
    icon: '📋'
  },
  {
    title: 'Guía Nutricional',
    description: 'Asesoría profesional para optimizar tu alimentación',
    icon: '🥗'
  },
  {
    title: 'Seguimiento de Progreso',
    description: 'Monitorea tu evolución con herramientas avanzadas',
    icon: '📊'
  },
  {
    title: 'Instalaciones de Recuperación',
    description: 'Áreas dedicadas para recuperación y relajación',
    icon: '🧘‍♂️'
  },
  {
    title: 'Membresías Flexibles',
    description: 'Planes adaptados a tus necesidades y presupuesto',
    icon: '💳'
  }
];

const BenefitsComponent: FC = () => {
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
            ¿Por Qué Elegirnos?
          </Typography>
          <Typography
            variant="body"
            className={`max-w-2xl mx-auto ${panelTheme.text} opacity-80`}
          >
            Ofrecemos una experiencia fitness completa con las mejores instalaciones, 
            entrenadores expertos y una comunidad que te apoyará en cada paso del camino.
          </Typography>
        </div>
        
        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              panel="consumer"
              className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl overflow-hidden"
              padding="none"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#19b5e9]/20 flex items-center justify-center">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <Typography
                    variant="h3"
                    weight="semibold"
                    className={panelTheme.text}
                  >
                    {benefit.title}
                  </Typography>
                </div>
                
                <Typography
                  variant="body"
                  className={`mb-6 ${panelTheme.text} opacity-80`}
                >
                  {benefit.description}
                </Typography>

                {/* Features List */}
                <ul className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#19b5e9]/20 flex items-center justify-center">
                        <span className="text-[#19b5e9] text-sm">✓</span>
                      </div>
                      <Typography
                        variant="body"
                        className={panelTheme.text}
                      >
                        {feature}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalBenefits.map((benefit, index) => (
            <Card
              key={index}
              panel="consumer"
              className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl hover:shadow-[#19b5e9]/20 transition-all duration-300"
              padding="lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#19b5e9]/20 flex items-center justify-center">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <div>
                  <Typography
                    variant="h3"
                    weight="semibold"
                    className={`mb-2 ${panelTheme.text}`}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body"
                    className={`${panelTheme.text} opacity-80`}
                  >
                    {benefit.description}
                  </Typography>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsComponent; 