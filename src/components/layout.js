import * as React from "react";
import Header from "./header";
import Footer from "./footer";

import "../sass/app.scss";

const Layout = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
