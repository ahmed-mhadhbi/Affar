import { createSlice } from '@reduxjs/toolkit';

const listingSlice = createSlice({
  name: 'listings',
  initialState: { listings: [] },
  reducers: {
    setListings: (state, action) => {
      state.listings = action.payload;
    },
    addListing: (state, action) => {
      state.listings.push(action.payload);
    },
  },
});

export const { setListings, addListing } = listingSlice.actions;
export default listingSlice.reducer;