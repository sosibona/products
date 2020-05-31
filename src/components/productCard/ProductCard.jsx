import React from "react";
import defaultImg from "../../img/default.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProduct, pinProduct } from "../../product/product.actions";
import { pinProductSelector } from "../../product/product.selectors";
import "./productCard.scss";

const ProductCard = ({ product, deleteProduct, pinProduct, pinedProduct }) => {
  console.log(pinedProduct);
  const { image, name, description, price, id } = product;
  const style =
    pinedProduct === id ? "product-card product-card__pinned" : "product-card";
  const stylePin =
    pinedProduct === id
      ? "product-card__pin product-card__pin_pinned"
      : "product-card__pin";
  return (
    <div className={style}>
      <button
        className={stylePin}
        onClick={() => pinProduct(id)}
        disabled={pinedProduct && !(pinedProduct === id)}
      >
        <i className="fas fa-thumbtack"></i>
      </button>
      <button
        className="product-card__delete"
        onClick={() => deleteProduct(id)}
        disabled={pinedProduct === id}
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

const mapState = (state) => {
  return {
    pinedProduct: pinProductSelector(state),
  };
};

const mapDispatch = {
  deleteProduct: deleteProduct,
  pinProduct: pinProduct,
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

export default connect(mapState, mapDispatch)(ProductCard);
