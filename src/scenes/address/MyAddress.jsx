import React from 'react'
import { useEffect, useState } from 'react'
import Logo from "../../assets/Logo.png"
import {auth,db} from "../../firebase"

const MyAddress = () => {

    // const [data, setData] = useState([]);
    const [building, setBuilding] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [phone, setPhone] = useState("");

    const getData = () =>{
      try {
         db.collection('users')
         .doc(auth.currentUser.uid).get()
         .then((snapshot)=>{
           if(snapshot.exists){
              setBuilding(snapshot.data().building)
              setCity(snapshot.data().city)
              setPincode(snapshot.data().pincode)
              setPhone(snapshot.data().number)
            }else{
              alert("Error")
            }
         })
      } catch (error) {
          alert("Error")
      }
  }
  
  useEffect(()=>{
       getData()
  },[])
   
  return (
     
     <section>
        <div className="w-[90%] mx-auto   relative z-[-5] sm:w-[70%] sm:mt-24 h-60 rounded-lg  md:mt-0 sm:max-w-md xl:p-0 border-2  shadow-xl opacity-95">
                <div className='p-6'>
                       <img src={Logo} alt="" />
                </div>
                <div className='px-6' >
                    <h1>Building: {building}</h1>
                    <p><span>City</span>: {city}</p>
                    <p><span>Pincode</span>: {pincode}</p>
                    <p><span>Phone</span>: {phone}</p>
                  </div>
        </div>
     </section>
  )
}

export default MyAddress