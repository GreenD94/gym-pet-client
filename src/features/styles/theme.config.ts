import { colors } from './configs/colors.config';
import { typography } from './configs/typography.config';
import { spacing } from './configs/spacing.config';

export type PanelType = 'admin' | 'trainer' | 'consumer';

export const theme = {
  colors,
  typography,
  spacing,
  
  // Panel-specific theme overrides
  getPanelTheme: (panel: PanelType) => ({
    ...colors.panel[panel],
    typography: typography,
    spacing: spacing,
  }),
} as const;

export type Theme = typeof theme; 