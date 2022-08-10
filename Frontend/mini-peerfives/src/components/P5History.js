import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
//import User from './User';

function P5History() {
  const navigate = useNavigate();
  const params = useParams();
  const [cdata, setData] = useState([]);
  useEffect(() => {
    async function getLoggedUser() {
      try {
        const pid = params.id;
        const hurl = `${process.env.REACT_APP_LINK}${process.env.REACT_APP_USER}`;
        const loggedUser = await axios.get(`${hurl}/${pid}`);
        //console.log(loggedUser.data.P5.history);
        setData(loggedUser.data.P5.history);
      } catch (err) {
        //console.log(err);
      }
    }
    getLoggedUser();
  }, [params.id]);
  return (
    <div className="p5history__buttons">
      {/* <h2>{params.id}</h2> */}
      <div className="center">
        <button
          onClick={() => navigate(`/${params.id}/rewards/new`)}
          className="buttons center"
        >
          Create new reward
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date-Time</th>
            <th>P5 Given</th>
            <th>User Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody data-testid="P5history">
          {cdata.map((puser, i) => {
            return (
              // <>
              //   {puser.map((item, id) => {
              //     return (
              //       <tr key={id}>
              //         <td>{i + 1}</td>
              //         <td>{item.updatedAt}</td>
              //         <td>{item.amount}</td>
              //         <td>{item.givento}</td>
              //         <td>
              //           <button className="cbuttons">Delete</button>
              //         </td>
              //       </tr>
              //     );
              //   })}
              // </>
              <tr key={puser._id} data-testid="P5history">
                <td>{i + 1}</td>
                <td>{puser.updatedAt}</td>
                <td>{puser.amount}</td>
                <td>{puser.givento}</td>
                <td>
                  <button className="cbuttons">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default P5History;
