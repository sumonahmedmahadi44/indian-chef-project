import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const [regError,setRegError] = useState('')
  const { createUser, loggedOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserData(result.user, photo,name)
                loggedOut()
                navigate('/login')
                form.reset()
                setRegError('')

            })
            .catch(error => {
                console.log(error);
                setRegError(error.message)
            })
    }

    const updateUserData = (user, photo,name) => {
        updateProfile(user, {
            photoURL: photo,
            displayName : name
        })
            .then(() => {
                console.log('user photo update');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
      <div>
      <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
              <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Register now!</h1>

              </div>
              <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Name</span>
                          </label>
                          <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                      </div>
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Email</span>
                          </label>
                          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                      </div>
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Photo Url</span>
                          </label>
                          <input type="text" name='photo' placeholder="photo" className="input input-bordered" required/>
                      </div>
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Password</span>
                          </label>
                          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                          <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                          </label>
                      </div>
                      <p className='text-red-500 mb-5'>{regError}</p>
                      <div className="form-control mt-6">
                          <button className="btn btn-primary">Register</button>
                      </div>
                      <div>
                          <p><small>Already have an account? <Link to="/login">Please login</Link></small></p>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div >


    );
};

export default Registration;
        <div className="m-10">
        <button className="btn btn-outline btn-info w-full mt-5"> <FaGoogle className="me-2"></FaGoogle>  Google</button>
        <br />
  <button className="btn btn-outline btn-accent w-full mt-5"> <FaGithub className="me-2"></FaGithub>Github</button>
        </div>