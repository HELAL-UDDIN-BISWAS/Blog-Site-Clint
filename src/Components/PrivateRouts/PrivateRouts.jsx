import React, { useContext } from 'react';
import { AuthContext } from '../../Proveider/Proveider';
import { SkeletonTheme } from 'react-loading-skeleton';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PrivateRouts = () => {
    const {user,loding}=useContext(AuthContext);
    if(loding){
        return <div className='items-center text-center flex h-screen justify-center'><span className="loading loading-spinner loading-lg"></span></div>
    }
};

export default PrivateRouts;