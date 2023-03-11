import { createStore,applyMiddleware } from "redux";
import {movieReducer} from "../reducer/movieReducer"
import thunk from "redux-thunk";

export const store = createStore(movieReducer, applyMiddleware(thunk));  




