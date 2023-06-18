import React from 'react'
import {motion } from 'framer-motion';
import Doctor from "../../Expert.json"
import { Link } from 'react-router-dom';


const Expert = () => {
  console.log(Doctor)
  return (
     <>
      <section className=' '>
         <motion.h1 initial={{y:-100}} whileInView={{y:0}} transition={{duration:0.5}} className="p-12 text-4xl font-semibold md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-900  to-red-900 text-center ">Our Expert's</motion.h1>
         <div className='p-10'>
            <div className=' md:w-[90%] h-auto py-12 mx-auto flex flex-row flex-wrap justify-center  lg:flex-nowrap '>
                {
                  Doctor.map((doc, i)=>{
                     return(
                      <div  key={i} className='w-[430px] rounded-2xl  hover:border-primary-100 hover:border-2 cursor-pointer mx-2 my-2 p-4  border flex flex-col'>
                              <div className='w-3/5 '>
                                  <img src={doc.image} alt="" className='w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full' />
                              </div>
                              <div className='py-4'>
                                  <h1><span className=' font-bold font-serif'>Name:</span> {doc.name}</h1>
                                  <h1><span className=' font-bold font-serif'>Email </span> {doc.email}</h1>
                                  <h1><span className=' font-bold font-serif'>Specialization</span> {doc.specialization}</h1>
                                  <h1 className='text-sm mb-4'> <span className=' font-bold font-serif'>Certifications:</span> {doc.certifications} </h1>

                                  <button className='px-6 py-1 bg-primary-300 hover:bg-primary-500  rounded-xl text-white cursor-pointer'>
                                    <Link to={`mailto:${doc.email}`} target="_top" className='text-sm text-black'>Email</Link>
                                  </button>
                              </div>
                      </div>
                     )
                  })
                }
            </div>
         </div>
      </section> 
    </>
  )
}

export default Expert