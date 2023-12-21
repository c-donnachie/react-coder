import React from "react"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { useParams } from "react-router-dom"
import { useGetProductByCategory } from "../hooks/useProducts"
import "./ItemDetailContainer.css"

export default function Category() {
  const { id } = useParams()

  const { productsData } = useGetProductByCategory(id)
  return (
    <div>
      <ItemListContainer productsData={productsData} />
    </div>
  )
}
