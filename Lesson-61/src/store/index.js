import { combineReducers, createStore } from "redux";
import { cartListReducer } from "./reducers/cart.reducer";
import { toastReducer } from "./reducers/toats.reducer";

const reducers = combineReducers({
  cartList: cartListReducer,
  toast: toastReducer
  // favList: favListReducer
})

export const store = createStore(reducers)