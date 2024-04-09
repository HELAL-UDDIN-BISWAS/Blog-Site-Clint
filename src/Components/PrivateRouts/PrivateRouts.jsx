import React, { useContext } from 'react';
import { AuthContext } from '../../Proveider/Proveider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouts = ({ children }) => {

    const { user, loding } = useContext(AuthContext);
    const location = useLocation();
    if (loding) {
        return <div className='items-center text-center flex h-screen justify-center'><span className="loading loading-spinner loading-lg"></span></div>
    }
    console.log(location,user,loding)
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}
export default PrivateRouts;

