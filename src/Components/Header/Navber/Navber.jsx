import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Proveider/Proveider';

const Navber = () => {
  const {user,logout}=useContext(AuthContext)
    const navber=<>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addblog">Add Blog</Link></li>
        <li><Link to="/allblogs">All Blogs</Link></li>
        <li><Link to="/featuredblogs">Featured Blogs</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/contactus">ContactUs</Link></li>
    </>
    // const logout=()=>{
      
    // }
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                navber
              }
            </ul>
          </div>
          <div className='flex items-center'>
          <img className='h-7 w-7' src={'https://i.ibb.co/qW6vwVv/color-spectrum-1192509-1280.png'} alt="" />
          <h3 className='ml-2 text-2xl text-orange-500'><span className='text-2xl text-lime-700'>B</span>LOG</h3>
          </div>
        
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
            navber
           }
          </ul>
        </div>
        <div className="navbar-end">
        {
            user ? <><span>{user.email}</span>
          <button onClick={logout} className="btn">SignOut</button></>:
          <>
          <Link to="/ragester"><button className='btn'>Ragester</button></Link>
          <Link to="/login"><button className='btn'>Login</button></Link>
        
          </>

          }
        
        </div>
      </div>
    );
};

export default Navber;