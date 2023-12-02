import React from "react"
import CartWidget from "./CartWidget"

export default function NavBar() {
  return (
    <nav className="sticky top-0 bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold text-white">NUDE PROJECT</div>
        <div className="space-x-4">
          <button>
            <a href="#" className="text-white">
              t-shirts
            </a>
          </button>
          <button>
            <a href="#" className="text-white">
              Hoodies
            </a>
          </button>
          <button>
            <a href="#" className="text-white">
              Pants
            </a>
          </button>
        </div>
        <div>
          <input type="search" className="" placeholder="buscar" />
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
