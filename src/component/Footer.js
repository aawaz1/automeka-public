import React from 'react'
import Itemcontainer from './items/Itemcontainer'
import ScrollToTop from './Scrolltotop'

const Footer = () => {
  return (
    <footer className='bg-gray-700 text-white relative'>
      <div className='h-50 md:flex md:justify-around md:items-center sm:px-12 px-4 bg-customOrange py-7'>
        <h1 className='lg:text-3xl text-xl md:mb-0 mb-6 lg:leadiing-normal font-semibold md:w-2/5'>Subscribe Our Newsletter</h1>
        <div>
          <input type='text' placeholder='Enter your E-mail' className='text-gray-400 sm:w-72 w-full  sm:mr-5 mr-1 lg:mb-0 py-2.5 rounded px-2 focus:outline-none' />
          <button className='bg-gray-600 hover:bg-gray-400 px-5 py-2.5 font-poppins rounded-md text-white '>Subscribe</button>
        </div>

      </div>
      {/* <div className='border absolute bottom-0 w-7  border-purple-700 bg-blue-400'><ScrollToTop/></div> */}

      <Itemcontainer />

    </footer>
  )
}

export default Footer