import React from 'react';
import Footer from './Components/Footer/Footer';
import Newsletter from './Components/NewsLetter/Newsletter';
import SectionOne from './Components/Section/SectionOne';
import Banner from './Components/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Newsletter></Newsletter>
            <div>
                <div className='text-center my-5'>
                    <h2 className='text-4xl text-black '>Technology</h2>
                    <p>Technology has both positive and negative effects on the environment. </p>
                </div>
                <SectionOne></SectionOne>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;