import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/me2.jpg'


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Vandan Dalvi" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            Hey, I’m Vandan Dalvi, a Full Stack Developer with over a year of hands-on experience in building complete web applications that actually solve real world problems. I specialize in crafting responsive, userFriendly interfaces using React and handling backend logic with Flask, Node.js and Express mostly. Most of my projects are built from scratch frontend, backend, and everything in between where I make sure the user experience is smooth and the codebase is clean and maintainable.

I’ve worked with both MongoDB and MySQL for database management and know how to connect the dots between the frontend and backend to keep the data flowing efficiently. I’m also deeply interested in AI integration 

While I often use AI tools like ChatGPT,Gemini,Cluade,Perplexity,etc to speed up my development process, I always make sure I understand what’s going on behind the scenes.Exploring better system design practices, and diving into DSA to strengthen my foundation. At the end of the day, I enjoy building things that feel intuitive, helpful, and a little bit magical.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
