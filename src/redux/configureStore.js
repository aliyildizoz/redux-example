import reducers from "./index";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger"

export default function configureStore() {
  return createStore(reducers,applyMiddleware(thunk,logger));
}