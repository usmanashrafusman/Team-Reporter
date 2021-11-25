import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";

import Home, { userArr } from './components/Home';
import SignUp from './components/SignUp';
import SignUpEmploy from './components/SignUpEmploy';
import SignUpOwner from './components/SignUpOwner';
import Employee from './components/Employee';
import Company from './components/Company';
import CreateTeamForm from './components/CreateTeamForm';
import Header from './components/Header';
import TeamInferface from './components/TeamInferface';



export default class App extends Component {
  render() {
    let start = localStorage.getItem('Status')=="true";
    return (
<>
<Router>
<Switch>      
  <Route exact path="/">
    {start ?  <Company /> :  <Home />}
            </Route>
            <Route exact path="/SignUp">
            <SignUpOwner />
            </Route>
            <Route exact path="/Teams/:docId">
              
            <CreateTeamForm />
          <Header/>
           <TeamInferface/>
            </Route>

          </Switch>

</Router>
</>
    )
  }
}


      {/* <Route exact path="/SignUpOwner">
              <SignUpOwner />
            </Route>
            <Route exact path="/SignUpEmploy">
              <SignUpEmploy />
            </Route>
            <Route exact path="/userEmp">
              <Employee />
            </Route> */}
