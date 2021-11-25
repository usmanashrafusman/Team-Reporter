import React from 'react'

import { app, db } from './FirebseConfig';
import { doc, setDoc } from "firebase/firestore";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default function SignUpOwner() {

    const signUpCompany = ()=>{
        const fname = document.getElementById("fname").value
        const lname = document.getElementById("lname").value
        const cname = document.getElementById("cname").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const desc = document.getElementById("desc").value

   setDoc(doc(db, "Companies", email), {
    fname,
    lname,
    cname,
    email,
    password,
    desc
});
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
alert("Your Account Is Created")
    const user = userCredential.user;
  
  })
  .catch((error) => {
    alert("An Error Occured")
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    }

    return (
        <div className="main">
        <div className="panel">
            <div className="upper-panel" style={{height:"18%"}}>
             <p className="wel">Sign Up To Team Reporter</p> 
            </div>
        
        <div className="main-panel">
            <input type="text" id="fname" placeholder="Enter Your First Name"/>
            <input type="text" id="lname"  placeholder="Enter Your Last Name"/>  
            <input type="text" id="cname"  placeholder="Your Company Name"/>
         <input type="email" id="email"  placeholder="Enter Your Company Email"/>
         <input type="password"  id="password" placeholder="Enter Your Password"/>
         <input type="text"  id="desc" placeholder="Company Descriptions"/>  
         <label htmlFor="Profile">Choose a Company Picture:  
         <input type="file" name="Profile"/></label>
         <br/>
         <input type="button" onClick={signUpCompany} value="Sign Up"/>
        </div>
     
  
          
      
        </div>
     
         </div>
    )
}
