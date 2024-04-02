import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllFromCart, saveAddress1 } from "../store/slices/cart-slice";
import { useCreateOrderMutation } from "../store/slices/order-slice";
import { IMAGE_URL } from "../constants";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  let id = JSON.parse(localStorage.getItem("id") || null);
  const { saveAddress } = cart;
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAddress] = useState('');
  const [addresses, setAddresses] = useState([]);
  const total_qty = parseInt(cartItems[0]?.quantity);
  const governate_charges = parseInt(saveAddress?.governates?.value);
  const governateValue = parseFloat(saveAddress?.governates?.value || 0);
  const calculateSum = () => {
    const sum = governateValue + totalCartPrice
    return sum;
  };
  const [createOrder] = useCreateOrderMutation();

  const totalCartPrice = cart?.cartItems?.reduce(
    (acc, item) => acc + item?.price * item?.quantity,
    0
  );

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
        `https://restapi.ansoftt.com:4321/v1/address/`
      );
      setAddresses(data?.data);
      console.log(data?.data[0]._id);

      console.log(data?.data);


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
        price: 10,
        quantity: cartItems[0].quantity,
        total_qty: total_qty,
        points_used: "2",
        ordered_items: orderItems,
        total_products_cost: "4",
        total_price: calculateSum(),


        governate_charges: governate_charges,



        // totalPrice : ,

      }).unwrap();

      navigate(`/`);
      dispatch(deleteAllFromCart(cartItems))





    } catch (error) {
      console.log(error)


    }

  }
  return (
    <>
      <div className="container  grid grid-cols-1 md:grid-cols-2 p-4 gap-3">
        <div>

          <h3 className="font-poppins font-semibold text-[1.6rem]">Delivery Address</h3>
          <div className="w-[100%] text-none rounded-full text-orange-500 p-2">

            <select className='w-[100%]' onChange={handleAddressChange}>
              <option style={{ color: "#D17B06" }} className='text-orange-500' value="">View addresses</option>
              {addresses.map((address) => (
                <option className='w-[100%]' style={{ color: "#D17B06" }} key={address._id} value={address._id}>
                  {address.address_1}, {address.address_2}, {address.city}, {address.country} , {address.governates.value}
                </option>
              ))}
            </select>


          </div>
          <div className="py-6">

            <div className="border border-solid border-gray-400 rounded-md p-4">
              <h3 className="font-poppins text-[1rem] font-medium">{saveAddress.address_1} ,{saveAddress.address_2} ,{saveAddress.postal_code} , {saveAddress.country} ,{saveAddress.city} , {saveAddress.state}</h3>

            </div>

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
          <button className="cursor-pointer [border:none] pt-[22px] px-5 pb-[19px] bg-orange-500 w-[774px] mt-2 rounded-md flex flex-row items-start justify-center box-border max-w-full hover:bg-chocolate">
            <div className="h-[55px] w-[668px] relative rounded-8xs bg-darkorange hidden max-w-full" />
            <div onClick={placeOrderHandler} className="h-3.5 w-[103px] relative text-xl tracking-[-0.3px] font-medium font-poppins text-white text-center flex items-center justify-center shrink-0 z-[1] mq450:text-base">
              Pay Now
            </div>
          </button>
        </div>




        <div className="  flex flex-wrap flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[6rem] max-w-full mq900:min-w-full mq1300:flex-1">
          <div className=" w-[400px] md:w-[648px] self-stretch rounded-md bg-whitesmoke box-border flex flex-col items-start justify-start pt-[39px] pb-[291px] pr-none md:pr-8 pl:none md:pl-[52px] gap-[45px] max-w-full border-[0.9px] border-solid border-silver-100 mq900:gap-[22px_45px] mq900:pl-[26px] mq900:pt-[25px] mq900:pb-[189px] mq900:box-border mq450:pt-5 mq450:pb-[123px] mq450:box-border">
            <div className="w-[648px] h-[791px] relative rounded-md bg-whitesmoke box-border hidden max-w-full border-[0.9px] border-solid border-silver-100" />
            <div className="w-[543px] flex flex-row items-start justify-center max-w-full">
              <h3 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq450:text-lgi">
                Your Order Summary
              </h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[19.666666666666668px] max-w-full text-base">
              {
                cart.cartItems.map(item => {
                  return (
                    <div className="self-stretch w-450px md:600px flex flex-col items-start justify-start gap-[14px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-[3px] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap">
                          <div className="h-[100%] w-[266px] flex flex-row items-start justify-start gap-[21px]">
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
                            <div className=" flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[7px]">
                                <div className="flex flex-row items-start justify-start py-0 pr-[5px] pl-1">
                                  <div className="relative font-medium z-[1]">
                                    {item?.name}
                                  </div>
                                </div>
                                {/* <div className="flex-1 flex flex-row items-start justify-start gap-[7px] text-xs text-darkgray">
                              <img
                                className="h-[21px] w-[104px] relative z-[1]"
                                loading="lazy"
                                alt=""
                                src={item.image_list[0]}
                              />
                              <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                                <div className="h-[7px] relative font-medium inline-block shrink-0 min-w-[30px] z-[1]">
                                  (4.7)
                                </div>
                              </div>
                            </div> */}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 text-mini text-dimgray-100">
                            <div className="relative text-green-400 font-medium inline-block max-sm:w-[2em]  z-[1]">
                              KD {(item?.price).toFixed(3)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[0.5px] relative box-z-[1] border-t-[0.5px] border-solid border-silver-200" />
                    </div>
                  )
                })
              }

              <div className=" flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full text-gray-300">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
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
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-mini text-black">
                    <div className="flex flex-col items-start justify-start gap-[5px]">
                      <div className="relative font-medium inline-block min-w-[111px] z-[1]">
                        {cart.cartItems[0]?.quantity}
                      </div>
                      <div className="relative font-medium inline-block min-w-[111px] z-[1]">
                        KD {cart.cartItems.reduce(
                          (acc, item) => acc + item.price * item.quantity,
                          0
                        ).toFixed(3)}
                      </div>
                      <div className="relative font-medium inline-block min-w-[111px] z-[1]">
                        KD {parseInt(saveAddress?.governates?.value).toFixed(3)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12.5px] max-w-full text-xl">
                <div className="self-stretch h-[0.5px] relative box-border z-[1] border-t-[0.5px] border-solid border-silver-200" />
                <div className="w-[551px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="h-[27px] w-[138px] relative font-medium inline-block shrink-0 z-[1] mq450:text-base">
                      <p className="m-0">Total</p>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-lg">
                      <div className="relative font-medium z-[1]">
                        KD {calculateSum().toFixed(3)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>



    </>
  );
};

export default Checkout;
