import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOrderData } from './api';

export const fetchOrder = createAsyncThunk(
  'user/fetchOrders',
  async (orderId, thunkAPI) => {
    try {
      console.log("response")
      const response = await fetchOrderData(orderId);
      console.log(response)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);