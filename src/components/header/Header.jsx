import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchProduct } from "../../product/product.actions";
import NewProduct from "../newProduct/NewProduct";

const Header = ({ searchProduct }) => {
  const [text, setValue] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
      {isModalOpen && <NewProduct closeModal={closeModal} />}
    </header>
  );
};

const mapDispatch = {
  searchProduct: searchProduct,
};

Header.propTypes = {
  searchProduct: PropTypes.func.isRequired,
  // openModal: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Header);
