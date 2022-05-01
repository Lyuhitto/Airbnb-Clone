import React from "react";
import ChangeLang from "./change-lang";
import "./header.css";
import { ReactComponent as Bars } from "./bars-solid.svg";
import HelpUkr from "./help-ukr";
import Search from "./search";
import Corona from "./corona";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Corona />
      <div className="items">
        <div className="item">
          <Link to="/">
            <img src="img/airbnb-logo.png" alt="logo" className="header-icon" />
          </Link>
        </div>
        <div className="item middle">
          <span>숙소</span>
          <span>체험</span>
          <Link to="/online">
            <span>온라인 체험</span>
          </Link>
        </div>
        <div className="item right">
          <a href="#">호스트 되기</a>
          <ChangeLang />
          <button className="user">
            <Bars
              width="1.2rem"
              height="1.2rem"
              fill="gray"
              className="user-item"
            />
            <i className="fa-solid fa-circle-user user-item"></i>
          </button>
        </div>
      </div>
      <Search />
      <HelpUkr />
    </div>
  );
}
