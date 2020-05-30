import React from "react";
import defaultImg from "../../img/default.png";
import PropTypes from "prop-types";

const ProductCard = ({ product, deleteProduct }) => {
  const { image, name, description, price, id } = product;
  return (
    <div className="product-card">
      <button className="product-card__pin">
        <i className="fas fa-thumbtack"></i>
      </button>
      <button
        className="product-card__delete"
        onClick={() => deleteProduct(id)}
      >
        <i className="fas fa-minus-circle"></i>
      </button>
      <div className="product-card__backside">
        <img
          className="product-card__img"
          src={image || defaultImg}
          alt="name"
        />
      </div>
      <span className="product-card__name">{name}</span>
      <span className="product-card__description">{description}</span>
      <span className="product-card__price">${price}</span>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  deleteProduct: PropTypes.func.isRequired,
};

export default ProductCard;
