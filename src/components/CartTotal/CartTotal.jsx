import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import cartIcon from "../../assets/icons/Cart.svg"
import s from "./CartTotal.module.css"

export default function CartTotal({name}) {

  const { totalQuantity, addToCart } = useContext(CartContext)
  const [buyAnimationActive, setBuyAnimationActive] = useState(false);

  useEffect(() => {
    setBuyAnimationActive(true);
    setTimeout(() => {
      setBuyAnimationActive(false);
    }, 1000);
  }, [addToCart])

  return (
    <div className={s.container}>
      <div className={s.cart}>
        <img className={s.cart__img} src={cartIcon} alt="as" />
        <div
          className={`${s.cart__totalContainer} ${buyAnimationActive ? '' : ''}`}>
          <p className={s.cart__totalValue}>{totalQuantity}</p>
        </div>
      </div>
      <p>{name}</p>
    </div>
  )
}
