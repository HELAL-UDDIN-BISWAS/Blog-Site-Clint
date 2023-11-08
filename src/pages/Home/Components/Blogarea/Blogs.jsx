import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Proveider/Proveider';

const Blogs = ({blog}) => {
    const {user}=useContext(AuthContext)
    const { email } = user || {}
    const { image, category, currentTime, short_description, title, _id, long_description
    } = blog || {}
    // console.log(blog)
    const wishlistData = {
        image, category, currentTime, short_description, title, long_description,
        email
    }
    const addwishlist = () => {
        const url = `https://assignment-11-server-mu-plum.vercel.app/wishlist`;
        axios.post(url,  wishlistData )
            .then(res => {
                Swal.fire({
                    icon: "success",
                    title: "Wishlist...",
                    text: "ADD Wishlist Success",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                console.log(res.data)
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                console.error(error)
            })
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className='h-64' src={blog.image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
                {blog.category}
                <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{blog.title}</p>
            <div className="card-actions justify-end">
                <Link to={`/blogdetails/${blog._id}`}>
                    <div className="btn btn-outline btn-primary">details</div>
                </Link>
                <button className="btn btn-outline btn-secondary" onClick={addwishlist}>Add Wishlist</button>
            </div>
        </div>
    </div>
    );
};

export default Blogs;