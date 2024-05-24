import React from "react";
import style from "./Career.module.css"
const Career = () => {

   
  return (
    <div className={style.careerpage}>
      <div className={style.contact}>
        {" "}
        <p>Want to build <br/>
        <span>the future of Clean Air</span>?</p>
        <img src={"./images/career/carrer.png"} alt="Contact Logo"></img>
      </div>

      <div className={style.openposition}>
        <h1 className={style.openpositionheading}>Open Postions</h1>

        <p>Drop us an email with your resume and cover letter if any of these roles interest you! </p>
        <img src={"./images/career/mail.png"} alt="Mail Logo" width={'40px'}></img>
      </div>
    </div>
  );
};

export default Career;
