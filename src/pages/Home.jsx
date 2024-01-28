import { useEffect } from "react"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx"
import CategoriesWidget from "../components/CategoriesWidget/CategoriesWidget.jsx"
import { useGetCollection } from "../hooks/useProducts.jsx"
// import Lottie from "lottie-react"
// import loadingGif from "../assets/animations/loading.json"
import { useGetCategories } from "../hooks/useCategory.jsx"
import PrimaryLayout from "../layouts/PrimaryLayout.jsx"

export default function Home() {


  useEffect(() => {
    document.title = "Home | React Router"
  }, [])

  const { categories } = useGetCategories('categories2')

  const { productsData, loading } = useGetCollection('products')

  // const content = loading ? (
  //   <div className="content">
  //     <div className="gif">
  //       <Lottie animationData={loadingGif} />
  //     </div>
  //   </div>
  // ) : (
  //   <div>{productsData && <ItemListContainer productsData={productsData} />}</div>
  // )

  return (
    <PrimaryLayout>
        <CategoriesWidget categories={categories} />
        <ItemListContainer productsData={productsData} loading={loading} />
    </PrimaryLayout>
  )
}
