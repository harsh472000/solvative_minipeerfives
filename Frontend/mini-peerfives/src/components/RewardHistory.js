import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css";

function RewardHistory() {
  const params = useParams();
  const [cdata, setData] = useState([]);
  useEffect(() => {
    async function getLoggedUser() {
      try {
        const pid = params.id;
        const hurl = `${process.env.REACT_APP_LINK}${process.env.REACT_APP_USER}`;
        const loggedUser = await axios.get(`${hurl}/${pid}`);
        //console.log(loggedUser.data.Reward.history);
        setData(loggedUser.data.Reward.history);
      } catch (err) {
        //console.log(err);
      }
    }
    getLoggedUser();
  }, [params.id]);
  return (
    <div className="p5history__buttons">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date-Time</th>
            <th>Reward History</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody data-testid="history">
          {cdata.map((puser, i) => {
            return (
              <>
                {puser.map((item, id) => {
                  return (
                    <tr key={id} data-testid="history">
                      <td>{i + 1}</td>
                      <td>{item.date}</td>
                      <td>{item.amount}</td>
                      <td>{item.givenby}</td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </tbody>
        {/* <tr>
                <td>1</td>
                <td>Harsh Meghani</td>
                <td>5</td>
                <td>23</td>
            </tr> */}
      </table>
    </div>
  );
}

export default RewardHistory;
