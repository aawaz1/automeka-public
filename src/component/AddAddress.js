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
    const [errors, setErrors] = useState({});
    const [error, setError] = useState('')

    const handleGovernateSelect = (selectedValue) => {
        setGovernate(selectedValue); // Set the selected governate ID in the state
    };

    const handlePhoneChange = (e) => {
        const input = e.target.value;
        // Check if the input consists only of digits
        if (/^\d*$/.test(input)) {
            // If it's a number, update the phone state
            setPhone(input);
            // Clear any previous error messages
            setError('');
        } else {
            // If it's not a number, show an error message
            setError('Please enter only numeric characters');
        }
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

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };
    const createAddressHandler = async () => {
        const validationErrors = {};

        if (!name.trim()) {
            validationErrors.name = "Name is required";
        }
        if (!city.trim()) {
            validationErrors.city = "Street Name is required";
        }
        if (!phone.trim()) {
            validationErrors.phone = "Phone is required";
        }
        if (!address_1.trim()) {
            validationErrors.address_1 = "Address 1 is required";
        }
        if (!address_2.trim()) {
            validationErrors.address_2 = "Address 2 is required";
        }
        if (!country.trim()) {
            validationErrors.country = "Country is required";
        }
        if (!postal_code.trim()) {
            validationErrors.postal_code = "Postal Code is required";
        }
        if (!state.trim()) {
            validationErrors.state = "State is required";
        }
        if (!landmark.trim()) {
            validationErrors.landmark = "Landmark is required";
        }
        if (!governate.trim()) {
            validationErrors.governate = "Governate is required";
        }


        setErrors(validationErrors);

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


            cogoToast.success("Address Created Successfully",{ position: "bottom-left" });



        } catch (error) {
            console.log(error);
            cogoToast.error("Please fill all the input fields",{ position: "bottom-left" });


        }

    }
    return (
        <div className='container p-4'>
            <h2 className='font-semibold text-lg font-poppins'>Add Address</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 p-1 gap-2  justify-center border rounded-md border-gray-400 w-[100%] md:w-[60rem]'>


                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Address 1</label>

                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="address_2" value={address_1} onChange={(e) => setAddress1(e.target.value)} />
                    <div className='text-red-500'>{errors.address_1 && <span>{errors.address_1}</span>}</div>

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Address 2</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="address_2" value={address_2} onChange={(e) => setAddress2(e.target.value)} />
                    <div className='text-red-500'>{errors.address_2 && <span>{errors.address_2}</span>}</div>

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Country</label>
                    <select className='bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2' id="country" name="country" value={country} onChange={handleCountryChange}>
                    <option value="select">Select A Counry</option>
                        <option value="kuwait">Kuwait</option>
                        <option value="uae">UAE</option>
                        <option value="qatar">Qatar</option>
                        <option value="saudi_arabia">Saudi Arabia</option>
                        <option value="bahrain">Bahrain</option>


                    </select>
                    {/* <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} /> */}
                    <div className='text-red-500'>{errors.country && <span>{errors.country}</span>}</div>

                </div>
                {/* <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>State</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="confirmPassword" value={state} onChange={(e) => setState(e.target.value)} />
                    <div className='text-red-500'>{errors.state && <span>{errors.state}</span>}</div>

                </div> */}
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Postal-Code</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="confirmPassword" value={postal_code} onChange={(e) => setPostalCode(e.target.value)} />
                    <div className='text-red-500'>{errors.postal_code && <span>{errors.postal_code}</span>}</div>

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Stree Name</label>
                    <input className="bg-whitesmoke rounded-md p-2 w-[100%] md:w-[100%]" type="text" name="email" value={city} onChange={(e) => setCity(e.target.value)} />
                    <div className='text-red-500'>{errors.city && <span>{errors.city}</span>}</div>

                </div>

                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>LandMark</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="confirmPassword" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
                    <div className='text-red-500'>{errors.landmark && <span>{errors.landmark}</span>}</div>

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
                        <div className='text-red-500'>{errors?.governate && <span>{errors?.governate}</span>}</div>




                    </div>

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Name</label>
                    <input className="bg-whitesmoke rounded-md p-2 w-[100%] md:w-[100%]" type="text" name="email" value={name} onChange={(e) => setName(e.target.value)} />
                    <div className='text-red-500'>{errors.name && <span>{errors.name}</span>}</div>

                </div>
                <div className="p-2">
                    <label className='text-[1rem] font-semiobold font-poppins'>Mobile Number</label>
                    <input className="bg-whitesmoke w-[100%] md:w-[100%] rounded-md p-2 " type="text" name="phonr"
                        value={phone}
                        onChange={handlePhoneChange} />
                    <div className='text-red-500'>{errors.phone && <span>{errors.phone}</span>}</div>

                </div>
                <div></div>


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