import React, { useState } from "react";
import Header from "./Header";
 
const Login =()=>{
    const[isSignInForm , setIsSignInForm] = useState(true)
  
    const toggleButtonClick =()=>{
        setIsSignInForm(!isSignInForm)

    }

    return <div>
        <Header/>
            <div>
            <img  className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="bgImge">
            </img>
        </div>
        <div>
        <form className=" w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white opacity-80 ">

          <h1 className="font-bold text-2xl py-4 mx-2">{isSignInForm? "Sign In" :"Sign Up"}</h1>

         {!isSignInForm && (<input
          type="text" 
          placeholder="Full Name"
          className="p-4 m-2 w-full bg-gray-500 rounded-lg"/>)} 


            <input type="text" placeholder="Email Address" className="p-4 m-2 w-full bg-gray-500 rounded-lg"/>

            <input type="password" placeholder="Password" className="p-4 m-2 w-full bg-gray-500 rounded-lg"/> 

            <button className="py-2 m-2 bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In" :"Sign Up"}</button>

            <p className="py-4 m-2 cursor-pointer" onClick={toggleButtonClick}>{isSignInForm? "New To Netflix? Sign UP Now" :"Already Registerd? Sign In Now"}</p>
    
        </form>
        </div>
    </div>
}
export default Login;
