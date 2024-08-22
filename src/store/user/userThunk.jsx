import { axiosInstance } from "@/utils/axios";  // Adjust the path as needed
import { createAsyncThunk } from "@reduxjs/toolkit";

// Thunk for fetching itineraries
export const getItineraries = createAsyncThunk(
  "itinerary/getItineraries",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await axiosInstance.get("/api/itinerary");
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue("Failed to fetch itineraries");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const getAccomodation = createAsyncThunk(
  "itinerary/getAccomodation",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await axiosInstance.get("/api/accomodation");
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue("Failed to fetch itineraries");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  "itinerary/getCategories",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await axiosInstance.get("/api/category");
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue("Failed to fetch itineraries");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// GET ACCOMODATION CATEGORIES

export const getAccomodationCategories = createAsyncThunk(
  "itinerary/getAccomodationCategories",
  async (_, thunkAPI) => {
    try {
      const { data, status } = await axiosInstance.get("/api/accomodation-category");
      if (status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue("Failed to fetch itineraries");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
