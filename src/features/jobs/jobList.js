import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJob } from './jobSlice'; // Import the correct function

const JobList = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const status = useSelector((state) => state.jobs.status);
  const error = useSelector((state) => state.jobs.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getAllJob());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Jobs</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && Array.isArray(jobs) && (
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>{job.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
