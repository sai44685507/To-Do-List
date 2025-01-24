import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact us at: <a href="mailto:contact@todolist.com">contact@todolist.com</a></p>
        <p>&copy; {new Date().getFullYear()} TodoList. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
