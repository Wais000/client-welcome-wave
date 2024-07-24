import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const handleError = (error) => {
  console.error('Error:', error);
  return { error: error.message };
};

export const createJob = createAsyncThunk(
  'jobs/createJob',
  async (jobData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/job', jobData);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  }
);

export const getJob = createAsyncThunk(
  'jobs/getJob',
  async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/job/${id}`);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  }
);

export const updateJob = createAsyncThunk(
  'jobs/updateJob',
  async (jobData) => {
    const { id, ...updateData } = jobData;
    try {
      const response = await axios.put(`http://localhost:5000/api/job/${id}`, updateData);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  }
);

export const deleteJob = createAsyncThunk(
  'jobs/deleteJob',
  async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/job/${id}`);
      return id; // Return the deleted job ID for potential UI updates
    } catch (error) {
      return handleError(error);
    }
  }
);

export const getAllJob = createAsyncThunk(
  'jobs/getAllJob',
  async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/job');
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  }
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    status: 'idle',
    error: null,
    selectedJob: null,
  },
  reducers: {
    setSelectedJob: (state, action) => {
      state.selectedJob = action.payload;
    },
    clearSelectedJob: (state) => {
      state.selectedJob = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(getJob.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getJob.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedJob = action.payload;
      })
      .addCase(getJob.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(updateJob.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update existing job in the state
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(deleteJob.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.jobs = state.jobs.filter((job) => job._id !== action.payload);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(getAllJob.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllJob.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.jobs = action.payload;
      })
      .addCase(getAllJob.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});

export const { setSelectedJob, clearSelectedJob } = jobsSlice.actions;
export default jobsSlice.reducer;
