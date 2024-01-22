import { createContext, useState, useContext } from "react";
import { CartOpenContext } from "./CartOpenContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const { handleOpenCart, handleCloseCart } = useContext(CartOpenContext);

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotalPrice(0);
  };

  const updateQuantity = (productId, newQuantity, newPrice) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? {
          ...item,
          quantity: newQuantity,
          subTotal: newQuantity * newPrice,
        }
        : item
    );

    const newTotalQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
    const newTotalPrice = updatedCart.reduce((total, item) => total + item.subTotal, 0);

    setCart(updatedCart);
    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);
  };

  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.findIndex((item) => item.id === product.id);

    // Convertir precios a números antes de realizar operaciones
    const totalPriceIncrement = Number(product.price);

    if (existingProduct !== -1) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      const updatedCart = cart.map((item, index) =>
        index === existingProduct
          ? {
            ...item, quantity: item.quantity + 1,
            subTotal: Number(item.subTotal) + totalPriceIncrement
          }
          : item
      );

      const newTotalPrice = Number(totalPrice) + totalPriceIncrement;

      setTotalPrice(newTotalPrice);
      setTotalQuantity(Number(totalQuantity) + 1);
      setCart(updatedCart);
    } else {
      // Si el producto no está en el carrito, agrégalo con cantidad 1
      const newTotalPrice = Number(totalPrice) + totalPriceIncrement;

      setTotalPrice(newTotalPrice);
      setTotalQuantity(Number(totalQuantity) + 1);
      setCart((prevCart) => [...prevCart, {
        ...product, quantity: 1,
        subTotal: totalPriceIncrement
      }]);
    }

    // handleOpenCart();
  };


  const removeProduct = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);

    const newTotalQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
    const newTotalPrice = updatedCart.reduce((total, item) => total + item.subTotal, 0);

    setCart(updatedCart);
    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);
  }

  return (
    <CartContext.Provider
      value={{ cart, totalPrice, totalQuantity, addToCart, clearCart, updateQuantity, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
