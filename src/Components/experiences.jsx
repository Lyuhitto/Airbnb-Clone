import React from "react";
import Exp from "./exp";
import "./experiences.css";

export default function Experiences() {
  const u = "/exp-left.jpg";
  //style={{ backgroundImage: "url(/img/exp-left.jpg)" }}
  const expList = [
    {
      id: 1,
      bg: "exp-left.jpg",
      des1: "여행 중 만나는",
      des2: "이색적인 즐길 거리",
      btn: "체험",
    },
    {
      id: 2,
      des1: "집에서 만나는",
      des2: "다양한 즐길 거리",
      bg: "exp-right.jpg",
      btn: "온라인 체험",
    },
  ];
  return (
    <section className="exps">
      <div className="exp-head">
        <h2>에어비앤비 체험 둘러보기</h2>
      </div>
      <div className="exp-items">
        {expList.map((exp) => (
          <Exp exp={exp} key={exp.id} />
        ))}
      </div>
    </section>
  );
}
