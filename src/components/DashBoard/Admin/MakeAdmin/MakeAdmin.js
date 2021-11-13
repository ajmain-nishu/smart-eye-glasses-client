import React from 'react';
// import axios from 'axios';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const processed = window.confirm('Are you sure ?')
        if (processed) {
            fetch("https://thawing-forest-04721.herokuapp.com/makeAdmin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
            
        })
            .then((res) => res.json())
            .then((result) => {
                // alert('are you sure add this product')
                reset()
            });
        
        }

        // axios.put('https://thawing-forest-04721.herokuapp.com/makeAdmin', data)
        //     .then(res => {
        //         alert('are you sure add this ?');
        //         reset();
        //     })
        
    };
    return (
        <div className="p-5">
            <h1>Here Make As Admin</h1>
            <div className="col-md-6 col-12">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="form-control form-control-lg w-75"
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    required
                    {...register("email", { required: true })}
                />
                <br />

                <input
                    className="btn btn-danger mt-3"
                    type="submit"
                    value="Make Admin"
                />
            </form>
            </div>
            
        </div>
    );
};

export default MakeAdmin;