import { createSlice } from "@reduxjs/toolkit";

import { globalStore } from "..";

export const hitsSlice = createSlice({
	name: "ships-hits",
	initialState: Object.create(null) as Record<number, boolean>,
	reducers: {
		hit: (state, action) => {
			state[action.payload] = true;
		},
	},
});

export const hitsReducer = hitsSlice.reducer;
export const { hit } = hitsSlice.actions;
export const makeSelectShip =
	(id: number) => (state: ReturnType<typeof globalStore.getState>) =>
		state.hits[id] ?? false;
