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
   
    addOrUpdateCart : (state,action)=>{
     
        const isExist = state.carts.find((cart)=> cart.id === action.payload.id);
        if(isExist){
          state.carts = state.carts.map((cart)=>cart.id === action.payload.id ? action.payload : cart)
        }else{
        state.carts = [...state.carts,action.payload];
        setCarts(state.carts);

        }
      }
     
    ,
   
    clearAll : (state,action)=>{
     clearData()
      state.user = null;
      state.carts = []
    }
  }

});





export const {userAddOrUpdate, clearAll , addToCart , updateCart} = userSlice.actions
export default userSlice.reducer;

