import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  }from "react-router-dom";
  import { app, db } from './FirebseConfig';
  import { useState, useEffect } from 'react'
  import { collection, setDoc, query, where, onSnapshot } from "firebase/firestore"; 
  import { doc, getDoc } from "firebase/firestore";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


  const auth = getAuth();

export default function Home() {

  
    // const [companies, allCompanies] = useState([]);

    // useEffect(
    //   ()=> onSnapshot(collection(db, "Companies"), (snapShot) => allCompanies(snapShot.docs.map((doc) => doc.data().email))),
    //   []
    // )
    
    // const [emp, allEmp] = useState([]);
    
    // useEffect(
    //   ()=> onSnapshot(collection(db, "Employees"), (snapShot) => allEmp(snapShot.docs.map((doc) => doc.data().email))),
    //   []
    // )






const login=()=>{


    

const email = document.getElementById("email").value
signUpAsEmp()

}
    return (
      
                <div className="main">
   <div className="panel">
       <div className="upper-panel">
        <p className="wel">Welcome To Team Reporter</p>
        <p>A Web App For Your Workplace</p>
       </div>
   <div className="main-panel">
    <input type="email" id="email" placeholder="Enter Your Email"/>
    <input type="password" id="password" placeholder="Enter Your Password"/>
    <input type="button" onClick={login} value="Login"/>
   </div>

   <div className="lower-panel">
    <p>Don't Have An Account , Create One</p>
    
    <Link to="/SignUp">SignUp</Link>

   </div>
     
 
   </div>

    </div>
    
    )
}


const signUpAsEmp=()=>{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("Email",JSON.stringify(email))
        localStorage.setItem("Status",JSON.stringify(true))
    alert("Sucessfully Loged In Employee")
        const user = userCredential.user;
        onSnapshot(doc(db, "Accounts", email), (doc) => {

         
        
         
      });
        window.location.href="/userAdm";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      });
    
}

const signUpAsAdmin=()=>{
    const email = document.getElementById("email").value

    
    const password = document.getElementById("password").value
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("Email",JSON.stringify(email))

        const unsub = onSnapshot(doc(db, "Accounts", email), (doc) => {

            window.$userObj = doc.data();
       
           
        });
    alert("Sucessfully Loged In Admin")
    const user = userCredential.user;
    window.location.href="/userAdm";

        
      })
      .catch((error) => {
    
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      });
    
 
}




