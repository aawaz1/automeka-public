import React, { useState } from 'react';
import { Rating } from "@material-tailwind/react";
import { MdShoppingCart } from "react-icons/md";
import { IMAGE_URL } from '../../constants';

const Productcard = ({ image, price, name }) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div
      className='flex items-center justify-center relative'
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <div className="border max-w-[200px] p-[1rem] border-gray-500 relative ">
        <img
          className="p-2"
          style={{ width: "13rem", height: "8rem", objectFit: "contain" }}
          src={ IMAGE_URL + image}
          alt="categories image"
        />
        {/* <h2 className='text-sm'><Rating /></h2> */}

        <h2 className="text-center text-sm md:text-[1.1rem">{name}</h2>
        {showButton ? (
          <div className=' p-[0.42rem] bg-orange-400 bottom-2 rounded-sm flex items-center justify-center'>
            <button className='text-white  flex items-center '> <MdShoppingCart className='font-sm' /> Add To Cart</button>
          </div>
        ) : (<h2 className=" p-[0.3rem] text-center text-sm md:text-[1.1rem]">
          <span className='text-red-500 text-sm md:text-[1.1rem] '>Price:</span> KD {price}
        </h2>)}

      </div>
    </div>
  );
}

export default Productcard;
