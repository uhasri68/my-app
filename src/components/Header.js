import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import  {auth} from "../utilis/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {addUsers , removeUser} from '../utilis/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  const handleSignOut = () =>{
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }

  useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL } = user;
        dispatch(addUsers({
          uid:uid, email: email, displayName: displayName, photoURL

        }));
        navigate("/browse")

        // Update my Store
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

      }
    });

   }, []);


  return (

    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
            
         <img  className="w-44"src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'></img> 
         
         
       {user && <div className='flex p-3'>

       <img className='w-10 h-10' alt="logo-icon" src={user?.photoURL}></img>

    <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
    
    </div>}
    </div>
  )
}

export default Header