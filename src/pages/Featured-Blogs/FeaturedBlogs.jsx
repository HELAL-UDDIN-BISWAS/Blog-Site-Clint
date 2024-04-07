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
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>{filter?.category}</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
            filteredData?.map(datas=> <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>)
        }
     
     
         </tbody>
  </table>
</div>
        </div>

    );
};

export default FeaturedBlogs;