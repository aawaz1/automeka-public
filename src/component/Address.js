import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { saveAddress1 } from '../store/slices/cart-slice';
import cogoToast from 'cogo-toast';

const Address = () => {
    const cart = useSelector((state) => state.cart);
    const { variant, shippingAddress, saveAddress } = cart;
    let id = JSON.parse(localStorage.getItem("id") || null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedAddress, setSelectedAddress] = useState('');
    const [addresses, setAddresses] = useState([]);
    const handleDeleteAddress = async () => {
        try {
            const { data } = await axios.delete(
                `https://restapi.ansoftt.com:4321/v1/address/${selectedAddress._id}`
            );
            getAllAddresses();



        } catch (error) {
            cogoToast.error(error?.message);

        }
    }
    const handleAddressChange = (event) => {
        const selectedAddressId = event.target.value;
        const selectedAddress = addresses.find(address => address._id === selectedAddressId)
        setSelectedAddress(selectedAddress);
        dispatch(saveAddress1(selectedAddress));
        // You can perform any actions here based on the selected address
    };

    const getAllAddresses = async () => {
        try {
            const { data } = await axios.get(
                `https://restapi.ansoftt.com:4321/v1/address/all/${id}`
            );
            setAddresses(data?.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllAddresses();
    }, []);
    return (
        <div className='container flex flex-col items-center justify-start py-2'>
            <h2 className='  font-semibold text-[1.2rem]'>Addresses</h2>
            <div className="justify-center items-center text-center w-[12rem] mt-4 px-4 py-2 text-[0.9rem] bg-customOrange border-solid shadow-sm rounded-full text-white">
                <button onClick={() => navigate('/addaddress')}> Add New Address{" "}</button>
            </div>

            {/* <h2 className='  font-bold text-[1.0rem] mb-2 py-3'>Default</h2> */}
            {/* <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'></h2>
            <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'>Default</h2>
            <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'>Default</h2>
            <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'>Default</h2>
            <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'>Default</h2> */}


            {/* <div><h2 className='  font-semibold font-poppins text-customOrange text-[0.9rem] py-4'>View Addresses</h2></div> */}
            <div className="w-[100%] flex items-center justify-center rounded-full text-orange-500 py-4 ">

                <select style={{ border: "2px solid orange", borderRadius: "3px" }} className='w-[100%]' onChange={handleAddressChange}>
                    <option style={{ color: "#D17B06" }} className='text-orange-500 w-[100%] md:w-[80%]' value="">View addresses</option>
                    {addresses.map((address) => (
                        <option className='w-[100%]' style={{ color: "#D17B06" }} key={address._id} value={address._id}>
                            {address.address_1}, {address.address_2}, {address.city}, {address.country} , {address.governates.value}
                        </option>
                    ))}
                </select>


            </div>

            {selectedAddress ? <div className="p-6 flex gap-2  items-start">
                <button onClick={() => navigate(`/editaddress/${selectedAddress._id}`)} className='mr-6 px-8 py-1  text-gray-500 hover:text-black hover:bg-customOrange border rounded-full font-poppins font-medium' type='submit'>Edit</button>
                <button onClick={handleDeleteAddress} className='px-6 py-1  text-gray-500 hover:text-black hover:bg-customOrange  border rounded-full font-poppins font-medium' type='submit'>Delete</button>
            </div> : null}


        </div>
    )
}

export default Address