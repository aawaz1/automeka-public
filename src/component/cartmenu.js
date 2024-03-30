import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Cartmenu = ({ handleIsOpen }) => {
    const navigate = useNavigate();
    const [qty ,setQty] = useState(1);
    const handleIncrement = () => {
        // if (qty < product?.on_stock) {
        //   setQty(qty + 1);
        // } else if (qty < availability) {
        //   setQty(qty + 1);
        // }
      };
    
    
      const handleDecrement = () => {
        if (qty > 1) {
          setQty(qty - 1);
        }
      };
    const [cartHaveItem, setCartIsOpen] = useState(null);
    const handleCart = () => {
        setCartIsOpen(!cartHaveItem)
    }
    return (
        <div>
            {
                cartHaveItem === null ? (<div className='p-2'>
                <div className='flex mb-8 justify-between items-center gap-3 '><h2 className='text-[1rem]'>Shopping Cart</h2> <div onClick={handleIsOpen}><RxCross2 className='font-bold' /></div>
                
                </div>
                <hr className='border border-gray-500'/>
                <div className='flex gap-2 justify-center p-2'>
                    <div><img src='' alt='cartimage'/></div>
                    <div className='p-2'>
                        <h2 className='text-[1rem] font-poppins'>10w40 United Oil</h2>
                        <h2 className='text-[0.9rem] text-green-400 font-poppins'>Price : 0.625 KD</h2>
                        <div className='flex gap-1'> 
                           <div className='flex flex-row'>
                             <div className='rounded-l-lg border border-gray-500 px-2 bg-gray-100' onClick={handleDecrement}>-</div>
                                        <div className='px-2 border border-gray-500'>{qty}</div>
                                        <div className='rounded-r-lg border border-gray-500 bg-gray-100 px-2' onClick={handleIncrement}>+</div></div>
                            <button className='text-orange-400'>Remove</button>
                            
                            
                        </div>
                    </div>
                </div>
                <div>
                    <hr className='border border-gray-500'/>
                    <div className='flex justify-around gap-3'>
                        <div>
                            <h2 className='text-[1.0rem] text-gray-400'>Price :</h2>
                            <h2 className='text-[1.0rem] text-gray-400'>Sub Total :</h2>
                        </div>
                        <div>
                            <h6>4nf3</h6>
                            <h6>4nf3</h6>
                        </div>
                    </div>
                    <hr className='border border-gray-500'/>
                    <div className='flex justify-center py-4 gap-3'>
                        <button className='bg-orange-400 text-white p-2 px-4 rounded-md'>Checkout</button>
                        <button className='bg-orange-400 text-white p-2 px-4 rounded-md'>Go To Cart</button>
                        
                    </div>
                </div>
                
            </div>) : (
                    <div className='p-2'>
                        <div className='flex mb-8 justify-between items-center gap-3 '><h2 className='text-[1rem]'>Shopping Cart</h2> <div onClick={handleIsOpen}><RxCross2 className='font-bold' /></div></div>
                        <div className='flex justify-center'><IoCartOutline style={{ fontSize: "3rem" }} /></div>
                        <div className='text-sm text-gray-400 text-center mb-4'>Your Cart is Currently Empty</div>
                        <div className='flex justify-center'><button className='text-white rounded-md bg-orange-500 p-2 flex justify-center items-center max-w-[10rem] w-[100%]' onClick={handleIsOpen}>Buy Now</button></div>
                    </div>
                )
            }
        </div>
    )
}

export default Cartmenu