import { TrainerNavigation } from '../navigation/navigation.component';
import { TRAINER_COLORS } from '../../constants/trainer.constants';
import { TrainerLayoutProps } from '../../types/trainer.types';

export function TrainerLayout({ children }: TrainerLayoutProps) {
  return (
    <div className={`min-h-screen ${TRAINER_COLORS.BACKGROUND}`}>
      <TrainerNavigation />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
} 