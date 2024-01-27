import s from './ShippingCheckout.module.css'
import { useContext } from 'react'
import { CheckoutContext } from '../../../../context/CheckoutContext'

export default function ShippingCheckout() {

    const { setCheckoutState } = useContext(CheckoutContext)

    return (
        <section className={s.container}>
            <h3>ShippingCheckout</h3>
            <input className={s.input} type="text" placeholder="Nombre" />
            <input className={s.input} type="text" placeholder="Apellido" />
            <input className={s.input} type="text" placeholder="Rut" />
            <input className={s.input} type="text" placeholder="Email" />
            <input className={s.input} type="text" placeholder="Telefono" />
            <input className={s.input} type="text" placeholder="Direccion" />
            <input className={s.input} type="text" placeholder="Comuna" />
            <input className={s.input} type="text" placeholder="Region" />
            <input className={s.input} type="text" placeholder="Codigo Postal" />

            <button onClick={() => setCheckoutState(3)}>Continuar</button>
        </section>
    )
}
