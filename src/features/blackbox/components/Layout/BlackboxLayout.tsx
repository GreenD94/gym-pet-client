interface BlackboxLayoutProps {
  children: React.ReactNode;
}

export function BlackboxLayout({ children }: BlackboxLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Server Actions Blackbox Testing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Test and verify server actions with this interactive testing interface
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          {children}
        </div>
      </div>
    </div>
  );
} 