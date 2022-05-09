import React from "react";
import './beAHost.css';
import HeadVideo from "../beAHost/headVideo";
import CheckIncome from "../beAHost/checkIncome";
import Everywhere from "../beAHost/everywhere";
import FootVideo from "../beAHost/footVideo";
import AirCover from "../beAHost/airCover";
import AskSuper from "../beAHost/askSuper";
export default function BeAHost() {
  return (
  <div className="beAHost">
    <HeadVideo />
    <Everywhere />
    <CheckIncome />
    <AskSuper />
    <AirCover />
    <FootVideo />
  </div>
  );
}
