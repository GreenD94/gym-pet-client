export interface AuthResponse<T = void> {
  success: boolean;
  message?: string;
  data?: T;
}

export interface LoginSuccessData {
  user: {
    _id: string;
    email: string;
    roleId: number;
  };
  token: string;
  roleId: number;
}

export interface ValidateSuccessData {
  user: {
    _id: string;
    email: string;
    roleId: number;
  };
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface RegisterParams {
  email: string;
  password: string;
  roleId?: number;
}

export enum AuthError {
  USER_NOT_FOUND = 'User not found',
  INVALID_PASSWORD = 'Invalid password',
  USER_EXISTS = 'User already exists',
  REGISTRATION_FAILED = 'Registration failed',
  SERVER_ERROR = 'Server error',
  INVALID_EMAIL = 'Invalid email',
  WEAK_PASSWORD = 'Password must be at least 8 characters long',
} 