import styles from "./ItemListContainer.module.css"
import { Link } from "react-router-dom"
import Lottie from "lottie-react"
import loadingGif from "../../assets/animations/loading.json"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export default function ItemListContainer({ productsData, loading }) {

  const { addToCart } = useContext(CartContext);

  const handleClick = (product) => {
    addToCart(product);
  };



  const content = loading ? (
    <div className={styles.container}>
      <div className="gif">
        <Lottie animationData={loadingGif} />
      </div>
    </div>
  ) : (

    productsData.map((product) => (
      <div className={styles.card} key={product.id}>
        <p className={styles.card__category}>{product.brand}</p>
        <p className={styles.card__category}>{product.category}</p>
        <h3 className={styles.card__title}>{product.name}</h3>
        <div className={styles.card__image}>
          <Link to={`/item/${product.id}`}>
            <img className={styles.card__img} src={product.image} alt={product.name} />
          </Link>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.card__priceFooter}>
            <p className={styles.card__price}>${product.price}</p>
            <button className={styles.card__button} onClick={handleClick}>🛒</button>
          </div>
        </div>
      </div>
    ))

  )


  return <div className={styles.container}>{content}</div>

}