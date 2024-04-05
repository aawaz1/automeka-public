import React from 'react'
import { IMAGE_URL } from '../../constants'

const ComingsoonCard = ({ product }) => {
  return (

    <div className='flex items-center justify-center '>
      <div className=" w-[80%] flex  pl-4 pt-1 pb-1 bg-white">
        <img className="p-2" style={{ width: "8rem", height: "8rem" }} src={IMAGE_URL + product?.image_list[0]} alt="categories image" />

      <h2 className="flex items-center pl-4 text-sm">{product?.name}</h2>
      </div>
      </div>


  )
}

export default ComingsoonCard