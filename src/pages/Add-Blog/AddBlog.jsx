import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AddBlog = () => {
    const addblog = (e) => {
        e.preventDefault();
        const form = e.target
        const category = form.category.value
        const title = form.title.value
        const short_description = form.short_description.value
        const long_description = form.long_description.value
        const image = form.image.value
        const Blog = { category, title, short_description, long_description, image }

        fetch('http://localhost:5000/blog', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Blog)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="card flex-shrink-0 text-center flex justify-center items-center shadow-2xl bg-base-100">
        <form onSubmit={addblog} className="card-body w-2/4 my-10 ">
            <div className='grid grid-cols-2 gap-5 w-full'>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">category</span>
                </label>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Select category</option>
                    <option>Food</option>
                    <option>Technology</option>
                    <option>Health</option>
                    <option>Travel</option>
                </select>
            </div>
            <div className="">
                <label className="label">
                    <span className="label-text">title</span>
                </label>
                <input type="text" placeholder="title" name='title' className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">short_description</span>
                </label>
                <input type="text" placeholder="short_description" name='short_description' className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">long_description</span>
                </label>
                <input type="text" placeholder="long_description" name='long_description' className="input input-bordered" required />
            </div>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">image</span>
                </label>
                <input type="url" placeholder="image" name='image' className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
            </div>
        </form>
</div>
    );
};

export default AddBlog;