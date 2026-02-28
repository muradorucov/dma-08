import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/user.slice"

export const gStore = configureStore({
  reducer: {
    user: userReducer
  }
})

