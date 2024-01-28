import { useGetProductById } from "../../hooks/useProducts.jsx"
import { useParams } from "react-router-dom"
import Lottie from "lottie-react"
import loadingGif from "../../assets/animations/loading.json"
import ItemDetail from "../../components/ItemDetail/ItemDetail.jsx"
import PrimaryLayout from "../../layouts/PrimaryLayout.jsx"

export default function ItemDetailContainer() {
  const { id } = useParams()
  const { productData, loading } = useGetProductById('products', id)

  const content = loading ? (
    <div className="content">
      <div className="gif">
        <Lottie animationData={loadingGif} />
      </div>
    </div>
  ) : (
    <ItemDetail product={productData} />
  )

  return (
    <PrimaryLayout>
            {content}
    </PrimaryLayout>
  )
}
