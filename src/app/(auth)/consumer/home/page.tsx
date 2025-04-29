import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { Role } from '@/features/database/types/role';
import { LogoutButton } from '@/features/auth/components/logout-button.component';

export default async function ConsumerHome() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  
  if (!token) {
    redirect('/login');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { roleId: number };
    if (decoded.roleId !== Role.Consumer) {
      redirect('/login');
    }
  } catch {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Consumer Dashboard</h1>
          <LogoutButton />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Consumer dashboard content will go here */}
        </div>
      </div>
    </div>
  );
} 