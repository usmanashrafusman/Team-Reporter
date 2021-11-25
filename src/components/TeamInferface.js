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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import { useParams } from 'react-router'
import { updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import QuestionFoam from "./QuestionFoam";


export default function TeamInferface() {
  const showFoam =()=>{
    let to = document.getElementById("quesFoam").style.display="flex"
}
  let {docId} = useParams();
  const updateMember = doc(db, "Teams", docId);

  const deleteMember=(member)=>{
    updateDoc(updateMember, {
        teamArr: arrayRemove(member)
    });
  }

  const addMember=()=>{
    let toAdd = document.getElementById("toAdd");
    updateDoc(updateMember, {
      teamArr: arrayUnion(toAdd.value)
  });
  toAdd.value = ""
  }

    const [teamInt, setTeamInt] = useState();

    useEffect(
      () =>
        onSnapshot(doc(db, "Teams", docId), (doc) => {
          console.log(doc.data())
            setTeamInt(doc.data());
            console.log(teamInt)
        }
        ),
        
      []
    );

let sNo = 1



    return (
      <div>
         <QuestionFoam/>
        
    {teamInt != undefined &&( <div>
      <p className="heading" style={{border:"1px solid #fff"}}>Team Name : {teamInt.teamName}</p>
      <div className="heading2">
    <div>
    <p>Team Category : {teamInt.teamCategory}</p>
    </div>
    <div>
    <p>Createad By : {teamInt.createdBy}</p>
    </div>

<div>
  <button onClick={showFoam} className="ask">
    Ask Question ?
  </button>
</div>
      </div>
  
     <table>
       <tr>
         <th>SNo</th>
         <th>Team Member</th>
         <th>Edit / Delete</th>
         </tr>
     {teamInt.teamArr.map((e)=>(
      
          <tr>
      <td>
     {sNo++}
      </td>
      <td>
    {e}
    </td>
    <td>
      <button className="edit">
        Edit
      </button>
      <button onClick={()=>{deleteMember(e)}} className="del">
        Delete
      </button>
    </td>
       </tr>
  
    
      ))}
     </table>
     <input id="toAdd" type="text"/>
      <button onClick={addMember} className="addMem">
        + Add New Members
      </button>
      
  </div>
    )  }{""}
    </div>
    )
}





