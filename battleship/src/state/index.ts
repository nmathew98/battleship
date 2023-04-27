import { configureStore } from "@reduxjs/toolkit";

import { hitsReducer } from "./hits";

export const globalStore = configureStore({
  reducer: {
    hits: hitsReducer,
  },
});
