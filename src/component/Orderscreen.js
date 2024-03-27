import { Grid } from '@mui/material'
import React from 'react'

const Orderscreen = () => {
    return (
        <div className="p-2 flex flex-col  justify-center items-center">
            <h2 className=' pb-4 font-semibold text-[1.2rem]'>Your Order History</h2>
            {/* <div className="flex gap-5=  items-start pt-16 pr-10 pb-8 pl-2 w-full text-base font-medium border border-solid bg-neutral-100 border-neutral-200 text-zinc-500 max-md:flex-wrap max-md:pr-5">
                <div className="flex justify-between w-[100%] items-center  flex-row gap-2">
                    <div className="text-base text-black">Order Number </div>
                    <div className="text-base text-black">Order Date </div>
                    <div className="text-base text-black">Status </div>
                    <div className="text-base text-black">Total </div>
                    <div></div>

                </div>
                <div>

                </div>
            </div>
            <div className="flex gap-5  items-start pl-3 p-4 w-full text-base font-medium border border-solid bg-neutral-100 border-neutral-200 text-zinc-500 max-md:flex-wrap max-md:pr-5">
                <div className="flex justify-between w-[100%] items-center  flex-row gap-2">
                    <div className="text-base text-gray-300 ">449599650409645 </div>
                    <div className="text-base text-gray-300">44959965 </div>
                    <div className="text-base text-gray-300">449599 </div>
                    <div className="text-base text-gray-300 pr-4">4495996 </div>
                    <div className="text-base text-orange-400 cursor-pointer">Details</div>



                </div>
                <div>

                </div>
            </div> */}
            <Grid bgcolor={"#F5F5F5"} container spacing={1} width={"100%"}>
                <Grid item xs={2}>Order Number</Grid>
                <Grid item xs={3}>Order Date</Grid>
                <Grid item xs={3}>Status</Grid>
                <Grid item xs={2}>Payment</Grid>
                <Grid item xs={2}></Grid>

                <Grid item xs={2}>12638594647</Grid>
                <Grid item xs={3}>12//07/2024</Grid>
                <Grid item xs={3}>pending</Grid>
                <Grid item xs={2}>Paid</Grid>
                <Grid className="text-base text-orange-400 cursor-pointer font-poppins"  item xs={2}>Details</Grid>
            </Grid>
        </div>












    )
}

export default Orderscreen