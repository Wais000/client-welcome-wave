import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHelp } from './helpSlice'; // Ensure this path is correct

const HelpList = () => {
  const dispatch = useDispatch();
  const helpList = useSelector((state) => state.helps || []); // Provide a default value

  useEffect(() => {
    dispatch(getAllHelp());
  }, [dispatch]);

  // Add basic error handling
  if (!Array.isArray(helpList)) {
    return <div>Error: Data is not in the expected format.</div>;
  }

  return (
    <div>
      <h1>Help List</h1>
      <ul>
        {helpList.length > 0 ? (
          helpList.map((help) => (
            <li key={help.id}>{help.title}</li>
          ))
        ) : (
          <li>No help data available.</li>
        )}
      </ul>
    </div>
  );
};

export default HelpList;
