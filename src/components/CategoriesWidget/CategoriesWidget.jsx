import s from './CategoriesWidget.module.css'

export default function CategoriesWidget({ categories }) {
  return (
    <div className={s.container}>
      {
        categories.map((category, index) => (
          <div key={index} className={s.card}>
            <div className={s.card__image}>
              <img src={category.image} alt={category.name} className={s.card__img} />
            </div>
            <p className={s.card__title}>
              {category.name}
            </p>
          </div>
        ))
      }
    </div>
  )
}
