const INITIAL_STATE = {
  currentPage: 'search'
};

const Page = (state = INITIAL_STATE, action) => {
  const reducers = {
    SAVE_PAGE: {
      ...state,
      currentPage: action.page?.currentPage
    },
    default: state,
  };

  return reducers[action.type] || reducers.default;
};

export default Page;
