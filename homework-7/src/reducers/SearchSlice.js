import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    setSearchValue: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.setSearchValue = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
