import CartTotal from '../CartTotal/CartTotal';
import s from './NavigationbarMobile.module.css';
import { useContext } from 'react';
import { CartOpenContext } from '../../context/CartOpenContext';

export default function NavigationbarMobile() {
    const { handleOpenCart } = useContext(CartOpenContext)

    return (
        <div className={s.container}>
            <button onClick={handleOpenCart}>
                <CartTotal />
            </button>
        </div>
    )
}
