import React from 'react'
import Items from './Items'

const Itemcontainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4'><Items/>
    <Items/>
    <Items/><Items/>

    </div>
  )
}

export default Itemcontainer