export const playSong = () => {
  return {
    type: "PLAY_SONG"
  };
};

export const pauseSong = () => {
  return {
    type: "PAUSE_SONG"
  };
};

export const addSong = song => {
  return {
    type: "ADD_SONG",
    payload: song
  };
};
