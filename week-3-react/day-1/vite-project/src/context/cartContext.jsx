import { createContext, useReducer, useContext } from "react";
import { shoppingCart, CartReducer } from "./cartReduce";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, shoppingCart);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const contex = useContext(CartContext);
  if (!contex) throw new Error("cart tidak sesuai");
  return contex;
}