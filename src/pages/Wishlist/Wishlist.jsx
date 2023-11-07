import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Proveider/Proveider';
import WishlistCompo from './WishlistCompo';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const Wishlist = () => {
    const { user } = useContext(AuthContext)
    const [blogwishlist, setblogwishlist] = useState()
    const [loading, setloading] = useState(false)
    const url = `http://localhost:5000/wishlist?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setblogwishlist(res.data);
                console.log(res.data)
                setloading(true)
            })
            .catch(error => console.error(error))
    }, [url]);

    return (
        <div className='grid grid-cols-2 gap-4'>
            {
                loading ? <>
                    {
                        blogwishlist?.map(wishlist => <WishlistCompo key={wishlist._id} wishlist={wishlist}></WishlistCompo>)
                    }
                </> :
                    <div className='text-center'>
                        <SkeletonTheme  baseColor="#c4c8cf" highlightColor="#fff">
                            <p>{
                        <Skeleton count={3} />
                                
                                }
                            </p>
                        </SkeletonTheme>
                    </div>

            }
        </div>
    );
};

export default Wishlist;