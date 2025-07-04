import "./portfolio.css";

import React from "react";
import claimSense from '../../assets/claimSense.png';
import mumbai from '../../assets/mumbai.png';
import snapSoul from '../../assets/snapSoul.png';
import techMatch from '../../assets/techMatch.png';
import vandansStore from '../../assets/vandansStore.png';
import me from '../../assets/ocr.png';

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "ClaimSense",
      img: claimSense,
      description: "AI powered Auto Insurance Claim Processing System",
      technologies: "React | GenAI | Tesseract",
      link: "https://insurance-claim-genai.vercel.app/login",
      github: "https://github.com/vandandalvi/insurance-claim-genai.git",
    },
    {
      id: 2,
      title: "Mumbai Explorer",
      img: mumbai,
      description: "A city guide for Mumbai.",
      technologies: "React | Leaflet | OpenStreetMap",
      link: "https://mumbai1bhk.vercel.app/",
      github: "https://github.com/vandandalvi/mumbai-house-updater.git",
    },
    {
      id: 3,
      title: "SnapSoul",
      img: snapSoul,
      description: "Save Memories",
      technologies: "React | Context API ",
      link: "https://snapsoul.vercel.app/",
      github: "https://github.com/vandandalvi/SnapSoul.git",
    },
    {
      id: 4,
      title: "TechMatch",
      img: techMatch,
      description: "ML based Tech Matching platform",
      technologies: " JavaScript | Firebase | Python | Flask",
      link: "https://vandandalvi.github.io/ML-PROJECT-/Miniproject/1pg.html",
      github: "https://github.com/vandandalvi/ML-PROJECT-.git",
    },
    {
      id: 5,
      title: "Vandan Store",
      img: vandansStore,
      description: "E-commerce website for selling products",
      technologies: " Node.js | MongoDB",
      link: "https://ecommerce-website-1-6hwh.onrender.com/",
      github: "https://github.com/vandandalvi/ecommerce-website.git",
    },
    {
      id: 6,
      title: "AI OCR Vision",
      img: me,
      description: "AI OCR vision",
      technologies: "React | OpenAI | Tesseract",
      link: "https://image-ocr-1.onrender.com/",
      github: "https://github.com/vandandalvi/IMAGE-OCR.git",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__links" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <a
          href="https://vandansprojects.vercel.app/" // Change this to your actual projects page or GitHub
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
          style={{ minWidth: '180px', textAlign: 'center' }}
        >
          View All Projects
        </a>
      </div>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
