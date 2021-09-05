import React from "react";

function Footer() {
  const year = new Date();

  return (
    <footer>
      <p>Copyright © {year.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
