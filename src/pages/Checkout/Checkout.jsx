
import s from "./Checkout.module.css"
import Cart from "../Cart/Cart";
import LoginCheckOut from "./components/LoginCheckout/LoginCheckOut";
import { CheckoutContext } from "../../context/CheckoutContext";
import { useContext } from "react";
import ShippingCheckout from "./components/ShippingCheckout/ShippingCheckout";

export default function Checkout() {

    const { checkoutState, setCheckoutState } = useContext(CheckoutContext);

    const checkout = [
        {
            id: 1,
            name: 'Iniciar Sesion',
        },
        {
            id: 2,
            name: 'Tipo de Envio',
        },
        {
            id: 3,
            name: 'Pago',
        }
    ]

    const checkoutStateWidget =
        <section className={s.checkoutState}>
            <div className={`${s.lineProgress} 
            ${checkoutState === 2 ? s.lineProgress__2 : ''} 
            ${checkoutState === 3 ? s.lineProgress__3 : ''} 
            
            `}></div>
            {


                checkout.map((item, index) => (
                    <div key={item.id} className={s.checkout__card}>
                        <div className={s.checkout__container}>

                            <button onClick={() => setCheckoutState(item.id)}>
                                <p
                                    className={`${s.checkout__number} 
                                ${checkout[index].id <= checkoutState ? s.checkout__number__active : ''}
                                `}>{item.id}</p>
                            </button>

                        </div>
                        <p>{item.name}</p>
                    </div>



                ))
            }
        </section>

    return (
        <div className={s.container}>
            {checkoutStateWidget}

            {checkoutState === 1 && <LoginCheckOut />}
            {checkoutState === 2 && <ShippingCheckout />}


            <Cart />
        </div>
    )
}
