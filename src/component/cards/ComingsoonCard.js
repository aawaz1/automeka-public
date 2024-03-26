import React from 'react'
import { IMAGE_URL } from '../../constants'

const ComingsoonCard = ({name , image}) => {
  return (
    
        <div className='flex items-center justify-center '><div className=" w-[80%] flex  pl-4 pt-1 pb-1 bg-white"><img className=" p-2 " style={{ width: "4rem" ,height:"4rem" }} src={IMAGE_URL + image} alt="categories image" />

        <h2 className="pl-4 text-sm">{name}</h2></div></div>

    
  )
}

export default ComingsoonCard