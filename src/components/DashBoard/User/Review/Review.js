import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset} = useForm();
    const { user } = useAuth();
    const onSubmit = (data) => {
        data.photoURL = user.photoURL;
        // fetch("https://thawing-forest-04721.herokuapp.com/addReview", {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(data),
        // })
        //     .then((res) => res.json())
        //     .then();



            axios.post('https://thawing-forest-04721.herokuapp.com/addReview', data)
            .then(res => {
                alert('Are You Add This Review ?');
                reset();
            })
    }
    return (
        <div className=" p-5">

            <h2 className="py-4">Please Provide Your Review</h2>
            <div className="col-lg-4 col-12">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input
                        className="form-control form-control-lg my-2"
                        name="email"
                        value={user?.email}
                        type="email"
                        placeholder="email address"
                        {...register("email", { required: true })}
                    />
                    <input
                        className="form-control form-control-lg my-2"
                        value={user?.displayName}
                        type="text"
                        placeholder="email name"
                        {...register("displayName", { required: true })}
                    />
                    <input
                        className="form-control form-control-lg my-2"
                        name="rating"
                        placeholder="rating (between 0.0 - 5.0)"
                        type="number"
                        step="0.1"
                        min="0"
                        max="5"
                        {...register("rating", { required: true })}
                    />
                    <input
                        className="form-control form-control-lg my-2"
                        name="comments"
                        placeholder="Comments"
                        {...register("comments", { required: true })}
                    />
                    <br />

                    <input
                        className="btn btn-secondary mt-3"
                        type="submit"
                        value="Review Submit"
                    />
                </form>
            </div>


        </div>
    );
};

export default Review;