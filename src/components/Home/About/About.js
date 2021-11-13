import React from "react";
import aboutImg from "../../../Images/about.png";
import "./About.css";


// home about section
const About = () => {
    return (
        <div className="pt-5">
            <div className="container">
                <div className="row">
                    
                    {/* image part */}
                    <div className="col-md-6 col-12">
                        <img className="w-100" src={aboutImg} alt="" />
                    </div>

                    {/* description part */}
                    <div className="col-md-6 col-12">
                        <div className="pt-5 px-4">
                            <h2 className="pt-5 fw-light">About Us</h2>
                            <h2>Welcome to our Travel Agency</h2>
                            <p>
                            “Travel is the main thing you purchase that makes you more extravagant”. We, at ‘Organization Name’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.

                            We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters. 
                            </p>
                            <button className="about__btn btn my-5 text-white">KNOW MORE</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};




export default About;