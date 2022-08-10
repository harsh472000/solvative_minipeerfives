import React from "react";
import NewUser from "./NewUser";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

function ViewUser() {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      {/* <h2>{params.id}</h2> */}
      <NewUser />
      <div className="viewuser__buttons center">
        <button
          className="buttons"
          onClick={() => navigate(`/${params.id}/P5`)}
        >
          P5 Balance
        </button>
        <button
          onClick={() => navigate(`/${params.id}/RewardHistory`)}
          className="buttons"
        >
          Reward Balance
        </button>
      </div>
    </div>
  );
}

export default ViewUser;
