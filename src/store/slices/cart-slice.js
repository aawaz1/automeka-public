import { v4 as uuidv4 } from 'uuid';


import { createSlice } from '@reduxjs/toolkit';



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems : [],
        saveAddress : [],
        
        shippingAddress: [],
        variant  : [],
        category : "",
        price : ""
       
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
      
           
          },
        
        deleteFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.cartItemId !== action.payload);
           
        },
        
        
        decreaseQuantity(state, action){
            const product = action.payload;
            if (product.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.cartItemId !== product.cartItemId);
               
            } else {
                state.cartItems = state.cartItems.map(item =>
                    item.cartItemId === product.cartItemId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
                
            }
           
        },
        deleteAllFromCart(state){
            state.cartItems = []
        },
        saveShippingAddress(state, action) {
            state.shippingAddress = action.payload;
        },
        saveAddress1(state,action){
          state.saveAddress = action.payload
        },
        saveVariant(state,action){
          state.variant = action.payload
        },
        saveCategory(state,action){
          state.category = action.payload
        },
        savePrice(state,action){
          state.price = action.payload
        }
    },
});

export const { addToCart, deleteFromCart,saveShippingAddress,saveCategory,savePrice ,saveVariant,saveAddress1,increaseOrder, decreaseQuantity, deleteAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;


