import axios from 'axios';
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Wishlist = () => {

    const blog = useLoaderData();
    const { image, category, currentTime, short_description, title, _id } = blog || {}
    
    const addwishlist = () => {
        const url = `http://localhost:5000/wishlist`;
       
            axios.post(url, blog)
                .then(res => console.log(res.data))
        

    }

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p>{short_description}</p><p>{currentTime}</p>
                    <div className="card-actions justify-end">
                        <button onClick={addwishlist} className="btn btn-primary">Add Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;