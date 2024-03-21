import React from 'react'
import Slider from 'react-slick'

const Producttitle = ({title}) => {
  return (
    <div className='p-12 f items-center text-center justify-center font-bold font'>
        <h1 className='text-2xl text-center'>{title}</h1>
       
    </div>
  )
}

export default Producttitle;