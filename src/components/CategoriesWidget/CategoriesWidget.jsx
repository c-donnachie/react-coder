
import s from './CategoriesWidget.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@react-hook/media-query';
import 'swiper/css';

export default function CategoriesWidget({ categories }) {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const currentCategory = queryParams.get('category');

  const isMobile = useMediaQuery('(max-width: 768px)');

  const renderMobile = () => (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={-250}
      loop={true}
      className={s.containerMovil}
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index}>
          <Link
            to={`/filtered?category=${category.name}`}
            className={`${s.card} ${currentCategory === category.name ? s.active : ''}`}
          >
            <div className={s.card__image}>
              <img src={category.image} alt={category.name} className={s.card__img} />
            </div>
            <p className={s.card__title}>{category.name}</p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const renderDesktop = () => (
    <div className={s.container}>
      {categories.map((category, index) => (
        <div key={index}>
          <Link
            to={`/filtered?category=${category.name}`}
            className={`${s.card} ${currentCategory === category.name ? s.active : ''}`}
          >
            <div className={s.card__image}>
              <img src={category.image} alt={category.name} className={s.card__img} />
            </div>
            <p className={s.card__title}>{category.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {isMobile ? renderMobile() : renderDesktop()}
    </>
  );
}
