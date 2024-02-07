import CartTotal from '../CartTotal/CartTotal';
import s from './NavigationbarMobile.module.css';
import { useContext } from 'react';
import { CartOpenContext } from '../../context/CartOpenContext';
import { useNavigate } from 'react-router-dom';

// Icons
import HomeIcon from '../../assets/icons/Home-alt.svg';
import SearchIcon from '../../assets/icons/Search.svg';
import ShopIcon from '../../assets/icons/Shop.svg';
// import PersonIcon from '../../assets/icons/Person.svg';

export default function NavigationbarMobile() {
    const { handleOpenCart } = useContext(CartOpenContext)

    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }

    const handleStore = () => {
        navigate('/filtered')
    }

    return (
        <div className={s.container}>
            <div className={s.subContainer}>
                <button className={s.buttonContainer} onClick={handleHome}>
                    <img src={HomeIcon} alt="home" />
                    <p>Inicio</p>
                </button>
                <button onClick={handleStore} className={s.buttonContainer} >
                    <img src={ShopIcon} alt="shop" />
                    <p>Tienda</p>
                </button>
                <button className={s.buttonContainer} onClick={handleOpenCart}>
                    <CartTotal />
                    <p>Carrito</p>
                </button>
            </div>
        </div>
    )
}
