import { TrainerLayout } from '@/features/trainers/components/layouts/trainer.layout';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TrainerLayout>{children}</TrainerLayout>;
} 