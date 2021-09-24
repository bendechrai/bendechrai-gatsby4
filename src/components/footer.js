import * as React from "react";
import { InstagramLogo, LinkedInLogo, TwitterLogo, YouTubeLogo } from "../components/logos";

const Footer = () => {
  return (
    <footer>
      <section>
        <p>&copy; 2021, Ben Dechrai</p>
        <ul>
          <li>
            <a href="https://twitter.com/bendechrai">
              <TwitterLogo />
            </a>
          </li>
          <li>
            <a href="https://youtube.com/bendechrai">
              <YouTubeLogo />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bendechrai/">
              <LinkedInLogo />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/bendechrai/">
              <InstagramLogo />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
