import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducres/counter.rducer";
import { listReducer } from "./reducres/list.reducer";


const reducers = combineReducers({
  counter: counterReducer,
  list: listReducer
})

export const globalState = createStore(reducers);