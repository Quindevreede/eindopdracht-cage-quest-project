import React from 'react';
import './Footer.css';

function Footer({ company, year }) {
  return (
    <footer className="outer-content-container">
      <div className="inner-content-container">
          Commissioned by {company} © {year}
      </div>
    </footer>
  );
}

export default Footer;