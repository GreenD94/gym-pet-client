import { Theme, theme } from '../theme.config';

// Create a default context value
const defaultTheme: Theme = theme;

export const useTheme = (): Theme => {
  // For now, return the default theme
  // Later we can add context for dynamic theming
  return defaultTheme;
};

export const usePanel = (panel: Theme['getPanelTheme']['arguments'][0]) => {
  const theme = useTheme();
  return theme.getPanelTheme(panel);
}; 