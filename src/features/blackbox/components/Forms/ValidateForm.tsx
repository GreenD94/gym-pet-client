import { Input } from '@/features/styles/components/input/input.component';

interface ValidateFormProps {
  userId: string;
  loading: boolean;
  onUserIdChange: (value: string) => void;
  onSubmit: () => void;
}

export function ValidateForm({
  userId,
  loading,
  onUserIdChange,
  onSubmit,
}: ValidateFormProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Validate User Test</h2>
      <Input
        type="text"
        label="User ID"
        value={userId}
        onChange={e => onUserIdChange(e.target.value)}
        placeholder="Enter user ID"
      />
      <button
        onClick={onSubmit}
        disabled={loading}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test Validate'}
      </button>
    </div>
  );
} 