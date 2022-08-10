import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function NewUser() {
  //const url = 'http://localhost:3001/user'
  //const [input,setInput] = useState("");
  const [data, setData] = useState({ name: "" });
  let navigate = useNavigate();
  const changeHandler = (e) => {
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
      name: data.name,
    };
    const hurl = `${process.env.REACT_APP_LINK}${process.env.REACT_APP_USER}`;
    axios.post(`${hurl}`, userData).then((response) => {
      //console.log(response.status);
      //console.log(response.data.token);
    });
  };
  return (
    <>
      <div className="newUser__input">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            placeholder="enter the name"
          />
          <div className="newUser__buttons center">
            <button className="buttons" type="submit">
              Save
            </button>
            <button className="cbuttons" onClick={() => navigate(-1)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewUser;
