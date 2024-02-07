import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "../components/Navbar/NavBar.jsx"
import { buttons } from "../mocks/buttons.js"
import ItemDetailContainer from "../pages/ItemDetailContainer/ItemDetailContainer.jsx"
import Catalogo from "../components/Catalogo/Catalogo.jsx"
import { useGetCategories } from "../hooks/useCategory.jsx"
import Cart from "../pages/Cart/Cart.jsx"
import CreateProduct from '../pages/CreateProduct/CreateProduct.jsx'
import FilteredProducts from "../pages/FilteredProducts/FilteredProducts.jsx"
import CartWidget from "../components/CartWidget/CartWidget.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense } from "react"
import Checkout from "../pages/Checkout/Checkout.jsx"
import CompleteOrder from "../pages/CompleteOrder/CompleteOrder.jsx"
import NavigationbarMobile from "../components/NavigationBarMobile/NavigationbarMobile.jsx"
import NavbarMobile from "../components/NavbarMobile/NavbarMobile.jsx"
import { useMediaQuery } from '@react-hook/media-query';

const Home = lazy(() => import('../pages/Home.jsx'));

export default function MainRouter() {
  const { categories } = useGetCategories('categories2')
  const isMobile = useMediaQuery('(max-width: 768px)');


  return (
    <BrowserRouter>
      <CartWidget />

      <NavbarMobile />

      <NavBar
        title="TECNOLOGIA"
        nameCategories="Categorias"
        categories={categories}
        buttons={buttons}
      />

      {!isMobile && (
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          stacked
          draggable
          draggablePercent={60}
          pauseOnHover
          theme="light"
          trasition="bounce"
        />
      )}

      <Routes>

        <Route
          path="/"
          element={
            <Suspense fallback={<div></div>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category" element={<Catalogo />} />
        <Route path="/category/:name" element={<FilteredProducts />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/filtered?" element={<FilteredProducts />} />
        <Route path="/complete-order" element={<CompleteOrder />} />


      </Routes>

      <NavigationbarMobile />

    </BrowserRouter>
  )
}
