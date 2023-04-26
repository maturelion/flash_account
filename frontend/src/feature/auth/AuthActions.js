import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setInputError } from '../inputError/inputErrorSlice'
import { setMessage } from '../message/messageSlice'

const endPoint = process.env.REACT_APP_API_URL

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, email, password1, password2, referral }, thunkApi) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(
        `${endPoint}/rest-auth/registration/`,
        { username, email, password1, password2, referral },
        config
      )
      return res
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage(message));
      thunkApi.dispatch(setInputError(error.response && error.response.data));
      return thunkApi.rejectWithValue(await error.json());
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ id, pass }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(
        `${endPoint}/rest-auth/login/`,
        { username: id, password: pass },
        config
      )
      localStorage.setItem("token", res.data.access_token)
      localStorage.setItem("user", JSON.stringify(res.data.user))
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

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async ({ empty }, { rejectWithValue }) => {
    try {
      localStorage.clear()
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