import { Grid } from '@mui/material'
import React from 'react'
import { fetchOrder } from '../store/thunk'
import { useDispatch, useSelector } from 'react-redux'


const Orderscreen = () => {
  const order = useSelector(state => state.order);
  const { orderDetails } = order;
  console.log(orderDetails, order);

  const dispatch = useDispatch()
  return (
    <div className="p-2 flex flex-col  w-[30rem] md:w-[100%]   justify-center items-center container">
      <h2 className=' pb-4 font-semibold text-[1.2rem]'>{orderDetails ? "Your Order Details" : "Your Order History"}</h2>

      {orderDetails ?
        <div className='container p-2   justify-center items-center'>
          {/* <h2 className=' pb-4 font-semibold text-[1.2rem]'>Your Order History</h2> */}
          <div className="flex flex-col gap-3 px-5 max-w-[862px]">
            <div className="w-full text-lg font-medium text-black max-md:max-w-full">
              Tracking Number
            </div>
            <div className="justify-center items-start px-2 py-[1rem] mt-2 max-w-full text-base font-medium bg-white rounded border border-solid border-stone-300 text-zinc-500 w-[410px] max-md:pr-5">
              46363848354{" "}
            </div>
            <div className=" w-full text-lg font-medium text-black max-md:max-w-full">
              Delivery Address
            </div>
            <div className=" w-full text-base font-medium text-zinc-500 max-md:max-w-full">
              Loream ipsum dolor
            </div>
            <div className=" w-full text-base font-medium text-zinc-500 max-md:max-w-full">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco .
            </div>
            <div className=" w-full text-lg font-medium text-black max-md:mt-10 max-md:max-w-full">
              Product Details
            </div>
            <div className="px-8 py-4 mt-4 w-full bg-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/adfc39ed34d7396f8c986392d254189203c8847cfec4ca701ffb104841105509?apiKey=15d35c7fb0604e03944e83bc3301da1f&"
                    className="grow shrink-0 max-w-full aspect-[1.54] w-[126px] max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-2.5 font-medium max-md:mt-10">
                    <div className="text-base text-black">Ai Smart Car Play</div>
                    <div className="mt-3.5 text-sm text-green-500">
                      Price : 0.625 KD
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center items-center text-center w-[12rem] mt-4 px-6 py-2.5 text-[0.9rem] bg-white border-amber-500 border-solid shadow-sm rounded-full text-neutral-400">
              <button> Back To Orders{" "}</button>
            </div>
          </div>
        </div>
        :
        <div className='w-[100%] p-2 overflow-x-scroll md:overflow-hidden'>
          <Grid bgcolor={"#F5F5F5"} container spacing={1} className='min-w-[45rem]'>
            <Grid item xs={2}>Order Number</Grid>
            <Grid item xs={3}>Order Date</Grid>
            <Grid item xs={3}>Status</Grid>
            <Grid item xs={2}>Payment</Grid>
            <Grid item xs={2}></Grid>

            <Grid item xs={2}>12638594647</Grid>
            <Grid item xs={3}>12//07/2024</Grid>
            <Grid item xs={3}>pending</Grid>
            <Grid item xs={2}>Paid</Grid>
            <Grid className="text-base text-orange-400 cursor-pointer font-poppins" item xs={2} onClick={() => dispatch(fetchOrder("65d985121418538f5ccbf55c"))}>Details</Grid>
          </Grid>
        </div>}
    </div>












  )
}

export default Orderscreen