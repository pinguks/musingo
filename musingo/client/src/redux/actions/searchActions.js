import axios from "axios";

export const setLoadingReults = () => {
  return {
    type: "SET_LOADING_RESULTS"
  };
};

export const unsetLoadingResults = () => {
  return {
    type: "UNSET_LOADING_RESULTS"
  };
};

export const fetchResults = term => async dispatch => {
  const res = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?q=${term}&part=snippet&viewCount&type=video&maxResults=10&key=AIzaSyDP18snsIBdV5V4J9hGUN6KVbr2ZYegjiQ`
  );

  dispatch({
    type: "SET_SEARCH_RESULTS",
    payload: res.data.items
  });

  dispatch({
    type: "UNSET_LOADING_RESULTS"
  });
};

export const clearResults = () => {
  return {
    type: "UNSET_SEARCH_RESULTS"
  };
};

export const showModalComponent = video => {
  return {
    type: "SHOW_MODAL",
    payload: video
  };
};

export const hideModalComponent = () => {
  return {
    type: "HIDE_MODAL"
  };
};
