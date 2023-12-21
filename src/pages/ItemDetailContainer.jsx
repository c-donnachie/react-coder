import React from "react"
import { useGetProductById } from "../hooks/useProducts.jsx"
import { Link, useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import Lottie from "lottie-react"
import loadingGif from "../assets/animations/loading.json"

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
      <Link to="/">
        <button className="button">Atras</button>
      </Link>
      <h1 className="text">{productData.title}</h1>
      <img src={productData.thumbnail} alt={productData.title} />
      <p className="text">{productData.price}</p>
      <p className="text">{productData.description}</p>
    </div>
  )

  return <div>{content}</div>
}
