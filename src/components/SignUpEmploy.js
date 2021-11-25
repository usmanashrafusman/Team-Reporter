import React from 'react'
import { app, db } from './FirebseConfig';
import { useState, useEffect } from 'react'
import { collection, setDoc, query, where, onSnapshot } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export default function SignUpEmploy() {

    const SignUpEmploy=()=>{
        const fname = document.getElementById("fname").value
        const lname = document.getElementById("lname").value
        const cname = document.getElementById("cname").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const desc = document.getElementById("desc").value
     

        // setDoc(doc(db, "Accounts", email), {
                
        //         fname,
        //         lname,
        //         cname,
        //         email,
        //         password,
        //         desc
            
          
        //   });

    
   setDoc(doc(db, "Accounts",email), {
 "user":{
  
    fname,
    lname,
    cname,
    email,
    password,
    desc
   
 } 

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
            <input type="text" id="lname" placeholder="Enter Your Last Name"/>  
         <input type="email" id="email" placeholder="Enter Your Email"/>
         <input type="password" id="password" placeholder="Enter Your Password"/>
         <label htmlFor="cname" >Your Company Name:</label>

        <input type="text" placeholder="Enter Company Name" id="cname"/>
          

         <input type="text" id="desc" placeholder="Destination"/>  
       
         <label htmlFor="Profile">Choose a profile picture:  
         <input type="file" name="Profile"/></label>
         <br/>
         <input type="button" onClick={SignUpEmploy} value="Sign Up"/>
        </div>
     
  
          
      
        </div>
     
         </div>
        
    )
}
