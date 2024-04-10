import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Proveider/Proveider';
import WishlistCompo from './WishlistCompo';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const Wishlist = () => {
    const { user,loading } = useContext(AuthContext)
    const [blogwishlist, setblogwishlist] = useState()
   
    const url = `https://assignment-11-server-mu-plum.vercel.app/wishlist?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setblogwishlist(res.data);
                console.log(res.data)
            })
            .catch(error => console.error(error))
    }, [url]);

    if (loading) {
    return  <div className='text-center'>
                <SkeletonTheme baseColor="#c4c8cf" highlightColor="#fff">
                    <p>{
                        <Skeleton count={3} />
                    }
                    </p>
                </SkeletonTheme>
            </div>
    }
    return (
        <div className='grid grid-cols-2 gap-4'>
            {
                 blogwishlist?.map((wishlist) => <WishlistCompo key={wishlist._id} wishlist={wishlist}></WishlistCompo>)
            }
        </div>
    );
};

export default Wishlist;