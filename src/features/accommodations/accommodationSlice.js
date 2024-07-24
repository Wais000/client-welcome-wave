import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const handleError = (error) => {
  console.error('Error:', error);
  return { error: error.message };
};

export const createAccommodation = createAsyncThunk(
  'accommodations/createAccommodation',
  async (accommodationData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/accommodation', accommodationData);
      return response.data;
      
    } catch (error) {
      return handleError(error);
    }
  }
);

export const getAllAccommodations = createAsyncThunk(
  'accommodations/getAllAccommodations',
  async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/accommodation');
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  }
);

export const getAccommodation = createAsyncThunk(
  'accommodations/getAccommodation',
  async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/accommodation/{id}`);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  }
);

export const updateAccommodation = createAsyncThunk(
  'accommodations/updateAccommodation',
  async (accommodationData) => {
    const { id, ...updateData } = accommodationData;
    try {
      const response = await axios.put(`http://localhost:5000/api/accommodation/{id}`, updateData);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  }
);

export const deleteAccommodation = createAsyncThunk(
  'accommodations/deleteAccommodation',
  async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/accommodation/{id}`);
      return id; // Return the deleted accommodation ID for potential UI updates
    } catch (error) {
      return handleError(error);
    }
  }
);

const accommodationsSlice = createSlice({
  name: 'accommodations',
  initialState: {
    accommodations: [],
    status: 'idle',
    error: null,
    selectedAccommodation: null,
  },
  reducers: {
    setSelectedAccommodation: (state, action) => {
      state.selectedAccommodation = action.payload;
    },
    clearSelectedAccommodation: (state) => {
      state.selectedAccommodation = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAccommodation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createAccommodation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accommodations.push(action.payload);
      })
      .addCase(createAccommodation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(getAllAccommodations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllAccommodations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accommodations = action.payload;
      })
      .addCase(getAllAccommodations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(getAccommodation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAccommodation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedAccommodation = action.payload;
      })
      .addCase(getAccommodation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(updateAccommodation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateAccommodation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update existing accommodation in the state
        const index = state.accommodations.findIndex(accommodation => accommodation._id === action.payload._id);
        if (index !== -1) {
          state.accommodations[index] = action.payload;
        }
      })
      .addCase(updateAccommodation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(deleteAccommodation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteAccommodation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accommodations = state.accommodations.filter((accommodation) => accommodation._id !== action.payload);
      })
      .addCase(deleteAccommodation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});

export const { setSelectedAccommodation, clearSelectedAccommodation } = accommodationsSlice.actions;
export default accommodationsSlice.reducer;
