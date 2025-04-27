import React from 'react';
import { useTheme } from '../../hooks/use-theme.hook';

interface CardProps {
  children: React.ReactNode;
  panel?: 'admin' | 'trainer' | 'consumer';
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  panel = 'consumer',
  className = '',
  padding = 'md',
  shadow = 'md',
  border = true,
}) => {
  const theme = useTheme();
  const panelTheme = theme.getPanelTheme(panel);

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  const borderStyles = border
    ? `border border-${panelTheme.accent}`
    : '';

  return (
    <div
      className={`
        bg-${panelTheme.background}
        rounded-lg
        ${paddingStyles[padding]}
        ${shadowStyles[shadow]}
        ${borderStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
}; 