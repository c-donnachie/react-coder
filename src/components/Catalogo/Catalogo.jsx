import React from "react"
import { useCategory } from "../../hooks/useCategory.jsx"
import { Link } from "react-router-dom"
import "./Catalogo.css"

export default function Catalogo() {
  const { category } = useCategory()
  return (
    <div>
      <h1>Catalogo</h1>
      <ul>
        {category.map((item, index) => (
          <div className="content">
            <Link to={`/category/${item}`}>
              <div key={index}>{item}</div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  )
}
