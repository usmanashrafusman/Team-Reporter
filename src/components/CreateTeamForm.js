import React from 'react'
import { app, db } from './FirebseConfig';
import { useState, useEffect } from 'react'
import { collection, setDoc, query, where, onSnapshot, addDoc } from "firebase/firestore"; 
import { doc, getDoc, arrayUnion , updateDoc} from "firebase/firestore";
import { signInUser } from './Company';
export default function CreateTeamForm() {

    

const closePopUpTeam =()=>{
    document.getElementsByClassName("team")[0].style.display="none"
}


const addTeam=()=>{
    let teamName = document.getElementById("teamName").value;
    let teamCategory = document.getElementById("teamCat").value;
    let teamMembers = document.getElementById("teamMember").value;
    let createdBy = signInUser;
    const teamArr = teamMembers.split(",");

    
    const docRef = addDoc(collection(db, "Teams"), {
        teamName,
        teamCategory,
        teamArr,
        createdBy,

    });
}




    return (
        <div className="team">
     
        <div id="teamPopUp">
         <p>Create Team</p>
 
 
             
             <input type="text" id="teamName" placeholder="Team Name"/>
 
           
    
 
 
         <select id="teamCat">
             <option value="Select">
                Select Category
             </option>
             <option value="Accounts">
                 Accounts & Finanace
             </option>
             <option value="Developers"
             >Developers
         </option>
         <option value="Supply Chain">
             Supply Chain
         </option>
         <option value="Marketing">
             Marketing
         </option>
    
         </select>
 
 
 
 
        <textarea id="teamMember" rows="8" placeholder="Enter Emails To Add In Team"></textarea>
 
 
 <div>
     <input type="button"onClick={addTeam} value="Add Team" id="addTeam"/>
     <input type="button" onClick={closePopUpTeam}  value="Close" id="close"/>
 </div>
 
 
 
 
 
 
 
 
 
 
      
        </div>
 
    
    </div>
    )
}
