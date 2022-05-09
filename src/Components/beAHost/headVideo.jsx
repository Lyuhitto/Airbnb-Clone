import React from "react";
import "./headVideo.css";
import { Link } from "react-router-dom";
import { ReactComponent as SimpleLogo } from "../common/simpleLogo.svg";
import RedBtn from "./redBtn";

export default function HeadVideo() {
  return (
    <div className="head">
      <div className="logo">
        <Link to="/">
          <span>
            <SimpleLogo
              aria-label="에어비앤비 홈페이지"
              display="block"
              fill="#ffffff"
              width="36"
              height="36"
            />
          </span>
        </Link>
      </div>
      <div className="head-container">
        <div className="head-comment">
          <div className="comment-container">
            <h1 className="comment">
              호스팅을 <br />
              시작해 보세요
            </h1>
            <a href="#" className="starting">
              <RedBtn name='호스팅 시작하기' />
            </a>
          </div>
        </div>
        <div className="head-video">
          <div className="video-container">
            <video
              preload="auto"
              autoPlay=""
              playsInline=""
              src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
              type="video/mp4"
            ></video>
            <div className="video-shadow"></div>
            <div className="host-description">
              <div className="host-sign">
                <img
                  src="img/chelsea-sign.jpg"
                  aria-label="필라델피아의 호스트 첼시아의 싸인"
                  alt="첼시아의 싸인"
                ></img>
              </div>
              <div className="host-comment">필라델피아의 호스트</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
