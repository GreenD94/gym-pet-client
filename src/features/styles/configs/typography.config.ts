export const typography = {
  fonts: {
    primary: 'Inter, sans-serif',
    secondary: 'Roboto, sans-serif',
  },
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  sizes: {
    h1: '48px',
    h2: '36px',
    h3: '24px',
    body: '16px',
    small: '14px',
    xs: '12px',
  },
  lineHeights: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const;

export type Typography = typeof typography; 