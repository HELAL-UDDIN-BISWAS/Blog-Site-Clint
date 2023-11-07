import axios from 'axios';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Proveider/Proveider';
import Swal from 'sweetalert2';
const Blog = ({ blog }) => {
    const { user } = useContext(AuthContext)
    const { email } = user || {}
    // console.log(email)
    const { image, category, currentTime, short_description, title, _id, long_description
    } = blog || {}
    // console.log(blog)
    const wishlistData = {
        image, category, currentTime, short_description, title, long_description,
        email
    }
    const addwishlist = () => {
        const url = `http://localhost:5000/wishlist`;
        axios.post(url, wishlistData)
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
        // <div>
        //     <div className="card card-compact w-96 bg-base-100 shadow-xl">
        //         <figure><img className='h-64' src={image} alt="Shoes" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">{category}</h2>
        //             <p>{short_description}</p><p>{currentTime}</p>
        //             <div className="card-actions justify-end">
        //             <button onClick={addwishlist} className="btn btn-primary">Add Wishlist</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-64' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {category}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{title}</p>
                <div className="card-actions justify-end">
                    <Link to={`/blogdetails/${_id}`}>
                        <div className="btn btn-outline btn-primary">details</div>
                    </Link>
                    <button className="btn btn-outline btn-secondary" onClick={addwishlist}>Add Wishlist</button>
                </div>
            </div>
        </div>

    );
};

export default Blog;