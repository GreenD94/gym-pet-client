import { Input } from '@/features/styles/components/input/input.component';

interface LoginFormProps {
  email: string;
  password: string;
  loading: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: () => void;
}

export function LoginForm({
  email,
  password,
  loading,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Login Test</h2>
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={e => onEmailChange(e.target.value)}
        placeholder="test@example.com"
      />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={e => onPasswordChange(e.target.value)}
        placeholder="********"
      />
      <button
        onClick={onSubmit}
        disabled={loading}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test Login'}
      </button>
    </div>
  );
} 