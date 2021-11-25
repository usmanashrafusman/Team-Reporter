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


export default function SignUp() {


    const [emp, allEmp] = useState([]);

    useEffect(
      ()=> onSnapshot(collection(db, "Employees"), (snapShot) => allEmp(snapShot.docs.map((doc) => doc.data()))),
      []
    )
    console.log(emp)

    // const [companies, allCompanies] = useState([]);

    // useEffect(
    //   ()=> onSnapshot(collection(db, "Companies"), (snapShot) => allCompanies(snapShot.docs.map((doc) => doc.data()))),
    //   []
    // )
    





    return (
        <div className="main">
        <div className="panel">
            <div className="upper-panel" style={{height:"30%"}}>
             <p className="wel">Welcome To Team Reporter</p> 
             <p>A Web App For Your Workplace</p>
            </div>
        
        <div className="main-panel" style={{height:"40%"}}>

        <Link to="/SignUpOwner">SignUp As Admin</Link>
        <Link to="/SignUpEmploy">SignUp As Employ</Link>
        </div>
     
  
          
      
        </div>
     
         </div>
    )
}
