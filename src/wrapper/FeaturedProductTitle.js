import React from 'react'
import { useNavigate } from 'react-router-dom';


const FeaturedProducttitle = () => {
  const navigate = useNavigate();
  return (
    <div className='p-12  top-0 items-center text-center justify-center font-bold font'>
      <h1 className='text-2xl relative'>
        Our Products
      
      </h1>

    </div>
  )
}

export default FeaturedProducttitle;