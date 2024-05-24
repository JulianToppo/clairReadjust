import React from "react";
import style from "./ContactUs.module.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  function handleClick() {
    window.scrollTo(0, 0);
}
  return (
    <div className={style.outerflex }>
      <div className={style.contactinfo}>
              <div className={style.contact_sec1}>
        <h3>Reach out to us at</h3>
        <ul className={style.info_sections}>
          <li className={style.info}>
            <div className={style.phonenum}>
              <img src="./images/icons/phone.png"></img>
            </div>

            <p>+91 9113622512</p>
          </li>

          <li className={style.info}>
            <div className={style.emailing}>
              <img src="./images/icons/email.png"></img>
            </div>

            <p>
              For any general query, you can write to
              <p>the CEO at ​aayush@clairco.in</p> OR <p>priyanka@clairco.in</p>
            </p>
          </li>

          <li className={style.info}>
            <div className={style.location}>
              <img src="./images/icons/location.png"></img>
            </div>

            <p>
              G-1, 104<p>Sector 5 HSR Layout</p>
              <p>Karnataka. 560034</p>
            </p>
          </li>
        </ul>
      </div>

      <div className={style.contact_sec2}>
        <h3>Want to Get Started?</h3>

        <button className={style.clickResources}>Click Here</button>

        <h4>Follow Us On</h4>

        <img
          className={style.linkedinlogo}
          src="/images/icons/linkedin.png"
          alt="linkedin logo"
        ></img>
      </div>
      <div className={style.contact_sec3}>
        <h3>Resources</h3>

        <div className={style.resourcelist}>
          <p><Link className={style.link} to="/career" onClick={handleClick}>Career</Link></p>
          <p>Blogs</p>
          <p>Our Solution</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Coorporate Governance</p>
        </div>
      </div>
      </div>
    <div className={style.copyright}>
      <p>(c) 2021 ALIFEROUS TECHNOLOGIES PVT LTD | CLAIRCO.IN | ALL RIGHTS RESERVED</p>
    </div>
    </div>
  );
};

export default ContactUs;
