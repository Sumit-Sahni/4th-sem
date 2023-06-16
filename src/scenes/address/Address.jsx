import React from 'react'
import { useState, } from 'react'
import {motion} from 'framer-motion'
import {auth, db} from "../../firebase"





const Address = (props) => {
  
  const [formData, setFormData] = useState({
    building: "",
    city: "",
    pincode:"",
    number: ""
  });

  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setFormData((prevData)=>({
       ...prevData,
       [name]: value,
    }))
  }

  // FIREBASE

  const registerAddress = async (building,city,number,pincode)=>{
    try {
      await db.collection('users').doc(auth.currentUser.uid).set({
        building,
        city,
        number,
        pincode,
      });
      alert("Successfully registered");
      setFormData({
        building: "",
        city: "",
        number: "",
        pincode: ""
      });
    } catch (error) {
      alert(error.message);
    }
 }
 
  return ( props.trigger)?(
    <section className='w-full h-full fixed top-0 left-0 flex flex-col justify-center items-center '>
        <div className='w-[80%] md:w-[25%] mx-auto shadow-2xl sm:shadow-none '>
         <motion.div
          initial={{scale:0, opacity:0}}
          animate={{opacity:1, scale:1}}
          transition={{transition:2}}
         className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
            <div className="w-full rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 bg-primary-100  shadow-2xl ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                   EVOGYM
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 ">Building Name</label>
                      <input
                        name= "building"
                        value={formData.building}
                        onChange={handleInputChanges}
                        className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Building Name" required=""/>
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 ">City</label>
                      <input
                        name = "city"
                        value={formData.city}
                        onChange={handleInputChanges}
                        className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required=""/>
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 ">Pin Code</label>
                      <input
                       type='number'
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChanges}
                        className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pin-Code" required=""/>
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 ">Number</label>
                      <input
                       type='number'
                        name="number"
                        value={formData.number}
                        onChange={handleInputChanges}
                        className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number" required=""/>
                  </div>
                  
               </form>
                 <button  
                   onClick={()=> registerAddress(formData.building, formData.city, formData.pincode,formData.number)}
                   type="submit" className="border w-full  focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-700  text-white">Submit</button>
                 <button  onClick={()=> props.setTrigger(false)} className="border w-full  focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center bg-red-700 text-white font-extralight">X</button>
              </div>
            </div>
         </motion.div>
        </div>
        
    </section>
  ):null
}

export default Address