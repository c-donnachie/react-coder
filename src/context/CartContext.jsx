import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartIsEmpy, setCartIsEmpy] = useState(true);

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotalPrice(0);
    setCartIsEmpy(true);
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

  const addToCart = (product, quantity = 1) => {

    const existingProduct = cart.findIndex((item) => item.id === product.id);


    const totalPriceIncrement = Number(product.price) * quantity;

    if (existingProduct !== -1) {

      const updatedCart = cart.map((item, index) =>
        index === existingProduct
          ? {
            ...item, quantity: item.quantity + quantity,
            subTotal: Number(item.subTotal) + totalPriceIncrement
          }
          : item
      );

      const newTotalPrice = Number(totalPrice) + totalPriceIncrement;

      setTotalPrice(newTotalPrice);
      setTotalQuantity(Number(totalQuantity) + quantity);
      setCart(updatedCart);
    } else {
      const newTotalPrice = Number(totalPrice) + totalPriceIncrement;

      setTotalPrice(newTotalPrice);
      setTotalQuantity(Number(totalQuantity) + quantity);
      setCart((prevCart) => [...prevCart, {
        ...product, quantity: quantity,
        subTotal: totalPriceIncrement
      }]);
    }

    setCartIsEmpy(false);
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
      value={{ cart, totalPrice, totalQuantity, cartIsEmpy , addToCart, clearCart, updateQuantity, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
