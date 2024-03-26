import React from 'react'

const Categorycard = ({image,title}) => {
  return (
    
        <div className="flex flex-col justify-center items-center"><img className="border p-2 rounded-full" style={{ width: "7rem" , height :"7rem" }} src={"https://restapi.ansoftt.com:4321" +  image} alt="categories image" />
      
<h2 className="pl-4 text-center text-xl">{title}</h2></div>


    
  )
}

export default Categorycard