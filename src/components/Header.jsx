import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <h2 className="site-logo">
          <a href="/">CustomProompts</a>
        </h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
