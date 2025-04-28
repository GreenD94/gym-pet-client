import { FC } from 'react';
import styles from './hours.module.css';

export const Hours: FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 pt-8 pb-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="relative">
          <div className="space-y-8">
            {/* Weekday Hours */}
            <div className={`text-center relative ${styles.slideLeft}`}>
              <div className="inline-block relative">
                <div className="absolute -left-4 -right-4 top-1/2 h-[1px] bg-black opacity-10"></div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-wider mb-2 relative bg-gradient-to-b from-white to-gray-50 inline-block px-4">
                  LUNES A VIERNES
                </h3>
              </div>
              <p className="text-3xl md:text-4xl font-bold tracking-tight">
                <span className="text-black">6:30</span>
                <span className="text-gray-400 mx-1">AM</span>
                <span className="text-gray-300 mx-2">—</span>
                <span className="text-black">8:00</span>
                <span className="text-gray-400 mx-1">PM</span>
              </p>
            </div>

            {/* Weekend Hours */}
            <div className={`text-center relative ${styles.slideRight}`}>
              <div className="inline-block relative">
                <div className="absolute -left-4 -right-4 top-1/2 h-[1px] bg-black opacity-10"></div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-wider mb-2 relative bg-gradient-to-b from-white to-gray-50 inline-block px-4">
                  SABADO Y FERIADOS
                </h3>
              </div>
              <p className="text-3xl md:text-4xl font-bold tracking-tight">
                <span className="text-black">7:00</span>
                <span className="text-gray-400 mx-1">AM</span>
                <span className="text-gray-300 mx-2">—</span>
                <span className="text-black">1:00</span>
                <span className="text-gray-400 mx-1">PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 