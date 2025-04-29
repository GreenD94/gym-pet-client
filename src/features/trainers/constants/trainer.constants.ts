export const TRAINER_COLORS = {
  PRIMARY: 'bg-emerald-600',
  HOVER: 'hover:bg-emerald-700',
  ACTIVE: 'bg-emerald-800',
  LOGOUT: 'bg-emerald-500/90',
  LOGOUT_HOVER: 'hover:bg-emerald-600/90',
  BORDER: 'border-emerald-400/50',
  BACKGROUND: 'bg-emerald-50',
  TEXT: 'text-emerald-800',
} as const;

export const NAVIGATION_ITEMS = [
  { 
    href: '/trainer/profile', 
    label: 'Perfil', 
    icon: 'User' 
  },
  { 
    href: '/trainer/my-trainees', 
    label: 'Mis Alumnos', 
    icon: 'Users' 
  },
  { 
    href: '/trainer/all-trainees', 
    label: 'Todos los Alumnos', 
    icon: 'Users' 
  },
  { 
    href: '/trainer/exercises', 
    label: 'Ejercicios', 
    icon: 'Dumbbell' 
  },
] as const; 