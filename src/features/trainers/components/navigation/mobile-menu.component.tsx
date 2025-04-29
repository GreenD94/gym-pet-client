'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { NavigationItem } from '../../types/trainer.types';
import { TRAINER_COLORS } from '../../constants/trainer.constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
  onLogout: () => void;
}

export function MobileMenu({ isOpen, onClose, items, onLogout }: MobileMenuProps) {
  const pathname = usePathname();
  
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute w-full z-50">
      <div className={`${TRAINER_COLORS.PRIMARY} px-2 pt-2 pb-3 space-y-1 shadow-lg`}>
        {items.map(item => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
              pathname === item.href
                ? TRAINER_COLORS.ACTIVE
                : TRAINER_COLORS.HOVER
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
        <button
          onClick={() => {
            onLogout();
            onClose();
          }}
          className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium ${TRAINER_COLORS.LOGOUT} ${TRAINER_COLORS.LOGOUT_HOVER} border ${TRAINER_COLORS.BORDER}`}
        >
          <LogOut className="w-5 h-5" />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
} 