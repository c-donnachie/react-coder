import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home.jsx"
import NavBar from "../components/Navbar/NavBar.jsx"
import Contact from "../pages/Contact.jsx"
import { buttons } from "../mocks/buttons.js"
import ItemDetailContainer from "../pages/ItemDetailContainer.jsx"
import Catalogo from "../components/Catalogo/Catalogo.jsx"
import CreateProduct from "../pages/CreateProduct.jsx"
import { useGetCategories } from "../hooks/useCategory.jsx"

export default function MainRouter() {
  const { categories } = useGetCategories('categories2')
  return (
    <BrowserRouter>
      {
        console.log(categories)
      }
      <NavBar
        title="TECNOLOGIA"
        nameCategories="Categorias"
        categories={categories}
        buttons={buttons}
      />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nosotros" element={<Contact />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category" element={<Catalogo />} />
        <Route path="/create" element={<CreateProduct />} />

      </Routes>
      
    </BrowserRouter>
  )
}
