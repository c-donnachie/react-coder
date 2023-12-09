import React from "react"
import CartWidget from "../CartWidget/CartWidget"

export default function NavBar() {
  const categories = [
    { id: 1, name: "t-shirts" },
    { id: 2, name: "hoodies" },
    { id: 3, name: "pants" },
  ]

  return (
    <nav className="sticky top-0 bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold text-white">NUDE PROJECT</div>
        <div className="space-x-4">
          <div className="group relative inline-block">
            <button>
              <a href="#" className="text-white">
                Productos
              </a>
              <div className="absolute left-4 z-10 mt-3 hidden bg-gray-800 text-white group-hover:block">
                {categories.map((category) => (
                  <a key={category.id} href="#" className="block px-4 py-2">
                    {category.name}
                  </a>
                ))}
              </div>
            </button>
          </div>
        </div>
        <div>
          <input type="search" placeholder="buscar" />
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
