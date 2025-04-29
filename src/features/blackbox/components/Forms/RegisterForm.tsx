import { Input } from '@/features/styles/components/input/input.component';
import { Role } from '@/features/database/types/role';

interface RegisterFormProps {
  email: string;
  password: string;
  role: Role;
  loading: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onRoleChange: (value: Role) => void;
  onSubmit: () => void;
}

export function RegisterForm({
  email,
  password,
  role,
  loading,
  onEmailChange,
  onPasswordChange,
  onRoleChange,
  onSubmit,
}: RegisterFormProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Register Test</h2>
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={e => onEmailChange(e.target.value)}
        placeholder="new@example.com"
      />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={e => onPasswordChange(e.target.value)}
        placeholder="********"
      />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
        <select
          value={role}
          onChange={e => onRoleChange(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value={Role.Admin}>Admin</option>
          <option value={Role.Trainer}>Trainer</option>
          <option value={Role.Consumer}>Consumer</option>
        </select>
      </div>
      <button
        onClick={onSubmit}
        disabled={loading}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test Register'}
      </button>
    </div>
  );
} 