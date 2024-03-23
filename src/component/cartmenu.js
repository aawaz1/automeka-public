import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Cartmenu = ({handleIsOpen}) => {
   const  [cartHaveItem ,setCartIsOpen] = useState(false);
    const handleCart = () => {
        setCartIsOpen(!cartHaveItem)
    }
  return (
    <div>
        {
            cartHaveItem ? ("g") : (
                <div className='p-2'>
                    <div className='flex mb-8 justify-between items-center gap-3 '><h2 className='text-[1rem]'>Shopping Cart</h2> <div onClick={handleIsOpen}><RxCross2 className='font-bold'/></div></div>
                    <div className='flex justify-center'><IoCartOutline style={{fontSize: "3rem"}}/></div>
                    <div className='text-sm text-gray-400 text-center mb-4'>Your Cart is Currently Empty</div>
                    <div className='flex justify-center'><button className='text-white rounded-md bg-orange-500 p-2 flex justify-center items-center max-w-[10rem] w-[100%]'>Buy Now</button></div>
                </div>
            )
        }
    </div>
  )
}

export default Cartmenu