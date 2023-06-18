import React from 'react'
import {motion } from 'framer-motion';
import Nav from "./Nav"
import Future from './Future';
import Expert from "./Expert"
import Nutri from "../../assets/Nutri.jpg"

const Nutritionist = () => {
  return (
   <>
    <Nav/>
    <div className="w-full h-[80vh] sm:h-[90vh] relative">
             <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:1.5}}
               className="before:absolute bg-fixed  w-full h-full bg-cover bg-center bg-no-repeat object-contain" style={{backgroundImage:`url(${Nutri})`}}>
                 <div className="px-2 md:w-3/4 top-40  mx-auto md:top-58 md:left-20 absolute">
                    <motion.h1 initial={{x:-100}} animate={{x:0}} transition={{duration:0.5}} className=" text-4xl font-bold md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-900  to-red-900 ">Love Yourself</motion.h1><br/><motion.h1 initial={{x:-80}} animate={{x:0}} transition={{duration:0.5}} className="text-transparent bg-clip-text bg-gradient-to-r from-red-900  to-red-900 text-4xl font-bold md:text-6xl pb-4">Enough To Live</motion.h1>
                    <motion.h1 initial={{x:-70}} animate={{x:0}} transition={{duration:0.5}} className=" text-4xl font-bold md:text-6xl  text-transparent bg-clip-text bg-gradient-to-r from-red-900  to-red-900 pb-4 ">A Healthy Life.</motion.h1>
                    <div className="w-4/5 md:w-3/5  font-semibold py-4">
                      <button className=" rounded-lg bg-primary-300 px-20 py-3 transition duration-500 hover:text-white">
                          Get Started
                      </button>
                    </div>
                 </div>
             </motion.div>
         </div>
    <Future/>  
    <Expert/>   
   </>
  )
}

export default Nutritionist