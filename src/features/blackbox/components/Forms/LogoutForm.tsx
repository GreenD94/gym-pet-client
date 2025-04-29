interface LogoutFormProps {
  loading: boolean;
  onSubmit: () => void;
}

export function LogoutForm({ loading, onSubmit }: LogoutFormProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Logout Test</h2>
      <button
        onClick={onSubmit}
        disabled={loading}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test Logout'}
      </button>
    </div>
  );
} 