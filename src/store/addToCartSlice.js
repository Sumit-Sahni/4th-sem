import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : localStorage.setItem("cartItems", JSON.stringify([])),
  invoiceItems: localStorage.getItem("invoiceItems")
  ? JSON.parse(localStorage.getItem("invoiceItems"))
  : [],
   error: null,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // if findIndex is empty it will return -1
       const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
       if(itemIndex >= 0){
         state.cartItems[itemIndex].cartTotalQuantity += 1
         state.invoiceItems[itemIndex].cartTotalQuantity += 1

       }else{
        const tempProduct = {...action.payload, cartTotalQuantity:1}
        state.cartItems.push(tempProduct);
        state.invoiceItems.push(tempProduct);
       }    
       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
       localStorage.setItem("invoice", JSON.stringify(state.cartItems));
    },
    
    removeFromCart: (state , action)=>{
      const UpdatedCart =  state.cartItems.filter(
              (cartItem)=> cartItem.id !== action.payload.id
            );
      state.cartItems = UpdatedCart;   
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));  
      localStorage.setItem("invoice", JSON.stringify(state.cartItems));
    },

    decreaseCart: (state, action) => {
        const ItemIndex  = state.cartItems.findIndex(item => item.id === action.payload.id);
        if(state.cartItems[ItemIndex].cartTotalQuantity > 1 ){
           state.cartItems[ItemIndex].cartTotalQuantity -= 1;
        }
        else if(state.cartItems[ItemIndex].cartTotalQuantity === 1 ){
          const UpdatedCart =  state.cartItems.filter(
            (cartItem)=> cartItem.id !== action.payload.id
          );
          state.cartItems = UpdatedCart;   
        }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));   
      localStorage.setItem("invoice", JSON.stringify(state.cartItems));

    },

    clearCart:(state, action)=>{
       state.cartItems = []
       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearInvoice:(state, action)=>{
      state.invoiceItems = []
      localStorage.setItem("cartItems", JSON.stringify(state.invoiceItems));
   }
  }, 
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, decreaseCart, clearCart, clearInvoice} = cartSlice.actions
export const getAllCartProduct = (state)=> state.cart.cart;
export const totalPriceInCart = (state) =>state.cart.cartItems.reduce((total, item)=> total += item.cartTotalQuantity * item.price, 0)
export const totalInvoice = (state) =>state.cart.cartItems.reduce((total, item)=> total += item.cartTotalQuantity * item.price, 0)
export default cartSlice.reducer