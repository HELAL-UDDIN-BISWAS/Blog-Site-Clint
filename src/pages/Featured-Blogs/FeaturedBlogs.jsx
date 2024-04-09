import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

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
              <th>Image</th>
              <th>Category</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              filteredData?.map(datas => <tr>
                <th><img className='h-12 rounded w-10' src={datas?.image} alt="" /></th>
                <td>{datas?.category}</td>
                <td>{datas?.title}</td>
              </tr>)
            }


          </tbody>
        </table>
      </div>
    </div>

  );
};

export default FeaturedBlogs;