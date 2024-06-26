import axios from 'axios';
import cogoToast from 'cogo-toast';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EnterOtp = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const emailId = JSON.parse(localStorage.getItem('email'));
    const submitHandler = async (e) => {
        try {


            e.preventDefault();
            const response = await axios.post(`https://restapi.ansoftt.com:4321/v1/auth/verifyotp`, { otp: email, email: emailId });
            cogoToast.success("OTP Submitted Successfully", { position: "bottom-left" });
            navigate('/resetpassword')

        } catch (err) {
            console.log(err?.data)
            cogoToast.error("Please Enter The Correct OTP", { position: "bottom-left" });
        }
    };
    return (
        <div className='flex flex-col justify-center items-center mt-4  p-4 gap-4'>
            <h4 className='max-sm:text-[1rem] text-[1.rem] font-poppins'>Enter One Time Password To Verify</h4>
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

export default EnterOtp