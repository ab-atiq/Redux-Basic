import { combineReducers, createStore } from "redux";
import { bookReducer } from "../reducers/bookReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(bookReducer); // it is applicable when one reducer present.

const rootReducer = combineReducers({
  books: bookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
