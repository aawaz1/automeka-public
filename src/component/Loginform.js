import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../store/slices/usersApiSlice.js'
import { setCredentials } from '../store/slices/auth-slice.js';
import { useDispatch } from 'react-redux';

const Loginform = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [login] = useLoginMutation()
    const [formData, setFormData] = useState({

        password: "",
        email: "",

    });
    const { search } = useLocation();


    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/'
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Invalid email address";
        }

        if (!formData.password.trim()) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters long";
        }
        setErrors(validationErrors);
        try {
            const res = await login(formData).unwrap();
            dispatch(setCredentials({ ...res, }));
            navigate(redirect);
            setFormData({

                password: "",
                email: "",


            });
        } catch (err) {
            console.error(err.message)




        }


    }
    return (
        <div className='flex flex-col justify-center items-center  p-3 border border-red-500 border-solid'>
            <h2 className='font-semibold text-[1.5rem] font-poppins text-orange-500'>Log<span className='text-black'>in</span></h2>
            <form onSubmit={loginHandler}>
                <div className='max-w-[30rem] flex flex-col gap-3 p-4 md:px-6 md:py-4 w-[20rem] justify-center items-start border rounded-md border-gray-400 md:w-[40rem]'>

                    <div className='w-[100%]'>
                        <input className="bg-whitesmoke  rounded-md p-2 w-[100%]" placeholder="Enter your Email" type="text" name='email' value={formData.email} onChange={handleChange} />
                        <div className='text-red-500'>{errors.email && <span>{errors.email}</span>}</div>
                    </div>



                    <div className='w-[100%]'> <input className="bg-whitesmoke  w-[100%] rounded-md p-2 " placeholder="Enter your Password" name='password' type="password" value={formData.password} onChange={handleChange} />
                        <div className='text-red-500'>{errors.password && <span>{errors.password}</span>}</div>
                        <p className='p-1 font-poppins text-[0.9rem] cursor-pointer'>Forgot Password?</p></div>



                        <div className=" items-start">
                        <button className='px-2 py-1 bg-slate-300  hover:bg-orange-500 hover:text-white border rounded-md font-poppins font-medium' type='submit'>Submit</button>
                    </div>
                    <div><h4 className='text-sm font-poppins'>Dont Have An Account ? <Link to='/register'>Register</Link></h4></div>

                </div>
            </form>
        </div>
    )
}

export default Loginform