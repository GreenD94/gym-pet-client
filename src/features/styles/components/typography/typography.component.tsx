import React from 'react';
import { useTheme } from '../../hooks/use-theme.hook';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body' | 'small' | 'xs';
type TypographyWeight = 'regular' | 'medium' | 'semibold' | 'bold';
type TypographyAlign = 'left' | 'center' | 'right';

interface TypographyProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  align?: TypographyAlign;
  color?: string;
  className?: string;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  weight = 'regular',
  align = 'left',
  color,
  className = '',
  children,
}) => {
  const theme = useTheme();

  const getElement = (variant: TypographyVariant) => {
    switch (variant) {
      case 'h1':
        return 'h1';
      case 'h2':
        return 'h2';
      case 'h3':
        return 'h3';
      default:
        return 'p';
    }
  };

  const Element = getElement(variant);

  const baseStyles = `
    font-${theme.typography.weights[weight]}
    text-${align}
    ${color ? `text-${color}` : ''}
  `;

  const variantStyles = {
    h1: `text-${theme.typography.sizes.h1} leading-${theme.typography.lineHeights.tight}`,
    h2: `text-${theme.typography.sizes.h2} leading-${theme.typography.lineHeights.tight}`,
    h3: `text-${theme.typography.sizes.h3} leading-${theme.typography.lineHeights.normal}`,
    body: `text-${theme.typography.sizes.body} leading-${theme.typography.lineHeights.normal}`,
    small: `text-${theme.typography.sizes.small} leading-${theme.typography.lineHeights.normal}`,
    xs: `text-${theme.typography.sizes.xs} leading-${theme.typography.lineHeights.normal}`,
  };

  return (
    <Element
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </Element>
  );
}; 