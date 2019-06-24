const INITIAL_STATE = {
  showModal: false,
  currentSelectedVideo: null,
  isLoadingSearch: false,
  searchResults: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        ...state,
        showModal: true,
        currentSelectedVideo: action.payload
      };
    case "HIDE_MODAL":
      return {
        ...state,
        showModal: false
      };
    case "SET_LOADING_RESULTS":
      return { ...state, isLoadingSearch: true };
    case "UNSET_LOADING_RESULTS":
      return { ...state, isLoadingSearch: false };
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload };
    case "UNSET_SEARCH_RESULTS":
      return { ...state, searchResults: [] };
    default:
      return state;
  }
};
