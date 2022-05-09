import React from "react";
import Header from '../header';
import Elrastic from '../elrastic';
import Ideas from '../ideas';
import Experiences from '../experiences';
import AskHost from '../askHost';
import './home.css';


export default function Home() {
  return (
    <div className="home">
      <Header />
      <Elrastic />
      <Ideas />
      <Experiences />
      <AskHost />
    </div>
  );
}
