import React, { Component } from 'react'
import { app, db } from './FirebseConfig';
import { useState, useEffect } from 'react'
import { collection, setDoc, query, where, onSnapshot } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CreateTeamForm from './CreateTeamForm';
import { Resolved } from 'react-await';
export { signInUser }
const auth = getAuth();

let signInUser = JSON.parse(localStorage.getItem("Email"));

let userArr = [];

export default function Company() {


   
    const [userObj, setUserObj] = useState();

    useEffect(
      ()=>
      onSnapshot(doc(db, "Accounts", signInUser), (doc) => {
        //   userArr.push(doc.data()) ;
        //  console.log(userArr[0].user)
          setUserObj(doc.data())
      }),
      []
    )

    const [createdTeam, allCreatedTeam] = useState([]);
    
    // useEffect(
    //     ()=> 
    //     onSnapshot(collection(db, "Teams", signInUser, "Teams"), (snapShot) => allCreatedTeam(snapShot.docs.map((doc) => doc.data()))),
    //     []
    //   )
    

      useEffect(
        ()=>
        onSnapshot(doc(db, "Teams", signInUser), (doc) => {
         
            allCreatedTeam(doc.data().team)
        }),
        []
      )



      const [partTeam, allPartTeam] = useState([]);
    


      useEffect(
        ()=> onSnapshot(collection(db, "Teams"), (snapShot) => allPartTeam(snapShot.docs.map((doc) => doc.data().team))),
        []
      )

console.log(partTeam)
      
    
console.log(userObj)
console.log(createdTeam)



let enrollTeam = []





const q = query(collection(db, "Teams"),  where("team", "array-contains", "Demo"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {

  const cities = [];
  querySnapshot.forEach((doc) => {
      cities.push(doc.data());
  });
  console.log("Current cities in CA: ", cities);
});







// for (let i=0; i<partTeam.length; i++){
//     // console.log(partTeam[i])
//     for (let j=0; j<partTeam[i].length; j++){
//         // console.log(partTeam[i][j])
//         for (let k=0; k<partTeam[i][j].teamArr.length; k++){
//             // console.log(partTeam[i][j].teamArr[k])
//             if(partTeam[i][j].teamArr[k] == signInUser){
//                 enrollTeam.push(partTeam[i][j])
//                 console.log(enrollTeam)
//             }
//         }
//     }
// }

// for (let i=0; i<partTeam.length; i++){
//     for (let j=0; j<partTeam[i].teamArr; j++){
//      for(let k=0; k<partTeam[i].teamArr.length;)
//     }
// }




//     for(let h=0; h<partTeam.length; h++)

// for(let i=0; i<partTeam[h].length; i++)
//     {
    
//     for(let j=0; j<partTeam[h][i].teamArr.length; j++)
//     {
//         if(partTeam[0][i].teamArr[j] == signInUser){
//             enrollTeam.push(partTeam[h][i])
// console.log(enrollTeam)
//         }
        
//     }
// }









    const popUpTeam =()=>{
        document.getElementsByClassName("team")[0].style.display="flex"
}
    return (
        <>
        <CreateTeamForm/>
    {userObj != undefined && 
       <div>
 <div className="info">
        <div className="photo">
            <img className="image" src="https://pbs.twimg.com/profile_images/1166471091663122433/5ULjGFJS.jpg" />
        </div>
        <div className="data">
            <p className="head">
 {userObj.user.cname}
               </p>
              <p className="compDesc">
              {userObj.user.desc}
              </p>
              <p>
              {userObj.user.fname}
              </p>
              <p>
                  Email : {signInUser}
              </p>
        </div>
        <div className="btns">
            <input type="button" onClick={popUpTeam} value="+ Add New Team" id="add"/>
            <input type="button"  value="Log Out" id="logout"/>
        </div>


    </div>
    <div className="ownTeams">
     <p className="own">
         Teams You Own
     </p>
     
     {createdTeam.map((e)=>(
            <div key={e.teamName}>
              <strong>
              <p className="name">{e.teamName}</p>
                  </strong> 
                <p>Type :<strong>
                {e.teamCategory}
                    </strong> </p>
                <p>
                   <strong>
                   <span>Members : </span></strong>
                {e.teamArr+","}
                   </p>
            </div>
          ))}
 </div>  


 <div className="ownTeams">
     <p className="own">
         Teams You're Part Of
     </p>
     
     {enrollTeam.map((e)=>(
            <div key={e.teamName}>
              <strong>
              <p className="name">{e.teamName}</p>
                  </strong> 
                <p>Type :<strong>
                {e.teamCategory}
                    </strong> </p>
                <p>
                   <strong>
                   <span>Members : </span></strong>
                {e.teamArr+","}
                   </p>
            </div>
          ))}
 </div>  

       </div>
        } </>
    )
}




// function main (){
//     return (
//         <>
//         <CreateTeamForm/>
//     {userObj.length > 0 && 
//        <div>
//  <div className="info">
//         <div className="photo">
//             <img className="image" src="https://pbs.twimg.com/profile_images/1166471091663122433/5ULjGFJS.jpg" />
//         </div>
//         <div className="data">
//             <p className="head">
//  {/* {userObj[0].cname} */}
//                </p>
//               <p className="compDesc">
//               {/* {userObj[0].desc} */}
//               </p>
//               <p>
//                   {/* Your Name :  {userObj[0].fname} */}
//               </p>
//               <p>
//                   {/* Email : {signInUser} */}
//               </p>
//         </div>
//         <div className="btns">
//             <input type="button" onClick={popUpTeam} value="+ Add New Team" id="add"/>
//             <input type="button"  value="Log Out" id="logout"/>
//         </div>


//     </div>
//     <div className="ownTeams">
//      <p className="own">
//          Teams You Own
//      </p>
     
//      {/* {createdTeam.map((team)=>(
//             <div key={team.teamName}>
//               <strong>
//               <p className="name">{team.teamName}</p>
//                   </strong> 
//                 <p>Type :<strong>
//                 {team.teamCategory}
//                     </strong> </p>
//                 <p>
//                    <strong>
//                    <span>Members : </span></strong>
//                    {team.teamMembers}
//                    </p>
//             </div>
//           ))} */}
//  </div>   

//        </div>
//         } </>
//     )
// }









// // onSnapshot(doc(db, "Accounts", signInUser), (doc) => {
 
// //     userInfo.push(doc.data().user)
// //     // console.log(userInfo)
// //     console.log(doc.data())
  
  
// // });




// // export default class Company extends Component {

  


// //     render() {

// //     const [userObj, setUserObj] = useState([]);

// //     useEffect(
// //         ()=>  onSnapshot(doc(db, "Accounts", signInUser), (doc) => setUserObj(doc.data())),
// //         []
// //       ) 



// //         const popUpTeam =()=>{
// //             document.getElementsByClassName("team")[0].style.display="flex"
// //     }
// //         return (
// //             <>
// //                     <CreateTeamForm/>
// //                     <div className="info">
// //                     <div className="photo">
// //                         <img className="image" src="https://pbs.twimg.com/profile_images/1166471091663122433/5ULjGFJS.jpg" />
// //                     </div>
// //                     <div className="data">
// //                         <p className="head">
// //              {/* {userObj.user.Info.cname} */}
// //                            </p>
// //                           <p className="compDesc">
// //                           {/* {userObj.user.Info.desc} */}
// //                           </p>
// //                           <p>
// //                               {/* Your Name :  {userObj.user.Info.fname} */}
// //                           </p>
// //                           <p>
// //                               {/* Email : {signInUser} */}
// //                           </p>
// //                     </div>
// //                     <div className="btns">
// //                         <input type="button" onClick={popUpTeam} value="+ Add New Team" id="add"/>
// //                         <input type="button"  value="Log Out" id="logout"/>
// //                     </div>
            
            
// //                 </div>
// //                 <div className="ownTeams">
// //                  <p className="own">
// //                      Teams You Own
// //                  </p>
                 
// //                  {/* {createdTeam.map((team)=>(
// //                         <div key={team.teamName}>
// //                           <strong>
// //                           <p className="name">{team.teamName}</p>
// //                               </strong> 
// //                             <p>Type :<strong>
// //                             {team.teamCategory}
// //                                 </strong> </p>
// //                             <p>
// //                                <strong>
// //                                <span>Members : </span></strong>
// //                                {team.teamMembers}
// //                                </p>
// //                         </div>
// //                       ))} */}
// //              </div>
// //                 </>
// //                 )
// //     }
// // }
