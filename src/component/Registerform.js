import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const Registerform = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        password: "",
        email: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

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
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters long";
        }

        if (!formData.confirmPassword.trim()) {
            validationErrors.confirmPassword = "Confirm Password is required";
        } else if (formData.confirmPassword !== formData.password) {
            validationErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("Form Submitted Successfully");

            // Clear form fields after successful submission
            setFormData({
                name: "",
                phone: "",
                password: "",
                email: "",
                confirmPassword: ""
            });
        }
    };

    return (
        <div className='flex flex-col justify-center items-center p-4 border border-red-500 border-solid'>
            <h2 className='font-semibold text-[1.5rem] font-poppins text-orange-500'>Register</h2>
            <form onSubmit={submitHandler}>
                <div className='grid grid-cols-1 md:grid-cols-2 p-2 w-[20rem] justify-center border rounded-md border-gray-400 md:w-[40rem]'>
                    <div className="p-6">
                        <input className="bg-whitesmoke rounded-md p-2 w-[100%] md:w-[100%]" placeholder="Enter your Email" type="text" name="email" value={formData.email} onChange={handleChange} />
                        <div className='text-red-500'>{errors.email && <span>{errors.email}</span>}</div>
                    </div>
                    <div className="p-4">
                        <input className="bg-whitesmoke w-[100%] md:w-[100%]rounded-md p-2 " placeholder="Enter your Name" type="text" name="name" value={formData.name} onChange={handleChange} />
                        <div className='text-red-500'>  {errors.name && <span>{errors.name}</span>}</div>
                    </div>
                    <div className="p-4">

                        <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " placeholder="Enter your Phone" type="text" name="phone" value={formData.phone} onChange={handleChange} />
                        <div className='text-red-500'>{errors.phone && <span>{errors.phone}</span>}</div>
                    </div>
                    <div className="p-4">
                        <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " placeholder="Enter your Password" type="password" name="password" value={formData.password} onChange={handleChange} />
                        <div className='text-red-500'>{errors.password && <span>{errors.password}</span>}</div>
                    </div>
                    <div className="p-4">
                        <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " placeholder="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                        <div className='text-red-500'>{errors.confirmPassword && <span>{errors.confirmPassword}</span>}</div>
                    </div>
                    <div></div>
                    <div className="p-6 items-start">
                        <button className='px-2 py-1 bg-gray-100  hover:bg-orange-500 hover:text-white border rounded-md font-poppins font-medium' type='submit'>Submit</button>
                    </div>
                    <div></div>
                    <div><h4 className='text-sm px-4'>Already Have An Account ? <Link to='/login'>Login</Link></h4></div>
                </div>
            </form>
        </div>
    );
}

export default Registerform;
