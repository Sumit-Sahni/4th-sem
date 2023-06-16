import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./productSlice"
import cartReducer from './addToCartSlice'
import equipmentReducer from './eqipmentSlice'

 const store = configureStore({
  reducer: {
     product: productReducer,
     equipment: equipmentReducer,
     cart: cartReducer,
  },
})

export default store