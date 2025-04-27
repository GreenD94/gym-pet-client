import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './promo-slider.module.css';

const PromoSliderComponent: FC = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className={styles.promoSwiper}
        >
          <SwiperSlide>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/promo1.jpg"
                alt="Doble motivación, doble resultado - 2 personas por $30"
                width={1080}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/promo2.jpg"
                alt="Marzo llegó con nueva oportunidad - Mensualidad y entrenador personal por $40"
                width={1080}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default PromoSliderComponent; 