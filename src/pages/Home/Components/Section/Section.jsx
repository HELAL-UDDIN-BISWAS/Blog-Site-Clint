import React from 'react';

const Section = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-6 items-center justify-around max-sm:flex-col z-10 mx-50 my-5 max-w-screen-xl mx-auto'>
       
        <div className='col-span-1'>
            <h1 className='text-3xl'>Embark on a thrilling journey through the lush Amazon Rainforest."</h1>
            <p className='text-xl'>Travel the Text offers Biblical Study Trips to the lands of the Bible. We engage the Text in its original context through the on-site study of  biblical culture, history, language, geography, and literature. Join us on an upcoming study trip to challenge your heart, mind, and body on an incredible pilgrimage as we travel the Text, allowing the land and Spirit to be the greatest teachers of all</p>
        </div>
        <div className='col-span-1 rounded'>
            <img className='rounded' src={'https://i.ibb.co/yQPB3CG/pexels-elle-hughes-1660030.jpg'} alt="" />
        </div>
    </div>
    );
};

export default Section;