import Dropdown from './component/dropdown.js'
import React from 'react'
import './categories.css'

const Navbar = () => {
  return (
    <div className='flex justify-around bg-slate-700 p-6 text-orange-500'>
        <div className='pl-30 flex '>
        <div  class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
        <div className='mr-4'>Home</div>
        <div>About Us</div>
        </div>
        <div>usd-dollar</div>
    </div>
  )
}

export default Navbar