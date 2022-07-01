import React from "react";
import { ScrollTopBtn } from "./components";
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
      <ScrollTopBtn />
    </div>
  );
};

export default App;
