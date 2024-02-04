import CartTotal from '../CartTotal/CartTotal';
import s from './NavigationbarMobile.module.css';
import { useContext } from 'react';
import { CartOpenContext } from '../../context/CartOpenContext';
import { useNavigate } from 'react-router-dom';

export default function NavigationbarMobile() {
    const { handleOpenCart } = useContext(CartOpenContext)

    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }

    return (
        <div className={s.container}>
            <button onClick={handleOpenCart}>
                <CartTotal />
            </button>
            <button onClick={handleHome}>
                Home
            </button>
        </div>
    )
}
