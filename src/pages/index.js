import * as React from "react";
import "../styles/global.scss";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import SectionOffers from "../components/SectionOffers/SectionOffers";
import SectionDetails from "../components/SectionDetails/SectionDetails";
import SectionOffice from "../components/SectionOffice/SectionOffice";
import SectionNews from "../components/SectionNews/SectionNews";
import Gallery from "../components/Gallery/Gallery";
import { Helmet } from "react-helmet";

// markup
const IndexPage = () => {
  return (
    <div className="wrapper" style={{ width: "100%", overflow: "hidden" }}>
      <Helmet>
        <title>Pixel Perfect page by M.Kuchta</title>
        <meta
          name="description"
          content=" This is a website created for ADream recruitment process"
        />
      </Helmet>
      <Layout>
        <Header />
        <main>
          <SectionOffers />
          <SectionDetails />
          <SectionOffice />
          <SectionNews />
          <Gallery />
        </main>
      </Layout>
    </div>
  );
};

export default IndexPage;
