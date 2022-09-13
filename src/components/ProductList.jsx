import React, { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";

const ProductList = () => {
  const { products, obtenerProductos, eliminarProducto } =
    useContext(ProductContext);

  useEffect(() => {
    obtenerProductos();
  }, [obtenerProductos]);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h1>{product.id}</h1>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button className="btn btn-info">Ver mas...</button>
          <button
            className="btn btn-danger"
            onClick={() => eliminarProducto(product.id)}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
