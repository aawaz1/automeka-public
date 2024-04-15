import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import useScrollTop from './customHooks/useScrollToTop';

const VerifyOtp = () => {
    const [email, setEmail] = useState("");
    useScrollTop()
    let id = JSON.parse(localStorage.getItem("id") || null);
    const navigate = useNavigate();
    const submitHandler = async (e) => {
      try {
        e.preventDefault();
        const { data } = await axios.post(`https://restapi.ansoftt.com:4321/v1/auth/verifyotp/${id}`, { otp: email });
       
        cogoToast.success("OTP Submitted Successfully")
        
      } catch (error) {
        cogoToast.error("Please Submit The OTP", { position: "bottom-left" });
        
      }

    }
    return (
        <div className='flex flex-col justify-center items-center mt-4  p-4 gap-4'>
            <h4>Please Enter The One Time Password</h4>
            <form className=' gap-3'>
                <div className='max-w-[30rem] flex flex-col gap-3 p-4 md:px-6 md:py-4 w-[20rem] justify-center items-start border rounded-md border-gray-400 md:w-[40rem]'>

                    <div className='w-[100%]'>
                        <input className="bg-whitesmoke  rounded-md p-2 w-[100%]" type="text" name='email' placeholder="Enter The OTP"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                    </div>







                    <div className=" items-start">
                        <button onClick={submitHandler} className='px-2 py-1 bg-slate-300  hover:bg-orange-500 hover:text-white border rounded-md font-poppins font-medium' type='submit'>Submit</button>
                    </div>


                </div>

            </form>
        </div>
    )
}

export default VerifyOtp