import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import settings from "./redux/settings/reducer";
import data from "./redux/data/reducer";

export default history =>
  combineReducers({
    settings,
    data,
    router: connectRouter(history),
  });
