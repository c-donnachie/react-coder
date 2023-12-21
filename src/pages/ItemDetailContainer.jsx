import React from "react"
import { useGetProductById } from "../hooks/useProducts.jsx"
import { Link, useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import Lottie from "lottie-react"
import loadingGif from "../assets/animations/loading.json"
import ItemDetail from "../components/ItemDetail/ItemDetail.jsx"

export default function ItemDetailContainer() {
  const { id } = useParams()
  const { productData, loading } = useGetProductById(id)

  const content = loading ? (
    <div className="content">
      <div className="gif">
        <Lottie animationData={loadingGif} />
      </div>
    </div>
  ) : (
    <div>
      <ItemDetail productData={productData} />
    </div>
  )

  return <div>{content}</div>
}
