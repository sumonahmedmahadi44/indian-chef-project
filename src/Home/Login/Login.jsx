import React, { useContext, useState } from "react";
import {  FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const {user,loginUser,signInWithGoogle,signInWithGithub} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'

 

  const handleGoogleBtn=()=> {
    signInWithGoogle()
    .then(result => {
      const loggedUser = result.user;
    })
    .catch(error => console.error(error))
    form.reset();
  }

  const  handleGithubBtn =()=> {
    signInWithGithub()
    .then(result => {
      const loggedUser = result.user;
    })
    .catch(error => console.error(error))
    form.reset();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.Password.value;
    setPassword(email,password);
    console.log(email,password)
   
    loginUser(email,password)
    .then(result => {
      const loggedUser = result.user;
      navigate(from,{replace:true})
    })
    .catch(error => console.error(error))
    form.reset();
    
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs mx-auto m-80">
      <div className="mb-4">
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
          Sign In
        </button>
      </div>
      <p className="mt-5 ">Don't Have Account? Please <Link className="ms-2 underline" to = '/register'>Register</Link></p>
      <div className="m-10">
      <Link to ='/'><button onClick={handleGoogleBtn} className="btn btn-outline btn-info w-full mt-5"> <FaGoogle className="me-2"></FaGoogle>  Google</button></Link>
      <br />
<Link to ='/'><button onClick={handleGithubBtn} className="btn btn-outline btn-accent w-full mt-5"> <FaGithub className="me-2"></FaGithub>Github</button></Link>
      </div>
    </form>
  );
}

export default LoginForm;
