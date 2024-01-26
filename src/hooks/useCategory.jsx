import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const useGetCategories = (collectionName)  => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName)

    getDocs(productsCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setCategories(data)
      })
      .catch((error) => {
        console.log(error)
      })
  
  }, [])

  return { categories }

}

export const useGetCategoryById = (collectionName, id) => {
  const [categoryData, setCategoryData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName)

    getDocs(productsCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        const category = data.find((item) => item.id === id)
        setCategoryData(category)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  
  }, [id])

  return { categoryData, loading }
}