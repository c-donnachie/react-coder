import s from './CarouselSwiper.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import Banner1 from '../../assets/banner/banner1.jpg';
import Banner2 from '../../assets/banner/banner2.jpg';


export default function CategoriesWidget() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={s.banner__image}>
            <img className={s.banner__img} src={Banner1} alt="banner" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.banner__image}>
            <img className={s.banner__img} src={Banner2} alt="banner" />
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
