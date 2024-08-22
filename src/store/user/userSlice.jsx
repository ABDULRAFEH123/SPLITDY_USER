import { createSlice } from "@reduxjs/toolkit";
import {
  getItineraries,
  getAccomodation,
  getCategories,
  getAccomodationCategories
} from "../user/userThunk"; 

const initialState = {
  itineraries: [],
  accomodation: [],
  category: [],
  accomodationCategory: [],
  loading: false,
  error: null,
};

export const itinerarySlice = createSlice({
  name: "itinerary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItineraries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getItineraries.fulfilled, (state, action) => {
        state.loading = false;
        state.itineraries = action.payload;
      })
      .addCase(getItineraries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch itineraries";
      })

      // GET ALL ACCOMMODATION

      .addCase(getAccomodation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAccomodation.fulfilled, (state, action) => {
        state.loading = false;
        state.accomodation = action.payload;
      })
      .addCase(getAccomodation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch accommodations";
      })
      // GET THE CATEGORIES
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch accommodations";
      })

      // GET THE  ACCONMODATION CATEGORIES
      .addCase(getAccomodationCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAccomodationCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.accomodationCategory = action.payload;
      })
      .addCase(getAccomodationCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch accommodations";
      });
  },
});

export default itinerarySlice.reducer;
