import { useState } from 'react';
import { loginUser, registerUser } from '@/features/database/actions/auth.actions';
import { seedDatabase } from '@/features/database/actions/seed.actions';
import { Role } from '@/features/database/types/role';
import { TestResult, BlackboxFormData } from '../types/blackbox.types';

export function useBlackbox() {
  const [formData, setFormData] = useState<BlackboxFormData>({
    loginEmail: '',
    loginPassword: '',
    registerEmail: '',
    registerPassword: '',
    registerRole: Role.Consumer,
  });
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(false);

  const updateFormData = (updates: Partial<BlackboxFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await loginUser({
        email: formData.loginEmail,
        password: formData.loginPassword,
      });
      setResult(response);
    } catch (error) {
      setResult({ error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await registerUser({
        email: formData.registerEmail,
        password: formData.registerPassword,
        roleId: formData.registerRole,
      });
      setResult(response);
    } catch (error) {
      setResult({ error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  const handleSeed = async () => {
    setLoading(true);
    try {
      const response = await seedDatabase();
      setResult(response);
    } catch (error) {
      setResult({ error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    result,
    loading,
    updateFormData,
    handleLogin,
    handleRegister,
    handleSeed,
  };
} 