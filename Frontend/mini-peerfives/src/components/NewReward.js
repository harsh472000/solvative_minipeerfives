import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

function NewReward() {
  const [data, setData] = useState({
    name: "",
    amount: "",
  });
  const [lloggedUser, setLloggedUser] = useState();
  const params = useParams();
  //const id = params.id;
  //console.log(id);
  const [user, setUser] = useState([]);
  let loggedUserName;
  useEffect(() => {
    async function getAllUsers() {
      try {
        const hurl = `${process.env.REACT_APP_LINK}${process.env.REACT_APP_USER}`;
        const user = await axios.get(`${hurl}`);
        //console.log(user.data);
        setUser(user.data);
      } catch (err) {
        console.log(err);
      }
    }
    getAllUsers();
    async function getLoggedUser() {
      try {
        const pid = params.id;
        const hurl = `${process.env.REACT_APP_LINK}${process.env.REACT_APP_USER}`;
        const loggedUser = await axios.get(`${hurl}/${pid}`);
        //console.log(loggedUser.data.name);
        loggedUserName = loggedUser.data.name;
        setLloggedUser(loggedUserName);
        //console.log('this is real'+loggedUserName);
        //setLuser(loggedUser.data.P5.history);
      } catch (err) {
        console.log(err);
      }
    }
    getLoggedUser();
  }, [data, user]);
  //console.log('another user'+lloggedUser);
  let navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(data.name);
    const userData = {
      amount: data.amount,
      givento: data.name,
    };
    //console.log('logged user name'+loggedUserName);
    //console.log('sfrr '+process.env.REACT_APP_SOMETHING);
    axios
      .post(
        `${process.env.REACT_APP_LINK}${process.env.REACT_APP_SOMETHING}/${lloggedUser}`,
        userData
      )
      .then((response) => {
        //console.log(response.status);
        //console.log(response.data.token);
      });
  };
  return (
    <>
      <div>
        <h1>{data.name}</h1>
        <form onSubmit={handleSubmit}>
          <select
            value={data.name}
            name="name"
            onChange={handleChange}
            className="newreward__select"
          >
            {/* <option>Harsh Meghani</option>
                <option>Bhavesh Nechlani</option>
                <option>Ajay Patel</option>
                <option>Romin Tejanin</option>*/}
            {user.map((use, i) => {
              return <option>{use.name}</option>;
            })}
          </select>
          <div className="newreward__input">
            <input
              type="number"
              name="amount"
              value={data.amount}
              placeholder="Enter the P5"
              onChange={handleChange}
            />
            <div className="center">
              <button className="buttons" type="submit">
                Submit
              </button>
              <button className="cbuttons" onClick={() => navigate(-1)}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewReward;
