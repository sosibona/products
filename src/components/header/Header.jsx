import React, { useState } from "react";
import PropTypes from "prop-types";
// import NewProduct from "../newProduct/NewProduct";

const Header = ({ searchProduct, openModal }) => {
  const [text, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <header className="header">
      <div className="search-product">
        <input
          className="search-product__input input"
          placeholder="name or description"
          type="text"
          value={text}
          onChange={(event) => handleChange(event)}
        />
        <button
          className="search-product__btn btn"
          onClick={() => searchProduct(text)}
        >
          Search
        </button>
      </div>
      <div className="add-product">
        <button className="add-product__btn btn" onClick={openModal}>
          Add Product
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  searchProduct: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Header;
