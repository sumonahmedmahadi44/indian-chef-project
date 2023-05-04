import React, { useContext } from 'react';
import bgimg from '../../assets/top-view-food-frame-with-copy-space.jpg'
import ChefCard from '../ChefCard/ChefCard';
import HappyClients from '../../xtrasection/HappyClients';
import Review from '../../xtrasection/Review';
import { AuthContext } from '../../Provider/AuthProvider';
import LazyLoad from 'react-lazy-load';

const Home = () => {
    const {loader} = useContext(AuthContext);
    if(loader){
        return <div className='text-center'><div><progress className="progress progress-primary w-56" value="0" max="100"></progress></div>
        <div><progress className="progress progress-secondary w-56" value="10" max="100"></progress></div>
        <div><progress className="progress progress-success w-56" value="40" max="100"></progress></div>
        <div><progress className="progress progress-accent w-56" value="70" max="100"></progress></div>
        <div><progress className="progress progress-secondary w-56" value="100" max="100"></progress></div></div>
    }
    return (
        <div>
            <div className='relative h-full'>
        <LazyLoad><img className='h-full bg-contain w-full' src={bgimg} alt="Background-image loading" /></LazyLoad>
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