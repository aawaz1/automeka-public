import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCreateMutation } from '../store/slices/address-slice';
import cogoToast from 'cogo-toast';
import { useNavigate } from 'react-router-dom';

const AddAddress = () => {
    
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1); // Navigate back one step
      };



    const [create] = useCreateMutation();
    let id = JSON.parse(localStorage.getItem("id") || null);

    const [address_1, setAddress1] = useState('');
    const [name, setName] = useState("")
    const [address_2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [governate, setGovernate] = useState("");
    const [governates, setGovernates] = useState([]);
    const [landmark, setLandmark] = useState('');
    const [postal_code, setPostalCode] = useState('')

    const handleGovernateSelect = (selectedValue) => {
        setGovernate(selectedValue); // Set the selected governate ID in the state
    };
    const getAllGovernates = async () => {
        try {
            const { data } = await axios.get(
                `https://restapi.ansoftt.com:4321/v1/governate/`
            );
            setGovernates(data.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllGovernates();
    }, []);
    const createAddressHandler = async () => {

        try {
            const res = await create({
                address_1: address_1,
                address_2: address_2,
                user_id: id,
                landmark,
                postal_code: postal_code,
                city,
                country,
                state,
                governates: governate,
                name,
                phone


            }).unwrap();

            goBack();


            cogoToast.success("Address Created Successfully", { position: "bottom-left" });



        } catch (error) {
            console.log(error)
            cogoToast.error("Please fill all the input fields", { position: "bottom-left" });


        }

    }
    return (
        <div className='container p-4'>
            <h2 className='font-semibold text-lg font-poppins'>Add Address</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 p-1 gap-2  justify-center border rounded-md border-gray-400 w-[100%] md:w-[60rem]'>


                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Address 1</label>

                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="address_2" value={address_1} onChange={(e) => setAddress1(e.target.value)} />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Address 2</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="address_2" value={address_2} onChange={(e) => setAddress2(e.target.value)} />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Country</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="confirmPassword" value={country} onChange={(e) => setCountry(e.target.value)} />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>State</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="confirmPassword" value={state} onChange={(e) => setState(e.target.value)} />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Postal-Code</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="confirmPassword" value={postal_code} onChange={(e) => setPostalCode(e.target.value)} />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>City</label>
                    <input className="bg-whitesmoke rounded-md p-2 w-[100%] md:w-[100%]" type="text" name="email" value={city} onChange={(e) => setCity(e.target.value)} />

                </div>

                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>LandMark</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="confirmPassword" value={landmark} onChange={(e) => setLandmark(e.target.value)} />

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
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Name</label>
                    <input className="bg-whitesmoke rounded-md p-2 w-[100%] md:w-[100%]" type="text" name="email" value={name} onChange={(e) => setName(e.target.value)} />

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Mobile Number</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="confirmPassword" value={phone} onChange={(e) => setPhone(e.target.value)} />

                </div>


                <div className="p-6 flex  md:flex-row gap-2 items-start">
                    <button onClick={goBack} className='mr-6 px-8 md:px-12 py-2 bg-gray-100  hover:bg-orange-500 hover:text-white border rounded-md font-poppins font-medium'  >Cancel</button>
                    <button className='px-10 md:px-12 py-2 bg-customOrange  hover:bg-orange-500 text-white hover:text-black border rounded-md font-poppins font-medium' type='submit' onClick={createAddressHandler}>Save</button>
                </div>
                <div></div>

            </div>


        </div>
    )
}

export default AddAddress