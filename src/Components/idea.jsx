// idea.jsx
import React from "react";
import styled from "styled-components";
import "./idea.css";

const IdeaImg = styled.img`
  border-radius: 10px 10px 0px 0px;
  -webkit-border-radius: 10px 10px 0px 0px;
  -moz-border-radius: 10px 10px 0px 0px;
  -ms-border-radius: 10px 10px 0px 0px;
  -o-border-radius: 10px 10px 0px 0px;
  width: 100%;
  height 100%;
`;
const IdeaDiv = styled.div`
  background-color: ${(props) => props.bk};
  display: flex;
  flex-direction: column;
  padding: 8% 5% 8% 5%;
  color: white;
  
  border-radius: 0 0 10px 10px;
  -webkit-border-radius: 0 0 10px 10px;
  -moz-border-radius: 0 0 10px 10px;
  -ms-border-radius: 0 0 10px 10px;
  -o-border-radius: 0 0 10px 10px;
`;

export default function Idea({ idea }) {
  return (
    <div className="image-container">
      <div className="image-item">
        <IdeaImg src={`/img/${idea.backImg}`} />
      </div>
      <IdeaDiv bk={idea.backColor} className="image-item desc">
        <div className="city-name">
          <span>{idea.city}</span>
        </div>
        <div className="distance">
          <span>{idea.distance}km 거리</span>
        </div>
      </IdeaDiv>
    </div>
  );
}
