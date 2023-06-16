import React from 'react'
import Navbar from './scenes/navbar/index'
import Home from './scenes/home/index'
import Benifit from './scenes/benifits/index'
import OurClasses from './scenes/ourClasses'
import Contact from  './scenes/contactUs'
import Footer from './scenes/footer'



const Welcome = () => {
  
  return (
    <>
       <section>
             <Navbar/>
             <Home/>
             <Benifit/>
             <OurClasses/>
             <Contact/>
             <Footer/>
       </section>
    </>
    
  )
}

export default Welcome