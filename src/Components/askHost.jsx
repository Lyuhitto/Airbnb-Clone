import React from "react";
import "./askHost.css";
import { Link } from "react-router-dom";
import HomeUnderBtn from "./common/homeUnderBtn";
export default function AskHost() {
  return (
    <div className="ask-section">
      <div
        className="ask-container"
        style={{ backgroundImage: `url(/img/askHost.jpg)` }}
      >
        <div className="ask-item">
          <div className="ask-des">
            <span>
              호스팅에 관해
              <br />
              궁금하신 점이
              <br />
              있나요?
            </span>
          </div>
          <span>
            <Link to="/">
              <HomeUnderBtn name="슈퍼호스트에게 물어보세요" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
