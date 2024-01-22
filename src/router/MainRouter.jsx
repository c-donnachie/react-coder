import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home.jsx"
import NavBar from "../components/Navbar/NavBar.jsx"
import Contact from "../pages/Contact.jsx"
import { buttons } from "../mocks/buttons.js"
import ItemDetailContainer from "../pages/ItemDetailContainer/ItemDetailContainer.jsx"
import Catalogo from "../components/Catalogo/Catalogo.jsx"
import { useGetCategories } from "../hooks/useCategory.jsx"
import Cart from "../pages/Cart/Cart.jsx"
import CreateProduct from '../pages/CreateProduct/CreateProduct.jsx'
import FilteredProduct from "../pages/FilteredProduct/FilteredProduct.jsx"
import CartWidget from "../components/CartWidget/CartWidget.jsx"
import NavbarPrevius from "../components/NavbarPrevious/NavbarPrevius.jsx"

import { useState, useEffect, useRef } from "react"

export default function MainRouter() {
  const { categories } = useGetCategories('categories2')
  const [scrolled, setScrolled] = useState(false)
  const contentRef = useRef(null)


  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 1) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [scrolled])


  return (
    <BrowserRouter>
      <CartWidget />

      {
        scrolled ?
        <NavbarPrevius/>
        :
        <NavBar
        title="TECNOLOGIA"
        nameCategories="Categorias"
        categories={categories}
        buttons={buttons}
        />
      }


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nosotros" element={<Contact />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category" element={<Catalogo />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/filtered" element={<FilteredProduct />} />

      </Routes>

    </BrowserRouter>
  )
}
