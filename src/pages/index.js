import * as React from "react";
import "../styles/global.scss";
import Header from "../components/Header/Header";
import SectionOffers from "../components/SectionOffers/SectionOffers";
import SectionDetails from "../components/SectionDetails/SectionDetails";
import SectionOffice from "../components/SectionOffice/SectionOffice";

// markup
const IndexPage = () => {
  return (
    <div className="wrapper" style={{ width: "100%", overflow: "hidden" }}>
      <Header />
      <main>
        <SectionOffers />
        <SectionDetails />
        <SectionOffice />
      </main>
    </div>
  );
};

export default IndexPage;
