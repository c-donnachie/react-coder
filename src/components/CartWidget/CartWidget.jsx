import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { formatCurrency } from "../../helpers/formats";
import s from './CartWidget.module.css';
import { CartOpenContext } from "../../context/CartOpenContext";
import CloseIcon from "../../assets/icons/Close.svg"
import { useNavigate } from "react-router-dom";
import CartWidget__Products from "../CartWidget__Products/CartWidget__Products";

export default function CartWidget() {
  const { handleCloseCart, handleOpenCart, cartOpen } = useContext(CartOpenContext);
  const { clearCart, cartIsEmpy, totalPrice } = useContext(CartContext);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout');
    handleCloseCart();
  };

  const handleKeyDown = (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'm') {
      if (cartOpen) {
        handleCloseCart();
      } else {
        handleOpenCart();
      }
      event.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cartOpen])


  return (
    <div>
      {cartOpen ? (
        <div>

          <section
            className={`${s.cartWidget__card} ${cartOpen ? s.cartWidget__card_open : ''}`}
          >
            <div className={s.cartWidget__card__header}>
              <div className={s.cartWidget__titleContainer}>
                <p className={s.cartWidget__title}>Carrito</p>
                <p className={s.cartWidget__command}>⌘ + m</p>
              </div>
              <button
                className={`${s.cartWidget__clearButton} ${cartIsEmpy ? s.cartWidget__clearButton__disabled : ''}`}
                onClick={clearCart}
              >Clear</button>
              <button onClick={handleCloseCart}>
                <img
                  className={s.cartWidge__closeIcon}
                  src={CloseIcon} alt="close" />
              </button>
            </div>


            <CartWidget__Products />


            <div className={s.cartWidget__card__footer}>
              <p className={s.cartWidget__card__footer__total}>Subtotal: ${formatCurrency(totalPrice)}</p>
              <p>Final price and discounts will be determined at the time of payment processing.</p>

              <button
                className={`${s.button} ${cartIsEmpy && s.button__cartEmpty} `}
                onClick={handleClick}
              >Proced to checkout
              </button>

            </div>

          </section>

          <div
            className={s.cartWidget__overlay}
            onClick={handleCloseCart}
          ></div>
        </div>
      ) : null}
    </div>
  );
}
