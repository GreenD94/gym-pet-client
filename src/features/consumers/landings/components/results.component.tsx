import { FC } from 'react';
import { useTheme } from '@/features/styles/hooks/use-theme.hook';
import { Card, Typography } from '@/features/styles/components';
import Image from 'next/image';

const testimonials = [
  {
    name: 'María González',
    role: 'Miembro desde 2023',
    image: '/images/testimonials/maria.jpg',
    text: 'En solo 3 meses he logrado resultados increíbles. El entrenamiento personalizado y el plan de nutrición han sido clave para mi transformación.',
    beforeImage: '/images/testimonials/maria-before.jpg',
    afterImage: '/images/testimonials/maria-after.jpg',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Miembro desde 2022',
    image: '/images/testimonials/carlos.jpg',
    text: 'La comunidad y el apoyo de los entrenadores han hecho que mantener mi rutina sea más fácil y divertido. ¡Los resultados hablan por sí solos!',
    beforeImage: '/images/testimonials/carlos-before.jpg',
    afterImage: '/images/testimonials/carlos-after.jpg',
  },
];

const stats = [
  { value: '95%', label: 'Tasa de Éxito' },
  { value: '1000+', label: 'Miembros Activos' },
  { value: '20+', label: 'Entrenadores Expertos' },
  { value: '24/7', label: 'Soporte Personalizado' },
];

const ResultsComponent: FC = () => {
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
          Resultados Reales
        </Typography>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
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
                className={`${panelTheme.text} opacity-80`}
              >
                {stat.label}
              </Typography>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              panel="consumer"
              className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl"
              padding="lg"
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-square">
                  <Image
                    src={testimonial.beforeImage}
                    alt={`${testimonial.name} - Antes`}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                    Antes
                  </div>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src={testimonial.afterImage}
                    alt={`${testimonial.name} - Después`}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                    Después
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <Typography
                    variant="h3"
                    weight="semibold"
                    className={panelTheme.text}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body"
                    className={`${panelTheme.text} opacity-80`}
                  >
                    {testimonial.role}
                  </Typography>
                </div>
              </div>

              <Typography
                variant="body"
                className={`${panelTheme.text} italic`}
              >
                &ldquo;{testimonial.text}&rdquo;
              </Typography>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsComponent; 