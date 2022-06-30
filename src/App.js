import React from "react";
import {
  ContactInfo,
  Facts,
  Footer,
  GetInTouch,
  Header,
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
        <ContactInfo />
        <Footer />
      </div>
    </div>
  );
};

export default App;
