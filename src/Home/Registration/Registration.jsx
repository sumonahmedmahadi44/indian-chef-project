import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Registration = () => {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.Password.value;
        setPassword(email,password);
        console.log(email,password)
       
        
      }
    return (
        <form onSubmit={handleSubmit} className="w-full max-w-xs mx-auto m-80">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            UserName:
          </label>
          <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" name="username" required/>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Photo Url:
          </label>
          <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="email" name="email" required/>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="email" name="email" required/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="Password" placeholder="Password" name="Password" required/>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Registration
          </button>
        </div>
        <div className="m-10">
        <button className="btn btn-outline btn-info w-full mt-5"> <FaGoogle className="me-2"></FaGoogle>  Google</button>
        <br />
  <button className="btn btn-outline btn-accent w-full mt-5"> <FaGithub className="me-2"></FaGithub>Github</button>
        </div>
      </form>
    );
};

export default Registration;