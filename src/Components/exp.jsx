import React from "react";
import "./exp.css";
import HomeUnderBtn from "./common/homeUnderBtn";
import { Link } from "react-router-dom";

export default function Exp({ exp }) {
  return (
    <div
      className="exp-item"
      style={{ backgroundImage: `url(/img/${exp.bg})` }}
    >
      <div className="exp-container">
        <div className="exp-des">
          <span>
            {exp.des1}
            <br />
            {exp.des2}
          </span>
        </div>
        <span className="go-exp">
          <Link to={`${exp.link}`} className="exp">
            <HomeUnderBtn name={exp.btn}></HomeUnderBtn>
          </Link>
        </span>
      </div>
    </div>
  );
}
