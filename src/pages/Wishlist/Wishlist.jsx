import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Proveider/Proveider';
import WishlistCompo from './WishlistCompo';

const Wishlist = () => {
    const {user}=useContext(AuthContext)
    const [blogwishlist,setblogwishlist]=useState()
    const url = `http://localhost:5000/wishlist?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setblogwishlist(res.data);
                console.log(res.data)
            })
            .catch(error => console.error(error))
    }, [url]);

    return ( 
        <div className='grid grid-cols-2 gap-4'>
            {
                blogwishlist?.map(wishlist=><WishlistCompo key={wishlist._id} wishlist={wishlist}></WishlistCompo>)
            }
        </div>
    );
};

export default Wishlist;