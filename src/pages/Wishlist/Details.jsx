import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';

const Details = () => {
  const wishlistDetails = useLoaderData();
  const { image, category, currentTime, short_description, title, _id, long_description
  } = wishlistDetails
  return (
    <div className='my-5'>
      <div className=''>
        <img className='lg:h-[500px] w-full rounded' src={image} alt="" />
      </div>
      <div className='my-4 flex flex-col gap-4'>
        <h2 className='text-3xl font-bold'> {category}</h2>
        <p className='text-xl'>{title}</p>
        <p>{short_description}</p>
        <p>{long_description}</p>
      </div>
    </div>
  );
};

export default Details;