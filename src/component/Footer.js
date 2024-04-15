import React, { useEffect, useState } from 'react'
import Itemcontainer from './items/Itemcontainer'
import ScrollToTop from './Scrolltotop';
import cogoToast from 'cogo-toast';
import axios from 'axios';

const Footer = () => {
  const [email ,setEmail] = useState("");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const subscribeHandler = async (e) => {
    try {
      const { data } = await axios.post(
        `https://restapi.ansoftt.com:4321/v1/subscribe/`,
        {
          email : email,
         
        }
      );
  
      cogoToast.success("Form Submitted Successfully")
      
    } catch (error) {
      cogoToast.error("Already Subscribed", { position: "bottom-left" });
      
    }

  }
  
  return (
    <footer className='bg-gray-700 text-white relative'>
      <div className='h-50 md:flex md:justify-around md:items-center sm:px-12 px-4 bg-customOrange py-7'>
        <h1 className='lg:text-3xl text-xl md:mb-0 mb-6 lg:leadiing-normal font-semibold md:w-2/5'>Subscribe For Latest Products</h1>
        <div>
          <input type='text' placeholder='Enter your E-mail'  value={email} onChange= {(e) => setEmail(e.target.value)}className='text-gray-400 sm:w-72 w-full   sm:mr-5 mr-1 lg:mb-0 py-2.5 rounded px-2 focus:outline-none' />
          <button className='bg-gray-600 hover:bg-gray-400 px-5 py-2.5 font-poppins rounded-md text-white ' onClick={subscribeHandler}>Subscribe</button>
        </div>

      </div>
      {/* <div className='border absolute bottom-0 w-7  border-purple-700 bg-blue-400'><ScrollToTop/></div> */}

      <Itemcontainer />

    </footer>
  )
}

export default Footer