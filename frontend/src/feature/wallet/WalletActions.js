import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const endPoint = process.env.REACT_APP_API_URL

export const getWallet = createAsyncThunk(
  'activity/getWallet',
  async ({user},{ rejectWithValue }) => {
    console.log(user, "user")
    try {
      const config = {
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
      }
      const res = await axios.get(
        `${endPoint}/wallets/${user}`,
        config
      )
      return res
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)