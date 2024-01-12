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
     
        const isExist = state.carts.find((cart)=> cart.product === action.payload.product);
        if(isExist){
          state.carts = state.carts.map((cart)=>cart.product === action.payload.product ? action.payload : cart)
          setCarts(state.carts)
        }else{
        state.carts = [...state.carts, action.payload];
        setCarts(state.carts);

        }
      }
     
    ,
    removeCart:(state,action)=>{
      state.carts.splice(action.payload,1);
      state.carts = [...state.carts];
      setCarts(state.carts);
    },

    clearAll : (state,action)=>{
     clearData()
      state.user = null;
      state.carts = []
    }
  }

});





export const {userAddOrUpdate, clearAll , addToCart , addOrUpdateCart,removeCart} = userSlice.actions
export default userSlice.reducer;

