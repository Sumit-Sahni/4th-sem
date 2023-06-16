import React from 'react'
import {motion } from 'framer-motion';
import {useState } from 'react'
import Logo from '../../assets/Logo.png'
import {BsFillHandbagFill,} from 'react-icons/bs';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import  useMediaQuery from "../hooks/useMediaQuery.ts"
import {Link } from 'react-router-dom'


const Nav = () => {

    const flexBetween ="flex  items-center justify-between"
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const [isTopOfPage] = useState(false);
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow-xl"

  return (
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
                  <Link to={"/products"}>product</Link>
                </div>
                <div>
                
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
                          <h1 className="text-black">0</h1>
                       </div>
                    </Link>  
                </div>
            </div>
        </motion.div>
      )}
  </nav>
  )
}

export default Nav