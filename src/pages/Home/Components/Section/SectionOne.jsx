import React from 'react';

const SectionOne = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-6 items-center justify-around max-sm:flex-col mx-50  max-w-screen-xl my-9'>
            <div className='col-span-1'>
                <img className='rounded' src={'https://i.ibb.co/dbZRGpq/startup-849804-1280.jpg'} alt="" />
            </div>
            <div className='col-span-1'>
                <h1 className='text-3xl my-2'>Communication and Connectivity</h1>
                <p className='my-2'>The advent of the internet and mobile devices has revolutionized the way we communicate. We're now connected to friends, family, and the world at large 24/7. Social media, instant messaging apps, and video conferencing have transformed the way we interact, breaking down geographical barriers.
                </p>
                <h2 className='text-3xl  my-2'>Work and Productivity</h2>
                <p className='my-2'>
                The workplace has seen a significant transformation, with technology streamlining tasks, automating processes, and enabling remote work. From cloud-based collaboration tools to project management software, technology has boosted productivity and efficiency.
                </p>
            </div>
        </div>
    );
};

export default SectionOne;