import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/auth.types';

const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

export class TokenService {
  private static readonly EXPIRES_IN = '7d';

  /**
   * Generates a JWT token for the given user data
   */
  static generateToken(payload: TokenPayload): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: this.EXPIRES_IN });
  }

  /**
   * Verifies a JWT token and returns its payload
   * @throws Error if token is invalid or expired
   */
  static verifyToken(token: string): TokenPayload {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      if (typeof decoded === 'string') {
        throw new Error('Invalid token format');
      }
      
      const { userId, email, roleId } = decoded as TokenPayload;
      if (!userId || !email || roleId === undefined) {
        throw new Error('Invalid token payload');
      }
      
      return { userId, email, roleId };
    } catch (error) {
        console.error('Token verification error:', error);
      throw new Error('Invalid or expired token');
    }
  }
} 