export const productSelector = (state) => {
  return state.products;
};

export const searchTextSelector = (state) => {
  return state.searchText;
};

export const filterProductSelector = (state) => {
  const searchText = searchTextSelector(state);
  const products = productSelector(state);
  if (!searchText) return products;

  const filterName = products.filter((product) => product.name === searchText);
  const filterDescription = products.filter((product) =>
    product.description.includes(searchText)
  );
  return Array.from(new Set([...filterName, ...filterDescription]));
};
