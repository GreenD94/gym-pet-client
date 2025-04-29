interface SeedFormProps {
  loading: boolean;
  onSubmit: () => void;
}

export function SeedForm({ loading, onSubmit }: SeedFormProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Seed Database</h2>
      <button
        onClick={onSubmit}
        disabled={loading}
        className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded disabled:opacity-50"
      >
        {loading ? 'Seeding...' : 'Seed Database'}
      </button>
    </div>
  );
} 