const INITIAL_STATE = {
  isPlaying: false,
  currentSong: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PLAY_SONG":
      return {
        ...state,
        isPlaying: true
      };
    case "PAUSE_SONG":
      return {
        ...state,
        isPlaying: false
      };
    case "ADD_SONG":
      return {
        ...state,
        isPlaying: false,
        currentSong: action.payload
      };
    default:
      return state;
  }
};
