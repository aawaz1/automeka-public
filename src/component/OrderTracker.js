import React from 'react';
import Stepper from '../component/Stepper.js'

const OrderTracker = () => {
  return (
    <div className='container p-6'><div className='p-4  flex flex-col justify-center items-center'>
    <h2 className=' pb-4 font-semibold text-[1.2rem]'>Your Order Tracker</h2>
   
   <Stepper/>
  
</div>
<div className='flex flex-col justify-center p-2'><h2 className=' font-semibold text-gray-400 text-[1.0rem]'> Tracking Number</h2>
<div className="justify-center items-start px-4 py-[1.2rem]  max-w-full text-base font-medium bg-white rounded border border-solid border-stone-300 text-zinc-500 w-[410px] max-md:pr-5">
       
      </div>
                    </div>
                    <div className="px-16 gap-4 py-9 mt-16 w-full bg-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-1 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col  max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&"
              className="grow shrink-0 max-w-full aspect-[1.54] w-[126px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-1 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2.5 font-medium max-md:mt-10">
              <div className="text-base text-black">Ai Smart Car Play</div>
             
            </div>
          </div>
          <div className="flex flex-col ml-1 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2.5 font-medium max-md:mt-10">
              <div className="text-base text-black">1</div>
             
            </div>
          </div>
          <div className="flex flex-col ml-1 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2.5 font-medium max-md:mt-10">
              <div className="text-base text-black">Price : 0.625 </div>
             
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
      <button>Back To Order Details{" "}</button>
    </div>
      
</div>
     
  )
}

export default OrderTracker