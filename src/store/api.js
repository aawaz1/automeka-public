import axios from "axios";
import { BASE_URL } from "../constants";

export const fetchOrderData = async (orderId) => {

  const response = await axios.get(`${BASE_URL}/order/details/${orderId}`);
  // const response = await axios.get(`${BASE_URL}/order/${orderId}`);

  if (response.statusText != "OK") {

    throw new Error('Failed to fetch user data');
  }


  return response;
};

export const fetchProductDetails = async (id) => {

  const response = await axios.get(`${BASE_URL}/product/${id}`);
  // const response = await axios.get(`${BASE_URL}/order/${orderId}`);

  if (response.statusText != "OK") {

    throw new Error('Failed to fetch user data');
  }


  return response;
};