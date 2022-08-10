import React, { useEffect, useState } from "react";
import axios from "axios";
//import { useHistory } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
//import ViewUser from './ViewUser';
import "../App.css";

function User() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function getAllUsers() {
      try {
        //const user = await axios.get('http://localhost:3001/user')
        const hurl = `${process.env.REACT_APP_LINK}${process.env.REACT_APP_USER}`;
        //console.log(hurl);
        const user = await axios.get(hurl);
        //console.log(user.data);
        setUser(user.data);
      } catch (err) {
        //console.log(err);
      }
    }
    getAllUsers();
  }, []);
  // const navigate = (id) => {
  //     console.log('event fired');
  //     <Router>
  //         <Routes>
  //             <Route exact path='/' element={<ViewUser/>}/>
  //         </Routes>
  //     </Router>
  // }
  return (
    <div>
      <div className="user__button center">
        <button className="buttons" onClick={() => navigate("/login")}>
          Create new user
        </button>
      </div>
      <div className="user__table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>P5 Balance</th>
              <th>Reward History</th>
              <th>Login</th>
            </tr>
          </thead>
          <tbody>
            {user.map((use, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{use.name}</td>
                  <td>{use.P5.balance}</td>
                  <td>{use.Reward.balance}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/${use._id}`)}
                      className="buttons"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
