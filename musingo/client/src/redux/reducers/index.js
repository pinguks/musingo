import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import SearchReducer from "./SearchReducer";
import homeReducer from "./HomeReducer";
import PlayerReducer from "./PlayerReducer";

export default combineReducers({
  auth: authReducer,
  home: homeReducer,
  search: SearchReducer,
  player: PlayerReducer
});
