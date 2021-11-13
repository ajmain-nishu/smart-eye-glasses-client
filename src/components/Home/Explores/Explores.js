import React from 'react';
import exploreimg from '../../../Images/explore.png'


//home explore section
const Explores = () => {
    return (
        <div className="container">
            <h2 className="text-center pb-5 display-6 fw-bold my-5 pt-5">Explore the World For Yourself</h2>
            <div>
                <img className="w-100" src={exploreimg} alt="" />
            </div>
        </div>
    );
};

export default Explores;