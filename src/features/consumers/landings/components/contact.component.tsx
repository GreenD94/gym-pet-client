import { FC } from 'react';
import { useTheme } from '@/features/styles/hooks/use-theme.hook';
import { Card, Typography, Button } from '@/features/styles/components';
import Image from 'next/image';

const ContactComponent: FC = () => {
  const theme = useTheme();
  const panelTheme = theme.getPanelTheme('consumer');

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/584122731575', '_blank');
  };

  return (
    <section className={`py-20 ${panelTheme.background}`}>
      <div className="container mx-auto px-4">
        <Typography
          variant="h2"
          weight="bold"
          className={`text-center mb-12 ${panelTheme.text}`}
        >
          ATENCIÓN PERSONALIZADA
        </Typography>

        <div className="max-w-md mx-auto">
          <Card
            panel="consumer"
            className="bg-black/70 backdrop-blur-md border border-[#19b5e9]/20 shadow-2xl text-center"
            padding="lg"
          >
            <div className="relative w-16 h-16 mx-auto mb-6">
              <Image
                src="/images/whatsapp-icon.png"
                alt="WhatsApp"
                fill
                className="object-contain"
              />
            </div>

            <Typography
              variant="h3"
              weight="semibold"
              className={`mb-4 text-[#19b5e9]`}
            >
              CONTÁCTANOS A TRAVÉS DE
            </Typography>
            
            <Typography
              variant="body"
              className={`text-xl ${panelTheme.text} mb-8`}
            >
              WHATSAPP
            </Typography>

            <Typography
              variant="body"
              className={`${panelTheme.text} mb-8`}
            >
              0412 2731575
            </Typography>

            <Button
              variant="primary"
              size="lg"
              panel="consumer"
              className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleWhatsAppClick}
            >
              INGRESA AQUÍ
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent; 