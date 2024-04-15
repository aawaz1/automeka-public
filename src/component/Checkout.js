import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllFromCart, saveAddress1 } from "../store/slices/cart-slice";
import { useCreateOrderMutation } from "../store/slices/order-slice";
import { IMAGE_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import { MdAddToQueue } from "react-icons/md";
import Noitemsfound from "./Noitemsfound";
import cogoToast from "cogo-toast";
import useScrollTop from "./customHooks/useScrollToTop";


const Checkout = () => {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart);
  useScrollTop()

  const { cartItems } = cart;

  let id = JSON.parse(localStorage.getItem("id") || null);
  const { userInfo } = useSelector(state => state.auth);
  const { saveAddress } = cart;
  console.log(saveAddress)
  const dispatch = useDispatch();
  const [isUsed, setIsUsed] = useState(false)
  const pointsValueInKd = userInfo?.data?.user?.loyalty_points / 100;
  const [selectedAddress, setSelectedAddress] = useState('');
  const [addresses, setAddresses] = useState([]);
  const total_qty = cartItems?.reduce((accumulator, item) => {
    return accumulator + item?.quantity;
  }, 0) || 0;


  const governate_charges = parseInt(saveAddress?.governates?.value);
  const governateValue = parseFloat(saveAddress?.governates?.value || 0);
  console.log(governateValue)
  const calculateSum = () => {
    let sum = governateValue + totalCartPrice;
    if (isUsed) {
      sum -= pointsValueInKd;
    }
    return sum;
  };
  const [createOrder] = useCreateOrderMutation();

  const totalCartPrice =
    cart.cartItems.reduce(
      (acc, item) => {
        let price = item.price;
        if (item?.variantId && item?.variants?.length) {
          item.variants.map(variant => {
            if (variant._id == item?.variantId) {
              price = variant?.price
            }
          })
        }
        return (acc + (price * item.quantity * (100 - item.discount) / 100))
      },
      0
    )

  const handleAddressChange = (event) => {
    const selectedAddressId = event.target.value;
    const selectedAddress = addresses.find(address => address._id === selectedAddressId)
    setSelectedAddress(selectedAddress);
    dispatch(saveAddress1(selectedAddress));
    // You can perform any actions here based on the selected address
  };

  const getAllAddresses = async () => {

    try {
      const { data } = await axios.get(
        `https://restapi.ansoftt.com:4321/v1/address/all/${id}`
      );
      setAddresses(data?.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAddresses();
  }, []);
  const placeOrderHandler = async () => {
    console.log(cart);
  
    try {
      const orderItems = [];
  
      for (const iterator of cartItems) {
        console.log(iterator);
        const singleItem = {};
        singleItem['product'] = iterator._id;
        if (iterator?.varaints?.length > 0) {
          singleItem['variant'] = iterator.varaints?.[0]._id;
        }
        singleItem['qty'] = iterator.quantity;
        singleItem['price'] = iterator.price;
        singleItem['status'] = "pending";
        orderItems.push(singleItem);
      }
      console.log(orderItems);
  
      const res = await createOrder({
        address: cart.saveAddress,
        user_id: id,
        price: calculateSum(),
        quantity: cartItems?.length,
        total_qty: total_qty,
        points_used: 0,
        is_points_used: isUsed,
        ordered_items: orderItems,
        total_products_cost: "4",
        total_price: calculateSum(),
        governate_charges: governate_charges,
      }).unwrap();
  
      if (res.status === true) {
        const { data } = await axios.post(
          `https://restapi.ansoftt.com:4321/v1/order/`,
          {
            address: cart.saveAddress,
            user_id: id,
            price: calculateSum(),
            quantity: cartItems?.length,
            total_qty: total_qty,
            points_used: 0,
            is_points_used: isUsed,
            ordered_items: orderItems,
            total_products_cost: "4",
            total_price: calculateSum(),
            governate_charges: governate_charges,
          }
        );
  
        navigate(`/`);
        dispatch(deleteAllFromCart(cartItems));
        cogoToast.success("Order Submitted Successfully", { position: "bottom-left" });
      } else {
        cogoToast.error("Failed to create order", { position: "bottom-left" });
      }
    } catch (error) {
      console.log(error);
      cogoToast.error("Please Fill All The Details", { position: "bottom-left" });
    }
  };
  
  return (
    <>
      {cart.cartItems && cart.cartItems.length ? <div className="container  grid grid-cols-1 md:grid-cols-2 p-4 gap-3">
        <div>

          <h3 className="font-poppins font-semibold text-[1.6rem]">Delivery Address</h3>
          <div className="w-[100%] text-none rounded-full text-customOrange p-2">

            <select style={{ border: "2px solid orange", borderRadius: "3px" }} className='w-[100%]' value={saveAddress?.id
            } onChange={handleAddressChange}>
              <option style={{ color: "#D17B06" }} className='text-slate-500' value="">View addresses</option>
              {addresses.map((address) => (
                <option className='w-[100%]' style={{ color: "#D17B06" }} key={address._id} value={address._id}>
                  {address?.address_1}, {address?.address_2}, {address?.city}, {address?.country} , {address?.governates.value}
                </option>
              ))}
            </select>


          </div>


          <div className="py-6">
            {saveAddress &&
              <div className="border border-solid border-gray-400 rounded-md p-4">
                {saveAddress && <h3 className="font-poppins text-[1rem] font-medium">{saveAddress?.address_1} ,{saveAddress?.address_2} ,{saveAddress?.postal_code} , {saveAddress?.country} ,{saveAddress?.city} , {saveAddress?.state}</h3>}

              </div>}
            <div className="py-2 flex justify-end items-end"><button onClick={() => navigate("/addaddress")} style={{ borderBottom: " 2px solid orange" }} className="text-gray-400 border-b-customOrange"><MdAddToQueue fontSize={"1.5rem"}
            /></button></div>

          </div>


          <div className="flex justify-start items-center gap-2">
            <label style={{ margin: "unset" }} for="myCheckbox">Use Points</label>
            <span>({userInfo?.data?.user?.loyalty_points.toFixed(4)})</span>
            <input type="checkbox" id="myCheckbox" value={isUsed} onClick={() => setIsUsed(!isUsed)} name="myCheckbox" />
          </div>
          <div className="self-stretch h-[517px] flex flex-col items-start justify-start gap-[10px] max-w-full">
            <div className="flex flex-col items-start justify-start gap-[3px]">
              <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[109px] mq450:text-lgi">
                Payment
              </h3>
              <div className="h-9 relative text-sm text-gray-400 inline-block shrink-0">
                <p className="m-0">
                  All transactions are secure and encrypted.
                </p>
              </div>
            </div>
            <div style={{ border: " ", height: "1.8rem" }} className="self-stretch flex-1 rounded-md bg-whitesmoke box-border flex flex-row items-start justify-start pt-0 px-0 pb-[375px] max-w-full text-center text-sm border-[0.9px] border-solid border-silver-100 mq450:pb-[244px] mq450:box-border">
              <div className="h-[420px] w-[668px] relative rounded-md bg-whitesmoke box-border hidden max-w-full border-[0.9px] border-solid border-silver-100" />
              <div className="self-stretch flex-1 rounded-t-md rounded-b-none bg-whitesmoke box-border flex flex-row items-start justify-between pt-[17px] pb-4 pr-[22px] pl-5 max-w-full gap-[20px] z-[1] border-[0.8px] border-solid border-black">
                <div className="h-[57px] w-[668px] relative rounded-t-md rounded-b-none bg-whitesmoke box-border hidden max-w-full border-[0.8px] border-solid border-black" />
                <div className="self-stretch w-[126px] flex flex-row items-start justify-start gap-[21px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 z-[2]"
                    alt=""
                    src="/radio-button-checked-fill1-wght400-grad0-opsz24-1.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="self-stretch h-4 relative tracking-[-0.3px] leading-[20.8px] flex items-center justify-center shrink-0 min-w-[81px] z-[2]">
                      Net Banking
                    </div>

                  </div>

                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[2]"
                  alt=""
                  src="/keyboard-arrow-down-fill0-wght400-grad0-opsz24-2-1.svg"
                />
              </div>
            </div>
          </div>
          <button onClick={placeOrderHandler} className="cursor-pointer [border:none] pt-[22px] px-5 pb-[19px] bg-customOrange w-[774px] mt-2 rounded-md flex flex-row items-start justify-center box-border max-w-full hover:bg-chocolate">
            <div className="h-[55px] w-[668px] relative rounded-8xs bg-darkorange hidden max-w-full" />
            <div onClick={placeOrderHandler} className="h-3.5 w-[103px] relative text-xl tracking-[-0.3px] font-medium font-poppins text-white text-center flex items-center justify-center shrink-0 z-[1] mq450:text-base">
              Pay Now
            </div>
          </button>
        </div>




        <div className="  flex flex-wrap flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[6rem] max-w-full mq900:min-w-full mq1300:flex-1">
          <div className=" w-[400px] md:w-[648px] self-stretch rounded-md bg-whitesmoke box-border flex flex-col items-start justify-start pt-[39px] pb-[2rem] pr-none md:pr-8 pl:none md:pl-[52px] gap-[45px] max-w-full border-[0.9px] border-solid border-silver-100 mq900:gap-[22px_45px] mq900:pl-[26px] mq900:pt-[25px] mq900:pb-[189px] mq900:box-border mq450:pt-5 mq450:pb-[123px] mq450:box-border">
            <div className="w-[648px] h-[791px] relative rounded-md bg-whitesmoke box-border hidden max-w-full border-[0.9px] border-solid border-silver-100" />
            <div className="w-[543px] flex flex-row items-start justify-center max-w-full">
              <h3 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq450:text-lgi">
                Your Order Summary
              </h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[19.666666666666668px] max-w-full text-base">
              {
                cart.cartItems.map(item => {
                  const variantId = item?.variantId;

                  const variant = item.variants.find(variant => variant._id === variantId);
                  const price = variant ? variant.price : null;
                  const discount = item?.discount
                  const discountPrice = (item?.discount / 100) * price;
                  const discountedPrice = price - discountPrice
                  return (
                    <div className="self-stretch w-450px md:600px flex flex-col items-start justify-start gap-[14px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-[3px] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap">
                          <div className="h-[100%] w-[100%] flex flex-row items-start justify-start gap-[21px]">
                            {/* <button className="cursor-pointer pt-[9px] pb-1.5 pr-[21px] pl-[22px] bg-white self-stretch w-[104px] rounded box-border flex flex-row items-start justify-start z-[1] border-[0.9px] border-solid border-silver-100">
                          <div className="h-[95px] w-[104px] relative rounded bg-white box-border hidden border-[0.9px] border-solid border-silver-100" />
                          <img
                            className="h-20 flex-1 relative  overflow-hidden object-contain z-[2]"
                            alt=""
                            src={IMAGE_URL + item.image_list?.[0] }
                            style={{width : '100vw'}}
                          />
                        </button> */}
                            <img style={{ width: "6rem" }} src={IMAGE_URL + item.image_list[0]} />
                            <div className=" flex-1  flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                              <div className="self-stretch w flex-1 flex flex-col items-start justify-start gap-[7px]">
                                <div className="flex   flex-row items-start justify-start py-0 pr-[5px] pl-1 gap-2">
                                  <div className="relative font-medium z-[1]">
                                    {item?.name}
                                  </div>
                                  <div className="relative font-medium z-[1]">
                                     {item?.quantity}
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[15px] md:w-[6rem] px-0 pb-0 text-mini text-dimgray-100">
                            <div className="relative text-green-400 font-medium inline-block  z-[1]">

                              {price ? discountedPrice.toFixed(3) :
                                item?.price.toFixed(3)
                              }  KD &nbsp;
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[0.5px] relative box-z-[1] border-t-[0.5px] border-solid border-silver-200" />
                    </div>
                  )
                })
              }

              <div className=" flex flex-row items-start justify-start py-0 px-[7px] w-[100%] box-border max-w-full text-gray-300">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full  gap-[20px] mq450:flex-wrap">
                  <div className=" flex flex-col items-start justify-start gap-[6px]">
                    <div className="self-stretch relative font-medium z-[1]">
                      <p className="m-0 text-gray-500">Items :</p>
                    </div>
                    <div className="self-stretch relative font-medium z-[1]">
                      <p className="m-0 text-gray-500">Items Price:</p>
                    </div>
                    <div className="self-stretch relative font-medium z-[1]">
                      <p className="m-0 text-gray-500">Shipping Cost :</p>
                    </div>
                    {isUsed ? <div className="self-stretch relative font-medium z-[1]">
                      <p className="m-0 text-gray-500">Points Used :</p>
                    </div> : null}

                  </div>
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-mini text-black">
                    <div className="flex flex-col items-start justify-start gap-[5px]">
                      <div className="relative font-medium inline-block min-w-[111px] z-[1]">
                        {total_qty}
                      </div>
                      <div className="relative font-medium inline-block min-w-[111px] z-[1]">
                        {cart.cartItems.reduce(
                          (acc, item) => {
                            let price = item.price;
                            if (item?.variantId && item?.variants?.length) {
                              item.variants.map(variant => {
                                if (variant._id == item?.variantId) {
                                  price = variant?.price
                                }
                              })
                            }
                            return (acc + (price * item.quantity * (100 - item.discount) / 100))
                          },
                          0
                        ).toFixed(3)}  KD
                      </div>
                      <div className="relative font-medium inline-block min-w-[111px] z-[1]">
                        {governateValue.toFixed(3)} KD
                      </div>
                      {isUsed ? <div className="relative font-medium inline-block min-w-[111px] z-[1]">
                        {pointsValueInKd.toFixed(3)}  KD
                      </div> : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start mr-[2rem] gap-[12.5px] max-w-full text-xl">
                <div className="self-stretch h-[0.5px] relative box-border z-[1] border-t-[0.5px] border-solid border-silver-200" />
                <div className="w-[551px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="h-[27px] w-[138px] relative font-medium inline-block shrink-0 z-[1] mq450:text-base">
                      <p className="m-0">Total</p>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-lg">
                      <div className="relative font-medium z-[1]">
                        {calculateSum().toFixed(3)}  KD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div> : <Noitemsfound />}



    </>
  );
};

export default Checkout;
