export const productSelector = (state) => {
  return state.products;
};

export const searchTextSelector = (state) => {
  return state.searchText;
};

export const filterByTextSelector = (state) => {
  const searchText = searchTextSelector(state);
  const products = productSelector(state);

  if (!searchText) return products;

  const filterName = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const filterDescription = products.filter((product) =>
    product.description.toLowerCase().includes(searchText.toLowerCase())
  );
  return [...filterName, ...filterDescription];
};

export const pinProductSelector = (state) => {
  return state.pinProduct;
};

export const filterProductSelector = (state) => {
  const searchText = searchTextSelector(state);
  const products = productSelector(state);
  const pinProduct = pinProductSelector(state);
  const filterProduct = filterByTextSelector(state);

  if (pinProduct) {
    const pin = products.filter((product) => product.id === pinProduct);
    const otherProduct = products.filter(
      (product) => product.id !== pinProduct
    );

    return searchText
      ? Array.from(new Set(pin.concat(filterProduct)))
      : pin.concat(otherProduct);
  }

  return searchText ? Array.from(new Set(filterProduct)) : products;
  // if (!searchText) {
  //   return products;
  // }
  // return Array.from(new Set(filterProduct));
};
