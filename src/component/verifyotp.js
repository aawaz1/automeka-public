import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useHistory, useLocation } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import useScrollTop from './customHooks/useScrollToTop';
import { useSelector } from 'react-redux';

const VerifyOtp = () => {
    const cart = useSelector((state) => state.cart);
    useScrollTop()
  
    const { cartItems , route } = cart;


    const [previousRoute, setPreviousRoute] = useState('');
    const location = useLocation();

    useEffect(() => {
        // Store the previous route whenever the location changes
        setPreviousRoute(location.pathname);
    }, [location]);

    console.log(previousRoute)

    const [otp, setEmail] = useState("");
    useScrollTop()
    let id = JSON.parse(localStorage.getItem("id") || null);
    let userInfo = JSON.parse(localStorage.getItem("userInfo") || null);
    console.log(userInfo);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1); // This will navigate back one step in the history stack
    };
    const submitHandler = async (e) => {
        try {
            e.preventDefault();
            const { data } = await axios.post(`https://restapi.ansoftt.com:4321/v1/auth/verifyotp`, { otp: otp, email: userInfo?.data?.auth?.email || "email" });

            cogoToast.success("OTP Verified Successfully");
            if (route === "/checkout"){
                goBack()
            } else {
                navigate('/')
            }



        } catch (error) {
            cogoToast.error("Please Submit The OTP", { position: "bottom-left" });

        }

    }
    return (
        <div className='flex flex-col justify-center items-center mt-4  p-4 gap-4'>
            <h4>Please Enter The OTP To Verify</h4>
            <form className=' gap-3'>
                <div className='max-w-[30rem] flex flex-col gap-3 p-4 md:px-6 md:py-4 w-[20rem] justify-center items-start border rounded-md border-gray-400 md:w-[40rem]'>

                    <div className='w-[100%]'>
                        <input className="bg-whitesmoke  rounded-md p-2 w-[100%]" type="text" name='email' placeholder="Enter The OTP"
                            value={otp}
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