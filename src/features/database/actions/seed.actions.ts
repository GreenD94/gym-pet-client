"use server";

import { getDb } from '../utils/mongo';
import bcrypt from 'bcryptjs';
import { Role } from '../types/role';
import { AuthResponse } from '../types/auth.types';

interface SeedUser {
  email: string;
  password: string;
  roleId: number;
}

const seedUsers: SeedUser[] = [
  {
    email: 'admin@example.com',
    password: 'Admin123!',
    roleId: Role.Admin
  },
  {
    email: 'trainer@example.com',
    password: 'Trainer123!',
    roleId: Role.Trainer
  },
  {
    email: 'consumer@example.com',
    password: 'Consumer123!',
    roleId: Role.Consumer
  }
];

export async function seedDatabase(): Promise<AuthResponse> {
  try {
    const db = await getDb();
    // Use the collection without _id constraint for insertion
    const usersCollection = db.collection('users');

    // Clear existing data
    await usersCollection.deleteMany({});

    // Hash passwords and create documents
    const documents = await Promise.all(
      seedUsers.map(async (user) => ({
        email: user.email,
        password: await bcrypt.hash(user.password, 10),
        roleId: user.roleId
      }))
    );

    // MongoDB will automatically generate _id for each document
    await usersCollection.insertMany(documents);
    
    return {
      success: true,
      message: `Successfully seeded ${documents.length} users`
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    return {
      success: false,
      message: 'Error seeding users'
    };
  }
} 