'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Dumbbell } from 'lucide-react';
import { useAuth } from '@/features/auth/contexts/auth.context';
import { TRAINER_COLORS } from '../../constants/trainer.constants';
import { navigationItems } from './navigation.utils';
import { MobileMenu } from './mobile-menu.component';
import { DesktopNavigation } from './desktop-navigation.component';

export function TrainerNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <nav className={`${TRAINER_COLORS.PRIMARY} text-white shadow-lg sticky top-0 z-50`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/trainer/home" className="text-xl font-bold flex items-center space-x-2">
            <Dumbbell className="w-6 h-6" />
            <span>Portal del Entrenador</span>
          </Link>

          <DesktopNavigation 
            items={navigationItems} 
            onLogout={logout} 
          />

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 hover:bg-emerald-700 focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={navigationItems}
        onLogout={logout}
      />
    </nav>
  );
} 