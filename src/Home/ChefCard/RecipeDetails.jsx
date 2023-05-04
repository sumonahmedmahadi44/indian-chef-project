import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faL } from '@fortawesome/free-solid-svg-icons';

const RecipeDetails = () => {
    const chefDetails = useLoaderData();
    const [disable,setDisable] = useState(false)
    const {chef_name,chef_picture,years_of_experience,number_of_recipes,likes,description} = chefDetails;
  
    const handleFavBtn = ()=>{
      
      toast('added it to your Favorite list!!!!!!!!')
      setDisable(true)
    }

    return (
        <div>
          <ToastContainer></ToastContainer>
            <div className='md:flex mb-16'>
            <div className="card w-96 h-full bg-base-100 shadow-xl me-5 mt-5 bg-slate-300">
  <figure><img className=' object-cover h-96' src={chef_picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-red-500 text-2xl">{chef_name}</h2>
    <p>Experience: {years_of_experience} years</p>
    <p>Likes: {likes}</p>
    <p> Number of Recipes: {number_of_recipes}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button onClick={handleFavBtn} disabled={disable} className="btn btn-primary">Favorite</button>
    </div>
  </div>
  </div>
  <div className='grid md:grid-cols-2 gap-10 mt-5 '>
    {
        chefDetails.recipes.map((recipe,i)=><Recipe key={i} recipe = {recipe}></Recipe>)
    }
  </div>
  

        </div>
        <div>
              <Link to = '/'>  <button className='btn btn-primary w-full'>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default RecipeDetails;