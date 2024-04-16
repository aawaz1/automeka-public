import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import 'react-international-phone/style.css';
import { useRegisterMutation } from '../store/slices/usersApiSlice.js'
import { setCredentials } from "../store/slices/auth-slice.js";
import { useDispatch } from 'react-redux';
import 'react-phone-input-2/lib/style.css'
import cogoToast from 'cogo-toast';

const Registerform = () => {
    const [register, { isLoading }] = useRegisterMutation();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { search } = useLocation();
    const [country, setCountry] = useState("kw");


    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/'
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        countryCode: "",
        password: "",
        email: "",

    });

    const [errors, setErrors] = useState({});

    const handleChange = (e, inputType) => {
        const { name, value } = e.target;
        if (inputType === "phone") {
            const formattedPhoneNumber = value.replace(/\D/g, ""); // Remove non-numeric characters
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
        setShowPassword(true);
    };
    // const handlePhoneChange = (value, countryData) => {
    //     handleChange({ target: { value, name: "phone" } });
    //     const countryCodeNumber = countryData?.dialCode;
    //     const formattedPhoneNumber = `+${countryCodeNumber}${value}`;
    //     setFormData(prevFormData => ({
    //         ...prevFormData,
    //         phone: formattedPhoneNumber
    //     }));
    // };
    let slicedNumber = (formData?.phone).slice(formData?.countryCode?.length || 0);
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData.name.trim()) {
            validationErrors.name = "Name is required";
        }
        if (!formData.phone.trim()) {
            validationErrors.phone = "Phone is required";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Invalid email address";
        }

        if (!formData.password.trim()) {
            validationErrors.password = "Password is required";
        } else if (formData.password?.length < 6) {
            validationErrors.password = "Password must be at least 6 characters long";
        }

       

        setErrors(validationErrors);
        try {
            const res = await register({ ...formData, phone: formData?.countryCode + "-" + slicedNumber }).unwrap();
            console.log(formData)
            dispatch(setCredentials({ ...res }));
            navigate('/login');
            setFormData({
                name: "",
                phone: "",
                password: "",
                email: "",
                confirmPassword: ""

            });
            cogoToast.success("Account Created Successfully", { position: "bottom-left" });
        } catch (err) {
            console.log(err);
            cogoToast.error(err?.data?.message, { position: "bottom-left" });




        }





    }
    return (
        <div className='flex flex-col justify-center items-center p-4 border border-red-500 border-solid'>
            <h2 className='font-semibold text-[1.5rem] font-poppins text-orange-500'>Register</h2>
            <form onSubmit={submitHandler}>
                <div className='grid grid-cols-1 md:grid-cols-2  w-[20rem] gap-4 p-4 md:px-6 md:py-6 justify-center border rounded-md border-gray-400 md:w-[40rem]'>
                    <div className="">
                        <input className="bg-whitesmoke rounded-md p-2 w-[100%] md:w-[100%]" placeholder="Enter your Name" type="text" name="name" value={formData.name} onChange={handleChange} />
                        <div className='text-red-500'>{errors.name && <span>{errors.name}</span>}</div>
                    </div>
                    <div className="">
                        <input className="bg-whitesmoke w-[100%] md:w-[100%]rounded-md p-2 " placeholder="Enter your Email" type="text" name="email" value={formData.email} onChange={handleChange} />
                        <div className='text-red-500'>  {errors.email && <span>{errors.email}</span>}</div>
                    </div>
                    <div className="">

                        <PhoneInput
                            country={country}
                            placeholder="Enter Your Phone"
                            value={formData.phone}
                            inputStyle={{ width: "100%" }}
                            onChange={(value, countryData) => {
                                const countryCodeNumber = countryData?.dialCode;
                                handleChange({ target: { value, name: "phone" } });
                                handleChange({ target: { value: countryCodeNumber, name: "countryCode" } })
                                console.log("Country Code Number:", countryCodeNumber);

                            }}
                            countryCodeEditable={false}
                        />

                        {/* <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " placeholder="Enter your Phone" type="text" name="phone" value={formData.phone} onChange={handleChange} /> */}
                        <div className='text-red-500'>{errors.phone && <span>{errors.phone}</span>}</div>
                    </div>
                    <div className="">
                        <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " placeholder="Enter your Password" type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} />
                        <div className='text-red-500'>{errors.password && <span>{errors.password}</span>}</div>
                    </div>
                    {/* <div className="p-4">
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " placeholder="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    <div className='text-red-500'>{errors.confirmPassword && <span>{errors.confirmPassword}</span>}</div>
                </div>
                <div></div> */}
                    <div className=" items-start">
                        <button className='px-2 py-1 bg-slate-300  hover:customOrange hover:text-white border rounded-md font-poppins font-medium' type='submit'>Submit</button>
                    </div>
                    <div></div>
                    <div><h4 className='text-sm font-poppins '>Already Have An Account ? <Link to='/login'>Login</Link></h4></div>
                </div>
            </form>
        </div>
    );
}
export default Registerform;
