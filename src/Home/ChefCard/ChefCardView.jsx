import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCardView = ({chef}) => {

    const {chef_name,chef_picture,years_of_experience,number_of_recipes,likes,description} = chef;
    return (
        <div className="card w-full bg-base-100 shadow-xl container mt-5 bg-slate-300">
          <LazyLoad threshold={0.95}  offset={300}><figure><img className=' object-cover h-full' src={chef_picture} alt="Shoes" /></figure></LazyLoad>
  <div className="card-body">
    <h2 className="card-title font-bold text-red-500 text-2xl">{chef_name}</h2>
    <p>Experience: {years_of_experience} years</p>
    <p>Likes: {likes}</p>
    <p>Number of Recipes : {number_of_recipes}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to ={`/recipe/${chef.id}`}><button className="btn btn-primary">View Recipes</button></Link>
    </div>
  </div>
</div>
    );
};

export default ChefCardView;