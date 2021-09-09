import * as React from "react";
import "../styles/global.scss";
import Header from "../components/Header/Header";
import SectionOffers from "../components/SectionOffers/SectionOffers";

// markup
const IndexPage = () => {
  return (
    <div className="wrapper" style={{ width: "100%", overflow: "hidden" }}>
      <Header />
      <main>
        <SectionOffers />
      </main>
    </div>
  );
};

export default IndexPage;
