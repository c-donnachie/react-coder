import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import cartIcon from "../../assets/icons/Cart.svg"
import s from "./CartTotal.module.css"

export default function CartTotal() {

  const { totalQuantity } = useContext(CartContext)

  return (
    <div className={s.container}>
      <div className={s.cart}>
        <img className={s.cart__img} src={cartIcon} alt="as" />
        <div className={s.cart__totalContainer}>
          <p className={s.cart__totalValue}>{totalQuantity}</p>
        </div>
      </div>
      <p>Carrito</p>
    </div>
  )
}
