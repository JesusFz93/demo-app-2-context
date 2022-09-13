import React, { useReducer, useCallback } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";
import {
  crearProductoService,
  obtenerProductosService,
} from "../services/productServices";

const initialState = {
  products: [],
};

const ProductState = ({ children }) => {
  const [globalState, dispatch] = useReducer(productReducer, initialState);

  const obtenerProductos = useCallback(async () => {
    const resp = await obtenerProductosService();
    const productos = resp.data.map((obj) => {
      return {
        id: obj._id,
        name: obj.name,
        description: obj.description,
        price: obj.price,
      };
    });

    dispatch({
      type: "OBTENER_PRODUCTOS",
      payload: productos,
    });
  }, []);

  const crearProducto = async (form) => {
    await crearProductoService(form);
    await obtenerProductos();
  };

  return (
    <ProductContext.Provider
      value={{
        products: globalState.products,
        obtenerProductos,
        crearProducto,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
