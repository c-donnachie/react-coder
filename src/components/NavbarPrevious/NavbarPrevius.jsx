import { Link } from "react-router-dom"
import s from "./NavbarPrevius.module.css"
import { useContext } from "react"
import { CartOpenContext } from "../../context/CartOpenContext"
import CartTotal from "../CartTotal/CartTotal"

export default function NavbarPrevius() {
    const { handleOpenCart } = useContext(CartOpenContext)

    return (

        <nav className={`${s.container}`}>

            <div>Categorias</div>

            <Link to="/create">
                <div className={s.textWhite}>Crear</div>
            </Link>
            <Link to="/cart">
                <div className={s.textWhite}>Cart</div>
            </Link>
            <Link to="/filtered">
                <div className={s.textWhite}>Filtros</div>
            </Link>
            <button onClick={handleOpenCart}>
                <CartTotal />
            </button>
        </nav>
    )
}
