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

    const [partTeam, allPartTeam] = useState([]);

    useEffect(() => {
      const q = query(
        collection(db, "Teams"),
        where("teamArr", "array-contains", signInUser)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const teams = [];
        querySnapshot.forEach((doc) => {
          let infoObj ={info:doc.data(),id:doc.id}
          teams.push(infoObj);
          console.log(teams)
        });
        allPartTeam(teams);
      });
    }, []);

    return (
        <div className="ownTeams">
        <p className="own">Teams You're Part Of</p>

        {partTeam.map((e) => (
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
    )
}
