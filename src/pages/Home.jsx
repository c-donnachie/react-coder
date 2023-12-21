import React, { useEffect } from "react"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx"
import CategoriesWidget from "../components/CategoriesWidget/CategoriesWidget.jsx"
import { useGetProducts } from "../hooks/useProducts.jsx"
import Lottie from "lottie-react"
import loadingGif from "../assets/animations/loading.json"

export default function Home() {
  useEffect(() => {
    document.title = "Home | React Router"
  }, [])

  const { productsData, loading } = useGetProducts(10)

  const content = loading ? (
    <div className="content">
      <div className="gif">
        <Lottie animationData={loadingGif} />
      </div>
    </div>
  ) : (
    <div>{productsData && <ItemListContainer productsData={productsData} />}</div>
  )

  return (
    <div>
      <CategoriesWidget />
      {content}
    </div>
  )
}
