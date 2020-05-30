import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../productCard/ProductCard";
import { connect } from "react-redux";
import { filterProductSelector } from "../../product/product.selectors";

const ProductList = ({ products }) => {
  const productsList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return <main className="products-list">{productsList}</main>;
};

const mapState = (state) => {
  console.log(filterProductSelector(state));
  return {
    products: filterProductSelector(state),
  };
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapState)(ProductList);
