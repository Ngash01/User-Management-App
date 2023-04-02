import {configureStore} from "@reduxjs/toolkit"
import { userSlice } from "./features/users"

export const store = configureStore({
  reducer:{
    users: userSlice.reducer
  }
})


