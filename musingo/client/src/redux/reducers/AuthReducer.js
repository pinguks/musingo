const INITIAL_STATE = {
  isSignedIn: false,
  user: {},
  isLoadingGapi: true,
  error: null,
  showNavbar: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
        isLoadingGapi: false
      };
    case "AUTH_REDIRECT":
      return { ...state, showNavbar: true };
    case "AUTH_FAILURE":
      return { ...state, isLoadingGapi: false, error: action.payload };

    default:
      return state;
  }
};
