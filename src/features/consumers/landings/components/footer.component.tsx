import { FC } from 'react';
import { useTheme } from '@/features/styles/hooks/use-theme.hook';
import { Typography } from '@/features/styles/components';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from '@/features/styles/hooks/use-scroll.hook';

const navigation = {
  main: [
    { name: 'Inicio', href: '#hero' },
    { name: 'Beneficios', href: '#benefits' },
    { name: 'Resultados', href: '#results' },
    { name: 'Innovación', href: '#innovation' },
    { name: 'Comunidad', href: '#community' },
    { name: 'Membresías', href: '#membership' },
    { name: 'Horarios', href: '#schedule' },
    { name: 'Ubicación', href: '#location' },
    { name: 'Contacto', href: '#contact' }
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/cosmosgymbqto/',
      icon: '📸'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/584122731575',
      icon: '💬'
    }
  ],
  legal: [
    { name: 'Términos y Condiciones', href: '/terms' },
    { name: 'Política de Privacidad', href: '/privacy' },
    { name: 'Política de Cookies', href: '/cookies' }
  ]
};

const FooterComponent: FC = () => {
  const theme = useTheme();
  const panelTheme = theme.getPanelTheme('consumer');
  const { scrollToSection } = useScroll();

  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  };

  return (
    <footer className={`bg-black/90 backdrop-blur-md border-t border-[#19b5e9]/20 ${panelTheme.background}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.svg"
                  alt="Cosmos Gym Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <Typography
                variant="h3"
                weight="bold"
                className={panelTheme.text}
              >
                Cosmos Gym
              </Typography>
            </div>
            <Typography
              variant="body"
              className={`mb-6 ${panelTheme.text} opacity-80`}
            >
              Transformando vidas a través del fitness y la tecnología. 
              Únete a nuestra comunidad y alcanza tus objetivos fitness.
            </Typography>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#19b5e9]/20 flex items-center justify-center hover:bg-[#19b5e9]/30 transition-all"
                >
                  <span className="text-xl">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <Typography
              variant="h3"
              weight="semibold"
              className={`mb-4 ${panelTheme.text}`}
            >
              Navegación
            </Typography>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavigationClick(e, item.href)}
                    className={`${panelTheme.text} opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <Typography
              variant="h3"
              weight="semibold"
              className={`mb-4 ${panelTheme.text}`}
            >
              Contacto
            </Typography>
            <ul className="space-y-2">
              <li>
                <Typography
                  variant="body"
                  className={panelTheme.text}
                >
                  📞 +58 412-273-1575
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body"
                  className={panelTheme.text}
                >
                  📱 WhatsApp: +58 412-273-1575
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body"
                  className={panelTheme.text}
                >
                  📍 C.C. COSMOS, PISO 4 / LOCAL 4A-20
                </Typography>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 pt-8 border-t border-[#19b5e9]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Typography
              variant="body"
              className={`${panelTheme.text} opacity-60`}
            >
              © {new Date().getFullYear()} Cosmos Gym. Todos los derechos reservados.
            </Typography>
            <ul className="flex gap-6">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`${panelTheme.text} opacity-60 hover:opacity-100 transition-opacity`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent; 