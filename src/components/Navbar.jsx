import React from 'react'
import {signOut} from 'firebase/auth';
import { auth } from '../firebase';


const Navbar = () => {


  return (
    <div className='navbar'>
        <span className='logo'>Lama chat</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/9968493/pexels-photo-9968493.jpeg?cs=srgb&dl=pexels-vlada-karpovich-9968493.jpg&fm=jpg" alt="" />
            <span>John</span>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar