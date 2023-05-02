// import React from 'react';
// import { Link } from 'react-router-dom';

// const ChefCardView = ({chef}) => {
//     console.log(chef)
//     const {chef_name,chef_picture,years_of_experience,number_of_recipes,likes,description} = chef;
//     return (
//         <div className="card w-96 bg-base-100 shadow-xl me-5 mt-5 bg-slate-300">
//   <figure><img className=' object-cover h-96' src={chef_picture} alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title font-bold text-red-500 text-2xl">{chef_name}</h2>
//     <p>Experience: {years_of_experience} years</p>
//     <p>Likes: {likes}</p>
//     <p>Number of Recipes : {number_of_recipes}</p>
//     <p>{description}</p>
//     <div className="card-actions justify-end">
//       <Link to ={`/recipe/${chef.id}`}><button className="btn btn-primary">View Recipes</button></Link>
//     </div>
//   </div>
// </div>
//     );
// };

// export default ChefCardView;