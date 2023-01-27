import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchResults } from './searchAPI';

const initialState = {
  isLoading: false,
  error: null,
  results: []
};

// Async function to call the Pinball map API
export const searchCoords = createAsyncThunk(
  'search/searchCoords',
  async (coords) => {
    const response = await fetchResults(coords);
    return response;
  }
);

// Reducer to handle all things search related
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchCoords.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.results = [];
      })
      .addCase(searchCoords.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.results = action.payload;
      })
      .addCase(searchCoords.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.results = [];
      });
  }
});

export const { setLoading } = searchSlice.actions;

// Export a few selectors to display loading, errors, and results
export const selectLoading = (state) => state.search.isLoading;
export const selectError = (state) => state.search.error;
export const selectResults = (state) => state.search.results;

export default searchSlice.reducer;
