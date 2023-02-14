import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   cart:JSON.parse(localStorage.getItem('cart'))||[],
   quantity:null,
   TotalAmount:0,
   shippingFee:54
   
}

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    setCart:(state,action)=>{
     
      const itemIndex=state.cart.findIndex((item)=>item._id===action.payload._id)
      if(itemIndex>=0){
        state.cart[itemIndex].cartQunatity+=1
        localStorage.setItem("cart",JSON.stringify(state.cart))
      }else{
        const tempProduct={...action.payload,cartQunatity:1}
        state.cart.push(tempProduct)
        localStorage.setItem("cart",JSON.stringify(state.cart))
      }
    

    },
    DeleteItem:(state,action)=>{
      console.log('action: ', action);
      state.cart= state.cart.filter((item)=>item._id!==action.payload)
      localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    DecreaseItem:(state,action)=>{
      const itemIndex=state.cart.findIndex((item)=>item._id===action.payload._id)  
      if(state.cart[itemIndex].cartQunatity>1){
        state.cart[itemIndex].cartQunatity-=1
        localStorage.setItem("cart",JSON.stringify(state.cart))
      }  else if(state.cart[itemIndex].cartQunatity===1){
        state.cart= state.cart.filter((item)=>item._id!==action.payload._id)
        localStorage.setItem('cart',JSON.stringify(state.cart))
      }   
    },

    getTotal:(state,action)=>{
         let {total,quantity}=state.cart.reduce((cartTotal,cartItem)=>{
       
                 const {price,cartQunatity}=cartItem

                const itemTotal=price * cartQunatity
                 cartTotal.total+=itemTotal
               cartTotal.quantity+=cartQunatity
                 return cartTotal
         },{total:0,quantity:0})
         state.TotalAmount=total
         state.quantity=quantity
    }
  
  }
});

export const {setCart,DeleteItem,setQuantity,DecreaseItem,getTotal} = CartSlice.actions

export default CartSlice.reducer