import s from './CartCheckout.module.css';
import CartWidget__Products from '../../../../components/CartWidget__Products/CartWidget__Products';
import { CartContext } from '../../../../context/CartContext';
import { useContext } from 'react';
import { formatCurrency } from '../../../../helpers/formats';
import Button from '../../../../components/Button/Button';
import { CheckoutContext } from '../../../../context/CheckoutContext';
import { useNavigate } from "react-router-dom";


export default function CartcheckOut() {

  const { totalPrice, totalQuantity, clearCart } = useContext(CartContext);
  const { setCheckoutState, checkoutState, resetCheckoutState } = useContext(CheckoutContext);

  const navigate = useNavigate();

  const handleClick = () => {

    if (checkoutState <= 3) {
      setCheckoutState(checkoutState + 1);
    }

    if (checkoutState === 3) {
      setCheckoutState(4);

      setTimeout(() => {
        resetCheckoutState();
        clearCart();
        navigate('/complete-order');
      }, 3000)
    }

  };



  return (
    <div className={s.card}>
      <div className={s.card__header}>
        <h3>Resumen de compra</h3>
        <p>Items: {totalQuantity}</p>
      </div>
      <CartWidget__Products customHeight="45vh" />
      <div className={s.card__info}>
        <h3>Costo de envio</h3>
        <p>Despacho a domicilio: 0</p>
        <hr />
        <p>subtotal: {formatCurrency(totalPrice)}</p>
        <hr />

        {
          checkoutState === 2 ? (
            <Button text="Continuar" onClick={handleClick} />
          ) : checkoutState === 3 ? (
            <Button text="Pagar" onClick={handleClick} />
          ) : (
            <></>
          )
        }

      </div>
    </div>
  )
}
