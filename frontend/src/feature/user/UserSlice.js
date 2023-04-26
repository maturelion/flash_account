// features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { getUser } from './UserActions'

const initialState = {
  loading: false,
  user: {}, // for user object
  error: null,
  success: false, // for monitoring the registration process.
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // get user
    [getUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.user = payload.data
    },
    [getUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default userSlice.reducer