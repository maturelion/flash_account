import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../feature/auth/AuthSlice"
import userReducer from "../feature/user/UserSlice"
import activityReducer from "../feature/activity/ActivitySlice"
import walletReducer from "../feature/wallet/WalletSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    activity: activityReducer,
    wallet: walletReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})