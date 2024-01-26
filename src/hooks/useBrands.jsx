import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const useGetBrands = (collectionName) => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
      const db = getFirestore();
      const productsCollection = collection(db, collectionName)
  
      getDocs(productsCollection)
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          setBrands(data)
        })
        .catch((error) => {
          console.log(error)
        })
    
    }, [])
  
    return { brands }
  
  }