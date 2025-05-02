
import { LogoutButton } from '@/features/auth/components/logout-button.component';

export default async function AdminHome() {


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <LogoutButton />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Admin dashboard content will go here */}
        </div>
      </div>
    </div>
  );
} 