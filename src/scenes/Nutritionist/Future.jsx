import React from 'react'
import Doctor from "../../assets/doctor.jpg"

const Future = () => {
  return (
      <section className=' grid items-center py-4 sm:py-8'>
        <div className='w-[95%] p-4 mx-auto flex flex-col md:flex-row sm:p-16'>
             <div className='w-full md:w-[80%] h-full  mx-1 flex flex-col p-6 '>
                 <h1>You Future</h1>
                  <div className='pb-6'>
                       <h1 className='text-2xl sm:text-4xl md:text-5xl font-dmsans font-semibold text-[#333333]'>You can’t change the past, but you can start today and change the future.</h1>
                  </div>
                  <div>
                       <div className=''>
                           <h1 className=' sm:text-xl font-semibold'>Are your digestive symptoms debilitating and making you miserable?</h1>
                       </div>
                            
                       <div className='py-1'>
                            <p
                             className='text-slate-700 leading-8'
                            >Feelings of frustration, overwhelm, embarrassment, helplessness, alongside regular bloating, stomach spasms and cramps, acid reflux, having to run to the toilet often, or not going at all, will most definitely wear you down</p>
                       </div>
                            
                       <div className='py-2'>
                          <p
                            className='text-slate-700 leading-8'
                           >Perhaps your sparkle has faded and you don’t recognise the person looking back at you in the mirror, or you have learned to tolerate your symptoms and you’ve accepted that this is now your ‘normal’.</p>
                       </div>
                            
                  </div>
                  <div>
                       <div>
                            <h1 className='sm:text-4xl md:text-3xl font-dmsans font-semibold text-[#333333]'>YOU ARE NOT ALONE. I am here to help you.</h1>
                       </div>
                       <div>
                           <p  className='text-slate-700 leading-8' >Investigating the root cause of these symptoms is crucial for optimal, long-term health.So, make yourself a priority. Just one small step can lead to great gains. </p>
                       </div>
                  </div>
             </div>

             <div className='w-full md:w-[60%]  mx-1 flex flex-col items-center justify-center'>
                    <div className='sm:w-[70%] flex justify-center items-center'>
                        <div>
                          <img src={Doctor} alt="doctor"  className='w-[340px] h-[340px] object-cover rounded-full' />
                        </div>
                    </div>
                    <div className='w-full flex flex-col  items-center p-4 '>
                        <div><h1 className=' text-sm font-medium font-dmsans '>Take your first small step</h1></div>
                        <div className='my-2'>
                            <div className='w-full rounded-2xl px-10 py-2 border bg-primary-300'>
                                <button className='w-full'>Book a free 15 minute consultation</button>
                            </div>
                        </div>
                    </div>
             </div>
        </div>
      </section>
  )
}

export default Future