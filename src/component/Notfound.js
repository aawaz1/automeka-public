import React from 'react'

const Notfound = () => {
    return (
        <div className='flex flex-col gap-2 px-2 py-8 justify-center items-center'>
            <img src='/public/'  />
            <h2 className='text-[1.5rem] font-poppins'>OPPS! PAGE NOT FOUND</h2>
            <button className='border rounded-md bg-customOrange px-8 py-2 text-white'>Back To Home</button>
        </div>
    )
}

export default Notfound