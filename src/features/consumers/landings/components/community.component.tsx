import { FC } from 'react';
import { useTheme } from '@/features/styles/hooks/use-theme.hook';
import { Card, Typography } from '@/features/styles/components';
import Image from 'next/image';

const events = [
  {
    title: 'Desafío de Transformación',
    date: '15 de Marzo, 2024',
    image: '/images/events/transformation.jpg',
    description: 'Únete a nuestro desafío de 30 días y transforma tu cuerpo y mente con el apoyo de nuestra comunidad.',
    participants: 150
  },
  {
    title: 'Clase de Yoga al Aire Libre',
    date: '20 de Marzo, 2024',
    image: '/images/events/yoga.jpg',
    description: 'Disfruta de una clase de yoga especial al aire libre con nuestros instructores certificados.',
    participants: 80
  },
  {
    title: 'Competencia de Fuerza',
    date: '25 de Marzo, 2024',
    image: '/images/events/strength.jpg',
    description: 'Demuestra tu fuerza y compite con otros miembros en nuestra competencia mensual.',
    participants: 120
  }
];

const achievements = [
  {
    member: 'Ana Martínez',
    achievement: 'Perdió 15kg en 3 meses',
    image: '/images/achievements/ana.jpg',
    quote: 'La comunidad y el apoyo de los entrenadores hicieron posible mi transformación.'
  },
  {
    member: 'Carlos Rodríguez',
    achievement: 'Completó su primer maratón',
    image: '/images/achievements/carlos.jpg',
    quote: 'Gracias al entrenamiento personalizado y la motivación de la comunidad.'
  },
  {
    member: 'Laura Sánchez',
    achievement: 'Ganó la competencia de fuerza',
    image: '/images/achievements/laura.jpg',
    quote: 'El ambiente de apoyo y la dedicación de los entrenadores son increíbles.'
  }
];

const CommunityComponent: FC = () => {
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
            Nuestra Comunidad
          </Typography>
          <Typography
            variant="body"
            className={`max-w-2xl mx-auto ${panelTheme.text} opacity-80`}
          >
            Únete a una comunidad vibrante de personas apasionadas por el fitness, 
            donde encontrarás apoyo, motivación y amistades para toda la vida.
          </Typography>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <Typography
            variant="h3"
            weight="semibold"
            className={`mb-8 text-center ${panelTheme.text}`}
          >
            Próximos Eventos
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card
                key={index}
                panel="consumer"
                className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl overflow-hidden"
                padding="none"
              >
                {/* Image Container */}
                <div className="relative h-48 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <Typography
                    variant="h3"
                    weight="semibold"
                    className={`mb-2 ${panelTheme.text}`}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    variant="body"
                    className={`mb-4 text-[#19b5e9]`}
                  >
                    {event.date}
                  </Typography>
                  <Typography
                    variant="body"
                    className={`mb-4 ${panelTheme.text} opacity-80`}
                  >
                    {event.description}
                  </Typography>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#19b5e9]/20 flex items-center justify-center">
                      <span className="text-[#19b5e9] text-sm">👥</span>
                    </div>
                    <Typography
                      variant="body"
                      className={panelTheme.text}
                    >
                      {event.participants} participantes
                    </Typography>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Member Achievements */}
        <div>
          <Typography
            variant="h3"
            weight="semibold"
            className={`mb-8 text-center ${panelTheme.text}`}
          >
            Logros de Miembros
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                panel="consumer"
                className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl"
                padding="lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={achievement.image}
                      alt={achievement.member}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Typography
                      variant="h3"
                      weight="semibold"
                      className={panelTheme.text}
                    >
                      {achievement.member}
                    </Typography>
                    <Typography
                      variant="body"
                      className="text-[#19b5e9]"
                    >
                      {achievement.achievement}
                    </Typography>
                  </div>
                </div>
                <Typography
                  variant="body"
                  className={`italic ${panelTheme.text} opacity-80`}
                >
                  &ldquo;{achievement.quote}&rdquo;
                </Typography>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { value: '1000+', label: 'Miembros Activos' },
            { value: '50+', label: 'Eventos Mensuales' },
            { value: '95%', label: 'Tasa de Retención' },
            { value: '24/7', label: 'Soporte Comunitario' }
          ].map((stat, index) => (
            <Card
              key={index}
              panel="consumer"
              className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl text-center"
              padding="lg"
            >
              <Typography
                variant="h3"
                weight="bold"
                className="text-[#19b5e9] mb-2"
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body"
                className={panelTheme.text}
              >
                {stat.label}
              </Typography>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityComponent; 