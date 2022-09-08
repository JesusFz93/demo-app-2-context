import React from "react";
import ProductList from "../components/ProductList";
import Title from "../components/Title";

const ProductsPage = () => {
  return (
    <>
      <Title titulo="Pagina de productos" />
      <main className="row ">
        <article className="col-md-6">
          <ProductList />
        </article>
      </main>
    </>
  );
};

export default ProductsPage;
