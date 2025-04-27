export const spacing = {
  // Base spacing unit: 4px
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  // Container padding
  container: {
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
  },
  // Section spacing
  section: {
    sm: '48px',
    md: '64px',
    lg: '96px',
    xl: '128px',
  },
} as const;

export type Spacing = typeof spacing; 