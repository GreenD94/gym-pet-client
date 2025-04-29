import { LucideIcon } from 'lucide-react';

export type NavigationItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type TrainerLayoutProps = {
  children: React.ReactNode;
}; 