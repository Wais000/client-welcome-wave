import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const handleError = (error) => {
  console.error('Error:', error);
  return { error: error.message };
};

export const createHelp = createAsyncThunk(
  'helps/createHelp',
  async (helpData) => {
    try {
      console.log(response.data);
      const response = await axios.post('http://localhost:5000/api/help', helpData);
      return response.data;
 
    } catch (error) {
      return handleError(error);
    }
  }
);

export const getHelp = createAsyncThunk(
  'helps/getHelp',
  async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/help/${id}`);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  }
);

export const updateHelp = createAsyncThunk(
  'helps/updateHelp',
  async (helpData) => {
    const { id, ...updateData } = helpData;
    try {
      const response = await axios.put(`http://localhost:5000/api/help/${id}`, updateData);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  }
);

export const deleteHelp = createAsyncThunk(
  'helps/deleteHelp',
  async (id) => {
    try {
      const response = await axios.delete(`localhost:5000/api/help/${id}`);
      return id; // Return the deleted help ID for potential UI updates
    } catch (error) {
      return handleError(error);
    }
  }
);

export const getAllHelp = createAsyncThunk(
  'helps/getAllHelp',
  async () => {
    try {
      const response = await axios.get('localhost:5000/api/help');
      console.log('Fetched help:', response.data);
      return response.data;
  
    } catch (error) {
      return handleError(error);
    }
  }
);

const helpsSlice = createSlice({
  name: 'helps',
  initialState: {
    helps: [],
    status: 'idle',
    error: null,
    selectedHelp: null,
  },
  reducers: {
    setSelectedHelp: (state, action) => {
      state.selectedHelp = action.payload;
    },
    clearSelectedHelp: (state) => {
      state.selectedHelp = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createHelp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createHelp.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.helps.push(action.payload);
      })
      .addCase(createHelp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(getHelp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getHelp.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedHelp = action.payload;
      })
      .addCase(getHelp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(updateHelp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateHelp.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update existing help in the state
      })
      .addCase(updateHelp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(deleteHelp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteHelp.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.helps = state.helps.filter((help) => help._id !== action.payload);
      })
      .addCase(deleteHelp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(getAllHelp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllHelp.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.helps = action.payload;
      })
      .addCase(getAllHelp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});

export const { setSelectedHelp, clearSelectedHelp } = helpsSlice.actions;
export default helpsSlice.reducer;
