import React from 'react';
import Home from '../Home/Home/Home';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import ChefCard from '../Home/ChefCard/ChefCard';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
          <Navbar></Navbar>  
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;<Home></Home>