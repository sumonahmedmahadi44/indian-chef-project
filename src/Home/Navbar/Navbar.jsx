import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100  flex justify-around bg-black text-white">
  <div>
    <a className="btn btn-ghost normal-case text-3xl text-bold bg-sky-300 shadow-2xl ">In <span className='text-red-500'>d</span> ian Chef P<span className='text-red-500'>ro</span>ject</a>
  </div>
  <div  className="flex gap-6 text-xl">
        <Link to ='/'>Home</Link>
        <Link to='/blogs'>Blog</Link>
        <Link to ='/login'>Login</Link>
    </div>
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
</div>
    );
};

export default Navbar;