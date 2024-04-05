import React from 'react';
import { useNavigate } from 'react-router-dom';

const Noitemsfound = () => {
    const navigate = useNavigate();

    const homeHandler = () => {
        navigate("/");
        console.log("Navigated to the home page");
    };

    return (
        <div className='flex flex-col w-[100%] gap-2 px-2 py-4 justify-center items-center'>
            <img src='/search-interface-symbol_54481 1.png' />
            <h2 className='text-[1.5rem] font-poppins'> NO ITEMS FOUND</h2>
            <button className='border rounded-md bg-customOrange px-8 py-2 text-white' onClick={homeHandler}>Back To Home</button>
        </div>
    );
};

export default Noitemsfound;