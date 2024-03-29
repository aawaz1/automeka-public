import React, { useState } from 'react';

import { MdShoppingCart } from "react-icons/md";
import { IMAGE_URL } from '../../constants';
import { Link } from 'react-router-dom';
import CommonRating from '../Rating';

const Productcard = ({ product }) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div
      className='flex items-center justify-center relative'
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <div className="border max-w-[200px] p-[1rem] border-gray-500 relative ">
       <Link to={`{product/${product._id}`}>
       <img
          className="p-2"
          style={{ width: "13rem", height: "8rem", objectFit: "contain" }}
          src={IMAGE_URL + product?.image_list[0]}
          alt="categories image"
        />
       </Link>
       <CommonRating  value={3.5}/>
        {/* <h2 className='text-sm'><Rating /></h2> */}

        <h2 className="text-center text-sm md:text-[1.1rem">{product?.name}</h2>
        {showButton ? (<>
        {product.on_stock && product.on_stock > 0 ? (<div className=' p-[0.42rem] bg-orange-400 bottom-2 rounded-sm flex items-center justify-center'>{}
            <button className='text-white  flex items-center '> <MdShoppingCart className='font-sm' /> Add To Cart</button>
          </div>) : (<div className=' p-[0.42rem] bg-black bottom-2 rounded-sm flex items-center justify-center'>{}
            <button className='text-white  flex items-center '> Out Of Stock</button>
          </div>)}
        </>
          
        ) : (<h2 className=" p-[0.3rem] text-center text-sm md:text-[1.1rem]">
          <span className='text-red-500 text-sm md:text-[1.1rem] '>Price:</span> KD {product?.price}
        </h2>)}

      </div>
    </div>
  );
}

export default Productcard;
