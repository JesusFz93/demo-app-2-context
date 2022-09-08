import React, { useReducer } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";

const initialState = {
  products: [
    {
      id: 1,
      name: "Laptop lenovo",
      description: "Laptop de alta gama",
      price: 3444,
    },

    {
      id: 2,
      name: "Refri mabe",
      description: "Electrodomestico para almacenar alimentos",
      price: 11000,
    },
  ],
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
