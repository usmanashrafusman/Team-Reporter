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
import { signInUser } from './Company';









export default function AskedQuestion() {

const postAns = (e)=>{

  const parent = e.target.parentNode;
  const inputs = parent.getElementsByClassName("ansInput");
  let ansArr = []
  for (let i=0; i<inputs.length; i++){
    if(inputs[i].value.length > 0){
      ansArr.push(inputs[i].value)
    }
    else {
      alert("Please Answere Question No 0"+ (i+1))
      break;
    }
  }

}


    const doID = useContext(TeamView)
    let [askQ , setAskQ] = useState([])

let count = 1;
    useEffect(() => {
        onSnapshot(collection(db, "Teams" ,doID , "Questions"), (snapShot) => setAskQ(snapShot.docs.map((doc) => doc.data()))
        )
      
    },[])
    console.log(askQ)

    return (
       <div className="rev">
        {askQ.map((e) => (
            <div>
          <div>
          <div className="details">
              <div>
              <p>No Of Question Asked : {e.Questions.length} </p>
              </div>
          <div>
            <p>Question Posted At : {e.askedTime}</p>
          </div>
          </div>
      
          {e.Questions.map((e , index) => (
    <div>
    <div className="askQus">
    <p className="quesHead">Question No.{index+1} : </p>
    <p>{e}</p>
    </div>
    <input placeholder="Write Your Answere Here" className="ansInput" type="text"/>
  </div> 

  ))}



          <button onClick={postAns} className="more post" style={{backgroundColor:"#00891d"}}>Post</button>
          </div>
          </div>
          ))}
         
         </div>
    )
}


