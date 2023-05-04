import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const loggedOutuser =()=>{
      loggedOut()
      .then()
      .catch(error => console.error(error))
  }
  const {user,loggedOut} = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100  flex justify-around bg-white text-white">
  <div>
    <a className="btn btn-ghost normal-case text-3xl text-bold bg-sky-300 shadow-2xl ">In <span className='text-red-500'>d</span> ian Chef P<span className='text-red-500'>ro</span>ject</a>
  </div>
  <div  className="flex gap-6 text-xl">
  <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to='/blog'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Blog
                            </NavLink>
      
        {
          user ? <NavLink onClick={loggedOutuser}
          to='/'
          className={({ isActive }) => (isActive ? 'active' : 'default')}
      >
          Logout
      </NavLink> : <NavLink
                                to='/login'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Log in
                            </NavLink>
        }
    </div>
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div on className="w-10 rounded-full">
          {
            user ? <img title={user.displayName} src={user.photoURL} alt="" /> : ''
          }
        </div>
      </label>
</div>
    );
};

export default Navbar;