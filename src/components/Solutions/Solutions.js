import React, { useEffect, useState } from "react";
import style from "./Solutions.module.css";
import SolutionSection from "./SolutionSection";
import { data } from "../../utils/solutions";
import Aos from "aos";
import "aos/dist/aos.css";

const Solutions = () => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className={style.solutionspage}>
      <h1>Our Solutions</h1>
      <div data-aos="fade-up" className={style.solutions}>
        {data.map((item, index) => {
          return (
            <SolutionSection
              key={index}
              name={item.name}
              imagelink={item.imagelink}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Solutions;
