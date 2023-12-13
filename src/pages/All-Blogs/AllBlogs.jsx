import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { useLoaderData } from 'react-router-dom';
import {
    useQuery,
} from '@tanstack/react-query'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const AllBlogs = () => {
    const blogCategory = [
        'Food',
        'Technology',
        'Health',
        'Travel'
    ]
    const [category, setcategory] = useState('')
    const { data, isLoading } = useQuery({
        queryKey: ['category', category],
        queryFn: async () => {
            const data = await fetch(`https://assignment-11-server-mu-plum.vercel.app/blog?category=${category}`,{ withCredentials: true })
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

    console.log(category)
    return (
        <div>
            <div>
                <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={(e) => setcategory(e.target.value)}
                >
                    <option disabled selected>Chose One</option>
                    {
                        blogCategory.map(blog => <option key={blog}>{blog}</option>)
                    }
                </select>
            </div>


            <div className='grid grid-cols-3 gap-5 my-5'>
                {
                    data?.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>

        </div>
    );
};

export default AllBlogs;