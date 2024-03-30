import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../store/slices/auth-slice';

const EditProfile = () => {
    const { userInfo } = useSelector((state) => state.auth);

    const [user_name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const updatedData = {
        name: user_name,
        email: email,
        password: password,
        phone: phone
    };
    useEffect(() => {

        if (userInfo) {
            setName(userInfo.name || userInfo?.data?.user?.name);
            setEmail(userInfo?.email || userInfo?.data?.auth?.email);
            setPhone(userInfo?.phone || userInfo?.data?.user?.phone)


        } else {

        }
    }, [userInfo.name, userInfo.email]);

    let id = JSON.parse(localStorage.getItem("id") || null);
    console.log(id)

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.patch(
                `https://restapi.ansoftt.com:4321/v1/user/${id}`, updatedData
            );
            console.log(data);
            dispatch(setCredentials({ ...updatedData, }));
            // Handle data or set state as needed
        } catch (error) {
            console.log(error);
        }
    };
    console.log(setCredentials({ ...updatedData }))
    return (
        <div className='container p-4'>
            <div className=' container flex justify-start p-2 '>
                <div><button className='rounded-full border border-solid border-gray-400 px-3 py-2'> 0 points</button></div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 p-2  justify-center border rounded-md border-gray-400 '>
                <div className="p-6">
                    <h2 className='font-bold text-lg  font-poppins'>Edit Profile</h2>



                </div>
                <div className="p-6">




                </div>
                <div className="p-6">
                    <label className='text-[1rem] font-semiobold font-poppins'>Name</label>
                    <input className="bg-whitesmoke rounded-md p-2 w-[100%] md:w-[100%]" type="text" name="first name" value={user_name} onChange={(e) => setName(e.target.value)} />

                </div>
                <div className="p-4">
                    <label className='text-[1rem] font-semiobold font-poppins'></label>
                    {/* <input className="bg-whitesmoke w-[100%] md:w-[100%]rounded-md p-2 " type="text" name="last name" /> */}

                </div>
                <div className="p-4">
                    <label className='text-[1rem] font-semiobold font-poppins'>Email</label>

                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                </div>
                <div className="p-4">
                    <label className='text-[1rem] font-semiobold font-poppins'>Phone</label>

                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

                </div>






                <div className="p-6  items-start">
                    <button className='mr-6 px-12 py-2 bg-gray-100  hover:bg-orange-500 hover:text-white border rounded-md font-poppins font-medium' type='submit'>Cancel</button>
                    <button className='px-12 py-2 bg-orange-400  hover:bg-orange-500 text-white hover:text-black border rounded-md font-poppins font-medium' type='submit' onClick={submitHandler}>Save</button>
                </div>
                <div></div>

            </div>


        </div>
    )
}

export default EditProfile