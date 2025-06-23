import * as React from "react";
import Layout from "../components/Layout";
import AboutIntro from "../components/AboutIntro";
import Extras from "../components/Extras";
import { SeoHead } from "../components/SEOHead";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const AboutPage = () => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <Layout siteTitle={siteTitle} pageTitle="About Me">
      <AboutIntro />
      <Extras />
    </Layout>
  );
};

export default AboutPage;

export const Head = () => (
  <SeoHead
    pageTitle="Meet Alexandre Aimbiré | Developer, English Teacher & Guitar Nerd"
    pageUrl={`https://www.sierranovember.com.br/about`}
    bodyClass="about"
  />
);
