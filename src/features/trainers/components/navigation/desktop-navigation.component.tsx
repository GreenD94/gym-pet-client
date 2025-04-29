'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { NavigationItem } from '../../types/trainer.types';
import { TRAINER_COLORS } from '../../constants/trainer.constants';

interface DesktopNavigationProps {
  items: NavigationItem[];
  onLogout: () => void;
}

export function DesktopNavigation({ items, onLogout }: DesktopNavigationProps) {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center space-x-4">
      {items.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            pathname === item.href
              ? TRAINER_COLORS.ACTIVE
              : TRAINER_COLORS.HOVER
          }`}
        >
          <item.icon className="w-4 h-4" />
          <span>{item.label}</span>
        </Link>
      ))}
      <button
        onClick={onLogout}
        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${TRAINER_COLORS.LOGOUT} ${TRAINER_COLORS.LOGOUT_HOVER} transition-colors duration-200 border ${TRAINER_COLORS.BORDER}`}
      >
        <LogOut className="w-4 h-4" />
        <span>Cerrar Sesión</span>
      </button>
    </div>
  );
} 