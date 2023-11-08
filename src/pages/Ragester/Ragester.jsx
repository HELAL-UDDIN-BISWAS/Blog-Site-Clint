import React, { useContext } from 'react';
import { AuthContext } from '../../Proveider/Proveider';
import Swal from 'sweetalert2';

const Ragester = () => {
    const {ragester}=useContext(AuthContext)
    const handlesubmit=(e)=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)
        ragester(email,password)
        .then(res=> 
          console.log(res),
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Login in Success full',
            footer: '<a href="">Why do I have this issue?</a>'
          }))
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href="">Why do I have this issue?</a>'
    
            })
            console.error(error)
          })
      }
    
        return (
            <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handlesubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name='email' className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Ragester</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Ragester;