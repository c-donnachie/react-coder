import { useState, useEffect } from "react"
import { getProducts, getProductById, getProductByCategory } from "../services/productsService"
import { adaptApiData } from "../adapters/productsAdapter"

export const useGetProducts = (limit) => {
  const [productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts(limit)
      .then((response) => {
        const adaptedData = adaptApiData(response.data)
        setProductsData(adaptedData)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { productsData, loading }
}

export const useGetProductById = (id) => {
  const [productData, setProductData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProductData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { productData, loading }
}

export const useGetProductByCategory = (category) => {
  const [productsData, setProductsData] = useState([])

  useEffect(() => {
    getProductByCategory(category)
      .then((response) => {
        const adaptedData = adaptApiData(response.data)
        setProductsData(adaptedData)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [category])

  return { productsData }
}
