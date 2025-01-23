import React from 'react';
import Navbar from '../Navbar/Navbar'; // Updated path
import Body from '../Body/Body'; // Updated path
import Footer from '../Footer/Footer'; // Updated path
import './homepage.css';

const Homepage = () => {
  return (
    <div className="Homepage">
      <Navbar /> {/* Include Navbar in the homepage */}
      <Body />
      <Footer />
    </div>
  );
};

export default Homepage;
