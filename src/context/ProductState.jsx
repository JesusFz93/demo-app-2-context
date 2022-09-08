import React, { useReducer } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";

const initialState = {
  products: [],
};

const ProductState = ({ children }) => {
  const [globalState, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ products: initialState.products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
