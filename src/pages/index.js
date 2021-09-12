import * as React from "react";
import "../styles/global.scss";
import Header from "../components/Header/Header";
import SectionOffers from "../components/SectionOffers/SectionOffers";
import SectionDetails from "../components/SectionDetails/SectionDetails";
import SectionOffice from "../components/SectionOffice/SectionOffice";
import SectionNews from "../components/SectionNews/SectionNews";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";

// markup
const IndexPage = () => {
  return (
    <div className="wrapper" style={{ width: "100%", overflow: "hidden" }}>
      <Header />
      <main>
        <SectionOffers />
        <SectionDetails />
        <SectionOffice />
        <SectionNews />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
};

export default IndexPage;
