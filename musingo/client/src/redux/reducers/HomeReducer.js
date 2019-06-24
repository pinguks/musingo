const INITIAL_STATE = {
  showModal: false,
  isLoading: true,
  recentlyPlayed: null,
  playlists: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        ...state,
        showModal: true
      };
    case "HIDE_MODAL":
      return {
        ...state,
        showModal: false
      };
    case "HOME_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        recentlyPlayed: action.payload.recentlyPlayed,
        playlists: action.payload.playlists
      };
    case "NEW_PLAYLIST":
      return {
        ...state,
        showModal: false,
        playlists: [...state.playlists, action.payload]
      };
    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map(playlist => {
          if (playlist._id === action.payload.video._id) {
            return {
              ...action.payload.video
            };
          }

          return playlist;
        })
      };
    default:
      return state;
  }
};
