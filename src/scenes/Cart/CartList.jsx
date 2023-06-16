import React from "react";
import {motion} from 'framer-motion'
import "../../App.css"
import { useState} from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png'
import EmptyCart from "../../assets/emptycart.mp4"
import {BsFillHandbagFill,} from 'react-icons/bs';
import { AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import  useMediaQuery from "../hooks/useMediaQuery.ts"
import { useDispatch, useSelector, } from "react-redux";
import {addToCart, removeFromCart, decreaseCart, clearCart,totalPriceInCart} from "../../store/addToCartSlice";
import Address from "../address/Address";
import MyAddress from "../address/MyAddress";



const CartList = () => { 
       const [isTopOfPage] = useState(false);
      //  const [activeButton, setActiveButton] = useState(4);
       const [addressPopup, setAddressPopup] = useState(false)
       const [isMenuToggled, setIsMenuToggled] = useState(false);
       const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
       const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow-xl"
       const flexBetween ="flex  items-center justify-between"
   
       const cart = useSelector((state)=> state.cart)
       const totalPrice = useSelector(totalPriceInCart)
       const dispatch =  useDispatch()
   
      const handlerRemove = (product)=>{
          dispatch(removeFromCart(product))
       }
       const handleDecrease = (product)=>{
         dispatch(decreaseCart(product))
      }
      const handleIncecrease = (product)=>{
       dispatch(addToCart(product))
      }
     
      const ClearCart = ()=>{
       dispatch( clearCart())
      }
      
      const handleAddressPopUp = ()=>{
          setAddressPopup(!addressPopup)
      }

      // RAZORPAY
      const loadScript = (src) => {
        return new Promise((resovle) => {
          const script = document.createElement("script");
          script.src = src;
    
          script.onload = () => {
            resovle(true);
          };
    
          script.onerror = () => {
            resovle(false);
          };
    
          document.body.appendChild(script);
        });
      };
      const displayRazorPay  = async (amount)=>{
         const res = await loadScript(`https://checkout.razorpay.com/v1/checkout.js`)
         if(!res){
          alert("You are Offline")
          return
         }
         const options = {
          key: "rzp_test_PMw5fC5r8iMWTN",
          currency: "INR",
          amount: amount *100,
          name: "EVOGYM",
          description: "Thanks for purchasing",
          image:
            "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",
    
          handler: function (response) {
            alert(response.razorpay_payment_id);
            alert("Payment Successfully");
          },
          prefill: {
            name: "SUMIT SAHNI",
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
       
   return (
    <div>
       <nav>
          <div className={`${navbarBackground} ${flexBetween} bg-primary-100 drop-shadow-xl fixed top-0 z-30 w-full py-6 `}>

         <div className={`${flexBetween} mx-auto w-5/6` }> 
            <div className={`${flexBetween} w-full gap-16` }>
                {/* LEFT SIDE */}
                <Link to={"/"}>
                   <img src={Logo} alt="Logo"/>
                </Link>
               
                {/* RIGHT SIDE */}
                {isAboveMediumScreen ?(
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                      <Link to={"/products"}>Product</Link>
                      <Link to={"/equipment"}>Gym Equipment</Link>

                      <button onClick={()=> ClearCart()} className="cursor-pointer">Clear Cart</button>
                    </div>
               
                    <div>
                    <Link to={"/cart"} className="relative ">
                   
                     <BsFillHandbagFill className="w-8 h-8  cursor-pointer ">           
                     </BsFillHandbagFill>
                     <div className="w-8 h-8 absolute  -top-4 left-10 bg-primary-300 flex items-center justify-center rounded-full">
                        <h1 className="text-black">{cart.cartItems.length}</h1>
                     </div>
                    </Link>  
                    
                    </div>
                </div>)
                :(
                     <button
                      className=" rounded-full bg-secondary-500 p-2"
                      onClick={()=>setIsMenuToggled(!isMenuToggled)}
                     >
                     <AiOutlineMenu className=" h-6 w-6 text-white"/>
                     </button>
                  )}
              </div>
           </div>
        </div>
 
        {/* MOBILE MENU MODAL */}
          {!isAboveMediumScreen && isMenuToggled && (
            <motion.div 
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{duration:0.5}}
             exit={{opacity:0}}
             className="fixed right-0  bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/*Close ICON */}
                <div className="flex justify-end p-10">
                    <button  onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                     
                    <AiOutlineClose className="w-6 h-6 text-gray-400" />
                    </button>
                </div>
                {/* MENU ITEMS */}
                <div className="w-full  h-[50%]">
                <div className={`ml-[33%] flex flex-col gap-6`}>
                      <Link to={"/"}>Home</Link>
                        <Link to={"/cart"} className="relative ">
                           <BsFillHandbagFill className="w-8 h-8  cursor-pointer ">
                                    
                           </BsFillHandbagFill>
                           <div className="w-8 h-8 absolute  -top-4 left-10 bg-primary-300 flex items-center justify-center rounded-full">
                              <h1 className="text-black">{cart.cartItems.length}</h1>
                           </div>
                        </Link>  
                    </div>
                </div>
            </motion.div>
          )}
      </nav>

      <div className="mt-24" >
        { cart.cartItems.length === 0 ?(
               <div className="w-full h-full">
                 <video className="w-screen h-full relative " loop={true} autoPlay>
                      <source src={EmptyCart}  type="video/mp4" />
                 </video>
                 <div className="w-[100%] bg-primary-300  absolute h-[60vh]  sm:h-[120vh] left-0 top-0 opacity-60 flex flex-col justify-center items-center">
                      <h1 className=" text-white md:text-6xl font-bold ">Your Cart Is Empty</h1>
                 </div>
               </div>
          ):
           ( <div className="flex flex-col sm:flex-row">
              <div className="mt-8 sm:w-[50%] px-4 md:px-24 overflow-y-scroll h-[80vh]">
                                <div className="flow-root ">
                                   {
                                    cart.cartItems.map((product, index)=>{
                                       return(
                                          <div key={index}>
                                            <li key={product.id} className="flex py-6">
                                       <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                         <img
                                           src={product.image}
                                           alt={product.title}
                                           className="h-full w-full object-cover object-center"
                                         />
                                       </div>
       
                                       <div className="ml-4 flex flex-1 flex-col">
                                         <div>
                                           <div className="flex justify-between text-base font-medium text-gray-900">
                                             <h3>
                                              
                                             </h3>
                                             <p className="ml-4">₹ {product.price * product.cartTotalQuantity}</p>
                                           </div>
                                           <p className="mt-1 text-sm text-gray-500">{product.title}</p>
                                         </div>
                                         <div className="flex flex-1 items-end justify-between text-sm">
                                           <div className="w-24 h-8 border flex justify-around items-center rounded-lg">
                                            Qty
                                                <div onClick={()=> handleDecrease(product)}><h1 className="cursor-pointer">-</h1></div>
                                                <div><h1>{product.cartTotalQuantity}</h1></div>
                                                <div onClick={()=> handleIncecrease(product)}><h1 className="cursor-pointer">+</h1></div>
                                           </div>
       
                                           <div className="flex">
                                             <button
                                               type="button"
                                               className="font-medium text-indigo-600 hover:text-indigo-500"
                                               onClick={()=> handlerRemove(product)}
                                             >
                                               Remove
                                             </button>
                                          
                                           </div>
                                         </div>
                                       </div>
                                     </li>
                                     <hr className=" shadow-2xl h-8  mx-auto" ></hr>
                                          </div>
                                       )
                                    })
                                   }      
                  </div>
                  </div>
       
                 <div className="sm:w-[35%] mx-4 px-4 my-12 items-end ">
                     <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                             <div className="flex justify-between text-base font-medium text-gray-900">
                               <p>Subtotal</p>
                               <h1 className=" font-bold">₹ {totalPrice}</h1>
                             </div>
                             <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                             <div className="mt-6">
                               <Link
                                 onClick={()=> displayRazorPay(totalPrice)}
                                 href="#"
                                 className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                               >
                                 Checkout
                               </Link>
                               
                             </div>
                             <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                               <p>
                                 or - 
                                 <button
                                   type="button"
                                   className="font-medium text-indigo-600 hover:text-indigo-500"
                                 
                                 >
                                   Continue Shopping
                                   <span aria-hidden="true"> &rarr;</span>
                                 </button>
                               </p>
                             </div>
                             <button onClick={()=> handleAddressPopUp(1)} className="font-semibold font-montserrat text-lg mx-1" >Add Address</button>
                             <Address trigger={addressPopup} setTrigger={setAddressPopup} />
                     </div>
                     <MyAddress/>
                 </div>
              </div>
            )}
      </div>
     
    </div>
  )
}

export default CartList