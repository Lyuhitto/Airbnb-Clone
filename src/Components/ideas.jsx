// ideas.jsx
import React from "react";
import "./ideas.css";
import Idea from "./idea";

export default function Ideas() {
  const ideaList = [
    {
      id: 1,
      city: "하마다시",
      backImg: "/tokyo.jpg",
      backColor: "rgb(217, 59, 48)",
      distance: 2,
    },
    {
      id: 2,
      city: "시모노세키시",
      backImg: "/atami.jpg",
      backColor: "rgb(204, 45, 74)",
      distance: 90,
    },
    {
      id: 3,
      city: "마츠야마",
      backImg: "/odawara.jpg",
      backColor: "#DE3151",
      distance: 72,
    },
    {
      id: 4,
      city: "돗토리",
      backImg: "/katsura.jpg",
      backColor: "#BC1A6E",
      distance: 79,
    },
  ];
  return (
    <section className="ideas">
      <div className="idea-head">
        <h2>설레는 다음 여행을 위한 아이디어</h2>
      </div>
      <div className="ideas-items">
        {ideaList.map((idea) => (
          <Idea idea={idea} key={idea.id} />
        ))}
      </div>
    </section>
  );
}
