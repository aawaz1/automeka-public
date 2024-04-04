import React, { useEffect, useState } from 'react';
import Stepper from '../component/Stepper.js'
import { fetchProductDetails } from '../store/api.js';
import { BASE_URL, IMAGE_URL } from '../constants.js';
import axios from 'axios';

const OrderTracker = ({ setTracker, tracker }) => {


  const [product, setProduct] = useState();
  const [trackerr, setTrackerr] = useState([])


  const handleProductDetail = async () => {
    let { data, statusText } = await fetchProductDetails(tracker);
    if (statusText == "OK") {
      setProduct(data.data || null)
    }
  }
  useEffect(() => {
    handleProductDetail()
  }, [tracker]);
  const getTrackers = async () => {

    const { data } = await axios.get(`${BASE_URL}/ordertracker`)
    console.log("wecwvrv", data.data)
    setTrackerr(data.data);

  }

  useEffect(() => {
    getTrackers()
  }, [])
  return (
    <div className='container p-1 md:p-6'><div className='p-1 md:p-4  flex flex-col justify-center items-center'>

      {trackerr?.filter(item => item.product._id === tracker)?.map(producttracker => <Stepper tracker={producttracker.status} />


      )}


    </div>
      {/* <div className='flex flex-col justify-center p-2'><h2 className=' font-semibold text-gray-400 text-[1.0rem]'> Tracking Number</h2>
        <div className="justify-center items-start px-4 py-[1.2rem]  max-w-full text-base font-medium bg-white rounded border border-solid border-stone-300 text-zinc-500 w-[410px] max-md:pr-5">

        </div>
      </div> */}
      <div className=" px-1 md:px-16  py-9 mt-1 md:mt-16 w-full bg-neutral-100 max-md:px-5  max-md:max-w-full">
        <div className="flex justify-center items-center gap-4">
          <div className="flex flex-col  max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={IMAGE_URL + product?.image_list?.[0]}
              // style={{ width: "8rem" }}
              className='w-[100%] md:w-[8rem]'
            />
          </div>
          <div className="flex flex-col ml-1 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2.5 font-medium ">
              <div className="text-base text-black">{product?.name}</div>

            </div>
          </div>
          <div className="flex flex-col ml-1 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2.5 font-medium ">
              <div className="text-base text-black">KD {(product?.price)?.toFixed(3)}</div>

            </div>
          </div>

        </div>
        <div className="flex gap-1 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col  max-md:ml-0 max-md:w-full">

          </div>

          <div className="flex flex-col ml-70 w-6/12 max-md:ml-0 max-md:w-full">

          </div>
          <div className="flex flex-col ml-1 w-6/12 max-md:ml-0 max-md:w-full">

          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-[12rem] mt-[2rem]  py-2 text-base bg-white border-amber-500 border-solid shadow-sm rounded-full text-neutral-400">
        <button onClick={() => setTracker(null)}>Back To Order Details{" "}</button>
      </div>

    </div>

  )
}

export default OrderTracker