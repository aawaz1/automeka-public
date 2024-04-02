import React from 'react'
import { useNavigate } from 'react-router-dom'

const Categorycard = ({ image, title }) => {
  const navigate = useNavigate()
  return (

    <div className="flex flex-col justify-center items-center"><img onClick={() => navigate(`/category?category=${title}`)} className="border p-2 rounded-full" style={{ width: "7rem", height: "7rem" }} src={"https://restapi.ansoftt.com:4321" + image} alt="categories image" />

      <h2 className="pl-4 text-center text-xl">{(title).toUpperCase()}</h2></div>



  )
}

export default Categorycard