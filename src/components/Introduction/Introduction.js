import React, { useEffect } from "react";
import "./Introduction.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Introduction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true
    });
  }, []);
  return (
    <div className="intro-body">
      <div data-aos="fade-up" data-aos-delay="1500" className="intro-section1">
        <h1><strong>Reduce</strong> <br/>Energy Consumption</h1>
        <p>
          Clairco provides patented technologies that enhance and provide real
          time insights to increase energy efficiency & improve air quality
        </p>
        <button className="book-button">Book Demo</button>
      </div>
      <div data-aos="fade-left" className="intro-section2">
        <img src="./images/building.png"></img>
        <div className="benefits">
          <div>
            <text>-90%</text>
            <p>in average PM   concentrations</p>
          </div>

          <div>
            <text>12%</text>
            <p>increase in productivity</p>
          </div>

          <div>
            <text>25%</text>
            <p>Energy optimization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
