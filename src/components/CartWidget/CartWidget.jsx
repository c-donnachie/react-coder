import { useContext } from "react"
import { TestContext } from "../../context/TestContext"
import { CartContext } from "../../context/CartContext"

export default function CartWidget() {
  const { count } = useContext(TestContext)
  const { cart } = useContext(CartContext)
  return (
    <div>
      <div>🛒 {count} Carrito</div>
      {console.log(cart)}
    </div>
  )
}

