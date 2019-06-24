import axios from "axios";

export const fetchHomeData = googleId => async dispatch => {
  const response = await axios.get("/api/home", {
    headers: { "x-google-id": googleId }
  });

  const { playlists, recentlyPlayed } = response.data;

  dispatch({
    type: "HOME_FETCH_SUCCESS",
    payload: {
      playlists,
      recentlyPlayed
    }
  });
};

export const showModalComponent = () => {
  return {
    type: "SHOW_MODAL"
  };
};

export const hideModalComponent = () => {
  return {
    type: "HIDE_MODAL"
  };
};

export const newPlaylist = title => async (dispatch, getState) => {
  const { googleId } = getState().auth.user;

  const response = await axios.post(
    "/api/playlist/new",
    { title },
    {
      headers: {
        "x-google-id": googleId
      }
    }
  );

  dispatch({ type: "NEW_PLAYLIST", payload: response.data });
};

export const addToPlaylist = (id, video) => async (dispatch, getState) => {
  const { googleId } = getState().auth.user;

  const res = await axios.post(`/api/playlist/${id}`, video, {
    headers: {
      "x-google-id": googleId
    }
  });

  dispatch({
    type: "ADD_TO_PLAYLIST",
    payload: {
      video: res.data
    }
  });
};
