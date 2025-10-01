import React from 'react';
import CTA from './CTA';

import './header.css';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vandan Dalvi</h1>
        <h5 className="text-light">Full Stack Developer + AIML</h5>
        <CTA />
        
      </div>
    </header>
  );
};

export default Header;
