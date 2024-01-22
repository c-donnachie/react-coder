import CartTotal from "../CartTotal/CartTotal"
import SearchWidget from "../SearchWidget/SearchWidget"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartOpenContext } from "../../context/CartOpenContext"
import s from "./NavBar.module.css"

export default function NavBar({ title }) {
  const { handleOpenCart } = useContext(CartOpenContext)

  return (
    <div>
      <nav className={s.mainNav}>
        <div className={s.container}>
          <Link to="/" className={s.brand}>
            <div>
              {title}
            </div>
          </Link>
          <div>
            <SearchWidget />
          </div>
          <div>
            <button onClick={handleOpenCart}>
              <CartTotal />
            </button>
          </div>
        </div>
      </nav>

      {/* 2do nav categorias */}
      <nav className={`${s.container} `}>
        <Link to="/create">
          <div className={s.textWhite}>Crear</div>
        </Link>
        <Link to="/cart">
          <div className={s.textWhite}>Cart</div>
        </Link>
        <Link to="/filtered">
          <div className={s.textWhite}>Filtros</div>
        </Link>
      </nav>
    </div>
  )
}
