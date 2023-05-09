// features/wallet/walletSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { getWallet } from './WalletActions'

const initialState = {
  loading: false,
  wallet: {}, // for wallet object
  error: null,
  success: false, // for monitoring the registration process.
}

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {},
  extraReducers: {
    // get wallet
    [getWallet.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getWallet.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.wallet = payload.data
    },
    [getWallet.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default walletSlice.reducer