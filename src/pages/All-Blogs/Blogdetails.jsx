import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Proveider/Proveider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Blogdetails = () => {
  const { user } = useContext(AuthContext)
  const { email } = user || {}
    const wishlistDetails=useLoaderData()
    const { image, category, currentTime, short_description, title, _id,long_description
    } =wishlistDetails || {}
    console.log(wishlistDetails)
    
    const [text, setText] = useState('');
    const handleTextAreaChange = (event) => {
      setText(event.target.value);
    }
    const handlesumit=(e)=>{
        e.preventDefault();
        const commentData = { text, email, _id };
        console.log(commentData)
        axios.post("http://localhost:5000/allComment", commentData)
        .then(res => {
          console.log(res)
            return Swal.fire({
              icon: "success",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>'
            })
            .catch(error=>console.error(error))
          
        })
    }
    return (
        <div className='my-5'>
           <div className=''>
            <img className='lg:h-[500px] w-full rounded' src={image} alt="" />
           </div>
           <div className='my-4 flex flex-col gap-4'>
            <h2 className='text-3xl font-bold'> {category}</h2>
            <p className='text-xl'>{title}</p>
            <p>{short_description}</p>
            <p>{long_description}</p>
           </div>
           <div>
      <h2>Text Area Example</h2>
      <div></div>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleTextAreaChange}
        placeholder="Type something here..."
      />
      <div>
        <p>You typed: {text}</p>
        <button className="btn btn-outline btn-secondary" onClick={handlesumit}> submit</button>
      </div>
    </div>
        </div>
    );
};

export default Blogdetails;