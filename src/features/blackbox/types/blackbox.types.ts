import { Role } from '@/features/database/types/role';

export type ServerAction = 'login' | 'register' | 'seed' | 'logout' | 'validate';

export interface TestResult {
  success?: boolean;
  message?: string;
  error?: string;
  token?: string;
  user?: {
    email: string;
    roleId: number;
  };
}

export interface ActionInfo {
  title: string;
  description: string;
  requiredData: {
    name: string;
    type: string;
    description: string;
  }[];
  returnType: string;
  databaseEntities: {
    name: string;
    fields: {
      name: string;
      type: string;
      description: string;
    }[];
  }[];
}

export interface BlackboxFormData {
  loginEmail: string;
  loginPassword: string;
  registerEmail: string;
  registerPassword: string;
  registerRole: Role;
  validateUserId: string;
} 