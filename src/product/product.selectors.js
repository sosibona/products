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

  const filterName = products.filter((product) => product.name === searchText);
  const filterDescription = products.filter((product) =>
    product.description.includes(searchText)
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
    if (searchText) {
      return Array.from(new Set(pin.concat(filterProduct)));
    }
    return pin.concat(otherProduct);
  }
  if (!searchText) {
    return products;
  }
  return Array.from(new Set(filterProduct));
};
