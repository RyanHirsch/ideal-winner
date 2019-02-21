import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { routerMiddleware } from "connected-react-router";
import createHistory from "history/createBrowserHistory";

import { thunkMiddleware } from "./middleware";
import createRootReducer from "./reducer";

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware(myRouterMiddleware, thunkMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(myRouterMiddleware, thunkMiddleware, createLogger());
  }
};

export const store = createStore(createRootReducer(history), composeWithDevTools(getMiddleware()));
