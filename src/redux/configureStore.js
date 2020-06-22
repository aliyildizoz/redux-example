import reducers from "./index";
import {createStore} from "redux";

export default function configureStore() {
  return createStore(reducers);
}
