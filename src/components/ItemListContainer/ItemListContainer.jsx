import React from "react"
import "./ItemListContainer.css"
import { Link } from "react-router-dom"

export default function ItemListContainer({ productsData }) {
  const showProducts = productsData.map((product) => (
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

  return (
    <div className="general-container">
      <div className="container">{showProducts}</div>
    </div>
  )
}
