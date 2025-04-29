import React, { createContext, useContext } from 'react';
import { ServerAction, TestResult, BlackboxFormData } from '../types/blackbox.types';
import { useBlackbox } from '../hooks/useBlackbox';

interface BlackboxContextType {
  formData: BlackboxFormData;
  result: TestResult | null;
  loading: boolean;
  activeAction: ServerAction;
  updateFormData: (updates: Partial<BlackboxFormData>) => void;
  setActiveAction: (action: ServerAction) => void;
  handleLogin: () => Promise<void>;
  handleRegister: () => Promise<void>;
  handleSeed: () => Promise<void>;
  handleLogout: () => Promise<void>;
  handleValidate: () => Promise<void>;
}

const BlackboxContext = createContext<BlackboxContextType>({} as BlackboxContextType);

export function BlackboxProvider({ children }: { children: React.ReactNode }) {
  const [activeAction, setActiveAction] = React.useState<ServerAction>('login');
  const blackbox = useBlackbox();

  const value: BlackboxContextType = {
    ...blackbox,
    activeAction,
    setActiveAction,
  };

  return (
    <BlackboxContext.Provider value={value}>
      {children}
    </BlackboxContext.Provider>
  );
}

export function useBlackboxContext(): BlackboxContextType {
  const context = useContext(BlackboxContext);
  if (!context) {
    throw new Error('useBlackboxContext must be used within a BlackboxProvider');
  }
  return context;
} 