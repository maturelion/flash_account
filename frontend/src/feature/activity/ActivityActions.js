import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const endPoint = process.env.REACT_APP_API_URL

export const getActivities = createAsyncThunk(
  'activity/getActivities',
  async ({user},{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
      }
      const res = await axios.get(
        `${endPoint}/activities/?user=${user}`,
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

export const addActivities = createAsyncThunk(
  'activity/addActivities',
  async ({
    user,
    amount,
    bank_name,
    account_name,
    account_number,
    description,
    tx_type
  },{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
      }
      const res = await axios.post(
        `${endPoint}/activities/`,
        {
          user,
          amount,
          bank_name,
          account_name,
          account_number,
          description,
          tx_type,
        },
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