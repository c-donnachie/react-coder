import { CartProvider } from "./context/CartContext"
import { TestProvider } from "./context/TestContext"
import MainRouter from "./router/MainRouter"

export default function App() {
  return (
    <>
      <TestProvider>
        <CartProvider>

      <MainRouter />
        </CartProvider>
      </TestProvider>
    </>
  )
}
