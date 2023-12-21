import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home.jsx"
import NavBar from "../components/Navbar/NavBar.jsx"
import Contact from "../pages/Contact.jsx"
import { buttons } from "../mocks/buttons.js"
import ItemDetailContainer from "../pages/ItemDetailContainer.jsx"
import { useCategory } from "../hooks/useCategory.jsx"
import Category from "../pages/Category.jsx"

export default function MainRouter() {
  const { category } = useCategory()
  return (
    <BrowserRouter>
      <NavBar
        title="TECNOBOX"
        nameCategories="Categorias"
        categories={category}
        buttons={buttons}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nosotros" element={<Contact />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
    </BrowserRouter>
  )
}
