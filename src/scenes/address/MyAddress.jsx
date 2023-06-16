import React from 'react'
import { useEffect, useState } from 'react'
import Logo from "../../assets/Logo.png"
import {auth,db} from "../../firebase"

const MyAddress = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const snapshot = await db.collection('users').get();
          const extractedData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setData(extractedData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
     
     <section>
        <div className="w-[90%] mx-auto   relative z-[-5] sm:w-[70%] sm:mt-24 h-60 rounded-lg  md:mt-0 sm:max-w-md xl:p-0 border-2  shadow-xl opacity-95">
                <div className='p-6'>
                       <img src={Logo} alt="" />
                </div>
                {data.map((item) => (
                  <div className='px-6' key={item.id}>
                    <h1 className='font-bold font-montserrat'>{auth.currentUser.email}</h1>
                    <p><span className='font-semibold'>Building</span>: {item.building}</p>
                    <p><span className='font-semibold'>City</span>: {item.city}</p>
                    <p><span className='font-semibold'>Pin-Code</span>: {item.number}</p>
                    <p><span className='font-semibold'>Phone Number</span>: {item.pincode}</p>
                  </div>
                ))}
        </div>
     </section>
  )
}

export default MyAddress