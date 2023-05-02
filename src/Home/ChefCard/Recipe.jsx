import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({recipe}) => {
    const {name , rating , ingredients, image_food,method,} = recipe;
    return (
    
            <div className="card w-96 bg-base-100 shadow-xl image-full h-100 ">
  <figure><img src={image_food} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-extrabold text-xl text-sky-400">{name}</h2>
    <p><span className='font-bold text-yellow-200 text-xl'>Ingredients of this Recipe :</span> {ingredients}</p>
    <p><span className='font-bold text-yellow-200 text-xl'>Method of this Recipe :</span> {method}</p>
    <p><span className='font-bold text-yellow-200 text-xl'>Ratings : </span>{rating}</p>

  </div>
</div>
            
       
    );
};

export default Recipe;