const INITIAL_STATE = {
  products: null
};

const Products = (state = INITIAL_STATE, action) => {
  const reducers = {
    SAVE_PRODUCTS: {
      ...state,
      products: action.products
    },
    default: state,
  };

  return reducers[action.type] || reducers.default;
};

export default Products;
