import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Blogs from './Blogs';

const Blogarea = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const data = await fetch(`http://localhost:5000/blogForHome`, { withCredentials: true })
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
    console.log(data)
    return (
        <div className=' mx-auto text-center items-center justify-center grid lg:grid-cols-3 gap-4'>
            {
                data?.map(blog=><Blogs key={blog._id} blog={blog}></Blogs>)
            }
        </div>
    );
};

export default Blogarea;