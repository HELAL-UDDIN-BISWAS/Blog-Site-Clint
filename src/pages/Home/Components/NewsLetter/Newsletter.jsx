import React from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
    const newsletter = (e) => {
        e.preventDefault()
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Subscrib Added Success Full',
            footer: '<a href="">Why do I have this issue?</a>'
        })
        return
    }
    return (
        <div className='h-56 flex flex-col items-center justify-center bg-lime-800 gap-3'>
            <h2 className='text-white text-2xl'>Thank you for subscribing to our
                    newsletter</h2>
            <div>
                <form onSubmit={newsletter}>
                    <input type="email" placeholder="email" className="input border-spacing-4 border-collapse" required />
                    <button className="btn mx-3">Button</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;