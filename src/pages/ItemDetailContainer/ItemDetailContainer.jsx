import { useGetProductById } from "../../hooks/useProducts.jsx"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail.jsx"
import PrimaryLayout from "../../layouts/PrimaryLayout.jsx"
import LoadingGif from "../../components/LoadingGif/LoadingGif.jsx"
import useScrollToTop from "../../helpers/general.js"

export default function ItemDetailContainer() {
  const { id } = useParams()
  const { productData, loading } = useGetProductById('products', id)

  useScrollToTop();

  const content = loading ? (
    <LoadingGif/>
  ) : (
    <ItemDetail product={productData} />
  )

  return (
    <PrimaryLayout>
            {content}
    </PrimaryLayout>
  )
}
