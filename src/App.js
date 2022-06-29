import React from "react";

import {
  Button,
  Counter,
  Feature,
  ImgSweeper,
  Socials,
  PageSweeper,
  Popup,
  Slider,
} from "./components";

import {
  ContactInfo,
  Facts,
  Footer,
  GetInTouch,
  Header,
  Map,
  WhatWeDo,
} from "./containers";

import "./app.css";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="gradient__bg">
        <WhatWeDo />
        <Facts />
        <GetInTouch />
        <Map />
        <ContactInfo />
        <Footer />
      </div>
    </div>
  );
};

export default App;
