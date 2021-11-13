import React from 'react';
import latestImgOne from '../../../Images/latest-1.jpg';
import latestImgTwo from '../../../Images/latest-2.jpg';
import latestImgThree from '../../../Images/latest-3.jpg';



// home latest section
const Latest = () => {
    return (
        <div className="py-5 ">
            <h2 className="text-center fw-light">Latest</h2>
            <h2 className="text-center pb-5 display-6 fw-bold">Special Offers & Discounts</h2>
            <div className="container">
                <div className="row">

                    {/* latest first part */}
                    <div className="col-12 col-md-4">
                        <div>
                            <img className="w-100" src={latestImgOne} alt="" />
                        </div>
                        <div className="text-center pt-4">
                            <h5>Hiking Tour</h5>
                            <p className="text-muted fw-bold">$830</p>
                            <button className="btn text-white about__btn mb-3">READ MORE</button>
                        </div>
                    </div>

                    {/* latest second part */}
                    <div className="col-12 col-md-4">
                        <div>
                            <img className="w-100" src={latestImgTwo} alt="" />
                        </div>
                        <div className="text-center pt-4">
                            <h5>Sailing Adventure</h5>
                            <p className="text-muted fw-bold">$910</p>
                            <button className="btn text-white about__btn mb-3">READ MORE</button>
                        </div>
                    </div>

                    {/* latest third part */}
                    <div className="col-12 col-md-4">
                        <div>
                            <img className="w-100" src={latestImgThree} alt="" />
                        </div>
                        <div className="text-center pt-4">
                            <h5>Sea Kayaking</h5>
                            <p className="text-muted fw-bold">$1290</p>
                            <button className="btn text-white about__btn mb-3">READ MORE</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};





export default Latest;