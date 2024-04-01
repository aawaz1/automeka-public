import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { saveAddress1 } from '../store/slices/cart-slice';

const Address = () => {
    const cart = useSelector((state) => state.cart);
const { variant, shippingAddress, saveAddress } = cart;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedAddress, setSelectedAddress] = useState('');
    const [addresses , setAddresses] = useState([]);
    const handleAddressChange = (event) => {
        const selectedAddressId = event.target.value;
        const selectedAddress = addresses.find(address =>address._id === selectedAddressId)
        setSelectedAddress(selectedAddress);
        dispatch(saveAddress1(selectedAddress));
        // You can perform any actions here based on the selected address
      };
    
    const getAllAddresses = async () => {
        try {
            const { data } = await axios.get(
                `https://restapi.ansoftt.com:4321/v1/address/`
            );
            setAddresses(data?.data);
            console.log(data?.data[0]._id);
            
            console.log(data?.data);
            
           
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
            <div className="justify-center items-center text-center w-[12rem] mt-4 px-4 py-2 text-[0.9rem] bg-orange-400 border-solid shadow-sm rounded-full text-white">
                <button onClick={() => navigate('/addaddress')}> Add New Address{" "}</button>
            </div>
           
            <h2 className='  font-bold text-[1.0rem] mb-2 py-3'>Default</h2>
            {/* <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'></h2>
            <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'>Default</h2>
            <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'>Default</h2>
            <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'>Default</h2>
            <h2 className='  font-medium font-poppins text-gray-400 text-[0.9rem]'>Default</h2> */}


            {/* <div><h2 className='  font-semibold font-poppins text-orange-400 text-[0.9rem] py-4'>View Addresses</h2></div> */}
            <div className="w-[50%] rounded-full text-orange-500">
                    
                    <select className='w-[40%]' onChange={handleAddressChange}>
  <option style={{color : "#D17B06"}} className='text-orange-500' value="">View addresses</option>
   {addresses.map((address) => (
    <option className='w-[100%]' style={{color : "#D17B06"}} key={address._id} value={address._id}>
    {address.address_1}, {address.address_2}, {address.city}, {address.country} , {address.governates.value}
  </option>
  ))}
 </select>

                   
                  </div>

            <div className="p-6  items-start">
                <button className='mr-6 px-12 py-2  text-gray-500 hover:text-black hover:bg-orange-400 border rounded-full font-poppins font-medium' type='submit'>Edit</button>
                <button className='px-8 py-2  text-gray-500 hover:text-black hover:bg-orange-400  border rounded-full font-poppins font-medium' type='submit'>Delete</button>
            </div>


        </div>
    )
}

export default Address