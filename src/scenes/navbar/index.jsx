import { useState } from "react"
import { useNavigate } from 'react-router'
import { motion } from "framer-motion"
import Logo  from  "../../assets/Logo.png"
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useMediaQuery from "../hooks/useMediaQuery.ts"
import {auth,} from "../../firebase"
import { useDispatch} from "react-redux";
import {clearCart} from "../../store/addToCartSlice"


const Navbar = () => {
    const dispatch = useDispatch()
    const flexBetween ="flex  items-center justify-between"
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const [isTopOfPage] = useState(false);
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow-xl"
    
     const navigate = useNavigate();
     const handleSignOut = () =>{
     auth.signOut()
    .then(()=>{
      dispatch(clearCart())
      navigate("/")
    }).catch((error)=>{
         alert(error.message)
    })
  }

  
   return (
      <nav>
        <div className={` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 border `}>
        <div className={`${flexBetween} mx-auto w-5/6` }> 
            <div className={`${flexBetween} w-full gap-16` }>
                {/* LEFT SIDE */}
                <img src={Logo} alt="Logo"/>
                {/* RIGHT SIDE */}
                {isAboveMediumScreen ?(
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                         <Link to="/nutritionist" className=" font-montserrat font-semibold">Nutritionist</Link>
                         <Link to="/equipment" className=" font-montserrat font-semibold">Equipments</Link>
                         <Link to="/products" className=" font-montserrat font-semibold">Go to Products</Link>
                         <Link to="/package" className=" font-montserrat font-semibold">Package</Link>
                    </div>
                 
                    <div>
                        <div className={`${flexBetween} gap-8`}>
                             <button onClick={()=>handleSignOut()} className="font-semibold" >Sign Out</button>
                             <button className="transition duration-500 hover:text-primary-300 cursor-pointer borderfont-montserrat font-semibold" >{auth.currentUser.email}</button>
                        </div>
                    </div>
                </div>)
                :(
                     <button
                      className=" rounded-full bg-secondary-500 p-2"
                       onClick={()=>setIsMenuToggled(!isMenuToggled)}
                       >
                      <AiOutlineMenu className=" h-6 w-6 "/>
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
                    <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                       <AiOutlineClose className="w-6 h-6 text-gray-400" /> 
                    </button>
                </div>
                {/* MENU ITEMS */}
                <div className="w-full  h-[50%]">
                <div className={`ml-[33%] flex flex-col gap-6`}>
                        <h1>Home</h1>
                        <h1>About</h1>
                        <h1>Contact</h1>
                        <Link to="/products">Go to Products</Link>
                    </div>
                </div>
            </motion.div>
          )}
      </nav>
  )
}

export default Navbar;