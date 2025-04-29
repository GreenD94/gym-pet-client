"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "../contexts/auth.context";

const UserMenu: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return (
      <Link href="/login" className="text-blue-600 hover:underline">
        Iniciar Sesión
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-700">{user?.email}</span>
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default UserMenu; 