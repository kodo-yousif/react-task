import { createSlice } from "@reduxjs/toolkit";

const filters = createSlice({
  name: "total_data",
  initialState: {},
  reducers: {
    setFilters: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { setFilters } = filters.actions;

export default filters.reducer;
