import { createContext } from "react";

const TeamDetails = createContext();

const ShowTeamDetails = (props)=>{
    const state = doc.id
    return (
        <TeamDetails.Provider value={state}>
            {props.children}
        </TeamDetails.Provider>
    )
}
export default teamDetails;