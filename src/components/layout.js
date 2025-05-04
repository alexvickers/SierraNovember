import "../styles/styles.scss";
import PropTypes from "prop-types";
import * as React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, siteTitle }) => {
  return (
    <>
      <Header siteTitle={siteTitle} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string.isRequired,
};

export default Layout;
