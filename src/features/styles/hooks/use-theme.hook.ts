import { Theme, theme } from '../theme.config';

// Create a default context value
const defaultTheme: Theme = theme;

export const useTheme = (): Theme => {
  return {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      text: {
        primary: '#1a202c',    // Color oscuro para texto en fondo claro
        secondary: '#f7f9fc',  // Color claro para texto en fondo oscuro
      }
    }
  };
};

export const usePanel = (panel: Theme['getPanelTheme']['arguments'][0]) => {
  const theme = useTheme();
  const panelTheme = theme.getPanelTheme(panel);
  
  return {
    ...panelTheme,
    text: panel === 'consumer' ? theme.colors.text.primary : theme.colors.text.secondary
  };
}; 