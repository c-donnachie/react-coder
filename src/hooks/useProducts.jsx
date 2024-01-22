import { useState, useEffect } from "react"
import { adaptApiData } from "../adapters/productsAdapter"
import { collection, getDocs, doc, getDoc, getFirestore } from "firebase/firestore";

export const useGetCollection = (collectionName) => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName)

    getDocs(productsCollection)
      .then((snapshot) => {
        const adaptedData = snapshot.docs.map((doc) =>
          adaptApiData({ id: doc.id, ...doc.data() }))
        setProductsData(adaptedData)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => setLoading(false))
  }, [collectionName]);

  return { productsData, loading };
};

export const useGetProductById = (collectionName = 'products', id) => {
  const [productData, setProductData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore();
    const getRef = doc(db, collectionName, id)
    getDoc(getRef)
      .then((doc) => {
        setProductData(
          adaptApiData({ id: doc.id, ...doc.data() })
        )
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => setLoading(false))

  })

  return { productData, loading }
}

export const useGetCategories = (collectionName = "categories") => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName)

    getDocs(productsCollection)
      .then((snapshot) => {
        const categories = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setCategories(categories[0].categories)
      })
  }, [])

  return { categories }
}