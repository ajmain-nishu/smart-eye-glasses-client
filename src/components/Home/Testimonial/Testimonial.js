import React, { useEffect, useState } from 'react';
// import Rating from 'react-rating';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import './Testimonial.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("https://thawing-forest-04721.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    console.log(reviews)
    return (
        <div>
            <h2>Review Length: {reviews.length}</h2>
            <h2 className="text-center display-4 fw-bold pt-5 pb-4 mt-5">Services We Offer</h2>
            <p className="text-center text-muted fs-6 pb-5">This is our services. You can find any service what you want</p>
            <div className="container">
                <div className="col-12">
                    <div className="row pb-3">

                        {/* value pass in other component */}
                        {
                            reviews.map(review => <SingleTestimonial key={review._id} review={review}></SingleTestimonial>)
                        }

                    </div>
                </div>
            </div>
        </div>














    );
};

export default Testimonial;