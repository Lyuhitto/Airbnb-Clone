import React from "react";
import "./footVideo.css";
import RedBtn from "./redBtn";

export default function FootVideo() {
  return (
    <div className="foot">
      <div className="foot-container">
        <div className="foot-video">
          <video
            aria-label=""
            playsInline=""
            src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4"
            type="video/mp4"
          ></video>
        </div>
        <div className="foot-description">
          <h2>
            에어비앤비에서
            <br />
            호스팅을
            <br />
            시작해보세요
          </h2>
          <div>
            에어비앤비 호스트가 되어보세요. 에어비앤비가
            <br />
            모든 단계에서 도와드립니다.
          </div>
          <RedBtn name="시작하기" />
        </div>
      </div>
    </div>
  );
}
