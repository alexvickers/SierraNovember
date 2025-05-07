import * as React from "react";
import Layout from "../components/Layout";
import AboutIntro from "../components/AboutIntro";
import Timeline from "../components/Timeline";
import Extras from "../components/Extras";
import { SeoHead } from "../components/SEOHead";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const AboutPage = () => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <Layout siteTitle={siteTitle} pageTitle="About Me">
      <AboutIntro />
      <Timeline />
      <Extras />
    </Layout>
  );
};

export default AboutPage;

export const Head = () => (
  <SeoHead
    pageTitle="Meet Alexandre Aimbiré | Developer, English Teacher & Guitar Nerd"
    pageUrl={`https://www.sierranovember.com.br${location.pathname}`}
    bodyClass="about"
  />
);
