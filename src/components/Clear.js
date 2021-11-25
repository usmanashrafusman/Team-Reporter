// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyCzapNsg5bisSbZyEtKChhEq0D1BRDyisY",
    authDomain: "teamreporter-smit-23613.firebaseapp.com",
    projectId: "teamreporter-smit-23613",
    storageBucket: "teamreporter-smit-23613.appspot.com",
    messagingSenderId: "546447518880",
    appId: "1:546447518880:web:4dc5e67532227f0b602dc5",
    measurementId: "G-FW83JP4PEM"
  };
  import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';


setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { doc, setDoc } from "firebase/firestore"; 

// const firebaseConfig = {
//   apiKey: "AIzaSyCzapNsg5bisSbZyEtKChhEq0D1BRDyisY",
//   authDomain: "teamreporter-smit-23613.firebaseapp.com",
//   projectId: "teamreporter-smit-23613",
//   storageBucket: "teamreporter-smit-23613.appspot.com",
//   messagingSenderId: "546447518880",
//   appId: "1:546447518880:web:4dc5e67532227f0b602dc5",
//   measurementId: "G-FW83JP4PEM"
// };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const db = firebase.firestore();



    // onSnapshot(doc(db, "Companies", "usman.ashraf@gmail.com"), (doc) => {
    //     console.log("Current data: ", doc.data());
    //    let {cname, desc, fname, lname} = doc.data()
    // });

    
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
