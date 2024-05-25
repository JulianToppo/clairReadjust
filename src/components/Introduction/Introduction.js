import React, { useEffect, useState } from "react";
import "./Introduction.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Introduction = () => {
  const [emissions, setemissions] = useState(45);
  const [counter, setCounterVal] = useState(11);
  const increase = () => {
    return setInterval(() => {
      setemissions((emissions) => {
        if (emissions >= 90) {
          clearInterval(increase);
          return emissions;
        }
        return emissions + 5;
      });
    }, 500);
  };

  const energyPercentage = () => {
    return setInterval(() => {
      setCounterVal((counter) => {
        if (counter >= 25) {
          clearInterval(energyPercentage);
          return counter;
        }
        return counter + 1;
      });
    }, 500);
  };

  useEffect(() => {
    let inc, energy;
    setTimeout(() => {
      inc = increase();
      energy = energyPercentage();
    }, 2000);

    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });

    return () => {
      clearInterval(inc);
      clearInterval(energy);
    };
  }, []);
  return (
    <div className="intro-body">
      <div data-aos="fade-up" data-aos-delay="1500" className="intro-section1">
        <h1>
          <strong>Reduce</strong> <br />
          Energy Consumption
        </h1>
        <p>
          Clairco provides patented technologies that enhance and provide real
          time insights to increase energy efficiency & improve air quality
        </p>
        <button className="book-button">Book Demo</button>
      </div>
      <div data-aos="fade-left" className="intro-section2">
        <img src="./images/building.png"></img>
        <div className="benefits" >
          <div data-aos="fade-left" data-aos-delay="2000">
            <text >{`-${emissions}%`}</text>
            <p>in average <br/>PM 2.5 concentrations</p>
          </div>

          <div data-aos="fade-left" data-aos-delay="2500">
            <text >12%</text>
            <p>increase in<br/> productivity</p>
          </div>

          <div data-aos="fade-left" data-aos-delay="3000">
            <text >{`-${counter}%`}</text>
            <p >Energy <br/>optimization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
