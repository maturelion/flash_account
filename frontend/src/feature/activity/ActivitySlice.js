// features/activity/activitySlice.js
import { createSlice } from '@reduxjs/toolkit'
import { getActivities } from './ActivityActions'

const initialState = {
  loading: false,
  activity: [], // for activity object
  error: null,
  success: false, // for monitoring the registration process.
}

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {},
  extraReducers: {
    // get activity
    [getActivities.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getActivities.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.activity = payload.data
    },
    [getActivities.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default activitySlice.reducer