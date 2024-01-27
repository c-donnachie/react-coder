import { CartProvider } from "./context/CartContext"
import { CartOpenProvider } from "./context/CartOpenContext"
import { CheckoutProvider } from "./context/CheckoutContext"
import MainRouter from "./router/MainRouter"

export default function App() {
  return (
    <>
      <CheckoutProvider>
        <CartOpenProvider>
          <CartProvider>
            <MainRouter />
          </CartProvider>
        </CartOpenProvider>
      </CheckoutProvider>

    </>
  )
}
