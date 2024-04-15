import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../store/slices/auth-slice';
import cogoToast from 'cogo-toast';
import useScrollTop from './customHooks/useScrollToTop';

const EditProfile = () => {
    const { userInfo } = useSelector((state) => state.auth);
    console.log(userInfo)
    useScrollTop()
    let user = JSON.parse(localStorage.getItem("userInfo") || null);

    const [user_name, setName] = useState("");
    const [users, setUser] = useState([])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [points, setPoints] = useState("")
    const dispatch = useDispatch();
    const updatedData = {
        name: user_name,
        email: email,
        password: password,
        phone: phone
    };
    useEffect(() => {

    })

    // useEffect(() => {
    //     if (user) {
    //         setName(user?.name)
    //         setPhone(user?.phone)
    //     }
    // } ,[])
    useEffect(() => {

        if (userInfo) {
            setName(userInfo.name || userInfo?.data?.user?.name);
            setEmail(userInfo?.email || userInfo?.data?.auth?.email);
            setPhone(userInfo?.phone || userInfo?.data?.user?.phone);
            setPoints(userInfo?.loyalty_points || userInfo?.data?.user?.loyalty_points)


        } else {

        }
    }, [userInfo]);

    let id = JSON.parse(localStorage.getItem("id") || null);
    let token = JSON.parse(localStorage.getItem("token") || null);

    const getUserById = async (e) => {
        try {
            const { data } = await axios.get(
                `https://restapi.ansoftt.com:4321/v1/user/${id}`
            );
            setUser(data?.data)
            console.log(data?.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getUserById()
    } ,[])
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.patch(
                `https://restapi.ansoftt.com:4321/v1/user/${id}`, updatedData
            );

            dispatch(setCredentials({ ...userInfo, ...updatedData, _id: id, token: token }));
            cogoToast.success('Details Updated Successfully', { position: "bottom-left" });
            // Handle data or set state as needed
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='container p-4'>
            <div className=' container flex justify-start p-2 '>
                <div className='border-gray-400'><button className='rounded-full text-blue-600 border border-solid border-gray-400 px-2 py-2'> {parseFloat(users?.loyalty_points).toFixed(3)} points</button></div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 p-2  justify-center border rounded-md border-gray-400 '>
                <div className=" p-1 md:p-6">
                    <h2 className='font-bold text-lg  font-poppins'>Edit Profile</h2>



                </div>
                <div className="p-1 md:p-6">




                </div>
                <div className="p-1 md:p-6">
                    <label className='text-[1rem] font-semiobold font-poppins'>Name</label>
                    <input className="bg-whitesmoke rounded-md p-2 w-[100%] md:w-[100%]" type="text" name="first name" value={user_name} onChange={(e) => setName(e.target.value)} />

                </div>
                <div className="p-1 md:p-4">
                    <label className='text-[1rem] font-semiobold font-poppins'></label>
                    {/* <input className="bg-whitesmoke w-[100%] md:w-[100%]rounded-md p-2 " type="text" name="last name" /> */}

                </div>
                <div className="p-1 md:p-4">
                    <label className='text-[1rem] font-semiobold font-poppins'>Email</label>

                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                </div>
                <div className="p-1 md:p-4">
                    <label className='text-[1rem] font-semiobold font-poppins'>Phone</label>

                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

                </div>






                <div className="p-1 py-2 flex flex-col md:flex-row  gap-2  items-start">
                    {/* <button className='mr-6 px-8 md:px-12 py-2 bg-gray-100  hover:bg-orange-500 hover:text-white border rounded-md font-poppins font-medium' type='submit'>Cancel</button> */}
                    <button className='px-4 md:px-14 py-2 bg-customOrange  hover:bg-orange-500 text-white hover:text-black border rounded-md font-poppins font-medium' type='submit' onClick={submitHandler}>Save</button>
                </div>
                <div></div>

            </div>


        </div>
    )
}

export default EditProfile