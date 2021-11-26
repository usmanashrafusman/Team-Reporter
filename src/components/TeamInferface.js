import React, { Component , createContext} from "react";
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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import { useParams } from 'react-router'
import { updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import AdminTeam from "./AdminTeam";
import { signInUser } from "./Company";
import TeamMember from "./TeamMember";


const TeamView = createContext();

export default function TeamInferface() {

  let {docId} = useParams();
  const [condition, setCondition] = useState();

  
  
  useEffect(() => {
    onSnapshot(doc(db, "Teams", docId), (doc) => {
      console.log(doc.data())
      setCondition(doc.data().createdBy); 
    })
  }, []);

if (condition == signInUser){
  return(
    <TeamView.Provider value={docId}>
    {condition != undefined && (<AdminTeam/>) }
    </TeamView.Provider>
  )
}
else {
  return (
    <TeamView.Provider value={docId}>
    {condition != undefined && (<TeamMember/>) }
    </TeamView.Provider>
  )
}



    return (
      <>


    </>
  )
    
}



export {TeamView}

