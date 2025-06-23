import * as React from "react";
import { Link } from "gatsby";
import { SeoHead } from "../components/SEOHead";
import Layout from "../components/layout";
import FogOverlay from "../components/FogOverlay";
import Lottie from "lottie-react";
import lostAnimation from "../assets/lottie/404.json";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const NotFoundPage = () => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <Layout siteTitle={siteTitle}>
      <FogOverlay />
      <div className="container text-center py-5 position-relative">
        <h1 className="display-4 fw-bold">Into the Void</h1>
        <Lottie
          animationData={lostAnimation}
          loop={true}
          style={{ maxWidth: "500px", margin: "auto" }}
        />
        <p className="mt-4">
          The cities are dead. The silence screams. This page was consumed by
          the void.
        </p>
        <p>
          Follow the{" "}
          <Link className="text-white text-decoration-underline" to="/">
            trail of riffs back home
          </Link>
          .
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => (
  <SeoHead
    pageTitle="0–3–5... 0–6–5–3 — You’ve Gone Into the Void (404)"
    pageUrl={`https://www.sierranovember.com.br/404`}
    description="Lost in the endless void, where cities die and silence screams. This page is no more."
    bodyClass="four"
  />
);
