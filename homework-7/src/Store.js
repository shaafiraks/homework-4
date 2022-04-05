import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./SearchSlice";

// export const rootReducer = combineReducers({
//   search: searchSlice.reducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  reducer: {
    search: searchSlice,
  },
});
