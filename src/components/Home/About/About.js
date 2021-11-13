import React from "react";
import perfectImg from "../../../Images/Perfect/perfect.jpg";


// home about section
const About = () => {
    return (
        <div className="pt-5">
            <div className="container">
                <div className="row">
                <h2 className="text-center display-4 pt-3 pb-5 mt-5">-- The Perfect Optical --</h2>
                    
                    {/* image part */}
                    <div className="col-md-6 col-12 mt-4">
                        <img className="w-100" src={perfectImg} alt="" />
                    </div>

                    {/* description part */}
                    <div className="col-md-6 col-12">
                        <div className="pt-5 px-4">
                            <h2>Choose your first frame smarteye</h2>
                            <p>
                            “Sunglasses or sun glasses (informally called shades or sunnies; more names below) are a form of protective eyewear designed primarily to prevent bright sunlight and high-energy visible light from damaging or discomforting the eyes.
                            </p>
                            <ul>
                                <li>7-25 days on delivary</li>
                                <li>Maion Material: Plastic</li>
                                <li>For Hard or Soft lenses</li>
                                <li>Coated lids for superior grip</li>
                                <li>Leak-proof design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default About;