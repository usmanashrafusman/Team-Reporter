import React from 'react'
import { useState } from 'react/cjs/react.development'
import QuestionInput from './QuestionInput';


export default function QuestionFoam() {

const hideFoam =()=>{
    let to = document.getElementById("quesFoam").style.display="none"
}
const [noOfQuestion,setnoOfQuestion] = useState(1);

const questionDiv = []

for (var i = 0; i < noOfQuestion; i++) {
    questionDiv.push(<QuestionInput key={i} num={i+1}/>)
  };

const addQuestion = ()=>{
    setnoOfQuestion(noOfQuestion+1)
}
    return (
        <>
  <div className="questionPOP" id="quesFoam">
            <button onClick={hideFoam} className="close">X

            </button>
        <div className="quesDiv"><strong>
   
<p style={{color: "#156a1b", fontSize:"29px",fontFamily:"sans-serif"}}>Ask Question</p>
        </strong>
           
        {questionDiv}

      
           <button onClick={addQuestion} className="more">+ Another Question</button>
            <button className="more" style={{backgroundColor:"#00891d"}}>Post</button>
           </div>
        
           
        </div>
        
        </>
    )
}
