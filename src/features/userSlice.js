import { createSlice } from "@reduxjs/toolkit";
import { clearData, getCarts, getUser, setCarts, setUser } from "./localStorage";




const userSlice = createSlice({
  name:'userInfo',
  initialState:{
    user: getUser(),
    carts:getCarts()
  },
  reducers:{
    userAddOrUpdate : (state,action)=>{
      setUser(action.payload);
      state.user = action.payload;
    },
   
    addToCart : (state,action)=>{
      setCarts(action.payload);
      state.carts = [...state.carts,action.payload];
    },
    updateCart : (state,action)=>{
     
    },
    clearAll : (state,action)=>{
     clearData()
      state.user = null;
      state.carts = []
    }
  }

});





export const {userAddOrUpdate, clearAll , addToCart , updateCart} = userSlice.actions
export default userSlice.reducer;

