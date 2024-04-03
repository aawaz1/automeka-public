import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, decreaseQuantity, deleteFromCart } from '../store/slices/cart-slice';
import { IMAGE_URL } from '../constants.js';

const Cartmenu = ({ handleIsOpen }) => {
    const { cartItems } = useSelector((state) => state.cart);

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1);
    const handleIncrement = (cartItem) => {
        dispatch(addToCart({ product: cartItem, qty: 1 }));
    };



    const [cartHaveItem, setCartIsOpen] = useState(null);
    const handleCart = () => {
        setCartIsOpen(!cartHaveItem)
    }
    return (
        <div>
            {
                cartItems?.length > 0 ? (

                    <>
                        <div className='p-2'>
                            <div className='flex mb-8 justify-between items-center gap-3 '><h2 className='text-[1rem]'>Shopping Cart</h2> <div onClick={handleIsOpen}><RxCross2 className='font-bold' /></div>

                            </div>
                            <hr className='border border-gray-500' />
                            {
                                cartItems?.map(cartItem => {
                                    return (<div className='flex gap-2 justify-center p-2'>
                                        <div><img src={IMAGE_URL + cartItem?.image_list?.[0]} style={{ maxWidth: "4rem" }} alt='cartimage' /></div>
                                        <div className='p-2'>
                                            <h2 className='text-[1rem] font-poppins'>{cartItem.name}</h2>
                                            <h2 className='text-[0.9rem] text-green-400 font-poppins'>Price : {cartItem?.price?.toFixed(3)} KD</h2>
                                            <div className='flex gap-2'>
                                                <div className='flex flex-row'>
                                                    <div className='rounded-l-lg border border-gray-500 px-2 cursor-pointer bg-gray-100' onClick={() =>
                                                        dispatch(decreaseQuantity(cartItem))
                                                    }>-</div>
                                                    <div className='px-2 border border-gray-500'>{cartItem.quantity}</div>
                                                    <div className='rounded-r-lg border border-gray-500 bg-gray-100 px-2 cursor-pointer' onClick={() => handleIncrement(cartItem)}>+</div></div>
                                                <button className='text-customOrange text-[0.8rem]' onClick={() => dispatch(deleteFromCart(cartItem?.cartItemId))}>Remove</button>


                                            </div>
                                        </div>
                                    </div>)
                                })
                            }
                            <hr className='border border-gray-500' />


                        </div>
                        <div>

                            <div className='flex justify-around gap-3'>
                                <div>
                                    <h2 className='text-[1.0rem] text-gray-400'>Price :</h2>
                                    <h2 className='text-[1.0rem] text-gray-400'> Total Product:</h2>
                                </div>
                                <div>
                                    <h6>{cartItems.reduce(
                                        (acc, item) => acc + item?.price * item?.quantity,
                                        0
                                    ).toFixed(3)}</h6>
                                    <h6> {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</h6>
                                </div>
                            </div>
                            <hr className='border border-gray-500' />
                            <div className='flex justify-center py-4 gap-3'>
                                <button onClick={() => {
                                    navigate('/checkout');
                                    handleIsOpen();
                                }} className='bg-customOrange text-white p-2 px-4 rounded-md'>Checkout</button>
                                <button className='bg-customOrange text-white p-2 px-4 rounded-md' onClick={() => {
                                    navigate('/cart');
                                    handleIsOpen();
                                }}
                                >Go To Cart</button>

                            </div>
                        </div></>
                )

                    : (
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