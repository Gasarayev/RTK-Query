import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetCategoriesInfoQuery } from '../redux/categoriesApi';

const Detail = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const { data: details, isLoading, error } = useGetCategoriesInfoQuery(id); 


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      {details ? (
        <div>
          <h1>{details.name}</h1>
          <p>{details.description}</p>
        </div>
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
};

export default Detail;
