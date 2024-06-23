import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utilis/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from "../utilis/firebase";
import { useDispatch } from "react-redux";
import { addUsers } from "../utilis/userSlice";

 
const Login =()=>{
    const[isSignInForm , setIsSignInForm] = useState(true)
    const [errorMessage , setErrorMessage] = useState()
    const dispatch = useDispatch();

    const email = useRef(null)
    const password = useRef(null)
    const uname = useRef(null)

    const handleButtonClick = () =>{
        //validate the form data
       const message= checkValidateData(email.current.value , password.current.value);
        // uname.current.value
 
       setErrorMessage(message);
       //console.log(message);
       if(message) return;

       if(!isSignInForm){
        //Sign Up Logic
        createUserWithEmailAndPassword(
            auth,
             email.current.value,
              password.current.value
            )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: uname.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const {uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUsers({
              uid:uid, email: email, displayName: displayName, photoURL
    
            }));
    

            // Profile updated!

          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
          console.log(user);
       })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ "_"+errorMessage);

        });

       }

     else{

        //siginIn Logic
        signInWithEmailAndPassword(auth, 
          email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"_"+errorMessage);
  });
     }    
    }
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
        <form onSubmit={(e) => {
    e.preventDefault(); 
    handleButtonClick();
  }} 
         className=" w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white opacity-80 ">

          <h1 className="font-bold text-2xl py-4 mx-2" onClick={handleButtonClick}>{isSignInForm? "Sign In" :"Sign Up"}</h1>

         {!isSignInForm && (<input ref={uname}
          type="text" 
          placeholder="Full Name"
          className="p-3 m-3 w-full bg-gray-500 rounded-lg"/>)} 


            <input ref ={email} type="text" placeholder="Email Address" className="p-3 m-3 w-full bg-gray-500 rounded-lg" />

            <input ref={password} type="password" placeholder="Password" 
            className="p-3 m-3 w-full bg-gray-500 rounded-lg"/> 

            <p className="text text-red-500 font-bold text-lg px-3">{errorMessage}</p>

            <button className="py-3 m-3 bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In" :"Sign Up"}</button>

            <p className="py-4 m-2 cursor-pointer" onClick={toggleButtonClick}>{isSignInForm? "New To Netflix? Sign UP Now" :"Already Registerd? Sign In Now"}</p>
    
        </form>
        </div>
    </div>
}
export default Login;
