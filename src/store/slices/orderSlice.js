import { fetchOrder } from '../thunk';

import { createSlice } from '@reduxjs/toolkit';


const orderSlice = createSlice({
    name : "order",
    initialState: {
        user: null,
        loading: false,
        error: null,
        orderDetails : null,
      },
      reducers: {
       
      },
      extraReducers: (builder) => {
        builder
          .addCase(fetchOrder.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchOrder.fulfilled, (state, action) => {
            state.loading = false;
         state.orderDetails = action.payload;
         console.log(action.payload)

            
          })
          .addCase(fetchOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.orderDetails = null;
          });
      },


})


export const { saveOrderNumber } = orderSlice.actions;
export default orderSlice.reducer;