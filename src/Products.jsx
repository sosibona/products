import React from "react";
import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";

const Products = () => {
  return (
    <div className="products">
      <Header openModal={this.openModal} />
      <hr className="header__line" />
      <ProductList />
    </div>
  );
}

export default Products;
