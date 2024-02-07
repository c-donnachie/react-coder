import CartTotal from "../CartTotal/CartTotal"
import SearchWidget from "../SearchWidget/SearchWidget"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartOpenContext } from "../../context/CartOpenContext"
import { useGetCategories } from "../../hooks/useCategory"
import s from "./NavBar.module.css"
import logo from "../../assets/images/logo.svg"
import logoMobile from "../../assets/images/logo-mobile.svg"

// Icons
import DropdownIcon from "../../assets/icons/AltChevron-Down.svg"

export default function NavBar() {
  const { handleOpenCart } = useContext(CartOpenContext)
  const { categories } = useGetCategories('categories2')

  const categoryList = categories.map((category) => (
    <Link to={`/filtered?category=${category.name}`} key={category.id}>
      <div className={s.dropdown__category}>{category.name}</div>
    </Link>))

  return (
    <nav className={s.container}>
      <Link to="/" className={s.brand}>
        <img className={s.logo} src={logo} alt="logo" />
        <img className={s.mobile__logo} src={logoMobile} alt="logo-mobile" />
      </Link>

      <section className={s.center}>

        <div className={s.dropdown}>
          <button className={s.dropdown__button}>
            <div>Categorias</div>
            <img className={s.dropdown__buttonIcon} src={DropdownIcon} alt="dropdown" />
          </button>
          <div className={s.dropdown__content}>
            {
              categoryList
            }
          </div>
        </div>

        <div className={s.searchWidget}>
          <SearchWidget />
        </div>

      </section>

      <div className={s.cartTotal}>
        <button onClick={handleOpenCart}>
          <CartTotal />
        </button>
      </div>
    </nav>

  )
}
