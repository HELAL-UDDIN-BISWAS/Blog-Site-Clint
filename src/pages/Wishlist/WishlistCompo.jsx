import React from 'react';

const WishlistCompo = ({ wishlist }) => {
    const { image, category, currentTime, short_description, title, _id } = wishlist || {}
    console.log(wishlist)
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='w-80' src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <p>{short_description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default WishlistCompo;