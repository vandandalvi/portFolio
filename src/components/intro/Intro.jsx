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
            Hey, I'm Vandan Dalvi, a Full Stack Developer specializing in AI-powered web applications. As a final-year IT engineering student, I focus on building practical, product-oriented systems rather than isolated academic models. I have hands-on experience across the complete ML workflow—from data preprocessing and feature engineering to model training, evaluation, and deployment via RESTful APIs using Flask.

I build web applications from scratch using React for responsive frontends and Flask/Node.js for robust backends, connected to MongoDB or MySQL databases. My projects integrate machine learning models with real-world applications, ensuring seamless data flow and intuitive user experiences.

I leverage modern AI tools strategically to accelerate development while maintaining a deep understanding of system architecture. Currently exploring advanced system design patterns and strengthening my DSA foundation to build scalable, maintainable solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
