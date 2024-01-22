// ItemQuantitySelector.js
import s from './ItemQuantitySelector.module.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function ItemQuantitySelector({ productId, productPrice }) {
  const { updateQuantity, cart } = useContext(CartContext);
  const currentItem = cart.find((item) => item.id === productId);
  const quantity = currentItem ? currentItem.quantity : 0;

  const addQuantity = () => {
    if (quantity === 10) return;
    updateQuantity(productId, quantity + 1, productPrice);
  };

  const removeQuantity = () => {
    if (quantity === 1) return;
    updateQuantity(productId, quantity - 1, productPrice);
  };

  return (
    <div className={s.item}>
      <button className={s.item__quantityButton} onClick={removeQuantity}>
        -
      </button>
      <p className={s.item__quantity}>{quantity}</p>
      <button className={s.item__quantityButton} onClick={addQuantity}>
        +
      </button>
    </div>
  );
}
