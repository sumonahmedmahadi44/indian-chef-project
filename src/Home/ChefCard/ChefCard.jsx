// import { data } from 'autoprefixer';
// import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import ChefCardView from './ChefCardView';

// const ChefCard = () => {
//    const [chefs,setChefs] = useState([]);
   

//    useEffect(() =>{
//     fetch('http://localhost:5000/chefs').then(res => res.json()).then(data => setChefs(data)).catch(error => console.error(error))
//    },[])
//     return (
//         <div className='grid md:grid-cols-3 gap-10 '>
//             {
//                 chefs.map(chef =><ChefCardView key={chef.id} chef = {chef}></ChefCardView> )
//             }
//         </div>
//     );
// };

// export default ChefCard;