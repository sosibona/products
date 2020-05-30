export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: {
      id,
    },
  };
};

export const searchProduct = (text) => {
  return {
    type: SEARCH_PRODUCT,
    payload: {
      text,
    },
  };
};

export const addProduct = (productData) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      productData,
    },
  };
};
