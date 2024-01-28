import CartTotal from "../CartTotal/CartTotal"
import SearchWidget from "../SearchWidget/SearchWidget"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartOpenContext } from "../../context/CartOpenContext"
import { useGetCategories } from "../../hooks/useCategory"
import s from "./NavBar.module.css"

export default function NavBar({ title }) {
  const { handleOpenCart } = useContext(CartOpenContext)
  const { categories } = useGetCategories('categories2')

  const categoryList = categories.map((category) => (
    <Link to={`/filtered?category=${category.name}`} key={category.id}>
      <div className={s.dropdown__category}>{category.name}</div>
    </Link>))

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


      <nav className={`${s.container} ${s.navbar2} `}>

        <div className={s.dropdown}>
          <button className={s.dropdown__button}>
            <div>Categorias</div>
          </button>
          <div className={s.dropdown__content}>
            {
              categoryList
            }
          </div>
        </div>


        <Link to="/create">
          <div className={s.textWhite}>Crear</div>
        </Link>
        {/* <Link to="/checkout">
          <div className={s.textWhite}>Checkout</div>
        </Link> */}
        <Link to="/filtered">
          <div className={s.textWhite}>Filtros</div>
        </Link>
      </nav>
    </div>
  )
}
