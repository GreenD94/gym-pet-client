'use client';

import React, { useState } from 'react';
import { Input } from '../../styles/components/input/input.component';
import { loginUser } from '../../database/actions/auth.actions';
import { Role } from '../../database/types/role';
import Cookies from 'js-cookie';

const LoginContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const result = await loginUser({ email, password });
      setLoading(false);
      
      if (result.success && result.data) {
        const { token, roleId } = result.data;
        
        if (token) {
          Cookies.set('token', token, { expires: 7, path: '/' });
          Cookies.set('role', roleId.toString(), { expires: 7, path: '/' });
        }
        
        // Redirect based on roleId
        if (roleId === Role.Admin) {
          window.location.href = '/admin/home';
        } else if (roleId === Role.Trainer) {
          window.location.href = '/trainer/home';
        } else {
          window.location.href = '/';
        }
      } else {
        setError(result.message || 'Error de autenticación.');
      }
    } catch {
      setLoading(false);
      setError('Error de servidor.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <Input
          type="email"
          label="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          fullWidth
        />
        <div className="mt-4" />
        <Input
          type="password"
          label="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          fullWidth
        />
        {error && (
          <div className="mt-4 text-red-600 text-sm text-center">{error}</div>
        )}
        <button
          type="submit"
          className="mt-6 w-full bg-[#19b5e9] hover:bg-[#19b5e9]/90 text-white font-semibold py-2 px-4 rounded transition-colors disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
    </div>
  );
};

export default LoginContainer; 