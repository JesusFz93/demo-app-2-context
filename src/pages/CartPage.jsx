import React, { useState, useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import CartList from "../components/CartList";
import Title from "../components/Title";

const CartPage = () => {
  const { cart } = useContext(ProductContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, producto) => acc + producto.price, 0));
  }, [cart]);

  return (
    <>
      <Title titulo="Carrito de compras" />
      <main className="row pt-5">
        <article className="col-md-12">
          <CartList />
        </article>
      </main>
      <section className="row pt-5">
        <article className="col-md-12">
          <h2>{total}</h2>
        </article>
      </section>
    </>
  );
};

export default CartPage;
