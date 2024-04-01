import Dropdown from './items/dropdown.js'
import React, { useState } from 'react'
import './categories.css';
import { Menu, X } from 'lucide-react';
import { RxDividerVertical } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import SearchBox from './items/SearchBox.js';
import { GrCart } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { RiAccountBoxLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import './top.css'

import Container from './Container.js';
import useCategory from './customHooks/useCategory.js';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/auth-slice.js';

const Navbar = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.auth);


  const { cartItems } = useSelector(state => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const logoutHandler = async () => {
    try {

      dispatch(logout());


      // navigate('/login-register');
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const categories = useCategory();
  const [issOpen, setIssOpen] = useState(false);
  const handleIsOpen = () => {
    console.log(`is open ${issOpen}`)
    setIssOpen(!issOpen)
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    console.log("object")
    setIsOpen(!isOpen);
  }

  return (
    <div style={{ zIndex: 999999 }} className='sticky top-0  bg-white py-2'>
      <div className="container flex justify-between items-center">
        <div onClick={() => navigate('/')} className=""><img className=' w-[3rem] md:w-[5rem]' src='/auto_meka_logo_small.webp' /></div>
        <SearchBox />
        <div className="flex">
          <button className=" mr-1 md:mr-4" ><div className="flex items-center text-black relative group cursor-pointer">
            <div className="   items-center flex text-black"><RiAccountBoxLine style={{ fontSize: "1.2rem" }} /></div>

            <div className='absolute  left-[-62px] top-[20px]  bg-gray-800 text-white rounded-md shadow-lg hidden group-hover:block w-[10vw]'>
              <ul className='gap-2 pt-2'>
                {!userInfo && (<Link style={{ transition: "ease-out", textDecoration: "none", color: "white" }} to='/login'>Login</Link>)}
                {userInfo && (<> <Link style={{ transition: "ease-out", textDecoration: "none", color: "white" }} className='text' to={'/myaccount'}><li >My Account</li></Link>
                  <Link onClick={logoutHandler} to='/login' style={{ transition: "ease-out", textDecoration: "none", color: "white" }} className='text' ><li >LogOut</li></Link> </>)}


              </ul>
            </div>
          </div></button>
          <div className='relative mr-2 md:mr-4'> <button onClick={handleIsOpen} className=""><GrCart style={{ fontSize: "1.2rem" }} /></button>
            <div className='absolute top-[-1rem] right-[-0.9rem] bg-orange-400 w-[1.2rem] rounded-full  flex justify-center items-center'><span>{cartItems?.length > 0 && cartItems?.length}</span></div></div>
          <div className='mr-1 md:mr-4 relative'><button className=" font-semibold " onClick={() => navigate('/wishlist')}><FaRegHeart className="" style={{ fontSize: "1.2rem" }} /></button><div className='absolute top-[-1rem] right-[-0.9rem] bg-orange-400 w-[1.2rem] rounded-full  flex justify-center items-center'><span> {wishlistItems?.length > 0 && wishlistItems?.length}</span></div></div>
        </div>
      </div>

      <Container isOpen={issOpen} handleIsOpen={handleIsOpen} />
      <div className='  z-55 bg-slate-700 " text-orange-500 '>
        <div style={{ minHeight: "50px" }} className=' container hidden pl-30 md:flex justify-between '>
          <div className='flex'>

            {/* <div className=" h-100 flex items-center hover:text-white cursor-pointer text-white bg-orange-500">
                <span  >All Categories</span>
                <svg className="w-4 h-4 ml-1  transform group-hover:-rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div> */}
            <div className="flex items-center gap-3.5 self-stretch px-9 py-2 bg-orange-500 md:px-5 relative group cursor-pointer">
              <div className="grow text-white  items-center flex ">ALL CATEGORIES</div>
              <div><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d28a7a73318630afda323d1892b7d2f92fbf97fd19b53c38b1172b304d413cea?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
                className="shrink-0 self-start w-6 aspect-square"
              /></div>
              <div className='absolute  top-full left-0  bg-gray-800 text-white rounded-md shadow-lg hidden group-hover:block w-[100%]'>
                <ul className='gap-2 pt-2'>
                  {categories.map(category => {
                    return (<Link style={{ textDecoration: "none", color: "white" }} to={`/category?category=${category.name}`}><li className=' px-4 py-1'>{category.name}</li></Link>

                    )
                  })}



                </ul>
              </div>
            </div>


            <div className='h-100 flex items-center  px-6 py-2 hover:text-white cursor-pointer' onClick={() => navigate('/')}>Home</div>
            <div className='h-100 flex items-center px-2 py-2 hover:text-white cursor-pointer' onClick={() => navigate('/about')}>About Us</div>

          </div>
          <div className='flex items-center'>
            {/* <div style={{ position: "relative", alignItems: "center", textAlign: "center" }} className="  rounded-full border-orange-500 px-2 py-1 h-98 border border-solid text-white     bg-slate-700 flex items-center justify-center text-[0.8rem]" > USD<RxDividerVertical style={{ fontSize: "1.6rem" }} />
            English
          </div> */}
          </div>

        </div>


        <div className='md:hidden flex justify-start items-center p-2'>
          <button onClick={toggleNavbar}>
            {
              isOpen ? <X /> : <Menu />
            }


          </button></div>
      </div>
      {
        isOpen && (
          <div className='flex basis-full  items-center g-8 pl-[0.2rem]'>
            <div className='flex flex-col gap-1 pt-[1rem] pl-[0.7rem] shadow-md hover:shadow-lg border-full'>
              <div className=' mr-4 relative group'>
                <div className="flex items-center hover:text-white cursor-pointer text-white bg-orange-500 px-1 py-1 rounded-md">
                  <span className=''>All Categories</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:-rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <div className='absolute top-full left-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 w-40'>
                  <ul>
                    {categories.map(category => {
                      return (<Link style={{ textDecoration: "none", color: "white" }} to={`/category?category=${category.name}`}><li className=' px-4 py-1'>{category.name}</li></Link>

                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className='mr-4'>Home</div>
              <div>About Us</div>

            </div></div>
        )
      }
    </div>)
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
