import React from "react";
import ProductList from "../components/ProductList";
import Title from "../components/Title";

const HomePage = () => {
  return (
    <>
      <Title titulo="Pagina de inicio" />
      <main className="row pt-5">
        <article className="col">
          <ProductList />
        </article>
      </main>
    </>
  );
};

export default HomePage;
