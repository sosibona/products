import React from "react";
import Header from "../header/Header";
import ProductList from "../products/ProductList";
import "./board.scss";

const Board = () => {
  return (
    <div className="products">
      <Header />
      <hr className="header__line" />
      <ProductList />
    </div>
  );
};

export default Board;
