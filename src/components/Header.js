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
import { signInUser } from "./Company";

export default function Header() {
    const popUpTeam = () => {
        document.getElementsByClassName("team")[0].style.display = "flex";
      };

    const [userObj, setUserObj] = useState();

    useEffect(
      () =>
        onSnapshot(doc(db, "Accounts", signInUser), (doc) => {
          setUserObj(doc.data());
        }),
      []
    );
    console.log(userObj);
    return (
        <div>
                 
                 {userObj != undefined && (     <div className="info">
            <div className="photo" id="userInfo">
              <img
                className="image"
                src="https://pbs.twimg.com/profile_images/1166471091663122433/5ULjGFJS.jpg"
              />
            </div>
            <div className="data">
              <p className="head">{userObj.user.cname}</p>
              <p className="compDesc">{userObj.user.desc}</p>
              <p>{userObj.user.fname}</p>
              <p>Email : {signInUser}</p>
            </div>
            <div className="btns">
              <input
                type="button"
                onClick={popUpTeam}
                value="+ Add New Team"
                id="add"
              />
              <input type="button" value="Log Out" id="logout" />
            </div>
          </div>  )}{" "}  
        </div>
    )
}
