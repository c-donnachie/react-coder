import React from "react"
import "./ItemDetail.css"

export default function ItemDetail({ productData }) {
  return (
    <div className="container-item-detail">
      <div className="item-detail">
        <img src={productData.thumbnail} alt={productData.title} />
      </div>
      <div className="item-detail-right">
        <h1 className="text">{productData.title}</h1>
        <p className="text">{productData.price}</p>
        <p className="text">{productData.description}</p>
      </div>
    </div>
  )
}
