import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Navber from '../Components/Header/Navber/Navber';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navber></Navber>
            <Outlet>
            <Home></Home>
            </Outlet>
        </div>
    );
};

export default Root;