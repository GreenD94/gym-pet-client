import { AuthError } from '../types/auth.types';

export class ValidationService {
  private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private static readonly MIN_PASSWORD_LENGTH = 8;

  /**
   * Validates email format
   */
  static validateEmail(email: string): string | null {
    if (!this.EMAIL_REGEX.test(email)) {
      return AuthError.INVALID_EMAIL;
    }
    return null;
  }

  /**
   * Validates password strength
   */
  static validatePassword(password: string): string | null {
    if (password.length < this.MIN_PASSWORD_LENGTH) {
      return AuthError.WEAK_PASSWORD;
    }
    return null;
  }

  /**
   * Validates both email and password
   */
  static validateCredentials(email: string, password: string): string | null {
    const emailError = this.validateEmail(email);
    if (emailError) return emailError;

    const passwordError = this.validatePassword(password);
    if (passwordError) return passwordError;

    return null;
  }
} 