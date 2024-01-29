import ItemList from "../ItemList/ItemList"
import LoadingGif from "../LoadingGif/LoadingGif"
import s from './ItemListContainer.module.css';

export default function ItemListContainer({ productsData, loading }) {


  const content = loading ? (
    <LoadingGif />
  ) : (

    <div className={s.subContainer}>
      <ItemList productsData={productsData} />
    </div>
  )


  return (
    <div>
      {content}
    </div>
  )

}