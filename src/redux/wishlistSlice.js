import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        // actions
        // updating state, action= parameter used to define argument of addToCart fn
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },

        // id
        removeWishlist:(state,action)=>{
            // return new filtered array
            return state.filter(i=>i.id!=action.payload)
        }
    }
})

// export reducers
export default wishlistSlice.reducer

// action
export const {addToWishlist,removeWishlist}=wishlistSlice.actions