import React, { useState } from 'react';
import { Rating } from "@material-tailwind/react";

const Productcard = ({ image, price, name }) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div 
      className='flex items-center justify-center relative' 
      onMouseEnter={() => setShowButton(true)} 
      onMouseLeave={() => setShowButton(false)}
    >
      <div className="border border-gray-500 relative">
        <img 
          className="p-2" 
          style={{ width: "10vw", height: "10vw", objectFit: "contain" }} 
          src={image} 
          alt="categories image" 
        />
        <h2 className='text-sm'><Rating /></h2>
        {showButton && (
          <div className='absolute bg-orange-500 bottom-2 w-full flex items-center justify-center'>
            <button>Add To Cart</button>
          </div>
        )}
        <h2 className="text-center text-sm md:text-xl">{name}</h2>
        <h2 className="text-center text-sm md:text-xl">
          <span className='text-red-500'>Price:</span> KD {price}
        </h2>
      </div>
    </div>
  );
}

export default Productcard;
