import React from 'react';
import { Button, Card, Typography } from '@/features/styles/components';
import Image from 'next/image';

const HeroComponent: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-background-primary pt-16">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/gym-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <div className="inline-block bg-[#19b5e9]/20 px-4 py-2 rounded-full mb-6">
                <Typography
                  variant="body"
                  weight="semibold"
                  className="text-[#19b5e9]"
                >
                  ¡OFERTA ESPECIAL DE MARZO!
                </Typography>
              </div>

              <Typography
                variant="h1"
                weight="bold"
                className="text-white mb-4 sm:mb-6 text-4xl sm:text-5xl lg:text-6xl drop-shadow-lg"
              >
                Transforma tu cuerpo y mente
              </Typography>

              <Typography
                variant="h2"
                weight="medium"
                className="text-white/90 mb-8 sm:mb-12 text-xl sm:text-2xl drop-shadow-lg"
              >
                Únete a nuestra comunidad de más de 1000 miembros activos y alcanza tus objetivos fitness
              </Typography>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  panel="consumer"
                  className="w-full sm:w-auto bg-[#19b5e9] hover:bg-[#19b5e9]/90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Comienza tu Prueba Gratuita
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  panel="consumer"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-2 border-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Agenda una Visita
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src={`/images/testimonials/placeholder.jpg`}
                        alt={`Member ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <Typography
                  variant="body"
                  className="text-white/80"
                >
                  <span className="font-semibold text-white">1000+</span> miembros activos
                </Typography>
              </div>
            </div>

            {/* Right Column - Offer Card */}
            <div className="relative">
              <Card
                panel="consumer"
                className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl"
                padding="lg"
              >
                {/* Countdown Timer */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#19b5e9] px-4 py-2 rounded-full">
                  <Typography
                    variant="body"
                    weight="semibold"
                    className="text-white"
                  >
                    ¡Oferta por tiempo limitado!
                  </Typography>
                </div>

                <div className="pt-6">
                  <Typography
                    variant="h3"
                    weight="bold"
                    className="text-[#19b5e9] mb-4 text-center"
                  >
                    2 Personas por $30
                  </Typography>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#19b5e9]/20 flex items-center justify-center">
                        <span className="text-[#19b5e9] text-xl">✓</span>
                      </div>
                      <Typography
                        variant="body"
                        className="text-white"
                      >
                        Plan de entrenamiento personalizado
                      </Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#19b5e9]/20 flex items-center justify-center">
                        <span className="text-[#19b5e9] text-xl">✓</span>
                      </div>
                      <Typography
                        variant="body"
                        className="text-white"
                      >
                        Asesoría presencial y online
                      </Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#19b5e9]/20 flex items-center justify-center">
                        <span className="text-[#19b5e9] text-xl">✓</span>
                      </div>
                      <Typography
                        variant="body"
                        className="text-white"
                      >
                        Plan de nutrición adaptado
                      </Typography>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      variant="primary"
                      size="lg"
                      panel="consumer"
                      className="w-full bg-[#19b5e9] hover:bg-[#19b5e9]/90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      ¡Aprovecha Ahora!
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent; 