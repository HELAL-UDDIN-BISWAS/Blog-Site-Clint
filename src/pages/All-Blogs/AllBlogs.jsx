import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { useLoaderData } from 'react-router-dom';

const AllBlogs = () => {
    const [blogs, setblogs] = useState([])
    const url = `http://localhost:5000/blog`;
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setblogs(res.data);
            })
    }, []);


    return (
        <div>
            {/* <select
                className="select select-bordered w-full max-w-xs"
                onChange={(e) => e.target.value}
            >
                <option disabled selected>Who shot first?</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select> */}
            <div  className='grid grid-cols-3 gap-5 my-5'>
            {
                blogs?.map(blog=><Blog key={blog._id} blog={blog}></Blog>)
            }
            </div>
            
        </div>
    );
};

export default AllBlogs;