import { v4 as uuidv4 } from 'uuid';


import { createSlice } from '@reduxjs/toolkit';
import cogoToast from 'cogo-toast';



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems : [],
        saveAddress : [],
        search : "",
        
        shippingAddress: [],
        variant  : [],
        category : "",
        price : "",
        myAccountTab : 0
       
      },
    reducers: {
        addToCart(state, action) {
            const { product, qty } = action.payload;
      
            // Generate a unique identifier for the new cart item
            const cartItemId = uuidv4();
      
            // Check if the product already exists in the cart
            const existingProductIndex = state.cartItems.findIndex(
              (item) => item._id === product._id
            );
      
            if (existingProductIndex !== -1) {
              // If the product already exists, update its quantity
              state.cartItems[existingProductIndex].quantity += qty;
            } else {
              // If the product doesn't exist, add it to the cart with quantity 1
              state.cartItems.push({
                cartItemId, // Add the unique identifier
                ...product,
                quantity: qty,
              });
            }
            cogoToast.success("Item Added Successfully", { position: "bottom-left" });
           
          },
        
        deleteFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.cartItemId !== action.payload);
            cogoToast.error("Removed From Cart", {position: "bottom-left"});
           
        },
        
        
        decreaseQuantity(state, action){
            const product = action.payload;
            if (product.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.cartItemId !== product.cartItemId);
                cogoToast.error("Removed From Cart", {position: "bottom-left"});
            } else {
                state.cartItems = state.cartItems.map(item =>
                    item.cartItemId === product.cartItemId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
                cogoToast.warn("Item Decremented From Cart", {position: "bottom-left"});
                
            }
           
        },
        deleteAllFromCart(state){
            state.cartItems = []
        },
        saveShippingAddress(state, action) {
            state.shippingAddress = action.payload;
        },
        saveMyAccountTab(state, action) {
          state.myAccountTab = action.payload;
      },
        saveAddress1(state,action){
          state.saveAddress = action.payload
        },
        saveVariant(state,action){
          state.variant = action.payload
        },
        saveSearch(state,action){
          state.search = action.payload
        },
        saveCategory(state,action){
          state.category = action.payload
        },
        savePrice(state,action){
          state.price = action.payload
        }
    },
});

export const { addToCart, deleteFromCart,saveSearch,saveMyAccountTab ,saveShippingAddress,saveCategory,savePrice ,saveVariant,saveAddress1,increaseOrder, decreaseQuantity, deleteAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;


