import React from 'react';
import { useTheme } from '../../hooks/use-theme.hook';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  panel?: 'admin' | 'trainer' | 'consumer';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  panel = 'consumer',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const theme = useTheme();
  const panelTheme = theme.getPanelTheme(panel);

  const baseStyles = `
    inline-flex items-center justify-center
    font-${theme.typography.weights.semibold}
    rounded-md transition-colors
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantStyles = {
    primary: `
      bg-${panelTheme.accent}
      text-${panelTheme.text}
      hover:bg-opacity-90
      focus:ring-${panelTheme.accent}
    `,
    secondary: `
      bg-${panelTheme.background}
      text-${panelTheme.text}
      border border-${panelTheme.accent}
      hover:bg-${panelTheme.accent} hover:bg-opacity-10
      focus:ring-${panelTheme.accent}
    `,
    outline: `
      bg-transparent
      text-${panelTheme.text}
      border border-${panelTheme.accent}
      hover:bg-${panelTheme.accent} hover:bg-opacity-10
      focus:ring-${panelTheme.accent}
    `,
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${widthStyles}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}; 