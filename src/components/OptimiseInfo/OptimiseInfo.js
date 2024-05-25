import React, { useEffect } from "react";
import style from "./OptimiseInfo.module.css";
import Aos from "aos";
import 'aos/dist/aos.css';

const OptimiseInfo = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true
    });
  }, []);
  return (
    <div className={style.optimiseinfo}>
      <div  className={style.info_1}>
        <h2 data-aos="fade-up" data-aos-delay="100">Optimize Energy Savings With Us</h2>
        <p data-aos="fade-up" data-aos-delay="50">
          Heating Ventilation and Air-conditioning (HVAC) system consumes almost
          60 percent of the total energy.
        </p>
        <p data-aos="fade-up" data-aos-delay="50">
          {" "}
          Our IoT enabled systems help save up to 35% of cooling energy
          consumption thereby, supporting building owners in their journeys to
          make their buildings energy efficient.
        </p>{" "}
        <p data-aos="fade-up" data-aos-delay="500">
          Our industry-defining technology uses IoT & AI to ensure that
          buildings achieve energy efficiency.
        </p>
      </div>
      <div  data-aos="fade-up" data-aos-delay="300" className={style.info_2}>
        <img src="./images/dashboard.png" alt="dashboard"></img>
      </div>
    </div>
  );
};

export default OptimiseInfo;
