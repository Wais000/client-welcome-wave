import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAccommodations } from './accommodationSlice';

const AccommodationList = () => {
  const dispatch = useDispatch();
  const accommodations = useSelector((state) => state.accommodations.accommodations);
  const status = useSelector((state) => state.accommodations.status);
  const error = useSelector((state) => state.accommodations.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getAllAccommodations());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Accommodations</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && accommodations.length > 0 && ( // Check length before map
        <ul>
          {accommodations.map((accommodation) => (
            <li key={accommodation._id}>{accommodation.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AccommodationList;
