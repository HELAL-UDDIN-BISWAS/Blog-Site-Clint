import axios from 'axios';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Proveider/Proveider';
const Blog = ({ blog }) => {
    const {user}=useContext(AuthContext)
    const {email}=user || {}
    // console.log(email)
    const { image, category, currentTime, short_description, title, _id } = blog || {}
    // console.log(blog)
     const wishlistData={image, category, currentTime, short_description, title, email}
    const addwishlist = () => {
        const url = `http://localhost:5000/wishlist`;
       
            axios.post(url, wishlistData)
                .then(res => console.log(res.data))
        

    }

return (
    <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-64' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <p>{short_description}</p><p>{currentTime}</p>
                <div className="card-actions justify-end">
                <button onClick={addwishlist} className="btn btn-primary">Wishlist</button>

                {/* <Link to={`/wishlist/${_id}`}>
                      <button className="btn btn-primary">Wishlist</button>
                    </Link> */}
                </div>
            </div>
        </div>
    </div>

);
};

export default Blog;