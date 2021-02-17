import { createContext, useState } from "react";

const CartContext = createContext(null);

const CartDataProvider = (props) => {
  const cartItem = [];
  const [cartProducts, setCartProducts] = useState(cartItem);
  const contextValue = {
    cartProducts,
    addToCart: (product) => {
      setCartProducts([
        ...cartProducts,
        {
          id: product.id,
          image: product.images[0],
          name: product.name,
          price: product.price,
        },
      ]);
    },
    deleteFromCart: (id) => {
      const newCartProducts = cartProducts.filter(
        (productToDelete) => productToDelete.id !== id
      );
      setCartProducts(newCartProducts);
    },
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export { CartDataProvider, CartContext };
