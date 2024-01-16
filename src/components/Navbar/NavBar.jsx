import CartWidget from "../CartWidget/CartWidget"
import SearchWidget from "../SearchWidget/SearchWidget"
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom"

export default function NavBar({ title, nameCategories, categories, buttons }) {


  return (
    <div>
      <nav>
        <div className={styles.container}>
          <Link
            to="/"
            className={styles.brand}>
            <div
              className="text-white">
              {title}
            </div>
          </Link>
          <div>
            <SearchWidget/>
          </div>
          <div>
            <button onClick={() => alert("Tienes: 0 elementos")}>
              <CartWidget />
            </button>
          </div>
        </div>
      </nav>

      {/* 2do nav categorias */}
      <nav className={styles.container}>
        <Link to="/create">
          <div className="text-white">Crear</div>
        </Link>
      </nav>
    </div>
  )
}


{/* <div className={styles.contentContainer}>
<div className={styles.group}>
  <button className={styles.buttonStyle}>

    <div className={styles.dropdownMenu}>
      <div className={styles.dropdownMenu__content}></div>
    </div>
  </button>
</div>

<div className="group"></div>
</div> */}