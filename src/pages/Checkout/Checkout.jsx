
import s from "./Checkout.module.css"
import LoginCheckOut from "./components/LoginCheckout/LoginCheckOut";
import { CheckoutContext } from "../../context/CheckoutContext";
import { useContext } from "react";
import ShippingCheckout from "./components/ShippingCheckout/ShippingCheckout";
import PaymentCheckout from "./components/PaymentCheckout/PaymentCheckout";
import Lottie from "lottie-react"
import check from "../../assets/animations/check.json"
import CartcheckOut from "./components/CartCheckout/CartcheckOut";
import PrimaryLayout from "../../layouts/PrimaryLayout"


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
            name: 'Tipo de Pago',
        }
    ]

    const checkoutStateWidget =
        <section className={s.checkoutState}>
            <div className={`${s.lineProgress} 
            ${checkoutState === 2 ? s.lineProgress__2 : ''} 
            ${checkoutState >= 3 ? s.lineProgress__3 : ''} 
            
            `}></div>
            {


                checkout.map((item, index) => (
                    <div key={item.id} className={s.checkout__card}>
                        <div className={s.checkout__container}>

                            <button onClick={() => setCheckoutState(item.id)}>
                                <p
                                    className={`${s.checkout__number} 
                                ${checkout[index].id <= checkoutState ? s.checkout__number__ready : ''}
                                ${checkout[index].id === checkoutState ? s.checkout__number__active : ''}
                                `}>{checkout[index].id < checkoutState ? <Lottie
                                        animationData={check}
                                        autoplay={true}
                                        loop={false}
                                        style={{ width: 58, height: 58, position: 'absolute' }}
                                    /> : item.id}</p>
                            </button>

                        </div>
                        <p>{item.name}</p>
                    </div>



                ))
            }
        </section>

    return (

        <PrimaryLayout>

            <div className={s.container}>


                <div className={s.subContainer}>

                    {checkoutStateWidget}

                    <div className={s.stateContainer}>
                        {checkoutState === 1 && <LoginCheckOut />}
                        {checkoutState === 2 && <ShippingCheckout />}
                        {checkoutState === 3 && <PaymentCheckout />}
                    </div>


                </div>


                <div>
                    <CartcheckOut />
                </div>

            </div>
        </PrimaryLayout>

    )
}
