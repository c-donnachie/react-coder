import { useEffect, useState } from "react"
import { getCategories } from "../services/categoriesService"
import { collection, getDocs, getFirestore } from "firebase/firestore";


export const useCategory = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategory(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return { category }
}

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