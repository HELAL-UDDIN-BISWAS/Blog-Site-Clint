import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Feature from './Feature';

const FeaturedBlogs = () => {
    const [use, setuse] = useState({})
    const { data, isLoading } = useQuery({
        queryKey: ['command'],
        queryFn: async () => {
            const data = await fetch(`https://assignment-11-server-mu-plum.vercel.app/blog`, { withCredentials: true })
            return await data.json()
        }
    })
    if (isLoading == true) {
        return <SkeletonTheme baseColor="#c4c8cf" highlightColor="#fff">
            <p>{
                <Skeleton count={3} />
            }
            </p>
        </SkeletonTheme>
    }
    console.log(use)
    const maxLength = 200; 

    const filteredData = data.filter((item) => item.long_description.length > maxLength);
    console.log(filteredData)

   
    return (

        <div>
          {
            filteredData.map(filter=><Feature key={filter._id} filter={filter}></Feature>)
          }
        </div>

    );
};

export default FeaturedBlogs;