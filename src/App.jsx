import { CartProvider } from "./context/CartContext"
import { CartOpenProvider } from "./context/CartOpenContext"
import { CheckoutProvider } from "./context/CheckoutContext"
import MainRouter from "./router/MainRouter"
import { useRef } from "react"

export default function App() {
  const contentRef = useRef(null);
  return (
    <>
    {/* <div style={{ height: '100vh', overflow: 'hidden' }}>
      <div
        ref={contentRef}
        style={{ overflowY: 'scroll', height: '100%', padding: '10px' }}
      > */}
        <CheckoutProvider>
          <CartOpenProvider>
            <CartProvider>
              <MainRouter />
            </CartProvider>
          </CartOpenProvider>
        </CheckoutProvider>

      {/* </div>
      </div> */}
      </>
  )
}
