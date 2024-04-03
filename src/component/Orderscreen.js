import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchOrder } from '../store/thunk'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { clearOrderDetails } from '../store/slices/orderSlice'
import { IMAGE_URL } from '../constants'
import OrderTracker from './OrderTracker';
import { IoIosArrowForward } from "react-icons/io";


const Orderscreen = () => {
  const { orderDetails } = useSelector(state => state.order);

  const cart = useSelector((state) => state.cart);
  const [tracker, setTracker] = useState(null);


  const { cartItems } = cart;
  let id = JSON.parse(localStorage.getItem("id") || null);
  const { saveAddress } = cart;




  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    try {
      const { data } = await axios.get(
        `https://restapi.ansoftt.com:4321/v1/order/${id}`
      );
      setOrders(data.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllOrders()
  }, [])
  return (
    <div className="p-2 flex flex-col  w-[30rem] md:w-[100%]   justify-center items-center container">
      <h2 className=' pb-4 font-semibold text-[1.2rem]'>{orderDetails ? (tracker ? "Order Tracker" : "Order Details") : "Your Order History"}
      </h2>

      {

        orders ?
          (orderDetails ? <>
            {tracker ? <OrderTracker tracker={tracker} setTracker={setTracker} /> : <div className='container p-2   justify-center items-center'>
              {/* <h2 className=' pb-4 font-semibold text-[1.2rem]'>Your Order History</h2> */}
              <div className="flex flex-col gap-3 px-5 max-w-[862px]">
                {/* <div className="w-full text-lg font-medium text-black max-md:max-w-full">
              Tracking Number
            </div>
            <div className="justify-center items-start px-2 py-[1rem] mt-2 max-w-full text-base font-medium bg-white rounded border border-solid border-stone-300 text-zinc-500 w-[410px] max-md:pr-5">
              {orders?.orderedItems?._id}
            </div> */}
                <div className=" w-full text-lg font-medium text-black max-md:max-w-full">
                  Delivery Address
                </div>
                {/* <div className=" w-full text-base font-medium text-zinc-500 max-md:max-w-full">
              Loream ipsum dolor
            </div> */}
                <div className=" w-full text-base font-medium text-zinc-500 max-md:max-w-full">
                  {orderDetails.address?.address_1}, {orderDetails?.address.address_2}, {orderDetails?.address?.postal_code}, {orderDetails?.address?.country}, {orderDetails?.address?.phone},
                </div>
                <div className=" w-full text-lg font-medium text-black max-md:mt-10 max-md:max-w-full">
                  Product Details
                </div>
                {orderDetails?.ordered_items?.map(order_item => {
                  return (

                    <div className="px-8 py-4 mt-4 w-full bg-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                          <img
                            loading="lazy"
                            src={IMAGE_URL + order_item?.product?.image_list?.[0]}
                            className="grow shrink-0 max-w-full aspect-[1.54] w-[126px] max-md:mt-10"
                          />
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col mt-2.5 font-medium max-md:mt-10">
                            <div className="text-base text-black">{order_item?.product?.name}</div>
                            <div className="mt-3.5 text-sm text-green-500">
                              KD {order_item?.product?.price.toFixed(3)}
                            </div>
                          </div>
                        </div>
                        <div className='cursor-pointer' onClick={() => setTracker(order_item?.product?._id)}><IoIosArrowForward /></div>
                      </div>
                    </div>
                  )
                })}
                <div className='flex justify-between'>
                  <div className="justify-center items-center text-center w-[12rem] mt-4 px-6 py-2.5 text-[0.9rem] bg-white border-amber-500 border-solid shadow-sm rounded-full text-neutral-400">
                    <button onClick={() => dispatch(clearOrderDetails(orderDetails))}> Back To Orders{" "}</button>
                  </div>
                  {/* <div className="justify-center items-center text-center w-[12rem] mt-4 px-6 py-2.5 text-[0.9rem] bg-white border-amber-500 border-solid shadow-sm rounded-full text-neutral-400">
                <button onClick={() => setTracker(true)}>  Order Tracker{" "}</button>
              </div> */}
                </div>
              </div>
            </div>
            } </> :


            <div className='w-[100%] p-2 overflow-x-scroll md:overflow-hidden'>
              <Grid bgcolor={"#F5F5F5"} container spacing={1} className='min-w-[45rem]'>
                <Grid item xs={3}>Order Number</Grid>
                <Grid item xs={2}>Order Date</Grid>
                <Grid item xs={3}>Status</Grid>
                <Grid item xs={2}>Total Price</Grid>
                <Grid item xs={2}></Grid>


                {orders.map(order => (
                  <React.Fragment key={order?._id}>
                    <Grid item xs={3}>{order?._id}</Grid>
                    <Grid item xs={2}>{order?.created_at.substring(0, 10)}</Grid>
                    <Grid item xs={3}>pending</Grid>
                    <Grid item xs={2}>{order?.total_price}</Grid>
                    <Grid className="text-base text-customOrange cursor-pointer font-poppins" item xs={2} onClick={() => dispatch(fetchOrder(order._id))}>Details</Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </div>) : <h5 className='text-[1rem] font-poppins text-customOrange'>No Orders Yet</h5>
      }
    </div>












  )
}

export default Orderscreen