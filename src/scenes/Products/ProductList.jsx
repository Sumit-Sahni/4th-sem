import React from 'react'
import {motion } from 'framer-motion';
import {useState } from 'react'
import Logo from '../../assets/Logo.png'
import protine from "../../assets/protine.jpg"
import {useSelector, useDispatch} from "react-redux"
import {BsFillHandbagFill,} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';
import {getAllProduct } from '../../store/productSlice'
import { addToCart } from '../../store/addToCartSlice'; 
import  useMediaQuery from "../hooks/useMediaQuery.ts"
import {Link } from 'react-router-dom'

const ProductList = () => {
     
    const flexBetween ="flex  items-center justify-between"
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const [isTopOfPage] = useState(false);
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow-xl"


    const products  = useSelector(getAllProduct)
    const cart = useSelector((state)=> state.cart)
    const dispatch = useDispatch();

    const handleAddToCart = (product)=>{
        dispatch(addToCart((product)));
    }

  
    // const handleAddToCart = (product) => {
    //   const updatedProducts = [...addedProducts];
    //   const index = updatedProducts.findIndex((p) => p.id === product.id);
    //   if (index !== -1) {
    //     updatedProducts[index] = { ...updatedProducts[index], added: true };
    //   } else {
    //     updatedProducts.push({ ...product, added: true });
    //   }
    //    setAddedProducts(updatedProducts);
    // };
  return (
    <>
      
      <nav>
        <div className={`${navbarBackground} ${flexBetween} bg-primary-100  fixed top-0 z-30 w-full py-6  `}>

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
                      <Link to={"/equipment"}>Gym Equipment</Link>
                    </div>
                    <div>
                    <Link to={"/cart"} className="relative ">
                      <BsFillHandbagFill className={` w-8 h-8  cursor-pointer  ${cart.cartItems.length ? "text-green-500" : "text-black"}`}>
                               
                      </BsFillHandbagFill>
                      <div className="w-8 h-8 absolute  -top-4 left-10 flex items-center justify-center rounded-full">
                         <h1 className="text-black font-extrabold font-montserrat">{cart.cartItems.length}</h1>
                      </div>
                    </Link>  
                    
                    </div>
                </div>)
                :(
                     <button
                      className=" rounded-full bg-secondary-500 p-2"
                      onClick={()=>setIsMenuToggled(!isMenuToggled)}
                     >
                     <AiOutlineClose className=" h-6 w-6 text-white"/>
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
                              <h1 className="text-black">0</h1>
                           </div>
                        </Link>  
                    </div>
                </div>
            </motion.div>
          )}
      </nav>

      <div className="w-full  md:h-[90vh]">
             <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:1.5}}
               className=" bg-fixed before:absolute w-full h-full top-0  bg-contain md:bg-center " style={{backgroundImage:`url(${protine})`}}>
                  <div className=' md:h-60 bg-white  left-20 bottom-0 w-1/4 absolute  border border-primary-500 shadow-2xl'>
                     <div className='hidden md:block w-full py-14 px-4'>
                        <h1 className='hidden md:block text-4xl font-montserrat font-semibold'>EVOGYM</h1>
                         <p className=' text-left'>Get into the mind of one of pro tennis's top stars.</p>
                          <button className="mt-2 text-2xl font-semibold  px-10 py-2 cursor-pointer border border-black" >
                         Learn More
                         </button>
                     </div>
                     
                  </div>
             </motion.div>
         </div>


      <div className="mt-24 flex-col sm:flex-row items-center justify-center flex sm:flex-wrap ">

        {
          products.map((product, index)=>{
              return(
             <div key={index} className="w-72 h-[600px] mx-2  my-4 flex-col flex hover:shadow rounded-2xl justify-evenly p-8">
                 <img src={product.image} alt={product.title} className="h-52 overflow-hidden object-contain"/>
                 <div className="text-center ">
                     <h1 className="text-xl font-mono text-black font-semibold">{product.title}</h1>
                     <div className="py-2">
                       <h1 className=" text-slate-700 font-semibold">₹ {product.price}</h1>
                     </div>
                 </div>
                <div className="mt-2 text-center rounded-lg  shadow-2xl  border-2  px-10 py-2 cursor-pointer bg-primary-100 hover:border-2 hover:bg-primary-500">
                  <button onClick={()=> handleAddToCart(product)} className=" cursor-pointer " >
                      Add
                 </button>             
                 </div>
             </div>
              )
           })
        }
    </div>
    </>
  )
}

export default ProductList