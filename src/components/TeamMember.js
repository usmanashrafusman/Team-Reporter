import React from 'react'
import { TeamView } from "./TeamInferface"
import { app, db } from "./FirebseConfig";
import { useState, useEffect ,useContext } from "react";
import {
    collection,
    setDoc,
    query,
    where,
    onSnapshot,
    doc,
    getDocs
  } from "firebase/firestore";

import AskedQuestion from './AskedQuestion';

export default function TeamMember() {

    const docID = useContext(TeamView)
    const [teamData, setTeamData] = useState();
  
    useEffect(
      () =>
        onSnapshot(doc(db, "Teams", docID), (doc) => {
          console.log(doc.data())
          setTeamData(doc.data());
        }
        ),
        
      []
    );

    const [teamTable,setTeamTable] = useState(false);
 
    const showTable = ()=>{
        if(!teamTable) {
            setTeamTable(true)
        }
    }

    const hideTable = ()=>{
        if(teamTable) {
            setTeamTable(false)
        }
    }


    let sN = 1;



    return (
    <>
            {teamData != undefined && (
                <>
          <div>
            <p className="heading" style={{ border: "1px solid #fff" }}>
              Team Name : {teamData.teamName}
            </p>
            <div className="heading2">
              <div>
                <p>Team Category : {teamData.teamCategory}</p>
              </div>
              <div>
                <p>Team Admin : {teamData.createdBy}</p>
              </div> 
              <div>
               <button onClick={showTable} className="btn">Show Team Members</button>
              </div> 
              </div>
              
  {teamTable && (
    
      <div className="teamTable">
      <button onClick={hideTable} className="close">X

        </button>
       <div className="tablePOP">
       <p>List Of All Team Members</p>
       <table>
     <tr>
       <th>SNo</th>
       <th>Team Member</th>
  
     </tr>
     {teamData.teamArr.map((e) => (
       <tr>
         <td>{sN++}</td>
         <td>{e}</td>
       </tr>
     ))}
</table>
   </div>
         
            </div>) }
        </div>
          <AskedQuestion/>
          </>)
      
    
        }
        </>
    )
}
