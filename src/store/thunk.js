import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOrderData } from './api';

export const fetchOrder = createAsyncThunk(
  'user/fetchOrders',
  async (orderId, thunkAPI) => {
    try {
     
      const response = await fetchOrderData(orderId);
     
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

