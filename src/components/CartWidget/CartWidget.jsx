import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { formatCurrency, truncateProductName } from "../../helpers/formats";
import s from './CartWidget.module.css';
import { CartOpenContext } from "../../context/CartOpenContext";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";
import Lottie from "lottie-react"
import cartIsEmpy from "../../assets/animations/cartIsEmpy.json"

export default function CartWidget() {
  const { handleCloseCart, cartOpen } = useContext(CartOpenContext);
  const { cart, clearCart, totalPrice, removeProduct } = useContext(CartContext);

  const cartContent =
    cart.length > 0 ? (
      cart.map((product, index) => (

        <div className={s.container} key={product.id}>
          {
            index != 0 ? <hr /> : null
          }
          <div className={s.card}>

            <button onClick={() => removeProduct(product.id)}>
              <div className={s.card__image}>
                <p className={s.card__image__remove}>X</p>
                <img
                  className={s.card_img}
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </button>

            <div className={s.card__info}>

              <p className={s.card__name}
              >{truncateProductName(product.name, 28)}</p>

              <p
                className={s.cart__product__price}
              >${formatCurrency(product.subTotal)}
              </p>

              <ItemQuantitySelector
                productQuantity={product.quantity}
                productId={product.id}
                productPrice={product.price}
              />
            </div>

          </div>
          {/* final */}
        </div>
      ))

    ) : (
      <div className={s.cartEmpy__container}>
        <Lottie className={s.cartWidget__gif} animationData={cartIsEmpy} />
        <h3>Your cart is empty.</h3>
        <p>Please add product to your cart list</p>
      </div>
    )


  return (
    <div>
      {cartOpen ? (
        <div>

          <section
            className={`${s.cartWidget__card} ${cartOpen ? s.cartWidget__card_open : ''}`}
          >
            <div className={s.cartWidget__card__header}>
              <p className={s.cartWidget__title}>Carrito</p>
              <button onClick={clearCart}>Clear</button>
              <button onClick={handleCloseCart}>X</button>
            </div>

            <div className={s.cartWidget__products}>

              {
                cartContent
              }
            </div>

            <div className={s.cartWidget__card__footer}>
              <p>Subtotal: ${formatCurrency(totalPrice)}</p>
              <p>Final price and discounts will be determined at the time of payment processing.</p>
              <div className={s.button}>Proced to checkout</div>
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
