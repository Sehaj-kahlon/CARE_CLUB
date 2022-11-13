import React from "react";
import { Link } from "react-router-dom";
const Signupop = () => {
  return (
    <div className="dropmenue">
      <ul className="not decided">

        <li >
          <Link className="link" to="/register">
            <h6>For NGO's</h6>
          </Link>
        </li>
        <hr/>
        <li>
          <Link className="link" to="/registerIn">
            <h6>For Individulas</h6>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Signupop;
