import React, { useState } from "react";
import style from "./Solutions.module.css";
import SolutionSection from "./SolutionSection";
import { data } from "../../utils/solutions";

const Solutions = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={style.solutionspage}>
      <h1>Our Solutions</h1>
      <div className={style.solutions}>
        {data.map((item, index) => {
          return <SolutionSection key={index} name={item.name} imagelink={item.imagelink} description={item.description}/>;
        })}
      </div>
    </div>
  );
};

export default Solutions;
