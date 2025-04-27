import { FC, useState, useEffect } from 'react';
import Image from 'next/image';

const NavbarComponent: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.jpg"
                alt="Cosmos Gym Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            className="bg-[#19b5e9] hover:bg-[#19b5e9]/90 text-white px-6 py-2 rounded-full text-sm font-medium transition-all"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent; 