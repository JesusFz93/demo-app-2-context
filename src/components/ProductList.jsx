import React, { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";

const ProductList = () => {
  const { products, obtenerProductos } = useContext(ProductContext);

  useEffect(() => {
    obtenerProductos();
  }, [obtenerProductos]);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
