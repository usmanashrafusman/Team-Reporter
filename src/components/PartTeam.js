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
          teams.push(doc.data());
        });
        allPartTeam(teams);
      });
    }, []);

    return (
        <div className="ownTeams">
        <p className="own">Teams You're Part Of</p>

        {partTeam.map((e) => (
          <div key={e.teamName}>
            <strong>
              <p className="name">{e.teamName}</p>
            </strong>
            <p>
              Type :<strong>{e.teamCategory}</strong>{" "}
            </p>
            <p>
              <strong>
                <span>Members : </span>
              </strong>
              {e.teamArr + ","}
            </p>
          </div>
        ))}
      </div>
    )
}
