import React, { Component } from "react";
import { app, db } from "./FirebseConfig";
import { useState, useEffect } from "react";
import {
  collection,
  setDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CreateTeamForm from "./CreateTeamForm";
import { Resolved } from "react-await";
import Header from "./Header";
import TeamInterface from "./TeamInferface"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  }from "react-router-dom";
import TeamInferface from "./TeamInferface"
import { useParams } from "react-router-dom";


let signInUser = JSON.parse(localStorage.getItem("Email"));

export default function CreatedTeams() {

    const [createdTeam, allCreatedTeam] = useState([]);

    useEffect(() => {
      const q = query(
        collection(db, "Teams"),
        where("createdBy", "==", signInUser)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const ownTeams = [];
        querySnapshot.forEach((doc) => {
  let infoObj ={info:doc.data(),id:doc.id}
          ownTeams.push(infoObj)
          console.log(ownTeams)
          
        });
       
        allCreatedTeam(ownTeams)
      });
    }, []);


    return (
      <>
     
  <div className="ownTeams">
        <p className="own">Teams You Own</p>

        {createdTeam.map((e) => (
         
                 <div key={e.id}>
            <strong>
              <p className="name">{e.info.teamName}</p>
            </strong>
            <p>
              Type :<strong>{e.info.teamCategory}</strong>{" "}
            </p>
            <p>
              <strong>
                <span>Members : </span>
              </strong>
              {e.info.teamArr + ","}
            </p>
          
            <Link style={{textDecoration:"none", padding:"5px 10px",backgroundColor:"#1b4cb9",color:"#fff"}} to={"Teams/"+e.id}>Open</Link>
          </div>
 
     
        ))}
      </div>
     


</>
 
    )
}





{/* <Router>
<Switch>      
  <Route exact path="/">
    {start ?  <Company /> :  <Home />}
            </Route>
            <Route exact path="/SignUp">
            <SignUpOwner />
            </Route>
          </Switch>

</Router> */}

