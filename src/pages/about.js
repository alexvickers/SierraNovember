import * as React from "react";
import Layout from "../components/Layout";
import AboutIntro from "../components/AboutIntro";
import Timeline from "../components/Timeline";
import Extras from "../components/Extras";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <AboutIntro />
      <Timeline />
      <Extras />
    </Layout>
  );
};

export default AboutPage;
