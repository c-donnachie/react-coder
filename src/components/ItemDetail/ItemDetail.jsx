import { formatCurrency } from '../../helpers/formats'
import s from './ItemDetail.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector'

export default function ItemDetail({ product }) {

  const { addToCart } = useContext(CartContext)

  console.log(product)

  return (
    <div className={s.container}>

      <div className={s.cardContainer}>
        <div className={s.cardLeft}>
          <div className={s.card__image}>
            <img className={s.card__img} src={product.image} alt={product.name} />
          </div>
        </div>
        <div className={s.cardRight}>
          <h3 className={s.card__title}>{product.name}</h3>
          <p className="text">{formatCurrency(product.price)}</p>
          <p>Precio</p>
          <div>
            <input className={s.card__input} type="number" min="1" max="10" placeholder={1} />
            <button onClick={addToCart}>Comprar</button>
            <ItemQuantitySelector/>
          </div>
        </div>
      </div>
    </div>
  )
}
