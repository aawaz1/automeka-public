import { fetchOrder } from '../thunk';

import { createSlice } from '@reduxjs/toolkit';


const orderSlice = createSlice({
  name: "order",
  initialState: {
    user: null,
    loading: false,
    error: null,
    orderDetails: null,
  },
  reducers: {
    clearOrderDetails(state){
      state.orderDetails = null
  },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetails = action.payload?.data;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.orderDetails = null;
      });
  },


})


export const {clearOrderDetails} = orderSlice.actions;
export default orderSlice.reducer;