import FrameComponent2 from "../components/FrameComponent2.js";
import FrameComponent1 from "../components/FrameComponent1";
import SectionHomeCheckoutWishlist from "../components/SectionHomeCheckoutWishlist";
import VariableModifier from "../components/VariableModifier";
import DataTransformer from "../components/DataTransformer";
import GroupComponent1 from "../components/GroupComponent1";
import VariableHolder from "../components/VariableHolder";
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../constants.js";
import { addToCart, decreaseQuantity, deleteAllFromCart } from "../store/slices/cart-slice.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const handleIncrement = (cartItem) => {
    dispatch(addToCart({ product: cartItem, qty: 1 }));
  };

  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  const dispatch = useDispatch();
  return (<>
    <div className="hidden md:block container">
      <h2 className="font-bold font-poppins text-[1.2rem] p-2 py-4">Shopping Cart</h2>
      <div style={{ borderBottom: "1px solid lightgrey" }}></div>
      <Grid container spacing={1} className="py-3">
        <Grid item container xs={12} >
          <Grid className="font-semibold font-poppins" item md={6}>Product</Grid>
          <Grid className="font-semibold font-poppins" item md={2}>Price</Grid>
          <Grid className="font-semibold font-poppins" item md={2}>Quantity</Grid>
          <Grid className="font-semibold font-poppins" item md={2}>Total</Grid>
        </Grid>

        {cartItems.map(cartItem => {
          return (<Grid item container xs={12} style={{ borderBottom: "1px solid lightgrey" }}>
            <Grid item md={6}>
              <div className="flex py-2 gap-2">
                <div className=""><img style={{ width: "6rem", height: "4rem" }} src={IMAGE_URL + cartItem?.image_list[0]} alt="hello cart" /></div>
                <div><h2 className="text-[1.0rem] font-medium font-poppins">{cartItem.name}</h2></div>
              </div>
            </Grid>
            <Grid className="font-medium font-poppins" item md={2} alignItems={"center"} display={"flex"}>{cartItem?.price.toFixed(3)}</Grid>
            <Grid item md={2} alignItems={"center"} display={"flex"}>
              <div className="flex">
                <div className='rounded-l-lg border border-gray-500 px-2 bg-gray-100 cursor-pointer' onClick={() =>
                  dispatch(decreaseQuantity(cartItem))
                } >-</div>
                <div className='px-2 border border-gray-500'>{cartItem.quantity}</div>
                <div className='rounded-r-lg border border-gray-500 bg-gray-100 px-2 cursor-pointer' onClick={() => handleIncrement(cartItem)}>+</div>
              </div>
            </Grid>
            <Grid item md={2} alignItems={"center"} display={"flex"}>{cartItem.price * cartItem.quantity}</Grid>
          </Grid>)
        })}

        {cartItems && (<Grid className="p-2" item container xs={12}>
          <Grid padding={5} className="font-semibold font-poppins" item md={6}><button onClick={() => navigate('/checkout')} className="px-6 py-2 bg-orange-400 rounded-full text-white hover:bg-orange-300 hover:text-black font-poppins font-medium">Proceed To Checkout</button></Grid>
          <Grid className="font-semibold font-poppins" item md={2}></Grid>
          <Grid className="font-semibold font-poppins" item md={2}></Grid>
          <Grid className="font-medium font-poppins hover:text-orange-400" item md={2}><button onClick={() => dispatch(deleteAllFromCart())}>{cartItems?.length > 0 && "Clear Cart"}</button></Grid>
        </Grid>)}


      </Grid>
    </div>

    <div className="md:hidden container h-[50rem] flex flex-col self-center px-5  w-full font-medium max-w-[1371px] max-md:mt-10 max-md:max-w-full">
      <div className="text-2xl text-black max-md:max-w-full">
        Shopping Cart
      </div>
      <div className="flex gap-3 justify-around mt-16 w-full text-lg text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        {/* <div>PRODUCT</div> */}
        {/* <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
          <div>PRICE</div>
          <div className="flex-auto">QUANTITY</div>
          <div className="flex-auto">TOTAL</div>
        </div> */}
      </div>
      <div className="shrink-0  border border-solid bg-stone-300 border-stone-300 h-[3px] max-md:max-w-full" />
      {cartItems.map(cartItem => {
        return (<>
          <div className="flex gap-2 justify-between px-0.5 mt-6 w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between items-center">
              {/* <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4275a5684bdda0fcbc734c7ccf0f0a5c197ca91676414ac6082d84401871c22e?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
        className="shrink-0 self-stretch my-auto w-8 aspect-square"
      /> */}
              <img
                loading="lazy"
                src={IMAGE_URL + cartItem?.image_list?.[0]}
                style={{ width: "6rem", height: "4rem" }}
              />
              <div className="flex flex-col self-stretch my-auto">
                <div className="text-lg text-black">{cartItem?.name}</div>
                <div className="flex gap-2 mt-3.5 text-xs whitespace-nowrap text-neutral-400">
                  {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/152a7afe7af605eb2fd747cfb78e7ffd8dad87983801750ca1c0a5c35d673567?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
              className="shrink-0 max-w-full aspect-[5] w-[104px]"
            /> */}
                  {/* <div>(4.7)</div> */}
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-around items-center self-start mt-2 text-base max-md:flex-wrap max-md:max-w-full">
              <div className="self-stretch my-auto text-black">KD {cartItem?.price.toFixed(3)}</div>
              <div className="flex">
                <div className='rounded-l-lg border border-gray-500 px-2 bg-gray-100 cursor-pointer' onClick={() =>
                  dispatch(decreaseQuantity(cartItem))
                } >-</div>
                <div className='px-2 border border-gray-500'>{cartItem.quantity}</div>
                <div className='rounded-r-lg border border-gray-500 bg-gray-100 px-2 cursor-pointer' onClick={() => handleIncrement(cartItem)}>+</div>
              </div>
              <div className="justify-center self-stretch px-2 py-2 tracking-tight text-center ">
                KD {(cartItem.price * cartItem.quantity).toFixed(3)}
              </div>
            </div>
          </div>
          <div className="shrink-0 mt-2 border border-solid bg-stone-300 border-stone-300 h-[3px] max-md:max-w-full" />
        </>

        )
      })}
     
      <div className="flex justify-between items-center p-2 gap-2 mt-2"> <div className="px-6 py-2 bg-orange-400 rounded-full text-white hover:bg-orange-300 hover:text-black font-poppins font-medium">
        {" "}
        Checkout
      </div>
        <div className="px-6 py-2 bg-orange-400 rounded-full text-white hover:bg-orange-300 hover:text-black font-poppins font-medium">
          {" "}
          Clear Cart
        </div></div>
    </div>
  </>
  );
};

export default Cart;