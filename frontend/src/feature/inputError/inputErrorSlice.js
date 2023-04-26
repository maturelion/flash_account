import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const inputErrorSlice = createSlice({
  name: "inputError",
  initialState,
  reducers: {
    setInputError: (state, action) => {
      return { inputError: action.payload };
    },
    clearInputError: () => {
      return initialState;
    },
  },
});

const { reducer, actions } = inputErrorSlice;

export const { setInputError, clearInputError } = actions;
export default reducer;