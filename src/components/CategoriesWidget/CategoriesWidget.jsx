import s from './CategoriesWidget.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function CategoriesWidget({ categories }) {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const currentCategory = queryParams.get('category');

  return (
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
}
