
import { createSlice } from '@reduxjs/toolkit';
import cogoToast from 'cogo-toast';


const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlistItems: []
    },
    reducers: {
        addToWishlist(state, action) {
            // const { product ,variantId } = action.payload;
            const isInWishlist = state.wishlistItems.findIndex(item => item?._id === action.payload?._id
                // product?._id 
                //  && item.variantId === variantId
            );
            if (isInWishlist > -1) {
                cogoToast.info("Product already in wishlist", { position: "bottom-left" });

            } else {
                state.wishlistItems.push(action.payload);
                // state.wishlistItems.push({...product , variantId});
                cogoToast.success("Added To wishlist", { position: "bottom-left" });

            }

        },
        deleteFromWishlist(state, action) {


            state.wishlistItems = state.wishlistItems.filter(item => item?._id !== action.payload);
            console.log(action.payload);
            cogoToast.error("Removed From Wishlist", { position: "bottom-left" });


        },

        deleteAllFromWishlist(state) {
            state.wishlistItems = []
        }
    },
});

export const { addToWishlist, deleteFromWishlist, deleteAllFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
