import React , {useContext , useState , useEffect} from 'react';
import QuestionFoam from "./QuestionFoam";
import { TeamView } from "./TeamInferface"
import {
    collection,
    setDoc,
    query,
    where,
    onSnapshot,
  } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { app, db } from "./FirebseConfig";



export default function AdminTeam() {
    const myTeamId = useContext(TeamView)
    const updateMember = doc(db, "Teams", myTeamId);

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
          onSnapshot(doc(db, "Teams", myTeamId), (doc) => {
            console.log(doc.data())
              setTeamInt(doc.data());
              console.log(teamInt)
          }
          ),
          
        []
      );
  
  let sNo = 1


    const showFoam =()=>{
        let to = document.getElementById("quesFoam").style.display="flex"
    }

  return (
      <div>
        <QuestionFoam />

        {teamInt != undefined && (
          <div>
            <p className="heading" style={{ border: "1px solid #fff" }}>
              Team Name : {teamInt.teamName}
            </p>
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
              {teamInt.teamArr.map((e) => (
                <tr>
                  <td>{sNo++}</td>
                  <td>{e}</td>
                  <td>
                    <button className="edit">Edit</button>
                    <button
                      onClick={() => {
                        deleteMember(e);
                      }}
                      className="del"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </table>
            <input id="toAdd" type="text" />
            <button onClick={addMember} className="addMem">
              + Add New Members
            </button>
          </div>
        )}
        {""}
      </div>
  );
}
