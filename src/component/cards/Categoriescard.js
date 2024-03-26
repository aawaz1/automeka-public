import React, { useState } from 'react';
import { Rating } from "@material-tailwind/react";
import { MdShoppingCart } from "react-icons/md";
import { IMAGE_URL } from '../../constants';

const CategoriesCard = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div
      className='flex items-center justify-center relative'
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <div className="border rounded-md h-[40%] max-w-[300px] p-[1rem] border-gray-500 relative ">
        <img
          className="p-2"
          style={{ width: "13rem", height: "8rem", objectFit: "contain" }}
          src='/car-engine-fuel-oil-filters-oil-canisters-isolated-against-white-background-3d-illustration - Copy.jpg'
          alt="categories image"
        />
        {/* <h2 className='text-sm'><Rating /></h2> */}

        <h2 className=" text-lg md:text-[1.1rem">Veslee Oil</h2>
        {showButton ? (
          <div className=' p-[0.42rem] bg-orange-400 bottom-2 rounded-sm flex items-center justify-center'>
            <button className='text-white  flex items-center'> <MdShoppingCart className='font-sm' /> Add To Cart</button>
          </div>
        ) : (<h2 className=" p-[0.3rem]  text-green-400 text-sm md:text-[1.1rem]">
          <span className='text-green-400 text-sm md:text-[1.1rem] '>Price:</span> KD 5.000
        </h2>)}
        

      </div>
    </div>
  );
}

export default CategoriesCard;