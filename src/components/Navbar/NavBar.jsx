import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar({ title, nameCategories, categories, buttons }) {
  const showCategories = categories.map((category, index) => (
    <div key={index}>
      <Link to={`/category/${category}`}>
        <div className="text-white">{category}</div>
      </Link>
    </div>
  ))

  const showButtons = buttons.map((button) => (
    <button key={button.id}>
      <Link to={button.url}>{button.name}</Link>
    </button>
  ))

  return (
    <nav>
      <div className="container-navbar">
        <Link to="/" className="brand">
          <div className="text-white">{title}</div>
        </Link>
        <div className="content-container">
          <div class="group">
            <button class="button-style">
              <Link to="/category">
                <div class="text-white">{nameCategories}</div>
              </Link>
              {/* deslegable categorias */}
              <div class="dropdown-menu">
                <div class="dropdown-menu__content">{showCategories}</div>
              </div>
            </button>
          </div>
          {/* Otros */}
          <div className="group">{showButtons}</div>
        </div>
        <div>
          <input className="searchInput" type="search" placeholder="buscar" />
        </div>
        <div>
          <button onClick={() => alert("Tienes: 0 elementos")}>
            <CartWidget />
          </button>
        </div>
      </div>
    </nav>
  )
}
