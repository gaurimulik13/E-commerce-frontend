// import React from 'react'
// import {menu} from '../assets/Shirtdata1'


// const Shirt = () => {
//   return (
//     <div className='explore-menu' id='explore-menu'>
//         <h1 className='text-bold text-center text-5xl'>Shirt</h1>
//        <div className='flex items-center explore-menu-list'>
//         {
//             menu.map((item,index)=>{
//                 return(
//                     <div key={index} className='explore-menu-list-item  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
//                        <img src={item.img} alt='img' className='w-404 h-292 mr-6 gap-4'/>
//                        <p>{item.name}</p>
//                         </div>
//                 )
//             })
//         }

//        </div>
      
//     </div>
//   )
// }

// export default Shirt


import React from 'react';
import { menu } from '../assets/Shirtdata1';

const Shirt = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1 className="text-bold text-center text-5xl">Shirt</h1>

      <div className="explore-menu-list flex flex-wrap justify-center items-center gap-4">
        {menu.map((item, index) => {
          return (
            <div
              key={index}
              className="explore-menu-list-item bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg font-semibold">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shirt;

