import { formatCurrency } from '../../helpers/formats'
import s from './ItemDetail.module.css'

export default function ItemDetail({ productData }) {
  return (
    <div className={s.container}>
      <div className={s.cardContainer}>
        <div className={s.cardLeft}>
          <div className={s.card__image}>
            <img className={s.card__img} src={productData.image} alt={productData.name} />
          </div>
        </div>
        <div className={s.cardRight}>
          <h3 className={s.card__title}>{productData.name}</h3>
          <p className="text">{formatCurrency(productData.price)}</p>
          <p>Precio</p>
          <div>
            <input className={s.card__input} type="number" min="1" max="10" placeholder={1} />
            <button>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
