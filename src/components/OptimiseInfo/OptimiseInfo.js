import React from "react";
import "./OptimiseInfo.css";

const OptimiseInfo = () => {
  return (
    <div className="optimiseinfo">
      <div className="info-1">
        <h2>Optimize Energy Savings With Us</h2>
        <p>
          Heating Ventilation and Air-conditioning (HVAC) system consumes almost
          60 percent of the total energy.
        </p>
        <p>
          {" "}
          Our IoT enabled systems help save up to 35% of cooling energy
          consumption thereby, supporting building owners in their journeys to
          make their buildings energy efficient.
        </p>{" "}
        <p>
          Our industry-defining technology uses IoT & AI to ensure that
          buildings achieve energy efficiency.
        </p>
      </div>
      <div className="info-2">
        <img src="./images/dashboard.png" alt="dashboard"></img>
      </div>
    </div>
  );
};

export default OptimiseInfo;
