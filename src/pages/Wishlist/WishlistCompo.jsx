import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const WishlistCompo = ({ wishlist }) => {
    const { image, category, currentTime, short_description, title, _id } = wishlist || {}

    const handledelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })

            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://assignment-11-server-mu-plum.vercel.app/wishlist/${_id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: 'success',
                                    text: 'Do you want to continue',
                                    icon: 'success',
                                    confirmButtonText: 'DELETE'
                                })
                            }
                        })
                }
               
            });
    }

    console.log(wishlist)
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='w-80' src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <p>{short_description}</p>
                <div className="card-actions justify-end">
                    <button onClick={handledelete} className="btn btn-primary">Delete</button>
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WishlistCompo;