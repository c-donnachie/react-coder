import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import s from "./CartWidget__Products.module.css"
import CloseIcon from "../../assets/icons/Close.svg"
import { formatCurrency, truncateProductName } from "../../helpers/formats";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";
import Lottie from "lottie-react"
import cartIsEmpyAnimation from "../../assets/animations/cartIsEmpy.json"
import UseAnimations from "react-useanimations";
import trash from 'react-useanimations/lib/trash';

export default function CartWidget__Products({ customHeight }) {

  const { cart, removeProduct } = useContext(CartContext);

  return (
    <div className={s.cartWidget__products} style={{ height: customHeight }}>
      {
        cart.length > 0 ? (
          cart.map((product, index) => (

            <div className={s.container} key={product.id}>
              {
                index != 0 ? <hr /> : null
              }
              <div className={s.card}>

                <button onClick={() => removeProduct(product.id)}>
                  <div className={s.card__image}>

                    <UseAnimations
                      animation={trash}
                      size={30}
                      className={s.card__image__remove}
                    />

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
            <Lottie className={s.cartWidget__gif} animationData={cartIsEmpyAnimation} />
            <h3>Your cart is empty.</h3>
            <p>Please add product to your cart list</p>
          </div>
        )
      }
    </div>
  )
}
