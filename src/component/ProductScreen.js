import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";

const ProductScreen = () => {
    const [currentImage, setCurrentImage] = useState('/Group 42818.png');

    const handleMouseEnter = (image) => {
        setCurrentImage(image);
    };
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 container gap-4 p-2'>
                <div className='p-2'>
                    <div>
                        <img src={currentImage} alt="main" height={'20%'} width={'100%'} />
                    </div>
                    <div className='flex p-2 gap-2.5'>
                        <div><img src='/Group 42818 (1).png' /></div>
                        <div><img src='/Group 42818 (1).png' /></div>
                        <div><img src='/Group 42818 (1).png' /></div>

                    </div>


                </div>
                <div className='p-2'>
                    <h2 className='text-[1.2rem]'>Ai Smart Car Play</h2>
                    <h2 className='text-[1.0rem] text-green-400'>Price : 0.625 KD</h2>
                    <img src='/Group 42726.png' style={{ width: "7rem" }} />
                    <div className='flex py-2'>
                        <div className='rounded-l-lg border border-gray-500 px-2 bg-gray-100'>-</div>
                        <div className='px-2 border border-gray-500'>1</div>
                        <div className='rounded-r-lg border border-gray-500 bg-gray-100 px-2'>+</div>
                    </div>
                    <h2 className='text-[1.0rem] font-semibold py-2'>Select Variant :</h2>
                    <div className='flex gap-2'>
                        <div class="flex  items-center">
                            <input type="radio" id="radio1" name="radios" class="hidden" />
                            <label for="radio1" class="cursor-pointer relative">
                                <div class="w-4 h-4 text-sm border border-gray-400 rounded-full mr-2"></div>
                                red
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="radio1" name="radios" class="hidden" />
                            <label for="radio1" class="cursor-pointer relative">
                                <div class="w-4 h-4 text-sm border border-gray-400 rounded-full mr-2"></div>
                                blue
                            </label>
                        </div>
                    </div>
                    <div className='flex  gap-4 items-center'>
                       
                            <button style={{ border: "2px solid orange" }} className=' rounded-md    bg-white px-2 py-1 text-orange-400 font-medium font-poppins   '> Add to Cart</button>
                       
                       
                            <button className='  bg-orange-400 px-4 py-1 text-white font-medium font-poppins rounded-md'> Buy Now</button>
                        
                        <FaRegHeart/>
                    </div>
                    <div className='flex items-center pt-4 py-2 gap-2'>
                        <h2 className='text-[1rem] '>Country of Origin :</h2>
                        <h4 className='text-[1rem]'>China</h4>
                    </div>
                    <div className='flex items-center py-2 gap-2'>
                        <h2 className='text-[0.9rem] '>Port Number :</h2>
                        <h4 className='text-[0.9rem]'>AM20382950309BD</h4>
                    </div>
                    {/* <div className='flex items-center py-2 gap-2'>
                        <h2 className='text-[1rem] '>Country of Origin :</h2>
                        <h4 className='text-[1rem]'>China</h4>
                    </div> */}
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default ProductScreen