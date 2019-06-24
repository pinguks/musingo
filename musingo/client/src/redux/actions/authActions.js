import axios from "axios";

export const errorSignIn = message => {
  return {
    type: "AUTH_FAILURE",
    payload: message
  };
};

export const redirectUser = () => {
  return {
    type: "AUTH_REDIRECT"
  };
};

export const tryRegister = (name, googleId) => async dispatch => {
  const response = await axios.post(
    "/api",
    { googleId, name },
    { headers: { "x-google-id": googleId } }
  );

  dispatch({ type: "AUTH_SUCCESS", payload: response.data });
};
