import React, { useEffect, useState } from 'react';
import SingleExplore from '../SingleExplore/SingleExplore';


//navbar explore section
const Explore = () => {
    const [products, setProducts] = useState([])

    //api call
    useEffect(() => {
        fetch("https://thawing-forest-04721.herokuapp.com/exploreProduct")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="py-5">

            {/* text section */}
            <h2 className="text-center display-4 fw-bold pt-5 pb-4 mt-5">Our Products</h2>
            <p className="text-center text-muted fs-6 pb-5">This is our products. You can find any product what you want</p>
            <div className="container">
                <div className="col-12">
                    <div className="row pb-3">

                        {/* value pass in other component */}
                        {
                            products.map(product => <SingleExplore key={product._id} product={product}></SingleExplore>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};



export default Explore;