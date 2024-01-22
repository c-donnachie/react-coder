import { CartProvider } from "./context/CartContext"
import { CartOpenProvider } from "./context/CartOpenContext"
import MainRouter from "./router/MainRouter"

export default function App() {
  return (
    <>
      <CartOpenProvider>
        <CartProvider>
          <MainRouter />
        </CartProvider>
      </CartOpenProvider>
    </>
  )
}
