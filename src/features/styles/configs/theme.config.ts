import { colors } from './colors.config';
import { typography } from './typography.config';
import { spacing } from './spacing.config';
import { borderRadius } from './border-radius.config';
import { shadows } from './shadows.config';

type PanelType = 'admin' | 'trainer' | 'consumer';

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  getPanelTheme: (panel: PanelType) => ({
    ...colors.panel[panel],
    // Add panel-specific overrides here if needed
  }),
}; 