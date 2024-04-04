import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col w-[100%] gap-2 px-2 py-4 justify-center items-center'>
            <img src='/20906890_6384606 1.png' style={{ width: "20rem" }} />
            <h2 className='text-[1.5rem] font-poppins'>OPPS! PAGE NOT FOUND</h2>
            <button className='border rounded-md bg-customOrange px-8 py-2 text-white' onClick={() => navigate('/')}>Back To Home</button>
        </div>
    )
}

export default Notfound