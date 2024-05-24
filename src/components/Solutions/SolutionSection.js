import React, { useState } from "react";
import style from "./Solutions.module.css";

const SolutionSection = ({ name,imagelink,description}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={style.solutionsSections}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imagelink}></img>
      <div className={style.solutionDescription}>
        <div className={style.solutiontag}>
          <p>{name}</p>
        </div>
        <p className={style.solutiontagdescription}>
         {description}
        </p>
      </div>

      {isHovered && (
        <div className={style.showview}>View More</div>
      )}
    </div>
  );
};

export default SolutionSection;
