import React from "react"
import "./ItemListContainer.css"
import { Link } from "react-router-dom"
import Lottie from "lottie-react"
import skeletonImage from "../../assets/animations/skeletonImage.json"
import skeletonText from "../../assets/animations/skeletonText.json"

export default function ItemListContainer({ productsData }) {
  const showProducts = () => {
    if (!productsData || productsData.length === 0) {
      const loadingItems = []
      for (let i = 0; i < 20; i++) {
        loadingItems.push(
          <div className="loading-message" key={i}>
            <div className="card-product">
              <div className="image">
                <Lottie animationData={skeletonImage} />
              </div>
              <h3 className="text-skeleton">
                <Lottie animationData={skeletonText} />
              </h3>
              <div className="footer-product">
                <div className="price-container">
                  <p className="price-skeleton">
                    <Lottie animationData={skeletonText} />
                  </p>
                </div>
                <div className="button-skeleton">
                  <Lottie animationData={skeletonText} />
                </div>
              </div>
            </div>
          </div>
        )
      }

      return loadingItems
    }

    return productsData.map((product) => (
      <div className="card-product" key={product.id}>
        <Link to={`/item/${product.id}`}>
          <img className="image" src={product.image} alt={product.name} />
        </Link>
        <h3 className="text">{product.name}</h3>
        <div className="footer-product">
          <div className="price-container">
            <p className="price">${product.price}</p>
          </div>
          <button className="button text">Agregar al carrito</button>
        </div>
      </div>
    ))
  }

  return (
    <div className="general-container">
      <div className="container">{showProducts()}</div>
    </div>
  )
}
