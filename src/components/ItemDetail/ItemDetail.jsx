import { formatCurrency } from '../../helpers/formats'
import s from './ItemDetail.module.css'
import truck from '../../assets/iconsDetail/truck.svg'
import store from '../../assets/iconsDetail/store.svg'
import quote from '../../assets/iconsDetail/quote.svg'
import card from '../../assets/iconsDetail/card.svg'
import AddToCartContainer from '../../pages/ItemDetailContainer/components/AddToCartContainer/AddToCartContainer'
import { useState } from 'react'
import RelatedProducts from '../RelatedProducts/RelatedProducts'

export default function ItemDetail({ product }) {

  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };


  const options = [
    {
      id: 1,
      name: "Despacho a domicilio",
      description: "Disponible",
      icon: truck
    },
    {
      id: 2,
      name: "Retiro en tienda",
      description: "Disponible",
      icon: store
    },
    {
      id: 3,
      name: "Cotizacion",
      description: "Empresas",
      icon: quote
    },
    {
      id: 4,
      name: "Hasta 24 cuotas",
      description: "Sin interes",
      icon: card
    }
  ]

  return (
    <div className={s.container}>

      <div className={s.cardContainer}>
        <div className={s.cardLeft}>
          <div className={`${s.zoom__container} ${isZoomed ? s.zoomed : ''}`}>
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
            <AddToCartContainer product={product} />
          </div>

          <div className={s.cardRight__icons}>

            {
              options.map((item) => (

                <div key={item.id} className={s.cardRight__container}>

                  <div className={s.cardRight__image} onClick={handleZoomToggle}>
                    <img className={s.cardRight__img} src={item.icon} alt={item.name} />
                  </div>

                  <div className={s.cardRight__subContainer}>
                    <p className={s.cardRight__text}>{item.name}</p>
                    <p className={s.cardRight__text}>{item.description}</p>
                  </div>

                </div>

              ))
            }

          </div>
          {/* fin */}
          <hr className={s.hr} />


        </div>

      </div>

      <div className={s.RelatedProducts}>
        {/* <RelatedProducts /> */}
      </div>

    </div>
  )
}
