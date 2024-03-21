import Dropdown from './component/dropdown.js'
import React, { useState } from 'react'
import './categories.css';
import { Menu ,X } from 'lucide-react';
import { RxDividerVertical } from "react-icons/rx";

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);  }
 
  return (
    <>
    <div className=' bg-slate-700  text-orange-500 p-2'>
      <div className='hidden pl-30 md:flex justify-around'>
      <div className='flex'>
        <div className=' mr-4 relative group'>
          <div className="flex items-center hover:text-white cursor-pointer text-white bg-orange-500">
            <span>All Categories</span>
            <svg className="w-4 h-4 ml-1 transform group-hover:-rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <div className='absolute top-full left-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 w-40'>
            <ul>
              <li className='py-1'>Category 1</li>
              <li className='py-1'>Category 2</li>
              <li className='py-1'>Category 3</li>
            </ul>
          </div>
        </div>
        <div className='mr-4'>Home</div>
        <div>About Us</div>
      
      </div>
      <div class="rounded-full p-1 border w-100 text-white border-orange-600  bg-slate-700 flex items-center justify-center"> USD<RxDividerVertical style={{ fontSize: "1.6rem" }} />
  dollar
</div>

      </div>
      
      
      <div className='md:hidden'>
      <button onClick={toggleNavbar}>
        {
          isOpen ? <X/> : <Menu/>
        }


      </button>
      </div>
    </div>
    {
      isOpen && (
        <div className='flex basis-full  items-start'>
        <div className='flex flex-col'>
        <div className=' mr-4 relative group'>
          <div className="flex items-center hover:text-white cursor-pointer text-white bg-orange-500">
            <span>All Categories</span>
            <svg className="w-4 h-4 ml-1 transform group-hover:-rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <div className='absolute top-full left-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 w-40'>
            <ul>
              <li className='py-1'>Category 1</li>
              <li className='py-1'>Category 2</li>
              <li className='py-1'>Category 3</li>
            </ul>
          </div>
        </div>
        <div className='mr-4'>Home</div>
        <div>About Us</div>
      
      </div></div>
      )
    }
  </>)
}

export default Navbar
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import Logo from "../../assets/Logo.png";
// // import Button from "../Button";
// import NavLinks from "./NavLinks";
// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <nav className="bg-white">
//       <div className="flex items-center font-medium justify-around">
//         <div className="z-50 p-5 md:w-auto w-full flex justify-between">
//           <img src={''} alt="logo" className="md:cursor-pointer h-9" />
//           <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
//             111
//           </div>
//         </div>
//         <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
//           <li>
//             home
//             {/* <Link to="/" className="py-7 px-3 inline-block">
//               Home
//             </Link> */}
//           </li>
//           <NavLinks />
//         </ul>
//         <div className="md:block hidden">
//           {/* <Button /> */}
//         </div>
//         {/* Mobile nav */}
//         <ul
//           className={`
//         md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
//         duration-500 ${open ? "left-0" : "left-[-100%]"}
//         `}
//         >
//           <li>
//             <Link to="/" className="py-7 px-3 inline-block">
//               Home
//             </Link>
//           </li>
//           <NavLinks />
//           <div className="py-5">
//             {/* <Button /> */}
//           </div>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
