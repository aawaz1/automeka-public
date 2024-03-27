import React, { useState } from 'react'
import Productcard from './cards/Productcard'
import CategoriesCard from './cards/Categoriescard'
import { FaArrowLeft } from "react-icons/fa";
import { TbSortDescending } from "react-icons/tb";
const Category = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='px-4 py-2'>
            <div onClick={() => setIsOpen(!isOpen)} className={`flex md:hidden ${isOpen ? 'justify-start' : 'justify-end'}`}>{isOpen ? <FaArrowLeft style={{fontSize :"1.0rem"}}/> : <TbSortDescending style={{fontSize :"1.5rem"}}/>}</div>
            {isOpen && (
                <div className='top-0 relative h-[100vh] w-[100vw]'> <h2 className='text-[1rem] pl-4 pt-3 font-semibold '>Select Brands</h2>
                    {/* <div className='pb-1 '>   <hr className='border border-solid border-gray-400 w-[80%] m-auto p-0' /></div> */}

                    <div className='p-2 flex flex-wrap gap-2'>
                        <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>
                        <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>
                        <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>
                        <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>
                        <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>
                        <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>
                        <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>




                    </div>
                    <div className='flex items-center px-2 '>
                        <button className=' border border-solid border-gray-400 px-4 py-1  rounded-sm active:bg-slate-600 bg-slate-300 ' >Ok</button>
                        </div></div>
            )}
            <div className='flex justify-center gap-6 items-start container p-3'>
                <div className='hidden md:block   border border-2px border-solid rounded-sm  justify-center shadow-lg border-gray-400 w-[35%]'>
                    <h2 className='text-[1rem] pl-4 pt-3 font-semibold '>Select Brands</h2>
                    <div className='pb-1'>   <hr className='border border-solid border-gray-400 w-[80%] m-auto p-0' /></div>

                    <div className='p-4 flex flex-wrap gap-2'>
                        <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>
                        <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>
                        <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>
                        <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>
                        <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>



                    </div>

                </div>
                <div className='flex flex-col sm:flex-row flex-wrap gap-3 p-0.5'>
                    <div><CategoriesCard /></div>
                    <div><CategoriesCard /></div>
                    <div><CategoriesCard /></div>
                    <div><CategoriesCard /></div>
                    <div><CategoriesCard /></div>
                    <div><CategoriesCard /></div>

                </div>
            </div>
        </div>
    )
}

export default Category