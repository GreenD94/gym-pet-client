import Image from 'next/image';
import Link from 'next/link';

export const NoPermissionContainer = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Acceso Restringido
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-8">
          Lo sentimos, no tienes los permisos necesarios para acceder a esta página.
          Por favor, contacta con nuestro equipo de soporte para obtener ayuda.
        </p>

        {/* Support Info */}
        <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-blue-800 font-medium">
            Soporte Técnico
          </p>
          <p className="text-blue-600">
            Email: soporte@empresa.com
          </p>
          <p className="text-blue-600">
            Teléfono: +34 123 456 789
          </p>
        </div>

        {/* Button */}
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}; 