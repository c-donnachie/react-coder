import { formatCurrency } from '../../helpers/formats'
import s from './ItemDetail.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector'
import truck from '../../assets/iconsDetail/truck.svg'

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
          <hr className={s.hr} />
          <p>{product.description}</p>
          <p className="text">{formatCurrency(product.price)}</p>
          <p>Precio</p>
          <hr className={s.hr} />
          <div>
            <input className={s.card__input} type="number" min="1" max="10" placeholder={1} />
            <button onClick={addToCart}>Comprar</button>
            <ItemQuantitySelector />
          </div>

          <hr className={s.hr} />

          <div className={s.cardRight__icons}>

            <div className={s.cardRight__container}>
              <img className={s.cardRight__img} src={truck} alt="truck" />
            </div>
            <div className={s.cardRight__subContainer}>
              <p className={s.cardRight__text}>Despacho a domicilio</p>
              <p className={s.cardRight__text}>Disponible</p>
            </div>

            <div className={s.cardRight__container}>
              <img className={s.cardRight__img} src={truck} alt="truck" />
            </div>
            <div className={s.cardRight__subContainer}>
              <p className={s.cardRight__text}>Despacho a domicilio</p>
              <p className={s.cardRight__text}>Disponible</p>
            </div>

            <div className={s.cardRight__container}>
              <img className={s.cardRight__img} src={truck} alt="truck" />
            </div>
            <div className={s.cardRight__subContainer}>
              <p className={s.cardRight__text}>Despacho a domicilio</p>
              <p className={s.cardRight__text}>Disponible</p>
            </div>
            <div className={s.cardRight__container}>
              <img className={s.cardRight__img} src={truck} alt="store" />
            </div>
            <div className={s.cardRight__subContainer}>
              <p className={s.cardRight__text}>Despacho a domicilio</p>
              <p className={s.cardRight__text}>Disponible</p>
            </div>
            


          </div>

        </div>

      </div>
    </div>
  )
}
