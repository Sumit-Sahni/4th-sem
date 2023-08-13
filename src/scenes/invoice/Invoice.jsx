import React, { useState } from 'react'
import Logo from "../../assets/Logo.png"
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {totalInvoice,clearInvoice} from "../../store/addToCartSlice";
import {auth,db} from "../../firebase"







const Invoice = () => {
     const [Invoice, SetInvoice] = useState([])
    //  const dispatch =  useDispatch()
    useEffect(() => {
        // Get item from localStorage
        const inVoice = JSON.parse(localStorage.getItem("invoice"));
        SetInvoice(inVoice)
        // Do something with the retrieved item
        if (inVoice) {
          // Process the inVoice data
          console.log("Retrieved inVoice:", inVoice);
        }
      }, []);
      const totalPrice = useSelector(totalInvoice)

    //  Get Invoice Address
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
 <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-3/5 bg-white shadow-lg">
                <div className="flex justify-between p-4">
                    <div>
                        <img src={Logo} alt="Logo"/>
                        <p className="text-base">If account is not paid within 7 days the credits details supplied as
                            confirmation.</p>
                    </div>
                    <div className="p-2">
                        <ul className="flex">
                            <li className="flex flex-col items-center p-2 border-l-2 border-indigo-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                <span className="text-sm">
                                    www.larainfo.com
                                </span>
                                <span className="text-sm">
                                    www.lorememhh.com
                                </span>
                            </li>
                            <li className="flex flex-col p-2 border-l-2 border-indigo-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-sm">
                                    2821 Kensington Road,Avondale Estates, GA 30002 USA
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-0.5 bg-indigo-500"></div>
                <div className="flex justify-between p-4">
                    <div>
                        <h6 className="font-bold">Order Date : <span className="text-sm font-medium"> 12/12/2022</span></h6>
                        <h6 className="font-bold">Order ID : <span className="text-sm font-medium"> 12/12/2022</span></h6>
                    </div>
                    <div className="w-40">
                        <address className="text-sm">
                            <span className="font-bold"> Billed From EVOGYM : </span>
                            Joe Smith
                            795 Folsom Ave
                            San Francisco, CA 94107
                            P: (123) 456-7890
                        </address>
                    </div>
                    <div className="w-60">
                        <address className="text-sm">
                            <span className="font-bold">Ship To :</span>
                            <h1>{building},{city},<br/>{pincode},<br/>{phone}</h1>
                        </address>
                    </div>
                    <div></div>
                </div>
                <div className="flex justify-center p-4">
                    <div className="border-b border-gray-200 shadow">
                        <table className="">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        P_ID
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Product Name
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Quantity
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Rate
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Subtotal
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                            {
                                 Invoice.map((item, index)=>{
                                           return (
                                            <tr key={index} className="whitespace-nowrap">
                                   
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                #{item.id}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-900">
                                                    {item.title}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-500">{item.cartTotalQuantity}</div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                            ₹  {item.price}
                                            </td>
                                            <td className="px-6 py-4">₹ 
                                            {item.price * item.cartTotalQuantity}
                                            </td>
                                        </tr>
                                           )
                                        })
                             }
                               
                               
                                <tr className="">
                                    <td colspan="3"></td>
                                    <td className="text-sm font-bold">Sub Total</td>
                                    <td className="text-sm font-bold tracking-wider"><b>₹ {totalPrice}</b></td>
                                </tr>
                              
                                <tr>
                                    <th colspan="3"></th>
                                    <td className="text-sm font-bold"><b>Tax Rate</b></td>
                                    <td className="text-sm font-bold"><b>₹ 18%</b></td>
                                </tr>
                              
                                <tr className="text-white bg-gray-800">
                                    <th colspan="3"></th>
                                    <td className="text-sm font-bold"><b>Total</b></td>
                                    <td className="text-sm font-bold"><b>₹ {totalPrice + 0.18*100 }.00</b></td>
                                </tr>
                              

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-between p-4">
                    <div>
                        <h3 className="text-xl">Terms And Condition :</h3>
                        <ul className="text-xs list-disc list-inside">
                            <li>All accounts are to be paid within 7 days from receipt of invoice.</li>
                            <li>To be paid by cheque or credit card or direct payment online.</li>
                            <li>If account is not paid within 7 days the credits details supplied.</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h3>Signature</h3>
                        <div className="text-4xl italic text-indigo-500">AAA</div>
                    </div>
                </div>
                <div className="w-full h-0.5 bg-indigo-500"></div>

                <div className="p-4">
                    <div className="flex items-center justify-center">
                        Thank you very much for doing business with us.
                    </div>
                    <div className="flex items-end justify-end space-x-3">
                        <button className="px-4 py-2 text-sm text-green-600 bg-green-100">Print</button>
                        <button className="px-4 py-2 text-sm text-blue-600 bg-blue-100">Save</button>
                        <button  className="px-4 py-2 text-sm text-red-600 bg-red-100">Cancel</button>
                    </div>
                </div>

            </div>
        </div>
 </section>  
)
}

export default Invoice