export const colors = {
  // Primary Colors
  background: {
    primary: '#010101',    // Main background color
    secondary: '#f7f9fc',  // Secondary background (header, footer)
  },
  text: {
    primary: '#f7f9fc',    // Main text color
    secondary: '#f7f9fc',  // Secondary text color
  },
  accent: {
    primary: '#19b5e9',    // Cards and primary accent
  },
  // Panel-Specific Colors
  panel: {
    admin: {
      accent: '#2d3748',   // Slate - Professional and reliable
      background: '#f4f6fa', // Light background for clarity
      text: '#1a202c',     // Dark text for readability
      highlight: '#48bb78', // Green for success actions
    },
    trainer: {
      accent: '#f6ad55',   // Orange - Energetic and motivational
      background: '#f7fafc', // Clean background
      text: '#2d3748',     // Dark text for readability
      highlight: '#4299e1', // Blue for action items
    },
    consumer: {
      accent: '#19b5e9',   // Brand blue - Familiar and engaging
      background: '#010101', // Dark background
      text: '#f7f9fc',     // Light text for contrast
      highlight: '#f6ad55', // Orange for calls to action
    },
  },
  // Semantic Colors
  status: {
    success: '#4CAF50',    // Success states
    error: '#F44336',      // Error states
    warning: '#FFC107',    // Warning states
    info: '#2196F3',       // Information states
  },
  // UI Elements
  ui: {
    border: '#E0E0E0',     // Border color
    divider: '#BDBDBD',    // Divider color
    overlay: 'rgba(0, 0, 0, 0.5)', // Overlay color
  }
} as const;

export type Colors = typeof colors; 