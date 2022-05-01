import React from "react";
import "./exp.css";
import HomeUnderBtn from "./homeUnderBtn";

export default function Exp({ exp }) {
  return (
    <div
      className="exp-item"
      style={{ backgroundImage: `url(/img/${exp.bg})` }}
    >
      <div className="exp-des">
        <span>
          {exp.des1}
          <br />
          {exp.des2}
        </span>
      </div>
      <div className="go-exp">
        <HomeUnderBtn name={exp.btn}></HomeUnderBtn>
      </div>
    </div>
  );
}
