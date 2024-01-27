import s from './Cart.module.css'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { formatCurrency } from '../../helpers/formats'
import ItemQuantitySelector from '../../components/ItemQuantitySelector/ItemQuantitySelector';

export default function Cart() {

  const { cart, totalPrice, totalQuantity } = useContext(CartContext);


  return (
    <div className={s.container}>

      <h2 className={s.title}>Carrito</h2>
      <div>
        <p className={s.total}>Total: ${formatCurrency(totalPrice)}</p>
      </div>
      <div>
        <p className={s.total}>Cantidad de productos: {totalQuantity}</p>
      </div>
      <div className={s.cart}>
        {cart.length === 0 ? (
          <p className={s.empty}>No hay productos en el carrito</p>
        ) : (
          cart.map((product) => (
            <div className={s.card} key={product.id}>
              <div className={s.card__image}>
                <img className={s.card_img} src={product.image} alt={product.name} />
              </div>
              <div className={s.card__info}>
                <p className={s.card__name}>{product.name}</p>
                <p className={s.cart__product__price}>${formatCurrency(product.price)}</p>
                <p
                  className={s.cart__product__total}>
                  SubTotal: ${formatCurrency(product.subTotal)}
                </p>
                <ItemQuantitySelector
                  productQuantity={product.quantity}
                  productId={product.id}
                  productPrice={product.price}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
