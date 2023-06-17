import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   equipment:[
    {
      id: 15,
      title: "Elliptical Trainer",
      price: 7992,
      description: "Full-body elliptical trainer for effective cardio and toning",
      image: "https://images-cdn.ubuy.co.in/633ab5d32468db1dcb2ff572-sunny-health-amp-fitness.jpg"
    },
    {
      id: 16,
      title: "Rowing Machine",
      price: 6992,
      description: "Indoor rowing machine for cardiovascular fitness",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcRom7nL-a97nBxXILHUdnsVsCEaqH_mWRQ&usqp=CAU"
    },
    {
      id: 17,
      title: "Exercise Ball",
      price: 1922,
      description: "Versatile stability ball for core strengthening",
      image: "https://m.media-amazon.com/images/I/51T5RPDAS1L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 18,
      title: "Resistance Bands",
      price: 2942,
      description: "Set of resistance bands for strength exercises",
      image: "https://cdn.shopify.com/s/files/1/0554/1704/5132/products/TRX_strengthband_all-2.jpg?v=1663792295"
    },
        {
            id: 11,
            title: "Treadmill",
            price: 9992,
            image: "https://www.powermaxfitness.net/uploads/thumb/800_600_1657194442_product_07072022171722.jpg",
            description: "High-quality treadmill for effective cardio workouts",
        },
          {
            id: 12,
            title: "Dumbbells",
            price: 4922,
            image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/FJ63wpjqXqeGkPygwJCoMd3D",
            description: "Adjustable dumbbells for versatile strength training",
        },
          {
            id: 13,
            title: "Exercise Bike",
            price: 5997,
            description: "Indoor exercise bike for low-impact cardio workouts",
            image: "https://rukminim1.flixcart.com/image/850/1000/kosxzm80/exercise-bike/u/o/b/classic-recumbent-bike-exercise-cycle-with-back-support-seat-for-original-imag36kquwvkgmya.jpeg?q=90"
          },
          {
            id: 14,
            title: "Weight Bench",
            price: 1992,
            description: "Sturdy weight bench for various strength exercises",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9dZf2V-qGohOV8yx5TB2jNQQ7RorHzvQ5A&usqp=CAU"
          },
        
          {
            id: 19,
            title: "Pull-Up Bar",
            price: 4944,
            description: "Doorway pull-up bar for upper body strength",
            image: "https://m.media-amazon.com/images/I/51-8pkfUYcL._SX522_.jpg"
          },
          {
            id: 20,
            title: "Yoga Mat",
            price: 2955,
            description: "Non-slip yoga mat for comfortable workouts",
            image: "https://m.media-amazon.com/images/I/41I1UEiuDfL._SX300_SY300_QL70_FMwebp_.jpg"
          },
          {
            id: 21,
            title: "Stationary Bike",
            price: 899,
            description: "Stationary exercise bike for intense cycling sessions",
            image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/PPQn1tE22CHF2JB61TDqcUag"
          },
          {
            id: 22,
            title: "Weight Plates",
            price: 2888,
            description: "Individual weight plates for strength training",
            image: "https://5.imimg.com/data5/MK/QV/KO/SELLER-8753206/olympic-weight-plates.jpg"
          },
          {
            id: 23,
            title: "Bench Press",
            price: 3496,
            description: "Sturdy bench press for chest and arm workouts",
            image: "https://m.media-amazon.com/images/I/41Cl3B7tAqL._SX300_SY300_QL70_FMwebp_.jpg"
          }
     ]
} 

const eqipmentSlice = createSlice({
    name:'equipment',
    initialState,
    reducers:{
         setProduct: (state, action)=>{
             state.equipment = action.payload;
             console.log(state.equipment);
         },
    }
})


export const  {setProduct} = eqipmentSlice.actions;
export const getAllEquipmentProduct = (state)=> state.equipment.equipment;
export default eqipmentSlice.reducer;