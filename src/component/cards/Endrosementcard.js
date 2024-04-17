import React from 'react'

const Endrosementcard = ({ image, name }) => {
  return (
    <div className='flex justify-center items-center' style={{}}>
      <img style={{ width: "15rem" }} src={image} />
      {/* <h2>{name}</h2> */}
    </div>
  )
}

export default Endrosementcard