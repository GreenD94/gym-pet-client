import { User, Users, Dumbbell } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../constants/trainer.constants';
import { NavigationItem } from '../../types/trainer.types';

const iconMap: Record<string, typeof User> = {
  User,
  Users,
  Dumbbell,
};

export const navigationItems: NavigationItem[] = NAVIGATION_ITEMS.map(item => ({
  ...item,
  icon: iconMap[item.icon],
})); 