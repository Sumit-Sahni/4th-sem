import React from 'react'
import { useState, useEffect } from 'react'
import  {auth,db} from "./firebase"
import { useNavigate } from 'react-router'

const HomeScreen = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigate("/welcome");
          }
        })
        return unsubscribe;
      },[navigate])
    
    const handleSignUp = async() => {
      await auth.createUserWithEmailAndPassword(email, password)
      try {
        db.collection('users').doc(auth.currentUser.uid)
        .set({
           email,
        })
      } catch (error) {
         alert(error.message)
      }
      }

      const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
          })
          .catch(error => alert(error.message))
      }
  return (
    <div>
<section className="bg-gray-50 dark:bg-gray-900">
         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                   EVOGYM
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                      type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email- abc@gmail.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)}
                      type="password" name="password" id="password" placeholder="1234567" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
              </form>
              <button onClick={handleSignUp} type="submit" className="border w-full text-white focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-700 hover:border-none">Create an account</button>
              <button onClick={handleLogin} type="submit" className="border w-full text-white focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-green-900 hover:border-none">Login</button>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default HomeScreen