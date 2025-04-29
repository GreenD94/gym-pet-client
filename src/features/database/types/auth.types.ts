import { User } from '../models/user.types';

export interface LoginParams {
  email: string;
  password: string;
}

export interface RegisterParams {
  email: string;
  password: string;
  roleId?: number;
}

export interface AuthResponse<T = void> {
  success: boolean;
  message?: string;
  data?: T;
}

export interface LoginSuccessData {
  user: Omit<User, 'password'>;
  token: string;
  roleId: number;
}

export interface TokenPayload {
  userId: string;
  email: string;
  roleId: number;
}

export enum AuthError {
  USER_NOT_FOUND = 'Usuario no encontrado.',
  INVALID_PASSWORD = 'Contraseña incorrecta.',
  USER_EXISTS = 'El usuario ya existe.',
  REGISTRATION_FAILED = 'Error al registrar usuario.',
  SERVER_ERROR = 'Error interno del servidor.',
  INVALID_EMAIL = 'El correo electrónico no es válido.',
  WEAK_PASSWORD = 'La contraseña debe tener al menos 8 caracteres.',
} 