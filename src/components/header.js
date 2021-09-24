import React from "react";
import { Link } from "gatsby";
import { SiteLogo } from "../components/logos";
import Metadata from "./metadata";

const Header = ({ title }) => {
  return (
    <>
      <Metadata title={title} />
      <header>
        <section>
          <div className="logo">
            <Link to="/">
              <SiteLogo />
            </Link>
          </div>
          <nav id="hamnav">
            <input type="checkbox" id="hamburger" />
            <label htmlFor="hamburger">&#9776;</label>
            <ul>
              <li>
                <Link to="/content/" className="button">
                  Content
                </Link>
              </li>
              <li>
                <Link to="/talks/" className="button">
                  Talks
                </Link>
              </li>
              <li>
                <Link to="/about/" className="button">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="button">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
};

export default Header;
