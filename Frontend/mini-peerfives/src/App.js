//import logo from './logo.svg';
//import React,{Component} from 'react'
//require('dotenv').config()
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewUser from "./components/NewUser";
import User from "./components/User";
import ViewUser from "./components/ViewUser";
import P5History from "./components/P5History";
import RewardHistory from "./components/RewardHistory";
import NewReward from "./components/NewReward";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route exact path="/" element={<User />} />
          <Route exact path="/login" element={<NewUser />} />
          <Route exact path="/:id" element={<ViewUser />} />
          <Route exact path="/:id/P5" element={<P5History />} />
          <Route exact path="/:id/RewardHistory" element={<RewardHistory />} />
          <Route exact path="/:id/rewards/new" element={<NewReward />} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
