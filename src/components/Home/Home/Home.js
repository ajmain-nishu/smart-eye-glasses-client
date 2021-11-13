import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Explore from '../Explores/Explores';
import HomeServices from '../HomeServices/HomeServices';
import Latest from '../Latest/Latest';
import Testimonial from '../Testimonial/Testimonial';


// home all component added
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <HomeServices></HomeServices>
            <Explore></Explore>
            <Testimonial></Testimonial>
            <Latest></Latest>
        </div>
    );
};




export default Home;