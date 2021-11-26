import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import QuestionInput from "./QuestionInput";
import { doc, setDoc } from "firebase/firestore";
import { useParams } from "react-router";
import { app, db } from "./FirebseConfig";
import { TeamView } from "./TeamInferface";

export default function QuestionFoam() {
  let week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const teamId = useContext(TeamView);

  const hideFoam = () => {
    let to = (document.getElementById("quesFoam").style.display = "none");
  };
  const [noOfQuestion, setnoOfQuestion] = useState(1);

  const questionDiv = [];

  for (var i = 0; i < noOfQuestion; i++) {
    questionDiv.push(<QuestionInput key={i} num={i + 1} />);
  }

  const addQuestion = () => {
    setnoOfQuestion(noOfQuestion + 1);
  };

  const postQuestion = () => {
    const d = new Date();

    let uniDoc = d.getTime().toString()

    let date = d.getDate();
    if (date <= 9) {
      date = "0" + date;
    }

    let hour = d.getHours();
    if (hour <= 9) {
      hour = "0" + hour;
    }

    let minutes = d.getMinutes();
    if (minutes <= 9) {
      minutes = "0" + minutes;
    }

    let seconds = d.getSeconds();
    if (seconds <= 9) {
      seconds = "0" + seconds;
    }

    let currentDate = `${date}-${
      months[d.getMonth()]
    }-${d.getFullYear()} ${hour}:${minutes}:${seconds}`;

    let questionAsk = document.getElementsByClassName("akdQue");

    let questionArr = [];

    for (let i = 0; i < questionAsk.length; i++) {
      questionArr.push(questionAsk[i].value);

      if (questionArr.length == questionAsk.length) {
        setDoc(doc(db, "Teams", teamId, "Questions", uniDoc), {
          Questions: questionArr,
          askedTime: currentDate,
        });

        console.log(questionArr);
        console.log(questionAsk[i]);
        console.log(teamId);
        console.log(d.getTime());
        console.log(currentDate);
      }
    }
  };
  return (
    <>
      <div className="questionPOP" id="quesFoam">
        <button onClick={hideFoam} className="close">
          X
        </button>
        <div className="quesDiv">
          <strong>
            <p
              style={{
                color: "#156a1b",
                fontSize: "29px",
                fontFamily: "sans-serif",
              }}
            >
              Ask Question
            </p>
          </strong>

          {questionDiv}

          <button onClick={addQuestion} className="more">
            + Another Question
          </button>
          <button
            onClick={postQuestion}
            className="more"
            style={{ backgroundColor: "#00891d" }}
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
}
