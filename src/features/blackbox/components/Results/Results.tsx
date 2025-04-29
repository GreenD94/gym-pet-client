import { TestResult } from '../../types/blackbox.types';

interface ResultsProps {
  result: TestResult | null;
}

export function Results({ result }: ResultsProps) {
  if (!result) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Results</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-auto">
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
} 