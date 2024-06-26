import axios from 'axios';
import cogoToast from 'cogo-toast';
import React, { useState } from 'react'
import { BASE_URL } from '../constants';

const Contactus = () => {

    const [name , setName] = useState('');
    const [email , setEmail] = useState("")
    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    const submitHandler = async() => {
        try {
            const {data} = await axios.post(BASE_URL + "/contactus" , {name , email})

            cogoToast.success("Details Submitted Successfully")
            
        } catch (error) {
            console.log(error)
            
        }
        

    }
    return (

        <div className="min-h-[80VH] bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full py-8 px-4 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"><span className='text-orange-500'>Contact</span> Us</h2>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your name" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
                </div>
                {/* <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                    <textarea id="message" name="message" rows="5" className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your message"></textarea>
                </div> */}
                <div className="flex justify-start">
                    <button onClick={submitHandler} type='submit' className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>

            </div>
        </div>
    );
};





export default Contactus