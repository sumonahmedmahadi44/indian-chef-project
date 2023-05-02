import React from 'react';
import bgimg from '../../assets/top-view-food-frame-with-copy-space.jpg'
import ChefCard from '../ChefCard/ChefCard';
import HappyClients from '../../xtrasection/HappyClients';
import Review from '../../xtrasection/Review';

const Home = () => {
    return (
        <div><div className='relative h-full'>
        <img className='h-full bg-contain w-full' src={bgimg} alt="Background-image loading" />
        <div className=' absolute top-96 -right-48  transform -translate-x-1/2 -translate-y-1/2 text-white'>
           <h1 className='text-7xl font-bold'>F<span className='text-red-600'>OO</span>D  <br />REPLACE BLOG</h1>
           <div className='mt-10 '><li className='text-2xl font-bold '>Most Complete</li>
        <li className='text-2xl font-bold'>Fastest Selling</li></div>
        <p className='text-5xl mt-16 font-bold'>Enjoy Your M<span className='text-red-600'>E</span>al!!</p>
        </div>
        
       </div>
       <ChefCard></ChefCard>
       <HappyClients></HappyClients>
       <Review></Review>
       </div>
    );
};

export default Home;