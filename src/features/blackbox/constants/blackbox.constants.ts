import { ActionInfo } from '../types/blackbox.types';

export const SERVER_ACTIONS_INFO: Record<string, ActionInfo> = {
  login: {
    title: 'Login User',
    description: 'Authenticates a user and returns a JWT token if successful',
    requiredData: [
      {
        name: 'email',
        type: 'string',
        description: 'User\'s email address'
      },
      {
        name: 'password',
        type: 'string',
        description: 'User\'s password'
      }
    ],
    returnType: 'AuthResponse',
    databaseEntities: [
      {
        name: 'User',
        fields: [
          {
            name: 'id',
            type: 'number',
            description: 'Unique identifier'
          },
          {
            name: 'email',
            type: 'string',
            description: 'User\'s email address'
          },
          {
            name: 'password',
            type: 'string',
            description: 'Hashed password'
          },
          {
            name: 'roleId',
            type: 'number',
            description: 'Reference to user\'s role'
          }
        ]
      }
    ]
  },
  register: {
    title: 'Register User',
    description: 'Creates a new user account with the specified role',
    requiredData: [
      {
        name: 'email',
        type: 'string',
        description: 'User\'s email address'
      },
      {
        name: 'password',
        type: 'string',
        description: 'User\'s password'
      },
      {
        name: 'roleId',
        type: 'number',
        description: 'Role identifier (1: Admin, 2: Trainer, 3: Consumer)'
      }
    ],
    returnType: 'AuthResponse',
    databaseEntities: [
      {
        name: 'User',
        fields: [
          {
            name: 'id',
            type: 'number',
            description: 'Unique identifier'
          },
          {
            name: 'email',
            type: 'string',
            description: 'User\'s email address'
          },
          {
            name: 'password',
            type: 'string',
            description: 'Hashed password'
          },
          {
            name: 'roleId',
            type: 'number',
            description: 'Reference to user\'s role'
          }
        ]
      },
      {
        name: 'Role',
        fields: [
          {
            name: 'id',
            type: 'number',
            description: 'Unique identifier'
          },
          {
            name: 'name',
            type: 'string',
            description: 'Role name'
          }
        ]
      }
    ]
  },
  seed: {
    title: 'Seed Database',
    description: 'Populates the database with initial test data',
    requiredData: [],
    returnType: 'SeedResponse',
    databaseEntities: [
      {
        name: 'User',
        fields: [
          {
            name: 'id',
            type: 'number',
            description: 'Unique identifier'
          },
          {
            name: 'email',
            type: 'string',
            description: 'User\'s email address'
          },
          {
            name: 'password',
            type: 'string',
            description: 'Hashed password'
          },
          {
            name: 'roleId',
            type: 'number',
            description: 'Reference to user\'s role'
          }
        ]
      },
      {
        name: 'Role',
        fields: [
          {
            name: 'id',
            type: 'number',
            description: 'Unique identifier'
          },
          {
            name: 'name',
            type: 'string',
            description: 'Role name'
          }
        ]
      }
    ]
  }
}; 