import React from 'react'

const Categorycard = ({image,title}) => {
  return (
    
        <div className="flex flex-col justify-center items-center"><img className="border p-2 rounded-full" style={{ width: "10vw" }} src={image} alt="categories image" />

<h2 className="pl-4 text-xl">{title}</h2></div>

    
  )
}

export default Categorycard