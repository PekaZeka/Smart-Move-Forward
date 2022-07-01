import React from "react";
import { ScrollToTop } from "./components";
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
      </div>
      <div className="solid__bg">
        <GetInTouch />
        <ContactInfo />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
