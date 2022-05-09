import React from "react";
import styled from "styled-components";

const Btn = styled.span`
padding: 14px 24px;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: white;
display: inline-block;
background: linear-gradient(to right, #e61e4d 0%, #e31c5f 50%, #d70466 100%);
border-radius: 8px 8px 8px 8px;
-webkit-border-radius: 8px 8px 8px 8px;
-moz-border-radius: 8px 8px 8px 8px;
-ms-border-radius: 8px 8px 8px 8px;
-o-border-radius: 8px 8px 8px 8px;
`;

export default function RedBtn(props) {
  return (
      <Btn>{props.name}</Btn>
  );
}
