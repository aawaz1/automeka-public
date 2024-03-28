import React from 'react'

const AddAddress = () => {
    return (
        <div className='container p-4'>
            <h2 className='font-semibold text-lg font-poppins'>Add Address</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 p-2 w-[20rem] justify-center border rounded-md border-gray-400 md:w-[60rem]'>
                <div className="p-6">
                    <label className='text-[1rem] font-semiobold font-poppins'>Name</label>
                    <input className="bg-whitesmoke rounded-md p-2 w-[100%] md:w-[100%]" type="text" name="email" />

                </div>
                <div className="p-4">
                    <label className='text-[1rem] font-semiobold font-poppins'>Email</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%]rounded-md p-2 " type="text" name="name" />

                </div>
                <div className="p-4">
                    <label className='text-[1rem] font-semiobold font-poppins'>Address 1</label>

                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="phone" />

                </div>
                <div className="p-4">
                    <label className='text-[1rem] font-semiobold font-poppins'>Phone</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="password" name="password" />

                </div>
                <div className="p-4">
                    <label className='text-[1rem] font-semiobold font-poppins'>Country</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="password" name="confirmPassword" />

                </div>
                <div className="p-4">
                    <label className='text-[1rem] font-semiobold font-poppins'>State</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="password" name="confirmPassword" />

                </div>
                <div className="p-4">
                    <label className='text-[1rem] font-semiobold font-poppins'>Pin-Code</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="password" name="confirmPassword" />

                </div>
                <div className="p-4">
                    <label className='text-[1rem] font-semiobold font-poppins'>Address 1</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="password" name="confirmPassword" />

                </div>

                <div className="p-6  items-start">
                    <button className='mr-6 px-12 py-2 bg-gray-100  hover:bg-orange-500 hover:text-white border rounded-md font-poppins font-medium' type='submit'>Cancel</button>
                    <button className='px-12 py-2 bg-orange-400  hover:bg-orange-500 text-white hover:text-black border rounded-md font-poppins font-medium' type='submit'>Save</button>
                </div>
                <div></div>

            </div>


        </div>
    )
}

export default AddAddress