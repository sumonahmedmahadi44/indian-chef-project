import React from 'react';

const Review = () => {
    return (
        
                
                <div className="hero min-h-screen bg-pink-300 ">

                    <div className="hero-content flex-col md:flex-row ">
                        <div className="text-center lg:text-left">
                            <h1 className=" text-2xl md:text-5xl font-bold text-red-600">Contact now!</h1>
                            <p className="py-6 font-bold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <div className="w-full  text-center md:text-left">
            
            
            <p className="my-3 font-bold text-black text-sm">Email: info@example.com</p>
            <p className="my-3 font-bold text-black text-sm">Phone: 123-321-5555</p>
            <p className="my-3 font-bold text-black text-sm">Address: road-123, Gulshan , Dhaka-1212</p>
          </div>
                        </div>
                        <div className="card mr-2 md:mr-0  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Number</span>
                                    </label>
                                    <input type="text" placeholder="number" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <textarea placeholder='Type message' name="" id="" cols="15" rows="5"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
    );
};

export default Review;