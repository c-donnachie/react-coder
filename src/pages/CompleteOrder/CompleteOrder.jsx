import s from './CompleteOrder.module.css'
import PrimaryLayout from '../../layouts/PrimaryLayout'

export default function CompleteOrder() {


    return (

        <PrimaryLayout>
            <div className={s.container}>
                <h1>Thank you for your order!</h1>
                <p>We will contact you as soon as possible.</p>
            </div>
        </PrimaryLayout>

    )
}
