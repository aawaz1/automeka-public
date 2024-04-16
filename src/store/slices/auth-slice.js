import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') || "") : null,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token") || "") : null,
  id: localStorage.getItem("id") ? JSON.parse(localStorage.getItem("id") || "") : null

}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      
      state.userInfo = action.payload;
     
      // if (action.payload && action.payload.data && action.payload.data.auth && action.payload.data.auth.access_token) {
      //   const token = action.payload.data.auth.access_token;
      //   const id = action.payload.data.auth._id;
      //   state.token = token;
      //   state._id = id
      //   localStorage.setItem("token", JSON.stringify(token));
      //   localStorage.setItem("id", JSON.stringify(id));
      // }
     
      localStorage.setItem('userInfo', JSON.stringify(action?.payload || ""));
      localStorage.setItem("id", JSON.stringify(action?.payload?.data?.auth?._id || action.payload?._id || ""));
      localStorage.setItem("token", JSON.stringify(action?.payload?.data?.auth?.access_token || action?.payload?.token || ""));
     
    },


    logout: (state, action) => {
      state.userInfo = null;
      // NOTE: here we need to also remove the cart from storage so the next
      // logged in user doesn't inherit the previous users cart and shipping
      localStorage.clear();
    },
  },
});



export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;