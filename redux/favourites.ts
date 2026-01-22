import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
       ids: [],
    },
    reducers: {
        addFavourite: (state, action: PayloadAction<string>) => {
            state.ids.push(action.payload as never);
        },
        removeFavourite: (state, action: PayloadAction<string>) => {
            state.ids = state.ids.filter((id: string | never) => id !== action.payload);
        },
        clearFavourites: (state) => {
            state.ids = [];
        },
    },
});

export const { addFavourite, removeFavourite, clearFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;