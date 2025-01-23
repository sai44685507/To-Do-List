import React from 'react';
import Navbar from '../Navbar/Navbar'; // Correct path
import Body from '../Body/Body'; // Correct path
import Footer from '../Footer/Footer'; // Correct path
import './homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default Homepage;
