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
import CreatedTeams from "./CreatedTeams";
import PartTeam from "./PartTeam"
import TeamInferface from "./TeamInferface";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
export { signInUser };
const auth = getAuth();

let signInUser = JSON.parse(localStorage.getItem("Email"));

export default function Company() {





//   console.log(partTeam);
//   console.log(createdTeam);


const [teamDiv,setTeamDiv] = useState(false);

const setTeam = ()=>{
setTeamDiv(true)
}
const setTeamCreate = ()=>{
    setTeamDiv(false)
}

  return (
    <>


      <CreateTeamForm />
          <Header/>
          
          <div style={{display:"flex",textAlign:"center",
    padding: "10px 0px", background: "#d7cfcf"}}>
              <div onClick={setTeamCreate} style={{width:"50%"}}>Teams You Own</div>
              <div onClick={setTeam} style={{width:"50%"}}>Teams You're Part Of</div>
          </div>
      
          <div>
             {teamDiv ? <PartTeam/> : <CreatedTeams/>}
          </div>

    
     
    
    </>
  );
}

