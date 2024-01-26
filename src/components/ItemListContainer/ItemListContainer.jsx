import styles from "./ItemListContainer.module.css"
import Lottie from "lottie-react"
import loadingGif from "../../assets/animations/loading.json"
import ItemList from "../ItemList/ItemList"

export default function ItemListContainer({ productsData, loading }) {


  const content = loading ? (
    <div className={styles.container}>
      <div className="gif">
        <Lottie animationData={loadingGif} />
      </div>
    </div>
  ) : (

    <ItemList productsData={productsData} />

  )


  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>{content}</div>
    </div>
  )

}