"use server";

import { getDb } from '../utils/mongo';
import bcrypt from 'bcryptjs';
import { Role } from '../types/role';
import { User } from '../models/user.types';
import { TokenService } from '../services/token.service';
import { ValidationService } from '../services/validation.service';
import { AuthError, AuthResponse, LoginParams, LoginSuccessData, RegisterParams, ValidateSuccessData } from '../types/auth.types';

/**
 * Handles user login authentication
 */
export async function loginUser({ email, password }: LoginParams): Promise<AuthResponse<LoginSuccessData>> {
  try {
    // Validate input
    const validationError = ValidationService.validateCredentials(email, password);
    if (validationError) {
      return { success: false, message: validationError };
    }

    // Find user
    const db = await getDb();
    const user = await db.collection<User>('users').findOne({ email });
    if (!user) {
      return { success: false, message: AuthError.USER_NOT_FOUND };
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { success: false, message: AuthError.INVALID_PASSWORD };
    }

    // Generate token and prepare response
    const roleId = typeof user.roleId === 'number' ? user.roleId : Number(user.roleId);
    const token = TokenService.generateToken({
      userId: user._id.toString(),
      email: user.email,
      roleId
    });

    // Create a plain object without the password field and convert ObjectId to string
    const userData = {
      _id: user._id.toString(),
      email: user.email,
      roleId: user.roleId
    };

    return {
      success: true,
      data: {
        user: { ...userData, roleId },
        token,
        roleId
      }
    };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: AuthError.SERVER_ERROR };
  }
}

/**
 * Handles user registration
 */
export async function registerUser({ email, password, roleId = Role.Consumer }: RegisterParams): Promise<AuthResponse> {
  try {
    // Validate input
    const validationError = ValidationService.validateCredentials(email, password);
    if (validationError) {
      return { success: false, message: validationError };
    }

    // Check if user exists
    const db = await getDb();
    const existingUser = await db.collection<User>('users').findOne({ email });
    if (existingUser) {
      return { success: false, message: AuthError.USER_EXISTS };
    }

    // Create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.collection<User>('users').insertOne({
      email,
      password: hashedPassword,
      roleId
    } as User);

    if (!result.insertedId) {
      return { success: false, message: AuthError.REGISTRATION_FAILED };
    }

    return { success: true };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, message: AuthError.SERVER_ERROR };
  }
}

/**
 * Handles user logout
 */
export async function logoutUser(): Promise<AuthResponse> {
  try {
    // In a real application, you might want to:
    // 1. Add the token to a blacklist
    // 2. Clear any server-side session data
    // 3. Log the logout event
    
    return { success: true };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, message: AuthError.SERVER_ERROR };
  }
}

/**
 * Validates if a user exists in the database
 */
export async function validateUser(userId: string): Promise<AuthResponse<ValidateSuccessData>> {
  try {
    const db = await getDb();
    const user = await db.collection<User>('users').findOne({ _id: userId });
    
    if (!user) {
      return { 
        success: false, 
        message: AuthError.USER_NOT_FOUND 
      };
    }

    return { 
      success: true,
      data: {
        user: {
          _id: user._id.toString(),
          email: user.email,
          roleId: user.roleId
        }
      }
    };
  } catch (error) {
    console.error('User validation error:', error);
    return { success: false, message: AuthError.SERVER_ERROR };
  }
} 