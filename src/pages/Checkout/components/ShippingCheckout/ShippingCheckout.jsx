import s from './ShippingCheckout.module.css'
import shipping from "../../../../assets/images/shipping.jpg"

export default function ShippingCheckout() {

    return (
        <section className={s.container}>
            <h3>Datos de envio</h3>

            <div className={s.subContainer}>
                <div className={s.image}>
                    <img className={s.img} src={shipping} alt="shipping" />
                </div>
                <div className={s.card}>
                    <input className={s.input} type="text" placeholder="Nombre" />
                    <input className={s.input} type="text" placeholder="Apellido" />
                    <input className={s.input} type="text" placeholder="Rut" />
                    <input className={s.input} type="text" placeholder="Email" />
                    <input className={s.input} type="text" placeholder="Telefono" />
                    <input className={s.input} type="text" placeholder="Direccion" />
                    <input className={s.input} type="text" placeholder="Comuna" />
                    <input className={s.input} type="text" placeholder="Region" />
                    <input className={s.input} type="text" placeholder="Codigo Postal" />
                </div>
            </div>
        </section>
    )
}
