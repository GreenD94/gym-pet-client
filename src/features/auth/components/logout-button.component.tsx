'use client';

import React, { useState } from 'react';
import { logoutUser } from '../../database/actions/auth.actions';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface LogoutButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ 
  className = 'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded', 
  children = 'Cerrar Sesión' 
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logoutUser();
      // Clear the token cookie
      Cookies.remove('token', { path: '/' });
      // Redirect to login page
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className={`${className} transition-colors disabled:opacity-50`}
    >
      {loading ? 'Cerrando sesión...' : children}
    </button>
  );
}; 