import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AddAddress = () => {
    const [governates, setGovernates] = useState([]);
    const [governate, setGovernate] = useState("");
    const handleGovernateSelect = (selectedValue) => {
        setGovernate(selectedValue); // Set the selected governate ID in the state
    };
    const getAllGovernates = async () => {
        try {
            const { data } = await axios.get(
                `https://restapi.ansoftt.com:4321/v1/governate/`
            );
            setGovernates(data.data);
            console.log(data.data)
            console.log(governates)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllGovernates();
    }, []);
    return (
        <div className='container p-4'>
            <h2 className='font-semibold text-lg font-poppins'>Add Address</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 p-1 gap-2 w-[20rem] justify-center border rounded-md border-gray-400 md:w-[60rem]'>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Name</label>
                    <input className="bg-whitesmoke rounded-md p-2 w-[100%] md:w-[100%]" type="text" name="email" />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Email</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%]rounded-md p-2 " type="text" name="name" />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Address 1</label>

                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="address_2" />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Address 2</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="address_2" />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Country</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="password" name="confirmPassword" />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>State</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="password" name="confirmPassword" />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Pin-Code</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="password" name="confirmPassword" />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Phone</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="password" name="confirmPassword" />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>LandMark</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="password" name="confirmPassword" />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Governate</label>
                    <div className="">

                        <select className='bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2' value={governate} onChange={(e) => handleGovernateSelect(e.target.value)}>
                            <option value="">Select a governate</option>
                            {governates.map(g => (
                                <option key={g._id} value={g._id}>{g.value} - {g.name}</option>
                            ))}
                        </select>




                    </div>

                </div>

                <div className="p-6  items-start">
                    <button className='mr-6 px-12 py-2 bg-gray-100  hover:bg-orange-500 hover:text-white border rounded-md font-poppins font-medium' type='submit'>Cancel</button>
                    <button className='px-12 py-2 bg-orange-400  hover:bg-orange-500 text-white hover:text-black border rounded-md font-poppins font-medium' type='submit'>Save</button>
                </div>
                <div></div>

            </div>


        </div>
    )
}

export default AddAddress