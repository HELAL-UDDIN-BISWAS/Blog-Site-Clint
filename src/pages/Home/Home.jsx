import React from 'react';
import Footer from './Components/Footer/Footer';
import Newsletter from './Components/NewsLetter/Newsletter';
import SectionOne from './Components/Section/SectionOne';

const Home = () => {
    return (
        <div>
            home
            <Newsletter></Newsletter>
            <div>
                <SectionOne></SectionOne>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;