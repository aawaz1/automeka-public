import React from 'react'

const Productcard = ({ image, price, name }) => {
  return (

    <div className='flex items-center justify-center'>
      <div className="flex flex-col justify-center items-center border border-gray-500 "><img className=" p-2 " style={{ width: "10vw", height: "10vw", objectFit: "contain" }} src={image} alt="categories image" />

        <h2 className=" text-center text-xl">{name}</h2>
        <h2 className=" text-center text-2xl"><span className='text-red-500'>Price:</span> KD {price}</h2></div>
    </div>


  )
}

export default Productcard