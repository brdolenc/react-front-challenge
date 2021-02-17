const INITIAL_STATE = {
  formatted_address: null,
  geometry: null
};

const Address = (state = INITIAL_STATE, action) => {
  const reducers = {
    SAVE_ADDRESS: {
      ...state,
      formatted_address: action.address?.formatted_address,
      geometry: action.address?.geometry
    },
    default: state,
  };

  return reducers[action.type] || reducers.default;
};

export default Address;
