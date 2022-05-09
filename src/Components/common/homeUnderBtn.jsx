import React from "react";
import styled from "styled-components";

const Btn = styled.div`
  color: black;
  background-color: white;
  border: 1px solid white;
  text-align: center;
  font-size: 14px;
  padding: 16px 24px 16px 24px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  font-weight: bold;
`;

export default function HomeUnderBtn(props) {
  return (
      <Btn>{props.name}</Btn>
  );
}
