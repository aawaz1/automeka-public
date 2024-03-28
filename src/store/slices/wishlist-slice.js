
import { createSlice } from '@reduxjs/toolkit';


const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlistItems: []
    },
    reducers: {
        addToWishlist(state, action) {
            const isInWishlist = state.wishlistItems.findIndex(item => item._id === action.payload._id);
            if (isInWishlist > -1) {

            } else {
                state.wishlistItems.push(action.payload);

            }

        },
        deleteFromWishlist(state, action) {


            state.wishlistItems = state.wishlistItems.filter(item => item._id !== action.payload);
            console.log(action.payload)


        },

        deleteAllFromWishlist(state) {
            state.wishlistItems = []
        }
    },
});

export const { addToWishlist, deleteFromWishlist, deleteAllFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
