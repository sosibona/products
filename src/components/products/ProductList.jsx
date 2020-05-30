import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../productCard/ProductCard";

const ProductList = ({ products, deleteProduct }) => {
  const productsList = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
    />
  ));
  return <main className="products-list">{productsList}</main>;
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default ProductList;
