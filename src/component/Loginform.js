import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Loginform = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginHandler = (e) => {
        e.preventDefault()
        console.log("form submitted");
        setEmail("");
        setPassword("")
    }
    return (
        <div className='flex flex-col justify-center items-center  p-4 border border-red-500 border-solid'>
            <h2 className='font-semibold text-[1.5rem] font-poppins text-orange-500'>Log<span className='text-black'>in</span></h2>
            <form onSubmit={loginHandler}>
                <div className=' flex flex-col p-2 w-[20rem] justify-center  border rounded-md border-gray-400 md:w-[40rem]'>
                    <div className="p-6">

                        <input className="bg-whitesmoke  rounded-md p-2 w-[15rem] md:w-[30rem]" placeholder="Enter your Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="p-4">

                        <input className="bg-whitesmoke  w-[15rem] md:w-[30rem] rounded-md p-2 " placeholder="Enter your Password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <p className='p-1 font-poppins text-[0.9rem] cursor-pointer'>Forgot Password?</p>

                    </div>

                    <div className="p-6 items-start">

                        <button className='p-2 bg-gray-100  hover:bg-orange-500 hover:text-white border rounded-md    font-poppins font-medium' type='submit'> Submit</button>
                    </div>
                    <div><h4 className='text-sm p-2'>Dont Have An Account ? <Link to='/register'>Register</Link></h4></div>

                </div>
            </form>
        </div>
    )
}

export default Loginform