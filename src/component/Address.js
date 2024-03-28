import React from 'react'

const Address = () => {
    return (
        <div className='container flex flex-col items-center justify-start py-2'>
            <h2 className='  font-semibold text-[1.2rem]'>Addresses</h2>
            <div className="justify-center items-center text-center w-[12rem] mt-4 px-4 py-2 text-[0.9rem] bg-orange-400 border-solid shadow-sm rounded-full text-white">
                <button> Add New Address{" "}</button>
            </div>
            <h2 className='  font-bold text-[1.0rem] mb-3 py-4'>Default</h2>
            <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'>Default</h2>
            <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'>Default</h2>
            <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'>Default</h2>
            <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'>Default</h2>
            <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'>Default</h2>


            <div><h2 className='  font-semibold font-poppins text-orange-400 text-[0.9rem] py-4'>View Addresses</h2></div>

            <div className="p-6  items-start">
                <button className='mr-6 px-12 py-2  text-gray-500 hover:text-black hover:bg-orange-400 border rounded-full font-poppins font-medium' type='submit'>Edit</button>
                <button className='px-8 py-2  text-gray-500 hover:text-black hover:bg-orange-400  border rounded-full font-poppins font-medium' type='submit'>Delete</button>
            </div>


        </div>
    )
}

export default Address