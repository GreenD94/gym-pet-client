import { FC } from 'react';
import styles from './location.module.css';

export const Location: FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 pt-2 pb-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="relative">
          <div className="space-y-6">
            {/* Link to directions */}
            <div className="text-center">
              <a
                href="https://www.google.com/maps?sca_esv=e5eeec09d3fdc8a2&output=search&q=cosmo+barquisimeto&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBjLjqIC1CYKD9D-DQAQS3Z6EpsJ-_trBJaiPaUAUAuwPrQpGZRFZUkcz4BNojaIGAPOgCx8ilK1rczRzBTQT4aKUQq0_aEx39lfbzzfmaAj0LKj4ZUyGjR8eE3fVupK7u1Hp5StoMd0DPLR0YPKHbugwOHGM&entry=mc&ved=1t:200715&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md"
              >
                <span className="text-lg font-semibold">Cómo llegar</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            <div className={`text-center relative ${styles.fadeIn}`}>
              <div className="inline-block relative">
                <div className="absolute -left-4 -right-4 top-1/2 h-[1px] bg-black opacity-10"></div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-wider mb-2 relative bg-gradient-to-b from-white to-gray-50 inline-block px-4">
                  C. C. COSMOS
                </h3>
              </div>
              <p className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-8">
                PISO 4 / LOCAL 4A-20
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}; 