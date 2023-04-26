import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../feature/auth/AuthSlice"
import userReducer from "../feature/user/UserSlice"
// import activityReducer from "../feature/activity/ActivitySlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    // activity: activityReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})