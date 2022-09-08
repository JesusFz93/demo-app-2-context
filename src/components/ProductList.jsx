import React, { useState } from "react";

const initialState = [
  {
    id: 1,
    name: "Laptop",
    description: "Laptop de alta gama",
    price: 4000,
  },

  {
    id: 2,
    name: "Refri",
    description: "Electrodomestico para almacenar alimentos",
    price: 10000,
  },
];

const ProductList = () => {
  const [products] = useState(initialState);

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
