import React from 'react'
import Productcard from './cards/Productcard'
import CategoriesCard from './cards/Categoriescard'

const Category = () => {
    return (
        <div className='flex justify-center gap-6 items-center container p-2'>
            <div className=' border border-2px border-solid rounded-sm  justify-center shadow-lg border-gray-400 w-[35%]'>
                <h2 className='text-[1rem] pl-4 pt-2 font-semibold '>Select Brands</h2>
                <div className='pb-1'>   <hr className='border border-solid border-gray-400 w-[80%] m-auto p-0' /></div>

                <div className='p-4 flex flex-wrap gap-2'>
                    <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>
                    <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>
                    <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>
                    <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>
                    <button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white'>Veslee</button>



                </div>
               
            </div>
            <div className='flex flex-wrap gap-3 p-3'>
               <div><CategoriesCard/></div>
               <div><CategoriesCard/></div>
               <div><CategoriesCard/></div>
               <div><CategoriesCard/></div>
               <div><CategoriesCard/></div>
               <div><CategoriesCard/></div>

            </div>
        </div>
    )
}

export default Category