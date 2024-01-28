import { useGetCollection } from "../../hooks/useProducts"
import ItemList from "../ItemList/ItemList"

export default function RelatedProducts() {
    const { productsData, loading } = useGetCollection('products')

    const limitProducts = productsData.filter((product, index) => (index < 4))

  return (
          <ItemList productsData={limitProducts}/>

  )
}
